import { ConvexError, v } from 'convex/values';
import { paginationOptsValidator } from 'convex/server';
import { mutation, query } from './_generated/server';

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError('Unauthorized');
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    return await ctx.db.insert('documents', {
      title: args.title ?? 'Untitled document',
      ownerId: user.subject,
      organizationId,
      initialContent: args.initialContent,
    });
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError('Unauthorized');
    }

    // console.log('user: ', { user });

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    // Search within the organization if it exists
    if (search && organizationId) {
      return await ctx.db
        .query('documents')
        .withSearchIndex('search_title', q =>
          q.search('title', search).eq('organizationId', organizationId),
        )
        .paginate(paginationOpts);
    }

    // Personal search
    if (search) {
      return await ctx.db
        .query('documents')
        .withSearchIndex('search_title', q =>
          q.search('title', search).eq('ownerId', user.subject),
        )
        .paginate(paginationOpts);
    }

    // All docs inside the organization
    if (organizationId) {
      return await ctx.db
        .query('documents')
        .withIndex('by_organization_id', q =>
          q.eq('organizationId', organizationId),
        )
        .paginate(paginationOpts);
    }

    // All personal docs
    return await ctx.db
      .query('documents')
      .withIndex('by_owner_id', q => q.eq('ownerId', user.subject))
      .paginate(paginationOpts);
  },
});

export const removeById = mutation({
  args: { id: v.id('documents') },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError('Unauthorized');
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError('Document not found');
    }

    const isOwner = document.ownerId === user.subject;
    const organizationMember = document.organizationId === organizationId;

    if (!isOwner && !organizationMember) {
      throw new ConvexError('Unauthorized');
    }

    return await ctx.db.delete(args.id);
  },
});

export const updateById = mutation({
  args: { id: v.id('documents'), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError('Unauthorized');
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError('Document not found');
    }

    const isOwner = document.ownerId === user.subject;
    const organizationMember = document.organizationId === organizationId;

    if (!isOwner && !organizationMember) {
      throw new ConvexError('Unauthorized');
    }

    return await ctx.db.patch(args.id, { title: args.title });
  },
});

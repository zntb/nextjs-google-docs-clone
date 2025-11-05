# 📝 Next.js Google Docs Clone

A modern, feature-rich collaborative document editor built with Next.js, inspired by Google Docs. This application provides real-time collaboration, rich text editing, and seamless document management with authentication and organization support.

![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black)
![React](https://img.shields.io/badge/React-19.0.0--rc-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 📄 Document Management

- **Create & Edit Documents** - Intuitive document creation with customizable templates
- **Document Templates** - Pre-built templates including:
  - Blank Document
  - Software Development Proposal
  - Project Proposal
  - Business Letter
  - Resume
- **Search & Organization** - Powerful search functionality with personal and organization-level document management
- **Document History** - Track creation dates and last modified times

### 🤝 Real-time Collaboration

- **Live Editing** - See changes from other collaborators in real-time
- **Presence Awareness** - View who's currently editing the document
- **Collaborative Cursors** - See where other users are typing with colored cursors
- **Comments & Threads** - Add comments and have threaded discussions on specific content
- **Mentions** - Tag collaborators in comments with @ mentions

### ✍️ Rich Text Editor

- **Comprehensive Formatting** - Bold, italic, underline, strikethrough, and more
- **Typography Controls**:
  - Multiple font families
  - Customizable font sizes
  - Adjustable line heights
  - Text alignment (left, center, right, justify)
  - Text colors and highlighting
- **Advanced Features**:
  - Headings (H1-H6)
  - Bulleted and numbered lists
  - Task lists with checkboxes
  - Tables with cell management
  - Image insertion and resizing
  - Hyperlinks
  - Code formatting
- **Undo/Redo** - Full history management
- **Spell Check** - Built-in spell checking

### 📐 Document Layout

- **Page Ruler** - Visual ruler for margin adjustments
- **Adjustable Margins** - Customizable left and right margins
- **Print-friendly** - Optimized for printing with proper page breaks
- **A4 Page Format** - Standard document dimensions (816px width)

### 🔐 Authentication & Authorization

- **Secure Authentication** - Powered by Clerk
- **Organization Support** - Create and manage organizations
- **Role-based Access** - Owner and organization member permissions
- **User Profiles** - Display names and avatars for all collaborators

### 📤 Export Options

- **Multiple Formats** - Export documents as:
  - JSON
  - HTML
  - Plain Text
  - PDF

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19 RC](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library

### Editor & Collaboration

- **[TipTap](https://tiptap.dev/)** - Headless rich text editor
  - StarterKit, Tables, TaskLists, Images, Links, and more
  - Custom extensions for font size and line height
- **[Liveblocks](https://liveblocks.io/)** - Real-time collaboration infrastructure
  - Presence & cursors
  - Comments & threads
  - Offline support (experimental)

### Backend & Database

- **[Convex](https://www.convex.dev/)** - Backend-as-a-Service with real-time database
  - Type-safe queries and mutations
  - Real-time subscriptions
  - Full-text search
- **[Clerk](https://clerk.com/)** - Authentication and user management
  - Organization support
  - Multi-tenant architecture

### UI Components & Libraries

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[date-fns](https://date-fns.org/)** - Date formatting utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- A [Clerk](https://clerk.com/) account
- A [Convex](https://www.convex.dev/) account
- A [Liveblocks](https://liveblocks.io/) account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nextjs-google-docs-clone.git
cd nextjs-google-docs-clone
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Database
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

# Liveblocks
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

4. **Set up Convex**

```bash
npx convex dev
```

This will:

- Initialize your Convex backend
- Deploy your schema and functions
- Start the Convex development server

5. **Configure Clerk**

- Go to your Clerk dashboard
- Enable organizations in your application settings
- Add `http://localhost:3000` to your allowed redirect URLs
- Configure the Convex integration in Clerk

6. **Configure Liveblocks**

- Go to your Liveblocks dashboard
- Create a new project
- Copy your secret key to the `.env.local` file

7. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```text
nextjs-google-docs-clone/
├── convex/                      # Convex backend
│   ├── _generated/              # Auto-generated types
│   ├── auth.config.ts           # Authentication configuration
│   ├── documents.ts             # Document queries and mutations
│   └── schema.ts                # Database schema
├── public/                      # Static assets
│   ├── logo.svg
│   └── [template-images].svg
├── src/
│   ├── app/                     # Next.js app router
│   │   ├── (home)/              # Home page route group
│   │   │   ├── document-row.tsx
│   │   │   ├── documents-table.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── search-input.tsx
│   │   │   ├── templates-gallery.tsx
│   │   │   └── page.tsx
│   │   ├── documents/
│   │   │   └── [documentId]/    # Dynamic document routes
│   │   │       ├── actions.ts   # Server actions
│   │   │       ├── avatars.tsx  # Collaboration avatars
│   │   │       ├── document.tsx # Main document component
│   │   │       ├── editor.tsx   # TipTap editor
│   │   │       ├── inbox.tsx    # Comments inbox
│   │   │       ├── navbar.tsx   # Document navbar
│   │   │       ├── room.tsx     # Liveblocks room provider
│   │   │       ├── ruler.tsx    # Document ruler
│   │   │       ├── threads.tsx  # Comment threads
│   │   │       ├── toolbar.tsx  # Editor toolbar
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── liveblocks-auth/ # Liveblocks authentication
│   │   ├── globals.css          # Global styles
│   │   └── layout.tsx           # Root layout
│   ├── components/              # Reusable components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── convex-client-provider.tsx
│   │   ├── fullscreen-loader.tsx
│   │   ├── remove-dialog.tsx
│   │   └── rename-dialog.tsx
│   ├── constants/               # Application constants
│   │   ├── margins.ts
│   │   └── templates.ts
│   ├── extensions/              # Custom TipTap extensions
│   │   ├── font-size.ts
│   │   └── line-height.ts
│   ├── lib/                     # Utility functions
│   │   └── utils.ts
│   ├── store/                   # Zustand stores
│   │   └── use-editor-store.ts
│   └── middleware.ts            # Clerk middleware
├── .eslintrc.json
├── components.json              # shadcn/ui configuration
├── liveblocks.config.ts         # Liveblocks types
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Features Explained

### Real-time Collaboration Architecture

The application uses a combination of Liveblocks and Convex to provide seamless real-time collaboration:

1. **Liveblocks** handles:

   - Real-time presence and awareness
   - Collaborative editing with CRDT
   - Comments and threads
   - Cursor positions

2. **Convex** manages:
   - Document metadata and permissions
   - User and organization data
   - Document search and indexing

### Authentication Flow

```text
User Login (Clerk)
    ↓
JWT Token Generation
    ↓
Convex Authentication
    ↓
Liveblocks Room Access
    ↓
Document Access Granted
```

### Document Permissions

- **Owner**: Full access to the document (edit, delete, share)
- **Organization Member**: Access to all documents within the organization
- **Authorization**: Verified at both Convex and Liveblocks levels

## 🎨 Customization

### Adding New Templates

Edit `src/constants/templates.ts`:

```typescript
{
  id: 'your-template-id',
  label: 'Your Template Name',
  imageUrl: '/your-template.svg',
  initialContent: `
    <h1>Your Template Content</h1>
    <p>Template body...</p>
  `,
}
```

### Custom TipTap Extensions

Create new extensions in `src/extensions/`:

```typescript
import { Extension } from '@tiptap/react';

export const YourExtension = Extension.create({
  name: 'yourExtension',
  // ... your extension code
});
```

### Styling

The application uses Tailwind CSS for styling. Customize the theme in `tailwind.config.ts` and global styles in `src/app/globals.css`.

## 📊 Database Schema

### Documents Table

```typescript
{
  title: string;                    // Document title
  initialContent?: string;          // Initial HTML content
  ownerId: string;                  // Owner's Clerk user ID
  roomId?: string;                  // Liveblocks room ID
  organizationId?: string;          // Organization ID (if applicable)
  _creationTime: number;            // Timestamp
}
```

**Indexes:**

- `by_owner_id`: Query documents by owner
- `by_organization_id`: Query documents by organization
- `search_title`: Full-text search on document titles

## 🔒 Security

- **Authentication**: Clerk handles all authentication flows
- **Authorization**: Multi-layer authorization (Convex + Liveblocks)
- **Data Validation**: Type-safe queries with Convex
- **XSS Protection**: Sanitized HTML content in TipTap
- **CSRF Protection**: Built into Next.js

## 🧪 Testing

```bash
# Run linter
npm run lint

# Run type checking
npx tsc --noEmit
```

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Deploy Convex

```bash
npx convex deploy
```

### Configure Production URLs

Update your Clerk and Liveblocks dashboards with your production URLs.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Docs](https://docs.google.com/) for the inspiration
- [Clerk](https://clerk.com/) for authentication
- [Convex](https://www.convex.dev/) for the backend infrastructure
- [Liveblocks](https://liveblocks.io/) for real-time collaboration
- [TipTap](https://tiptap.dev/) for the editor framework
- [shadcn/ui](https://ui.shadcn.com/) for the component library

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/nextjs-google-docs-clone](https://github.com/yourusername/nextjs-google-docs-clone)

---

⭐️ If you found this project helpful, please consider giving it a star!

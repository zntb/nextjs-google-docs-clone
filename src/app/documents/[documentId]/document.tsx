'use client';

import { Preloaded, usePreloadedQuery } from 'convex/react';

import { Room } from './room';
import { Editor } from './editor';
import { Navbar } from './navbar';
import { Toolbar } from './toolbar';
import { api } from '../../../../convex/_generated/api';

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);

  if (!document) return null;

  return (
    <Room>
      <div className='min-h-screen bg-editor-bg'>
        <div className='flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]'>
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className='pt-[114px] print:pt-0'>
          <Editor initialContent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
};

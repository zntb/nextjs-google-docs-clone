'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangleIcon } from 'lucide-react';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showError) return null;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-6'>
      <div className='text-center space-y-4'>
        <div className='flex justify-center'>
          <div className='bg-rose-100 rounded-full'>
            <AlertTriangleIcon className='size-10 text-rose-600' />
          </div>
        </div>
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Something went wrong
          </h1>
          <p className='text-gray-500'>{error.message}</p>
        </div>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button className='font-medium px-6' onClick={reset}>
          Try again
        </Button>
        <Button variant='ghost' className='font-medium' asChild>
          <Link href='/'>◂Go to 🏠</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

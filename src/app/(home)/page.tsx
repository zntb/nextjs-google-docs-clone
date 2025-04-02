import Link from 'next/link';
import { Navbar } from './navbar';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
        <Navbar />
      </div>
      <div className='mt-16'>
        <div className='mt-5 text-center'>
          <span className='mr-2'>Go to</span>
          <Link href='/documents/123' className='font-bold underline'>
            Documents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

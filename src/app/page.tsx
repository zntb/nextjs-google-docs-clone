import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <p>Home</p>
      <div>
        <Link href='/documents/123' className='font-bold underline'>
          Documents
        </Link>
      </div>
    </div>
  );
};

export default Home;

import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <p>Home</p>
      <div>
        <Button variant={'destructive'} size={'lg'}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Home;

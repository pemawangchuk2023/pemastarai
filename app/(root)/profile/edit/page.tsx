import { ParamsProps } from '@/types';
import { auth } from '@clerk/nextjs';

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;

  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>Edit Profile</h1>

      <div className='mt-9'></div>
    </>
  );
};

export default Page;

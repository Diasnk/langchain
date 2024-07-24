import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';


const Profile = async () => {

  const session = await auth();

  console.log(session);

  if (!session?.user) redirect('/');

  return (
    <div>
      <h1 className='text-white-1'>{session?.user?.name}</h1>
      <Image
        className='rounded-full'
        src={session?.user?.image || '/icons/logo.svg'} // Provide a fallback image
        alt={session?.user?.name || 'User'}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Profile;
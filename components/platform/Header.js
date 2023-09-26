import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {signIn, signOut, useSession } from 'next-auth/react'
import { useAuth } from '@/contexts/AuthContext';


const Header = ({toggleBarVisibility}) => {
  const router = useRouter();
  const {authorData} = useAuth();

  const { data: session, status } = useSession();
  

  const isActive = (route) => {
    return route === router.pathname;
  };

  if(session && authorData) {
    console.log(session)
    console.log("authorData:::", authorData)
  }

  // if (status === "loading") return <p>Loading...</p>;
  // if (status === "unauthenticated") return <p>Not Authenticated</p>;


  return (
    <header className="z-50 flex flex-row items-center justify-between w-full px-4 py-4 bg-purple-300 md:px-12 lg:px-16 text-stone-800">
        
        {/* Logo and Image */}
        <div className="flex items-center">
          {/* <Image
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="Logo"
            width={50}
            height={50}
          /> */}
          <span className="text-3xl font-bold md:text-4xl lg:text-6xl">substack.io</span>
        </div>
        
        {/* Navbar */}
        <nav className="">
          <ul className="items-center hidden space-x-8 md:flex">
            <li className={`text-2xl font-bold ${isActive('/') ? 'underline underline-offset-4 decoration-purple-600 ': ''}`}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={`text-2xl font-bold ${isActive('/writers') ? 'underline underline-offset-4 decoration-purple-600': ''}`}>
              <Link href="/writers">
                writers
              </Link>
            </li>
            <li className={`text-2xl font-bold ${isActive('/startNewsletter') ? 'underline underline-offset-4 decoration-purple-600': ''}`}>
              <Link href="/startNewsletter">
                create
              </Link>
            </li>
            
            <li className={`text-2xl font-bold ${isActive('/signIn') ? 'underline underline-offset-4  decoration-purple-600': ''}`}>
              {/* <img src={"https://lh3.googleusercontent.com/a/ACg8ocImMYRbtWxUy90YZl5reJ1EiSiut_ddVyWEkuwJIFfF04g=s96-c"} /> */}
              {session || authorData ? (
                <button className="text-purple-500 " onClick={() => signOut('google')}> {session?.user?.name.split(' ')[0] || authorData.name.split(' ')[0]}</button>
              ): (
                <button onClick={() => signIn('google')}>sign in</button>
              )}
              
            </li>
          </ul>
          <div className="md:hidden" onClick={toggleBarVisibility}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor" className="h-9 w-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          </div>
        </nav>
    </header>
  );
};

export default Header;

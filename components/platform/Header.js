import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = ({toggleBarVisibility}) => {
const router = useRouter();

  const isActive = (route) => {
    return route === router.pathname;
  };


  return (
    <header className=" z-50 flex flex-row justify-between bg-stone-200 px-4 md:px-12 lg:px-16 py-4 text-stone-800 items-center w-full">
        
        {/* Logo and Image */}
        <div className="flex items-center">
          {/* <Image
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="Logo"
            width={50}
            height={50}
          /> */}
          <span className=" text-3xl md:text-4xl lg:text-6xl font-bold ">substack.io</span>
        </div>
        
        {/* Navbar */}
        <nav className="">
          <ul className="flex space-x-8 items-center hidden md:flex">
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
            <li className={`text-2xl font-bold ${isActive('trending') ? 'underline underline-offset-4 decoration-purple-600': ''}`}>
              <Link href="/writers">
                trending
              </Link>
            </li>
            {/* <li>
              <button className="bg-green-500 px-4 py-2 rounded text-xl font-bold">
                Subscribe
              </button>
            </li> */}
            <li className={`text-2xl font-bold ${isActive('/signIn') ? 'underline underline-offset-4 decoration-purple-600': ''}`}>
              <Link href="/signin">
                sign In
              </Link>
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

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

const HeaderNav = ({ onSubscribe, newsletterData }) => {
    const router = useRouter();
    const { slug } = router.query;
    const {authorData} = useAuth()
    const {data:session} = useSession()
    const [isAuthor, setIsAuthor] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
      let checkIsAuthor = false;
      console.log("Session ID:", session?.user);  // Debug
  console.log("Author ID:", newsletterData?.author);  // Debug
  console.log("AuthorData ID:", authorData?._id);  // Debug
  
      if (session?.user?.id && newsletterData?.author) {
        checkIsAuthor = String(session.user.id) === String(newsletterData.author);
      } else if (authorData?._id && newsletterData?.author) {
        checkIsAuthor = String(authorData._id) === String(newsletterData.author);
      }
      console.log("isAuthor",checkIsAuthor)
      setIsAuthor(checkIsAuthor);
    }, [session, authorData, newsletterData]);


    return (
        <>
          {newsletterData && 
            <div className="flex items-center justify-between px-4 py-2 border-b font-roboto border-cyan-600/30">
              <div className="flex items-center gap-2 hover:cursor-pointer " onClick={() => router.push(`/newsletter/${slug}`)}>
              <div className="w-12 h-12 p-2 bg-white rounded-md cursor-not-allowed ring-1 ring-cyan-600">
                <Image src={newsletterData.logo} alt="Selected Logo" width={64} height={64} />
              </div>
                <span className="hidden text-2xl font-bold sm:flex sm:text-3xl md:text-4xl lg:text-5xl text-cyan-600 ">{newsletterData?.name || "loading..."}</span>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
              {isAuthor ? (
              <button className="px-2 py-2 text-xs font-semibold rounded-sm text-cyan-600 sm:px-4 ring-1 ring-cyan-600"
              onClick={() => router.push(`/newsletter/${slug}/dashboard`)}
              >
                Dashboard
              </button>
            ) : (
              <button
                className="px-2 py-2 text-xs text-white rounded-sm shadow-lg sm:px-4 bg-cyan-600 ring-1 ring-cyan-600 hover:shadow-lg"
                onClick={onSubscribe}
              >
                Subscribe
              </button>
            )}

            {session || authorData ? (
              <div className="relative flex flex-row items-center text-left">
                <button className="flex items-center space-x-2" onClick={toggleDropdown}>
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-600">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 w-48 py-1 mt-2 bg-white border rounded-md shadow-lg border-cyan-600 top-8">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </a>
                    {/* Add more dropdown items here */}
                  </div>
                )}
              </div>
            ) : (
              <button className="py-2 text-xs text-neutral-600" onClick={() => signIn("google")}>
                Sign In
              </button>
            )}
              </div>
            </div>
          }
          
        </>
      );
} 

export default HeaderNav;

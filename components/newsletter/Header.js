import { useRouter } from "next/router";
import Link from "next/link";

const HeaderNav = ({ onSubscribe, newsletterData }) => {
    const router = useRouter();
    const { slug } = router.query;



    return (
        <>
          {newsletterData && 
            <div className="flex items-center justify-between px-4 py-2 border-b font-roboto border-cyan-600/30">
              <div className="flex items-center hover:cursor-pointer " onClick={() => router.push(`/newsletter/${slug}`)}>
                <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-cyan-600 ">{newsletterData?.name || "loading..."}</span>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <button className="px-2 py-2 text-xs text-white rounded-sm shadow-lg sm:px-4 bg-cyan-600 ring-1 ring-cyan-600 hover:shadow-lg" onClick={onSubscribe}>
                  Subscribe
                </button>
                <Link className="py-2 text-xs text-neutral-600" href="/signIn">
                  Sign In
                </Link>
              </div>
            </div>
          }
          
        </>
      );
} 

export default HeaderNav;

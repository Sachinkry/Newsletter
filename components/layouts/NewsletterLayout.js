import Header from "../Header"
import NewsletterSubscribe from "../NewsletterSubscribe";
import Footer from "../Footer";
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Layout({children}) {
    const [isActive, setIsActive] = useState(false);
    const router = useRouter()

    const checkActive = (path) => {
      return router.pathname === path ? 'text-blue-600 underline underline-offset-8' : '';
    };

    const dummyData = {
        logo: "https://via.placeholder.com/150", // Web URL Placeholder for Newsletter Logo
        name: "Sage Panda",
        description: "writing on stuffs that dreams are made of.",
        authorName: "John Doe",
        launchedDays: 45
      };

    return (
        <div className="">
            <Header />
            <NewsletterSubscribe
              logo={dummyData.logo} 
              name={dummyData.name} 
              description={dummyData.description} 
              authorName={dummyData.authorName} 
              launchedDays={dummyData.launchedDays}
            />

            <div className="">
              <div className="flex justify-center space-x-6 p-2">
                <div>
                  <Link href={`/newsletter`} className={` text-sm ${checkActive('/newsletter')} font-roboto`}>
                    Home
                  </Link>
                </div>
                <div>
                  <Link className={`text-sm ${checkActive('/newsletter/archive')} font-roboto`} href="/newsletter/archive">
                    Archive
                  </Link>
                </div>
              </div>
            </div>
                {children}


            <Footer />
        </div>
    )
}
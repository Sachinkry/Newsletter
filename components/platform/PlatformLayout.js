import Header from "./Header";
import NewsletterSubscribe from "../NewsletterSubscribe";
import Footer from "./Footer";
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from 'next/router'
import ToggleBar from "./ToggleBar";

export default function Layout({children}) {
    const [isActive, setIsActive] = useState(false);
    const [isToggleBarVisible, setToggleBarVisibility] = useState()
    const router = useRouter()

    const checkActive = (path) => {
      return router.pathname === path ? 'text-blue-600 underline underline-offset-8' : '';
    };

    const dummyData = {
      logo: "https://via.placeholder.com/150", // Web URL Placeholder for Newsletter Logo
      name: "SubStack",
      description: "writing on stuffs that dreams are made of.",
      authorName: "John Doe",
      launchedDays: 45
    }; 
    
    const toggleBarVisibility = () => {
      setToggleBarVisibility(!isToggleBarVisible);
    };

    return (
        <div className="w-full ">
            <Header toggleBarVisibility={toggleBarVisibility} />

            <div className="min-h-screen">
                {children}
            </div>
            {isToggleBarVisible && <ToggleBar toggleBarVisibility={toggleBarVisibility} />}

            <Footer />
        </div>
    )
}
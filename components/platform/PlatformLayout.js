import Header from "./Header";
import Footer from "./Footer";
import { useState } from 'react'
import ToggleBar from "./ToggleBar";

export default function Layout({children}) {
    const [isToggleBarVisible, setToggleBarVisibility] = useState()

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
import React, { useState, useRef, useEffect } from 'react';

export default function NewsletterHeader({ showComponent, closePopup, newsletterData }) {
  const [email, setEmail] = useState("");
  // const [showComponent, setShowComponent] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
      function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              closePopup();
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closePopup]);
    
    if (!showComponent) {
      return null;
    }

  const handleSubscribe = () => {
    console.log(`Subscribing email: ${email}`);
    // Implement backend call to subscribe the email here.
    closePopup();
  };

  const getFormattedLaunchTime = (launchDate) => {
    const today = new Date();
    const launch = new Date(launchDate);
    const diffInDays = Math.floor((today - launch) / (1000 * 60 * 60 * 24));
    
    if (diffInDays > 365) {
      const years = Math.floor(diffInDays / 365);
      return `${years} ${years > 1 ? 'years' : 'year'} ago`;
    } else if (diffInDays > 100) {
      const months = Math.floor(diffInDays / 30);
      return `${months} ${months > 1 ? 'months' : 'month'} ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  };
  
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40 " >
        
      <div className="flex flex-col items-center justify-center  text-center bg-white p-8 sm:max-w-[410px] w-full rounded-lg shadow-lg  m-4 sm:m-0  border-2 border-cyan-700" ref={wrapperRef}>
        <img src={ "https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png"} alt="Newsletter Logo" className="w-32 h-32 mx-auto mb-4 rounded-md"/>
        <h1 className="mb-5 text-4xl font-bold text-cyan-600">{newsletterData?.name || "Sage Panda"}</h1>
        <p className="mb-1 text-md text-neutral-500">{newsletterData?.description || "writings on stuffs that dreams are made of..."}</p>
        <div className="mb-8 text-xs text-neutral-400">
          <span>By {newsletterData?.author ? newsletterData?.author : "Unknown"}</span> · <span>Launched {getFormattedLaunchTime(newsletterData?.launchDate)}</span>


        </div>
        <div className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            className="w-2/3 py-2 border placeholder:text-cyan-700/60 focus:border-cyan-600 text-cyan-600/50 rounded-l-md border-cyan-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="w-1/3 py-2 text-sm text-white border bg-cyan-600 rounded-r-md border-cyan-600 ">
            Subscribe
          </button>
        </div>
        <button onClick={closePopup} className="text-neutral-400 ">
            <div className="flex flex-row items-center justify-center w-full">
                <span className="text-xs">No thanks </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
            </div>
        </button>
      </div>
    </div>
  );
}

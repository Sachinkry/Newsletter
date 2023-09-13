import React, { useState, useRef, useEffect } from 'react';

export default function NewsletterHeader({ logo, name, description, authorName, launchedDays }) {
  const [email, setEmail] = useState("");
  const [showComponent, setShowComponent] = useState(true);
  const wrapperRef = useRef(null);

  useEffect(() => {
      function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              handleClose();
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    if (!showComponent) {
      return null;
    }

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleSubscribe = () => {
    console.log(`Subscribing email: ${email}`);
    // Implement backend call to subscribe the email here.
    setShowComponent(false);
  };

  

  return (
    <div className="flex flex-col items-center justify-center  bg-black bg-opacity-40 fixed inset-0 z-50" >
        
      <div className="flex flex-col items-center justify-center  text-center bg-white p-8 sm:max-w-[410px] w-full rounded-lg shadow-lg ring-blue-600 m-4 sm:m-0 " ref={wrapperRef}>
        <img src={logo} alt="Newsletter Logo" className="mb-4 w-32 h-32  mx-auto rounded-md"/>
        <h1 className="text-3xl font-bold text-blue-600 mb-5">{name}</h1>
        <p className="text-md mb-1 text-neutral-500">{description}</p>
        <div className="text-xs mb-8 text-neutral-400">
          <span>By {authorName}</span> · <span>Launched {launchedDays} days ago</span>
        </div>
        <div className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            className=" py-2 text-blue-600/50 w-2/3 rounded-l-md border border-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="bg-blue-600 text-white py-2 border rounded-r-md border-blue-600  text-sm  w-1/3 ">
            Subscribe
          </button>
        </div>
        <button onClick={handleClose} className="text-neutral-400 ">
            <div className="flex flex-row justify-center items-center w-full">
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

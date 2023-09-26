import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function NewsletterHeader({ logo, name, description, authorName, launchedDays }) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const dummyData = {
    logo: "https://via.placeholder.com/150", // Web URL Placeholder for Newsletter Logo
    name: "Sage Panda",
    description: "writing on stuffs that dreams are made of.",
    authorName: "Sachin Yadav",
    launchedDays: 45
  };

  

  const handleSubscribe = () => {
    console.log(`Subscribing email: ${email}`);
    // Implement backend call to subscribe the email here.
  };

  

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="relative text-center bg-white p-8 rounded-lg min-w-[400px]  w-1/3 ">
        
        <img src={dummyData.logo} alt="Newsletter Logo" className="mb-4 w-32 h-32  mx-auto"/>
        <h1 className="text-3xl font-bold text-blue-600 mb-5">{dummyData.name}</h1>
        <p className="text-md mb-1 text-neutral-500">{dummyData.description}</p>
        <div className="text-xs mb-8 text-neutral-400">
          <span className=''>By {dummyData.authorName}</span> · <span>Launched {dummyData.launchedDays} days ago</span>
        </div>
        <div className="flex items-center mb-3  justify-between">
          <input
            type="email"
            placeholder="Type your email..."
            className=" py-2 text-blue-600/50 w-2/3 border-2 border-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="bg-blue-600 text-white py-2 border-2 border-blue-600  text-sm  w-1/3 ">
            Subscribe
          </button>
        </div>
        <button onClick={() => router.push('/')} className="text-neutral-400 hover:text-neutral-500 ">
            <div className='flex flex-row justify-center items-center  gap-[0.5] '>
                <span className='text-xs'>No thanks</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
            </div>
        </button>
      </div>
    </div>
  );
}

// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  

  return (
    <div>
      <div className="font-roboto flex justify-between items-center  px-4 py-1 border-b border-cyan-600/30">
        {/* <div className='flex flex-row items-center gap-2'>
           <img className="w-9 h-9 rounded-md p-1 ring-1 ring-blue-600" src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png" alt="Newsletter Logo" />
           <h1 className="text-2xl font-semibold text-blue-600 uppercase  ">Sage Panda</h1>
        </div> */}
        <div className="flex items-center ">
          <Image
            src="think-write-bro.svg" // Replace with your logo path
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="text-xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 ">Sage Panda</span>
        </div>
        <div className="flex sm:space-x-4 space-x-2">
          {/* <Link href="/discover">Discover</Link> */}
          <Link className="rounded-sm px-2   sm:px-4 bg-cyan-600 text-white  text-xs py-2 ring-1 ring-cyan-600 hover:shadow-lg shadow-lg " href="/subscribe">
            Subscribe
          </Link>
          <Link className=" text-neutral-600 text-xs py-2 " href="/signIn">
            Sign In
          </Link>
          

        </div>
      </div>

      {/* <div className="w-full h-[0.1px]  bg-blue-600"></div> */}

      
    </div>
  );
}

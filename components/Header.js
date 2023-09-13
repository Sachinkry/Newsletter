// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  

  return (
    <div>
      <div className="font-roboto flex justify-between items-center  px-4 py-3">
        <div className='flex flex-row items-center gap-2'>
           <img className="w-9 h-9 rounded-md p-1 ring-1 ring-blue-600" src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png" alt="Newsletter Logo" />
           <h1 className="text-2xl font-semibold text-blue-600 uppercase  ">Sage Panda</h1>
        </div>
        <div className="flex sm:space-x-4 space-x-2">
          {/* <Link href="/discover">Discover</Link> */}
          <Link className="rounded-md  px-4 text-neutral-900  text-xs py-2 ring-1 ring-blue-600 hover:shadow-lg shadow-lg " href="/subscribe">
            Subscribe
          </Link>
          <Link className=" text-blue-600 text-xs py-2 " href="/signIn">
            Sign in
          </Link>
          

        </div>
      </div>

      <div className="w-full h-[0.1px]  bg-blue-600"></div>

      
    </div>
  );
}

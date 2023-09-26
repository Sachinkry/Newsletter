// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  
  

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-1 border-b font-roboto border-cyan-600/30">
        <div className="flex items-center ">
          <span className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-cyan-600 ">Sage Panda</span>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <Link className="px-2 py-2 text-xs text-white rounded-sm shadow-lg sm:px-4 bg-cyan-600 ring-1 ring-cyan-600 hover:shadow-lg " href="/subscribe">
            Subscribe
          </Link>
          <Link className="py-2 text-xs text-neutral-600" href="/signIn">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

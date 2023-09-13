import React, { useState } from 'react';


const ToggleBar = ({toggleBarVisibility}) => {

  return (
    <div className={`md:hidden border-l border-l-2 border-neutral-800 fixed top-0 right-0 min-w-sm sm:w-[330px] h-full w-full  bg-stone-100 px-4 py-4 overflow-y-auto transition-all ease-in-out duration-500 space-y-8`}>
        {/* close button */}
        <div className="w-full flex flex-row justify-end  " onClick={toggleBarVisibility}>
          <div
            className=" cursor-pointer ring-2 ring-neutral-600 rounded-md p-1 bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-stone-900">
            <div className="hover:text-neutral-500 hover:cursor-pointer text-center gap-3 py-3 text-2xl font-bold">
              Home
            </div>
            <div className="hover:text-neutral-500 hover:cursor-pointer text-center gap-3 py-3 text-2xl font-bold">
                Writers
            </div>
            <div className="hover:text-neutral-500 hover:cursor-pointer text-center gap-3 py-3 text-2xl font-bold">
                Trending
            </div>
            <div className="hover:text-neutral-500 hover:cursor-pointer text-center gap-3 py-3 text-2xl font-bold">
                Sign In
            </div>
        </div>
    </div>
  );
};

export default ToggleBar;
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getAuthorById from '@/lib/getAuthorById';


const NewsletterCard = ({ logo, name,description, launchDate, author }) => {
  const [authorName, setAuthorName] = useState("")

  const currentDate = new Date();
  const launchDateObj = new Date(launchDate);
  const timeDiff = Math.abs(currentDate - launchDateObj);
  const daysSinceLaunch = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const formattedDate = launchDateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  
  // const authorname =  getAuthorById(author)
  // console.log("authorname......",authorname)

  // const getAuthorName = async() => {

  // }
  
 

  return (
    <div className="bg-white border-2 border-stone-600 rounded p-4 w-full h-full flex flex-col card-shadow hover:scale-[1.003] hover:cursor-pointer ">
       
      {/* Newsletter Logo */}
      <div className="relative w-16 h-16 rounded-md">
        <Image src={"Ecosystem-amico.svg"} layout="fill" objectFit="cover" alt="Newsletter logo" className="rounded-md" />
      </div>

      {/* Newsletter Name */}
      <h2 className="mt-2 text-2xl font-bold text-stone-900">{name}</h2>

      {/* Author Name */}
      <h3 className="font-semibold text-stone-700 text-md">{author ? getAuthorById(author)?.name :"Sachin Yadav"}</h3>

      {/* Description */}
      <p className="mt-1 text-sm text-stone-600 line-clamp-1">{description}</p>

      {/* Launched Info */}
      <p className="mt-1 text-xs font-semibold text-stone-400">
        {currentDate.getFullYear() === launchDateObj.getFullYear() ? `Launched ${daysSinceLaunch} days ago` : `Launched on ${formattedDate}`}
      </p>
    </div>
  );
};

export default NewsletterCard;

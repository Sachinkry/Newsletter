// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import PlatformLayout from '@/components/platform/PlatformLayout'
import NewsletterCard from '@/components/platform/NewsletterCard';
import newsletterData from '@/data/newsletters';
import Footer from '@/components/platform/Footer';

export default function Home() {
  return (
    <PlatformLayout>
       <div className="flex  flex-col-reverse md:flex-row  px-4 sm:px-6 md:px-12 lg:px-16 md:py-8 mx-auto w-full justify-between lg:justify-center bg-stone-200 pb-4">
      {/* Text and Buttons Div */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center sm:items-start  gap-6  lg:gap-12 md:max-w-[480px] min-w-[300px]">
        
        {/* Header Text */}
        <h1 className="text-3xl md:text-4xl  lg:text-5xl lg:leading-normal font-bold text-stone-900 md:max-w-[340px]">There&apos;s a New Way to Write More....</h1>
        
        {/* Description Text */}
        <p className="text-sm text-stone-700  leading-6">
        Unlock your writing potential like never before. Our newsletter platform offers a vibrative community to help you write more. Don't miss out on the revolution that's changing the way people write. Start now...
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-4  text-2xl justify-between">
          <div className='sm:w-1/2 w-full'>
            <button className="bg-stone-700 text-stone-100 px-4 py-2 rounded shadow-md w-full md:max-w-[300px]">
              StartNow
            </button>
          </div>
          <div className='sm:w-1/2 w-full'>
            <button className="bg-stone-700 text-stone-100 px-4 py-2 rounded shadow-md w-full md:max-w-[300px]">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* SVG Illustration Div */}
      <div className="flex items-center justify-center flex-row">
        <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px] lg:h-[600px] lg:w-[600px] '>
            <Image 
              src="/writing-girl.svg" 
              alt="SVG Illustration"
              fill={true}
              objectFit='contain'
              />
        </div>
      </div>
      
      
      </div>

      {/* let's get started: start newsletter */}

      <div className=" mt-12 flex  flex-col-reverse md:flex-row  px-4 sm:px-6 md:px-12 lg:px-16 md:py-8 mx-auto w-full justify-between lg:justify-center  pb-4">
      {/* Text and Buttons Div */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center sm:items-start  gap-6  lg:gap-12 md:max-w-[480px] min-w-[300px]">
        
        {/* Header Text */}
        <h1 className="text-3xl md:text-4xl  lg:text-5xl lg:leading-normal font-bold text-stone-900 md:max-w-[340px]">Start Your Own Newsletter Journey...</h1>
        
        {/* Description Text */}
        <p className="text-sm text-stone-700  leading-6">
        Begin crafting your unique newsletter to connect with your audience and share your insights. Your journey starts here.Start now...
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-4  text-2xl justify-between">
          
          <div className=' w-full'>
            <button className="bg-stone-700 text-stone-100 px-4 py-2 rounded shadow-md w-full md:max-w-[300px]">
              Let's Get Started 
            </button>
          </div>
        </div>
      </div>

      {/* SVG Illustration Div */}
      <div className="flex items-center justify-center flex-row">
        <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px] lg:h-[600px] lg:w-[600px] '>
            <Image 
              src="/writing-pana.svg" 
              alt="SVG Illustration"
              fill={true}
              objectFit='contain'
              />
        </div>
      </div>
      
      
      </div>



      <div className="px-4 my-16 flex justify-center  w-full">
        <hr className="border-t-8  rounded-md border-purple-500 w-1/2" />
      </div>



      <div className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-16 gap-4 mb-12">
        <div className="text-3xl text-center font-bold text-stone-700">Our Featured Newsletters</div>
        
        <div className="flex flex-row flex-wrap items-center justify-between   w-full">
            {newsletterData.map((data, index) => (
              <div className="md:w-1/2 lg:w-1/3 md:px-2 w-full py-2">

              <NewsletterCard key={index} {...data} />
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </PlatformLayout>
  );
}

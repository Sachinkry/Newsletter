// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import PlatformLayout from '@/components/platform/PlatformLayout'
import NewsletterCard from '@/components/platform/NewsletterCard';
import { useRouter } from 'next/router';
import { useNewsletter } from '@/contexts/NewsletterContext';
import { signIn, useSession } from 'next-auth/react';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const router = useRouter();
  const {newsletters, loading, error, deleteNewsletter} = useNewsletter();
  const { authorData } = useAuth(); 
  const {data: session } = useSession()

  const handleNewsletterCardClick = (newsletterName) => {
    const trimmedName = newsletterName.trim();
    const slugifiedName = trimmedName.replace(/\s+/g, '-');
    router.push(`/newsletter/${slugifiedName}`);
  }

  const handleButtonClick = async () => {
    if (authorData || session) {
      router.push('/startNewsletter');
    } else {
      await signIn('google');
      router.push('/startNewsletter')
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  if(newsletters) console.log(newsletters)
  
  return (
    <PlatformLayout>
       <div className="flex flex-col-reverse justify-between w-full px-4 pb-4 mx-auto bg-purple-300 md:flex-row sm:px-6 md:px-12 lg:px-16 md:py-8 lg:justify-center">
      {/* Text and Buttons Div */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center sm:items-start  gap-6  lg:gap-12 md:max-w-[480px] min-w-[300px]">
        
        {/* Header Text */}
        <h1 className="text-3xl md:text-4xl  lg:text-5xl lg:leading-normal font-bold text-stone-900 md:max-w-[340px]">There&apos;s a New Way to Write More....</h1>
        
        {/* Description Text */}
        <p className="text-sm leading-6 text-stone-700">
        Unlock your writing potential like never before. Our newsletter platform offers a vibrative community to help you write more. Don't miss out on the revolution that's changing the way people write. Start now...
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col justify-between w-full gap-4 text-2xl sm:flex-row">
          <div className='w-full sm:w-1/2'>
            <button className="bg-stone-700 text-stone-100 px-4 py-2 rounded shadow-md w-full md:max-w-[300px] card-shadow hover:scale-[1.003]" onClick={() => handleButtonClick()}>
              Start Now
            </button>
          </div>
          
        </div>
      </div>

      {/* SVG Illustration Div */}
      <div className="flex flex-row items-center justify-center">
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

      <div className="flex flex-col-reverse justify-between w-full px-4 pb-4 mx-auto mt-12 md:flex-row sm:px-6 md:px-12 lg:px-16 md:py-8 lg:justify-center">
      {/* Text and Buttons Div */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center sm:items-start  gap-6  lg:gap-12 md:max-w-[480px] min-w-[300px]">
        
        {/* Header Text */}
        <h1 className="text-3xl md:text-4xl  lg:text-5xl lg:leading-normal font-bold text-stone-900 md:max-w-[340px]">Start Your Own Newsletter Journey...</h1>
        
        {/* Description Text */}
        <p className="text-sm leading-6 text-stone-700">
        Begin crafting your unique newsletter to connect with your audience and share your insights. Your journey starts here.Start now...
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col justify-between w-full gap-4 text-2xl sm:flex-row">
          
          <div className='w-full '>
            <button className="bg-stone-700 text-stone-100 px-4 py-2 rounded shadow-md w-full md:max-w-[300px] card-shadow hover:scale-[1.003]" onClick={() => handleButtonClick()}>
              Let's Get Started 
            </button>
          </div>
        </div>
      </div>

      {/* SVG Illustration Div */}
      <div className="flex flex-row items-center justify-center">
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

      <div className="flex justify-center w-full px-4 my-16">
        <hr className="w-1/2 border-t-8 border-purple-500 rounded-md" />
      </div>



      <div className="flex flex-col gap-4 px-4 mb-12 sm:px-6 md:px-12 lg:px-16">
        <div className="text-3xl font-bold text-center text-stone-700">Our Featured Newsletters</div>
        
        
        <div className="flex flex-row flex-wrap items-center justify-between w-full">
            {newsletters && newsletters.map((data, index) => (
              <div className="w-full py-2 md:w-1/2 lg:w-1/3 md:px-2" onClick={() => handleNewsletterCardClick(data.name)}>
              <NewsletterCard key={index} {...data} />
              </div>
            ))}
        </div>
      </div>

      {/* <Footer /> */}
    </PlatformLayout>
  );
}

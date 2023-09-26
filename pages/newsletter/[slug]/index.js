import Layout from '@/components/newsletter/NewsletterLayout';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Posts from '@/components/newsletter/Posts';
import NewsletterBottom from '@/components/newsletter/NewsletterBottom';
import { useNewsletter } from '@/contexts/NewsletterContext';
import Footer from '@/components/newsletter/Footer';
import NewsletterLayout from '@/components/newsletter/NewsletterLayout';

const extractYearFromDate = (launchDate) => {
  const currentYear = new Date().getFullYear();
  const dateObject = new Date(launchDate);
  let dateOptions = { day: 'numeric', month: 'short' };

  if (dateObject.getFullYear() !== currentYear) {
    dateOptions.year = 'numeric';
  }

  return dateObject.toLocaleDateString(undefined, dateOptions);
};


export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const [newsletterData, setNewsletterData] = useState(null);
  const { newsletters } = useNewsletter();
  const isArchive = router.pathname.includes('archive');

  const handleSubscribeHeaderBtnClick = () => {
    router.push(`/newsletter/${slug}/subscribe`);
  };

  useEffect(() => {
    if (slug && newsletters) {
       const specificNewsletter = newsletters.find(
        (news) => news.name.replace(/ /g, '-').toLowerCase() === slug.toLowerCase()
      );
      if (specificNewsletter) {
        setNewsletterData(specificNewsletter);
      }
    }
  }, [slug, newsletters]);

//   if (!newsletterData) return <div>Loading...</div>
  return (
    
    <NewsletterLayout >
        <MainContent newsletterData={newsletterData} isArchive={isArchive} />
    </NewsletterLayout>
    )
  
}


// const HeaderNav = ({slug, newsletterData, isArchive, onSubscribe }) => (
//     <>
//       <div className="flex items-center justify-between px-4 py-2 border-b font-roboto border-cyan-600/30">
//         <div className="flex items-center ">
//           <span className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-cyan-600 ">{newsletterData.name}</span>
//         </div>
//         <div className="flex space-x-2 sm:space-x-4">
//           <button className="px-2 py-2 text-xs text-white rounded-sm shadow-lg sm:px-4 bg-cyan-600 ring-1 ring-cyan-600 hover:shadow-lg" onClick={onSubscribe}>
//             Subscribe
//           </button>
//           <Link className="py-2 text-xs text-neutral-600" href="/signIn">
//             Sign In
//           </Link>
//         </div>
//       </div>
//       <div className="">
//         <div className="flex justify-center p-2 space-x-6">
//           <div>
//             <Link href={`/newsletter/${slug}`} className={`text-sm ${!isArchive ? 'text-cyan-600 underline underline-offset-8' : 'text-neutral-700'} font-roboto`}>
//               Home
//             </Link>
//           </div>
//           <div>
//             <Link className={`text-sm ${isArchive ? 'text-cyan-600 underline underline-offset-8' : 'text-neutral-700'} font-roboto`} href={`/newsletter/${slug}/archive`}>
//               Archive
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );

const MainContent = ({ newsletterData, isArchive }) => (
    <div className="px-4 lg:px-16 md:px-10 sm:px-6">
      <div className="min-h-[400px] mt-12">
        {isArchive ? (
          <ArchiveContent posts={newsletterData.posts} />
        ) : (
          <HomeContent posts={newsletterData.posts} launchDate={newsletterData.launchDate} author={newsletterData.author} />
        )}
      </div>
      <NewsletterBottom newsletterData={newsletterData} />
    </div>
  );

  const HomeContent = ({ posts, launchDate, author }) => {
    if (posts && posts.length > 0) {
      return <Posts posts={posts} />;
    }
  
    return (
      <div className="max-w-2xl border newsletter-card-shadow border-cyan-700 p-3 rounded-md hover:scale-[1.003] hover:cursor-pointer mx-auto">
        <h2 className="text-lg font-semibold sm:text-xl font-opensans text-neutral-800">Coming soon</h2>
        <div className="flex items-center justify-between space-x-1 text-sm text-gray-400">
          <span className="text-xs uppercase">{extractYearFromDate(launchDate)}</span>
          <span className="text-xs uppercase">{author || "Sachin Yadav"}</span>
        </div>
      </div>
    );
  };
  
  const ArchiveContent = ({ posts }) => {
    return (
        <div>no thing yet</div>
    )
  };

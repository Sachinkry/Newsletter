import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Posts from '@/components/newsletter/Posts';
import NewsletterBottom from '@/components/newsletter/NewsletterBottom';
import { useNewsletter } from '@/contexts/NewsletterContext';
import NewsletterLayout from '@/components/newsletter/NewsletterLayout';
import getAuthorById from '@/lib/getAuthorById';

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

 

  useEffect(() => {
    console.log("Component mounted/updated");
    if (slug && newsletters) {
       const specificNewsletter = newsletters.find(
        (news) => news.name.replace(/ /g, '-').toLowerCase() === slug.toLowerCase()
      );
      if (specificNewsletter) {
        setNewsletterData(specificNewsletter);
      }
    }
  }, [slug, newsletters]);
  console.log("slug: ", slug);

  return (
    slug ? (
      <NewsletterLayout >
          
          {newsletterData &&
          <MainContent newsletterData={newsletterData} isArchive={isArchive}  />}
      </NewsletterLayout>
    ) : null
  );
  
}

const MainContent = ({ newsletterData, isArchive}) => (
    <div className="px-4 lg:px-16 md:px-10 sm:px-6">
      <div className="min-h-[400px] mt-12">
        {isArchive ? (
          <ArchiveContent posts={newsletterData.posts} />
        ) : (
          <HomeContent posts={newsletterData.posts} launchDate={newsletterData.launchDate} author={newsletterData.author}  />
        )}
      </div>
      <NewsletterBottom newsletterData={newsletterData} />
    </div>
  );

  const HomeContent = ({ posts, launchDate, author}) => {
    const router = useRouter();
    const { slug } = router.query;
    
    if (posts && posts.length > 0) {
      return <Posts posts={posts} />;
    }
  
    return (
      <>
      {slug && 
        <div className="max-w-2xl border newsletter-card-shadow border-cyan-700 p-3 rounded-md hover:scale-[1.003] hover:cursor-pointer mx-auto" onClick={()=> router.push(`/newsletter/${slug}/p/coming-soon`)}>
          <h2 className="text-lg font-semibold sm:text-xl font-opensans text-neutral-800">Coming soon</h2>
          <div className="flex items-center justify-between space-x-1 text-sm text-gray-400">
            <span className="text-xs uppercase">{extractYearFromDate(launchDate)}</span>
            <span className="text-xs uppercase">{getAuthorById(author)?.name || "Sachin Yadav"}</span>
          </div>
        </div>
      }
      </>
    );
  };
  
  const ArchiveContent = ({ posts }) => {
    return (
        <div>no thing yet</div>
    )
  };

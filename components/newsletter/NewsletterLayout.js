import Footer from '@/components/newsletter/Footer';
import HeaderNav from './Header';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useNewsletter } from '@/contexts/NewsletterContext';
import NewsletterHeader from './NewsletterSubscribe';
import Link from 'next/link';

export default function NewsletterLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;
  const [newsletterData, setNewsletterData] = useState(null);
  const { newsletters } = useNewsletter();
  const [showPopup, setShowPopup] = useState(false);
  const showTabs = !router.asPath.includes('/p/');

  const handleSubscribeHeaderBtnClick = () => {
    setShowPopup(true);
  }
  const closePopup = () => {
    setShowPopup(false);  // Close popup
  }

  const checkActive = (path) => {
    const currentPath = router.asPath;
    console.log(currentPath, path); 
    return currentPath === path ? 'text-cyan-600 underline underline-offset-8' : 'text-neutral-700';
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


  return (
    <>
    {showPopup && newsletterData && <NewsletterHeader newsletterData={newsletterData} showComponent={showPopup} closePopup={closePopup} />} 
      {newsletterData &&
        <div>
            <HeaderNav newsletterData={newsletterData} onSubscribe={handleSubscribeHeaderBtnClick} />
            {showTabs && 
              <div className="">
                <div className="flex justify-center p-2 space-x-6">
                  <div>
                    <Link href={`/newsletter/${slug}`} className={`text-sm ${checkActive(`/newsletter/${slug}`)} font-roboto`}>
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link className={`text-sm ${checkActive(`/newsletter/${slug}/archive`)} font-roboto`} href={`/newsletter/${slug}/archive`}>
                      Archive
                    </Link>
                  </div>
                </div>
              </div>
            }
              {children}
            <Footer newsletterData={newsletterData} />
        </div>
      }
    </>
  );
}
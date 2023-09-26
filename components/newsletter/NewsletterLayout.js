import Footer from '@/components/newsletter/Footer';
import HeaderNav from './Header';

export default function NewsletterLayout({ children, slug, newsletterData, handleSubscribeHeaderBtnClick }) {
  return (
    <div>
      <HeaderNav slug={slug} newsletterData={newsletterData} onSubscribe={handleSubscribeHeaderBtnClick} />
      {children}
      <Footer newsletterData={newsletterData} />
    </div>
  );
}
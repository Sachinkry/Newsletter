import { useState } from 'react';
import { useNewsletter } from '@/contexts/NewsletterContext';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BottomSection = ({newsletterData}) => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const { subscribeToNewsletter } = useNewsletter();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      console.log(`Subscribing email: ${email}:id::${newsletterData._id}`);
      await subscribeToNewsletter(email, newsletterData._id);
      toast.success(`Subscribed to ${newsletterData?.name}`);
    } catch (error) {
      console.log(`Failed to subscribe: ${error}`);
      toast.error(`Failed to subscribe: ${error.message}`);
    } 
  };

  return (
    <div className="max-w-2xl py-6 mx-auto font-flora">
      <ToastContainer />

      <div className="container flex flex-col items-center gap-3 mx-auto">
        <div className="w-12 h-12 p-2 bg-white rounded-md cursor-not-allowed ring-1 ring-cyan-600">
          <Image src={newsletterData.logo} alt="newsletter logo" width={64} height={64} />
        </div>
        <h2 className="text-2xl font-semibold text-cyan-600">{newsletterData?.name || 'Loading...'}</h2>
        <p className="text-sm text-gray-600 text-center w-[300px] "><b>Subscribe</b> to get latest posts from {newsletterData?.name || 'Loading...'} right into in to your email box.</p>
        <form onSubmit={handleSubscribe} className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-2/3 py-2 border text-cyan-600/50 rounded-l-md border-cyan-600 focus:text-neutral-800 focus:border-cyan-600"
          />
          <button type="submit" className="w-1/3 py-2 text-sm text-white border bg-cyan-600 rounded-r-md border-cyan-600 ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default BottomSection;

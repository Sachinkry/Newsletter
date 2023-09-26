import { useState, useEffect } from 'react';
import PlatformLayout from "@/components/platform/PlatformLayout"
import { useSession } from 'next-auth/react';
import { useAuth } from '@/contexts/AuthContext';
import SignInModal from '@/components/SignInModal';
import { useRouter } from 'next/router';

const StartNewsletter = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { data: session } = useSession();
  const { authorData } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    logoUrl: '',
    name: '',
    description: ''
  });

  const handleModalClose = () => {
    setShowSignInModal(false);
    router.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your API or database here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    if (!session && !authorData) {
      setShowSignInModal(true);
    } else {
      setShowSignInModal(false);
    }
  }, [session, authorData]);

  return (
    <PlatformLayout>
      <SignInModal show={showSignInModal} onClose={() => handleModalClose()} />
      <div className="max-w-md p-5 mx-auto mt-12 rounded-md sm:border-2 sm:border-stone-600 sm:card-shadow text-stone-800 sm:bg-stone-100">
      <h1 className="mb-4 text-2xl font-bold ">Start Your Newsletter</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label htmlFor="logo" className="block text-sm font-medium">Logo URL</label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded focus:border-stone-600"
          />
        </div> */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Newsletter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded focus:border-stone-600"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded focus:border-stone-600"
          />
        </div>
        <button type="submit" className=" card-shadow hover:scale-[1.003] mt-4 px-4 py-2 bg-stone-600 text-white rounded">
          Create Newsletter
        </button>
      </form>
    </div>
    </PlatformLayout>
  );
};

export default StartNewsletter;

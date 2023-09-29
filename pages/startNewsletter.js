import { useState, useEffect } from 'react';
import PlatformLayout from "@/components/platform/PlatformLayout"
import { useSession } from 'next-auth/react';
import { useAuth } from '@/contexts/AuthContext';
import { useNewsletter } from '@/contexts/NewsletterContext';
import SignInModal from '@/components/SignInModal';
import { useRouter } from 'next/router';
import path from 'path'
import Image from 'next/image';

const StartNewsletter = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { data: session } = useSession();
  const { authorData } = useAuth();
  const {addNewsletter} = useNewsletter();
  const router = useRouter();

  const [formData, setFormData] = useState({
    logo: '',
    name: '',
    description: '',
    author:  ''
  });

  const cuties = ['chicken-white.png', 'chicken.png', 'cow.png', 'goat.png', 'sheep.png'];
  const kitties = ['autumn.png', 'leaves.png', 'rain.png', 'reading.png', 'scarf.png'];
  const circles = ['inkwell.png', 'magic.png', 'palette.png', 'sculpture.png'];

  const handleImageClick = (imgPath) => {
    setSelectedImage(imgPath);
    setFormData({
      ...formData,
      logo: imgPath
    });
    setShowDropdown(false);
  };
  

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const extendedFormData = {
      ...formData,
      author: authorData._id,
    };
  

    try {
      console.log("newsletterDatainCreate::", extendedFormData)
      console.log("authorData::",authorData)
      const result = await addNewsletter(extendedFormData);
      if (result) {
        console.log('Newsletter created:', result);
        goToNewsletterPage(extendedFormData.name);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than in the range of [200, 299]
        console.log(`Server Error: ${error.response.data.error} - Status Code: ${error.response.status}`);
      } else {
        // Something happened setting up the request
        console.log('Error', error.message);
      }
    }
  };
  

  const goToNewsletterPage = (newsletterName) => {
    const trimmedName = newsletterName.trim();
    const slugifiedName = trimmedName.replace(/\s+/g, '-');
    router.push(`/newsletter/${slugifiedName}`);
  }
  

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
      <h1 className="mb-4 text-3xl font-bold ">Start Your Newsletter</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="relative inline-block w-full">
        <button onClick={() => setShowDropdown(!showDropdown)} className={`w-full h-10 pl-3 text-stone-600 pr-6 text-base text-left placeholder-gray-600 flex flex-row justify-between items-center bg-white border rounded-lg appearance-none focus:shadow-outline ${selectedImage ? "": ""}`}>
          {selectedImage ? "Selected Logo": "Select Logo"}
          <span className={`${showDropdown ? "rotate-90": ""}`}>{">"}</span>
        </button>
        {selectedImage && 
          <div className="w-16 h-16 p-2 mt-2 bg-white rounded-md cursor-not-allowed ring-1 ring-neutral-200">
            <Image src={selectedImage} alt="Selected Logo" width={64} height={64} />
          </div>
        }
          {showDropdown && (
            <div className="max-h-[12rem] overflow-y-auto absolute grid w-full grid-cols-3 gap-4 px-4 py-4 mt-2 border border-gray-300 rounded-md sm:grid-cols-4 bg-stone-200">
              {cuties.map((img) => (
                <div className="w-16 h-16 p-2 rounded-md ring-1 ring-neutral-400 hover:cursor-pointer hover:scale-[1.002] hover:bg-white transition duration-200">
                  <Image
                    src={path.join('/cuties/', img)}
                    alt="Cutie Logo"
                    width={80}
                    height={80}
                    onClick={() => handleImageClick(path.join('/cuties/', img))}
                  />
                </div>
              ))}
              {kitties.map((img) => (
                <div className="w-16 h-16 p-2 rounded-md ring-1 ring-neutral-400 hover:cursor-pointer hover:scale-[1.002] hover:bg-white transition duration-200">
                  <Image
                    src={path.join('/kitties/', img)}
                    alt="Kitty Logo"
                    width={80}
                    height={80}
                    onClick={() => handleImageClick(path.join('/kitties/', img))}
                  />
                </div>
              ))}
              {circles.map((img) => (
                <div className="w-16 h-16 p-2 rounded-md ring-1 ring-neutral-400 hover:cursor-pointer hover:scale-[1.002] hover:bg-white transition duration-200">
                  <Image
                    src={path.join('/circles/', img)}
                    alt="Circle Logo"
                    width={80}
                    height={80}
                    onClick={() => handleImageClick(path.join('/circles/', img))}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Newsletter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded text-stone-500 focus:border-stone-600"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded focus:border-stone-600 text-stone-500"
          />
        </div>
        <button 
          type="submit" 
          className={`card-shadow hover:scale-[1.003] mt-4 px-4 py-2 bg-stone-600 text-white rounded ${(!formData.name || !formData.description || !formData.logo) ? "cursor-not-allowed opacity-50" : ""}`} 
          disabled={!formData.name || !formData.description || !formData.logo}
        >
          Create Newsletter
        </button>

      </form>
    </div>
    </PlatformLayout>
  );
};

export default StartNewsletter;

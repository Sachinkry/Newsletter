import { useState } from 'react';
import PlatformLayout from "@/components/platform/PlatformLayout"

const StartNewsletter = () => {
  const [formData, setFormData] = useState({
    logoUrl: '',
    name: '',
    description: ''
  });

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

  return (
    <PlatformLayout>
      <div className="border-2 border-stone-600 rounded-md card-shadow mt-12 max-w-md mx-auto p-5 text-stone-800 bg-stone-100">
      <h1 className="text-2xl font-bold mb-4 ">Start Your Newsletter</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="logo" className="block text-sm font-medium">Logo URL</label>
          <input
            type="text"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:border-stone-600"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Newsletter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:border-stone-600"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:border-stone-600"
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

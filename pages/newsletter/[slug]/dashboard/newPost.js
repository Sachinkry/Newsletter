import NewsletterLayout from '@/components/newsletter/NewsletterLayout';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddNewPost = () => {
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    content: '',
  });
  const [isEditMode, setIsEditMode] = useState(true);

  const handleQuillChange = (value) => {
    setForm({ ...form, content: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    // Make API call to save the post
    console.log("content", form.content);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <NewsletterLayout>
      <div className="flex flex-col max-w-2xl min-h-screen gap-3 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-neutral-700">New Post</h1>
          <button onClick={toggleEditMode}>{isEditMode ? 'View' : 'Edit'}</button>
        </div>
        <div>
          <label className="font-semibold text-neutral-600">Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded text-stone-500 focus:border-stone-600"
          />
        </div>
        <div>
          <label className="font-semibold text-neutral-600">Subtitle:</label>
          <input
            type="text"
            name="subtitle"
            value={form.subtitle}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded text-stone-500 focus:border-stone-600"
          />
        </div>
        <label className="font-semibold text-neutral-600">Content:</label>
        <div className="w-full h-[470px] p-2 mt-1 border rounded text-stone-500 focus:border-stone-600">
          {isEditMode ? (
            <ReactQuill 
              style={{
                height: '400px'
                }} 
              value={form.content} 
              onChange={handleQuillChange} 
            />
          ) : (
            <>
                <h1>{form.title}</h1>
                <h3>{form.subtitle}</h3>
            <div className="overflow-y-auto no-tailwind">
            <div className="showListItems scrollable-div !list-disc !list-inside" dangerouslySetInnerHTML={{ __html: form.content }} />
            </div>
            </>

          )}
        </div>
        <button className="mt-10" onClick={handleSubmit}>Submit</button>
      </div>
    </NewsletterLayout>
  );
};

export default AddNewPost;

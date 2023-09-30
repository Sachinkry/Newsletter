import NewsletterLayout from '@/components/newsletter/NewsletterLayout';
import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth } from '@/contexts/AuthContext';
import { usePosts } from '@/contexts/PostContext';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});

const saveDraftToLocalStorage = (newDraft) => {
    // Retrieve existing drafts from localStorage
    let existingDrafts = JSON.parse(localStorage.getItem("draftPosts")) || [];
    
    // Find the index of the draft with the same ID
    const index = existingDrafts.findIndex(draft => draft.id === newDraft.id);
  
  
    // Update existing draft or push new draft
    if (index !== -1) {
      existingDrafts[index] = newDraft;
    } else {
      existingDrafts.push(newDraft);
    }
  
    // Save back to localStorage
    localStorage.setItem("draftPosts", JSON.stringify(existingDrafts));
  };
  

// MAIN COMPONENT ..............................................
const AddNewPost = () => {
  const router = useRouter();
  const id = router.asPath.split('/').pop();

  const {authorData} = useAuth();
  const { addPost } = usePosts();
  const [form, setForm] = useState({
    id: '',
    title: '',
    subtitle: '',
    content: '',
    author: authorData ? authorData._id : '',
  });
  const [isEditMode, setIsEditMode] = useState(true);

  const handleQuillChange = (value) => {
    setForm({ ...form, content: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(authorData && id){
      form.author = authorData._id;
      form.id = id;
    } 

    console.log("content", form);
    console.log(authorData)
    await addPost(form);
    saveDraftToLocalStorage(form);
    // Make API call to save the post here
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  // Fetch the draft based on the id and populate the form
useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      const existingDrafts = JSON.parse(localStorage.getItem("draftPosts")) || [];
      const draft = existingDrafts.find(draft => draft.id === id);
      if (draft) {
        setForm(draft);
      }
    }
  }, [id]);

  

  return (
    <NewsletterLayout>
      <div className="flex flex-col max-w-2xl min-h-screen gap-3 px-4 mx-auto">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-2xl font-semibold sm:text-4xl text-neutral-700">{isEditMode ? 'New Post' : form.title}</h1>
          <button className="w-[56px] px-2 py-1 rounded-md ring-1 ring-neutral-400 text-neutral-600 focus:ring-1 focus:ring-neutral-400 hover:bg-neutral-100" onClick={toggleEditMode}>{isEditMode ? 'View' : 'Edit'}</button>
        </div>
        <form className="flex-col " onSubmit={handleSubmit}>
        {isEditMode ? (
          <>
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
            <ReactQuill 
              style={{
                height: '400px'
              }} 
              value={form.content} 
              onChange={handleQuillChange} 
            />
            </>
            ) : (
              <>
            <h3 className="text-neutral-600">{form.subtitle}</h3>
            <div className="flex items-center gap-3 mt-1">
              <img className="w-12 h-12 rounded-full " src="https://via.placeholder.com/150" alt="Author" />
              <div className="text-xs uppercase text-neutral-500 ">
                <span>{authorData?.name || "Unknown"}</span>
                <br />
                <span>30 May 2023</span>
              </div>
            </div>
            {/* <hr className="my-2" /> */}
            <div className="mt-2 overflow-y-auto no-tailwind">
            <div className="showListItems  !list-disc !list-inside" dangerouslySetInnerHTML={{ __html: form.content }} />
            </div>
          </>
        )}
        <div className="flex flex-row justify-end gap-4">
            <button className={`px-3 py-2 w-[80px] my-16 text-white transition duration-200 rounded-sm hover:font-semibold bg-green-500 sm:hover:bg-white sm:hover:text-green-500 ring-2 ring-green-500 `} onClick={() => saveDraftToLocalStorage(form)}>Save</button>
           <button className={`px-3 py-2 my-16 text-white transition duration-200 rounded-sm hover:font-semibold bg-cyan-500 sm:hover:bg-white w-[80px] sm:hover:text-cyan-500 ring-2 ring-cyan-500 ${authorData && form.title && form.subtitle && form.content ? "": "cursor-not-allowed"}`} type="submit" disabled={!authorData && !form.title && !form.subtitle && !form.content}  >Publish</button>
        </div>
      </form>
      </div>
    </NewsletterLayout>
  );
};

export default AddNewPost;

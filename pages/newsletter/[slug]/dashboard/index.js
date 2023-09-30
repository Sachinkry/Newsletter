import NewsletterLayout from "@/components/newsletter/NewsletterLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const { slug } = router.query;
  const [drafts, setDrafts] = useState([]);
  const [activeTab, setActiveTab] = useState("Drafts");  // NEW: State for active tab

  useEffect(() => {
    const storedDrafts = JSON.parse(localStorage.getItem('draftPosts')) || [];
    if (Array.isArray(storedDrafts)) {
      setDrafts(storedDrafts);
    } else {
      console.error('Stored drafts is not an array:', storedDrafts);
    }
  }, []);

  const navigateToPost = (isNewPost = true, id=null) => {
    const nextId = id || drafts.length + 1;
    const path = isNewPost ? 'new-post' : 'draft';
    router.push(`/newsletter/${slug}/dashboard/${path}/${nextId}`);
  };

  return (
    <NewsletterLayout>
      <div className="relative max-w-2xl min-h-screen px-4 mx-auto my-3 text-2xl">
        <div className="mb-8 text-3xl font-semibold text-neutral-800">Posts</div>

        {/* NEW: Navbar for tabs */}
        <div className="flex justify-start space-x-4">
          <button onClick={() => setActiveTab("Drafts")} className={`text-lg font-semibold ${activeTab === "Drafts" ? "text-cyan-500 underline underline-offset-8" : "text-black" }`}>Drafts</button>
          <button onClick={() => setActiveTab("Published")} className={`text-lg font-semibold ${activeTab === "Published" ? "text-cyan-500 underline underline-offset-8" : "text-black" }`}>Published</button>
        </div>
        <hr />

        {/* Conditional rendering based on active tab */}
        {activeTab === "Drafts" && (
          <div className="mt-4">
            {/* <div className="my-4 text-lg font-semibold ">Drafted</div> */}
            {drafts.map((draft, index) => (
              <div key={index} className="p-4 mb-2 text-sm bg-gray-100 rounded sm:text-md" onClick={() => navigateToPost(false, draft.id)}>
                {draft.title || `Draft ${index + 1}`}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Published" && (
          <div className="mt-4">
            {/* Here you can map your published posts */}
            <div className="p-4 mb-2 bg-gray-100 rounded">Post 1</div>
            <div className="p-4 mb-2 bg-gray-100 rounded">Post 2</div>
          </div>
        )}

        {/* New Post Button */}
        <button
          className="fixed z-50 flex flex-row items-center p-4 text-white rounded-md shadow-lg bg-cyan-500 right-8 bottom-8 hover:bg-cyan-600"
          onClick={() => navigateToPost()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <span className="ml-2 text-xl">New Post</span>
        </button>
      </div>
    </NewsletterLayout>
  );
}

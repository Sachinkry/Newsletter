import NewsletterLayout from "@/components/newsletter/NewsletterLayout";

export default function PostPage() {
  const date = new Date(); // Replace with the actual date of the post
  const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' }).toUpperCase()}, ${date.getFullYear()}`;

  return (
    <NewsletterLayout>
      <div className="h-screen max-w-2xl px-4 py-3 mx-auto md:py-8 font-poppins text-neutral-600">
        <h1 className="text-3xl font-semibold md:text-5xl">Coming Soon</h1>
            <hr className="hidden my-2 sm:my-3 "/>
        <div className="flex items-center mt-2 sm:mt-4">
          <img src="https://via.placeholder.com/150" alt="Author" className="w-8 h-8 mr-4 border-2 rounded-full sm:w-12 sm:h-12" /> {/* Replace with actual author image URL */}
          <div className="font-opensans">
            <span className="text-xs font-semibold uppercase text-neutral-500">Sachin Yadav</span> {/* Replace with actual author name */}
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        
        {/* <hr className="mt-3 mb-8"/> */}
        
        <div className="mt-6 post-content h-[600px] text-neutral-500 ">
          <p className="text-xl">coming soon...</p>
        </div>

        <hr className="my-8"/>
        
      </div>
    </NewsletterLayout>
  );
}

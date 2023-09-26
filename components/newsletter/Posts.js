// components/Posts.js
const Posts = ({ posts }) => {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="max-w-2xl mx-auto space-y-4 font-flora">
        {posts.map((post, index) => {
          const postDate = new Date(post.date);
          let dateOptions = { day: 'numeric', month: 'short' };
  
          if (postDate.getFullYear() !== currentYear) {
            dateOptions.year = 'numeric';
          }
  
          return (
            <div key={index} className=" border newsletter-card-shadow border-cyan-700 p-3 rounded-md hover:scale-[1.003] hover:cursor-pointer ">
              <h2 className="text-lg font-semibold sm:text-xl font-opensans text-neutral-800">{post.title}</h2>
              {post.subtitle && <p className="text-sm text-gray-600 font-opensans">{post.subtitle}</p>}
              <div className="flex items-center justify-between space-x-1 text-sm text-gray-400">
                <span className="text-xs uppercase">{postDate.toLocaleDateString('en-US', dateOptions)}</span> 
                <span className="text-xs uppercase">{post.author}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Posts;
  
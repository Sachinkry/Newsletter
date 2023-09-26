// components/Posts.js
const Posts = ({ posts }) => {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="space-y-4 max-w-2xl mx-auto font-flora">
        {posts.map((post, index) => {
          const postDate = new Date(post.date);
          let dateOptions = { day: 'numeric', month: 'short' };
  
          if (postDate.getFullYear() !== currentYear) {
            dateOptions.year = 'numeric';
          }
  
          return (
            <div key={index} className=" border newsletter-card-shadow border-cyan-700 p-3 rounded-md hover:scale-[1.003] hover:cursor-pointer ">
              <h2 className="text-lg sm:text-xl font-opensans text-neutral-800 font-semibold">{post.title}</h2>
              {post.subtitle && <p className="text-sm font-opensans text-gray-600">{post.subtitle}</p>}
              <div className="text-sm items-center space-x-1 text-gray-400 flex justify-between">
                <span className="uppercase text-xs">{postDate.toLocaleDateString('en-US', dateOptions)}</span> 
                <span className="text-xs uppercase">{post.author}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Posts;
  
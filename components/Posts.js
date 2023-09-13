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
            <div key={index} className="border-b border-gray-200 pb-4 ">
              <h2 className="text-xl text-neutral-900 font-semibold">{post.title}</h2>
              {post.subtitle && <p className="text-sm text-gray-600">{post.subtitle}</p>}
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
  
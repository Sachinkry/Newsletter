// components/BottomSection.js
const BottomSection = ({newsletterData}) => {
  console.log(newsletterData)
    return (
      <div className="max-w-2xl py-6 mx-auto font-flora">
        <div className="container flex flex-col items-center gap-3 mx-auto">
          <img src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png" alt="Sage Panda Logo" className="mb-2 h-9 w-9"/>
          <h2 className="text-2xl font-semibold text-cyan-600">{newsletterData?.name || 'Loading...'}</h2>
          <p className="text-sm text-gray-600 text-center w-[300px] "><b>Subscribe</b> to get latest posts from {newsletterData?.name || 'Loading...'} right into in to your email box.</p>
          <div className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            className="w-2/3 py-2 border text-cyan-600/50 rounded-l-md border-cyan-600 focus:text-neutral-800 focus:border-cyan-600"
            
            
          />
          <button  className="w-1/3 py-2 text-sm text-white border bg-cyan-600 rounded-r-md border-cyan-600 ">
            Subscribe
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default BottomSection;
  
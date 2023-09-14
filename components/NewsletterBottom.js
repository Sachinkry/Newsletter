// components/BottomSection.js
const BottomSection = () => {
    return (
      <div className=" py-6  mx-auto max-w-2xl font-flora">
        <div className="container mx-auto  flex flex-col items-center  gap-3">
          <img src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png" alt="Sage Panda Logo" className="h-9 w-9 mb-2"/>
          <h2 className="text-2xl font-semibold text-cyan-600">Sage Panda</h2>
          <p className="text-sm text-gray-600 text-center w-[300px] ">Subscribe to get latest posts right into in to your email box.</p>
          <div className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            className=" py-2 text-cyan-600/50 w-2/3 rounded-l-md border border-cyan-600 focus:text-neutral-800 focus:border-cyan-600 "
            
            
          />
          <button  className="bg-cyan-600 text-white py-2 border rounded-r-md border-cyan-600  text-sm  w-1/3 ">
            Subscribe
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default BottomSection;
  
// components/BottomSection.js
const BottomSection = () => {
    return (
      <div className=" py-6  mx-auto max-w-2xl font-flora">
        <div className="container mx-auto  flex flex-col sm:items-center  ">
          <img src="https://substackcdn.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8be50ff1-eb7d-4542-b5c0-d71f77ea1a03_256x256.png" alt="Sage Panda Logo" className="h-9 w-9 mb-2"/>
          <h2 className="text-2xl font-semibold text-neutral-900">Sage Panda</h2>
          <p className="text-sm text-gray-600 mb-4">Writings on stuffs that dreams are made of</p>
          <div className="flex items-center mb-4  justify-between w-[340px]">
          <input
            type="email"
            placeholder="Type your email..."
            className=" py-2 text-blue-600/50 w-2/3 rounded-l-md border border-blue-600"
            value=""
            
          />
          <button  className="bg-blue-600 text-white py-2 border rounded-r-md border-blue-600  text-sm  w-1/3 ">
            Subscribe
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default BottomSection;
  
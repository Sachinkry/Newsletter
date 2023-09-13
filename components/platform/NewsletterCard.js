
import Image from 'next/image';

const NewsletterCard = ({ logoSrc, newsletterName, authorName, description, launchDate }) => {
  const currentDate = new Date();
  const launchDateObj = new Date(launchDate);
  const timeDiff = Math.abs(currentDate - launchDateObj);
  const daysSinceLaunch = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const formattedDate = launchDateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="bg-white border-2 border-stone-600 rounded p-4 w-full h-full flex flex-col card-shadow hover:scale-[1.003] hover:cursor-pointer ">
      
      {/* Newsletter Logo */}
      <div className="relative w-16 h-16 rounded-md">
        <Image src={logoSrc} layout="fill" objectFit="cover" alt="Newsletter logo" className="rounded-md" />
      </div>

      {/* Newsletter Name */}
      <h2 className="text-stone-900 text-2xl font-bold mt-2">{newsletterName}</h2>

      {/* Author Name */}
      <h3 className="text-stone-700 font-semibold text-md">{authorName}</h3>

      {/* Description */}
      <p className="text-stone-600 text-sm mt-1 line-clamp-1">{description}</p>

      {/* Launched Info */}
      <p className="text-stone-400 font-semibold text-xs mt-1">
        {currentDate.getFullYear() === launchDateObj.getFullYear() ? `Launched ${daysSinceLaunch} days ago` : `Launched on ${formattedDate}`}
      </p>
    </div>
  );
};

export default NewsletterCard;

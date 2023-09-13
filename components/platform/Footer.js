const Footer = () => {
    const sections = [
      {
        title: 'Substack.io',
        links: ['Download', 'Pricing', 'Version', 'Updates'],
      },
      {
        title: 'Product',
        links: ['Solutions', 'Trial Product', 'For teams', 'Request Feature'],
      },
      {
        title: 'Company',
        links: ['Contact Us', 'Blog', 'Culture', 'Jobs'],
      },
      {
        title: 'Support',
        links: ['Help Center', 'Service Status', 'Report a Bug'],
      },
    ];
  
    return (
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 w-full text-white bg-stone-900 py-4 flex flex-col justify-center">
          <div className="flex flex-row flex-wrap  w-full px-2  ">
            {sections.map((section, index) => (
              <div key={index} className="w-1/2  lg:w-1/4 flex flex-col gap-12 items-center md:items-start">
                <div className="flex flex-col gap-4 md:gap-6 py-6 ">
                    <div className="text-xl md:text-2xl  lg:text-3xl font-bold underline decoration-purple-600 underline-offset-4">{section.title}</div>
                    <div className="flex flex-col gap-2 md:gap-4 ">
                      {section.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="md:text-xl lg:text-2xl font-light">{link}</div>
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        <div className="flex gap-5 py-6 w-full justify-center md:justify-start">
          {/* Social media icons would go here */}
          <div className="w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="w-12 h-12 border-2 border-white rounded-full"></div>
        </div>
        <div className="text-sm py-4 flex flex-col md:flex-row justify-between items-center gap-3 underline underline-offset-2 w-full decoration-purple-600">
          <div>Unsubscribe</div>
          <div>Privacy Policy</div>
          <div>Copyright@2023 substack.io</div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
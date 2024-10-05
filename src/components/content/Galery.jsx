import React from "react";

const Galery = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
        <img
          className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
        <img
          className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
        <img
          className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
        <img
          className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
      </div>
      <button className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal">
        <span>Load More</span>
      </button>

      {/*  */}

      {/*  */}
    </div>
  );
};

export default Galery;

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center -mt-30 md:-mt-40">
      <div className="px-5 md:px-20 text-4xl md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest">
        <TypeAnimation
          sequence={[500, "Nice view to be had after a long climb"]}
          speed={25}
          repeat={false}
        />
      </div>
      <div className="fixed bottom-6 flex flex-col items-center">
        <div className="border border-neutral-400 rounded-full w-5 h-9 mb-1 flex flex-col items-center">
          <div
            className="w-2 h-2 bg-neutral-600 rounded-full animate-scroll my-1"
            style={{ animationDelay: "0s" }}
          ></div>
        </div>
        <span className="text-[8px] font-extralight text-neutral-400">
          Scroll Down
        </span>
      </div>
    </div>
  );
};

export default Hero;

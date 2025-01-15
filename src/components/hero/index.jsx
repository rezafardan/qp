import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center -mt-30 md:-mt-40">
      <div className="px-5 md:px-20 text-5xl md:text-8xl text-center font-extrabold text-neutral-200 font-BebasNeue">
        <TypeAnimation
          sequence={[500, "Nice view to be had after a long climb"]}
          speed={25}
          repeat={false}
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import ScrollDownAnimation from "./ScrollDownAnimation";
import { TypeAnimation } from "react-type-animation";
import video from "../../assets/video.mp4";
import VideoTextHeroBlend from "./VideoTextHeroBlend";

const Hero = () => {
  return (
    <div className="fixed w-full h-full flex flex-col items-center justify-center -mt-30 md:-mt-40">
      <div className="px-5 md:px-20 text-2xl md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest">
        <TypeAnimation
          sequence={[500, "Nice view to be had after a long climb"]}
          speed={25}
          repeat={false}
        />
      </div>
      {/* <VideoTextHeroBlend video={video} /> */}
      <ScrollDownAnimation />
    </div>
  );
};

export default Hero;

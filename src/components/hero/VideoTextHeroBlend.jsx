import React from "react";
import "../../index.css"; // Pastikan kamu mengimpor CSS yang sesuai

const VideoTextHeroBlend = ({ video }) => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Teks besar JESKY dengan video */}
      <div className="relative z-10 text-center">
        <h1 className="text-[15vw] font-bold uppercase text-transparent bg-clip-text bg-video">
          JESKY
        </h1>
      </div>

      {/* Video yang muncul di background teks */}
      <video
        className="absolute top-1/2 left-1/2 w-auto h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTextHeroBlend;

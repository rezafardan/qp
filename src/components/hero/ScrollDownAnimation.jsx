import React from "react";

const ScrollDownAnimation = () => {
  return (
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
  );
};

export default ScrollDownAnimation;

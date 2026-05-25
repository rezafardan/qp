// src/components/hero/index.jsx
import React, { useRef, useEffect } from "react";
import HeroText from "./HeroText";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!textRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      textRef.current.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      className="fixed w-full h-full flex flex-col items-center justify-center"
      style={{ zIndex: 10 }}
    >
      <HeroText textRef={textRef} />
    </div>
  );
};

export default Hero;

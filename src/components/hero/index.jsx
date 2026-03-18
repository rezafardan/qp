// src/components/hero/index.jsx
import React, { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!textRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      // Bergerak sangat pelan → efek melayang di dalam galaxy
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
      <div
        ref={textRef}
        className="px-8 md:px-24 text-center"
        style={{
          transition: "transform 0.25s ease-out",
          willChange: "transform",
        }}
      >
        {/* Floating glow yang sangat subtle di belakang text */}
        <div
          aria-hidden="true"
          className="text-2xl md:text-4xl font-light font-BebasNeue absolute inset-0 flex items-center justify-center select-none"
          style={{
            color: "rgba(255,255,255,0.15)",
            filter: "blur(30px)",
            transform: "scale(1.04)",
          }}
        >
          Nice view to be had after a long climb
        </div>

        {/* Text utama — font kecil, ringan */}
        <div
          className="text-2xl md:text-4xl font-light font-BebasNeue tracking-widest relative"
          style={{
            color: "rgba(220, 220, 240, 0.85)",   // sedikit kebiruan, tidak putih penuh
            letterSpacing: "0.25em",
          }}
        >
          <TypeAnimation
            sequence={[600, "Nice view to be had after a long climb"]}
            speed={30}
            repeat={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

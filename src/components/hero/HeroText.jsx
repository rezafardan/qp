import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const HeroText = ({ textRef }) => {
  const { t } = useTranslation();
  const tagline = t("hero.tagline");

  return (
    <div
      ref={textRef}
      className="px-8 md:px-24 text-center"
      style={{ transition: "transform 0.25s ease-out", willChange: "transform" }}
    >
      {/* Glow blur layer */}
      <div
        aria-hidden="true"
        className="text-2xl md:text-4xl font-light font-BebasNeue absolute inset-0 flex items-center justify-center select-none"
        style={{
          color: "rgba(255, 255, 255, 0.9)",
          filter: "blur(30px)",
          transform: "scale(1.04)",
        }}
      >
        {tagline}
      </div>

      {/* Typewriter text */}
      <div
        className="text-2xl md:text-4xl font-light font-BebasNeue tracking-widest relative"
        style={{ color: "rgba(220, 220, 240, 0.85)", letterSpacing: "0.25em" }}
      >
        <TypeAnimation sequence={[600, tagline]} speed={30} repeat={false} />
      </div>
    </div>
  );
};

export default HeroText;

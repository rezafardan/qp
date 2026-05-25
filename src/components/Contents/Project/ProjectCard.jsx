import { PiArrowUpRightBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, assets = {} }) => {
  const { t } = useTranslation();
  const { bg, imgA, imgB } = assets;

  return (
    <div className="relative overflow-hidden group rounded-sm">
      {bg && (
        <img
          src={bg}
          alt={project.title}
          loading="lazy"
          className="w-full object-cover filter brightness-75 transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {imgA && (
        <img
          src={imgA}
          alt="Preview"
          loading="lazy"
          className="absolute w-[55%] bottom-8 right-12 filter brightness-75 contrast-75 transition-all duration-500 group-hover:brightness-90 group-hover:translate-y-[-4px] shadow-2xl"
        />
      )}
      {imgB && (
        <img
          src={imgB}
          alt="Preview detail"
          loading="lazy"
          className="absolute w-[20%] bottom-4 right-2 filter brightness-75 contrast-75 transition-all duration-500 group-hover:brightness-90 group-hover:translate-y-[-2px] shadow-xl"
        />
      )}

      {/* Top-left: title + subtitle */}
      <div className="absolute top-3 sm:top-5 md:top-6 left-3 sm:left-5 md:left-6 w-[65%]">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-2"
        >
          <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-white leading-tight">
            {project.title}
          </span>
          <span className="transform transition-transform duration-300 group-hover/link:rotate-45 text-white">
            <PiArrowUpRightBold />
          </span>
        </a>
        <p className="text-[10px] sm:text-xs tracking-widest text-white/70 mt-1">
          {project.subtitle}
        </p>
      </div>

      {/* Top-right: view button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 sm:top-5 md:top-6 right-3 sm:right-5 md:right-6"
      >
        <button className="text-[10px] sm:text-xs px-3 py-1.5 border border-white/50 text-white hover:bg-white/10 hover:border-violet-400 hover:shadow-violet-500/30 hover:shadow-md transition-all ease-in-out duration-300 backdrop-blur-sm">
          {t("projects.button")}
        </button>
      </a>

      {/* Bottom-left: heading + description + tag */}
      <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-3 sm:left-5 md:left-6 w-full md:w-4/5 lg:w-3/5 xl:w-1/2">
        <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white mb-1 hidden md:block leading-snug">
          {project.heading}
        </h2>
        <p className="text-xs text-white/70 font-light hidden lg:block leading-relaxed">
          {project.description}
        </p>
        <span className="mt-2 inline-block text-[9px] sm:text-[10px] tracking-[0.2em] text-white/50 font-light">
          {project.tag}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

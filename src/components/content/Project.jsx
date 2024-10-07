import project_bg from "../../assets/project_bg.jpg";
import movie_app from "../../assets/movie_app.png";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="relative">
          <img src={project_bg} className="filter brightness-50" />

          <img
            src={movie_app}
            alt=""
            className="hidden sm:block absolute w-3/4 right-0 bottom-0 pl-4 pt-4"
          />

          <a href="https://github.com/rezafardan/movie-app-rf" target="_blank">
            <button className="max-w-max absolute right-6 bottom-6 text-xs sm:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
              {t("projectButton")}
            </button>
          </a>

          <a href="https://github.com/rezafardan/movie-app-rf" target="_blank">
            <button className="hidden max-w-max absolute right-6 top-6 text-xs sm:flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
              {t("projectButton")}
            </button>
          </a>

          <div className="absolute px-4 text-lg text-white bottom-0 top-6 w-4/5 sm:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-widest">
              {t("projectName")}
            </h1>
            <p className="text-xs font-thin">{t("projectDetail")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

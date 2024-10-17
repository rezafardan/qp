import React from "react";
import { useTranslation } from "react-i18next";

const Head = ({ title, duration, months }) => {
  return (
    <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
      <h4 className="text-black text-base text-center font-bold tracking-wide">
        {title}
      </h4>
      <h6 className="font-thin text-black text-sm">{duration}</h6>
      <h6 className="font-thin text-black text-xs">{months}</h6>
    </div>
  );
};

const Contents = ({ description, keyresponsibilities }) => {
  const { t } = useTranslation();

  return (
    <div className="border-b flex flex-col pb-2">
      {/* BOX CONTENT */}

      {/* BOX PUTIH JUDUL */}
      <Head
        title={t("experience.bootcamp.title")}
        duration={t("experience.bootcamp.duration")}
        months={t("experience.bootcamp.months")}
      />
      {/* BOX PUTIH JUDUL */}

      {/* CONTENT */}
      <div className="p-4 sm:p-6 text-justify">
        <h2 className="mb-2 text-sm text-white font-extralight">
          {description}
        </h2>
        <span className="text-sm font-extralight">{keyresponsibilities}</span>

        <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.0.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.0.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.1.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.1.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.2.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.2.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.3.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.3.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.4.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.4.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.5.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.5.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.6.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.6.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.7.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.7.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.8.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.8.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.9.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.9.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.10.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.10.details")}</p>
          </li>

          <li>
            <span className="text-gray-300">
              {t("experience.bootcamp.responsibilities.11.title")}
            </span>
            <p>{t("experience.bootcamp.responsibilities.11.details")}</p>
          </li>
        </ul>
      </div>
      {/* CONTENT */}

      {/* TOMBOL EXPAND */}
      {/* <ReadMoreButton /> */}
      {/* TOMBOL EXPAND */}
    </div>
  );
};

export default Contents;

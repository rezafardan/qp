import React, { useState } from "react";
import js_dicoding from "../../../assets/js-dicoding.jpg";
import fe_dicoding from "../../../assets/fe-dicoding.jpg";
import basic_leadership from "../../../assets/basic_leadership.jpg";
import { MdReadMore } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";

const Certification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col items-center">
      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest">
        {t("certification1")}
      </p>
      <div className="flex gap-2 my-4 justify-center">
        <div className="w-5/6 sm:w-1/4 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/4EXG4R931PRL"
            target="_blank"
          >
            <img src={basic_leadership} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              {t("certification.0.title")}
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              {t("certification.0.arranged")}
            </p>
            <p className="text-gray-600 text-xs">
              {t("certification.0.credential")}
            </p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              {t("certification.0.detail")}
            </p>
          </div>
        </div>
      </div>

      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-10">
        {t("certification2")}
      </p>
      <div className="flex flex-col sm:flex-row gap-8 my-4 justify-center items-start">
        <div className="w-5/6 sm:w-1/4 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/4EXG4R931PRL"
            target="_blank"
          >
            <img src={js_dicoding} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              {t("certification.1.title")}
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              {t("certification.1.arranged")}
            </p>
            <p className="text-gray-600 text-xs">
              {t("certification.1.credential")}
            </p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              {t("certification.1.detail")}
            </p>
          </div>
        </div>

        <div className="w-5/6 sm:w-1/4 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/72ZDVJVJLZYW"
            target="_blank"
          >
            <img src={fe_dicoding} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              {t("certification.2.title")}
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              {t("certification.2.arranged")}
            </p>
            <p className="text-gray-600 text-xs">
              {t("certification.2.credential")}
            </p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              {t("certification.2.detail")}
            </p>
          </div>
        </div>
      </div>

      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-10">
        <Trans
          i18nKey="certificationDetail"
          values={{
            linkedin: "LINKEDIN",
          }}
          components={{
            a: (
              <a
                href="https://www.linkedin.com/in/reza-fardan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clip-text text-transparent bg-gradient-to-tl from-pink-500 to-violet-500 tracking-wide"
              />
            ),
          }}
        />
      </p>
    </section>
  );
};

export default Certification;

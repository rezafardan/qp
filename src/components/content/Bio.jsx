import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { useTranslation, Trans } from "react-i18next";
import profile from "../../assets/profile.jpeg";

const Accordion = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePhotoProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={togglePhotoProfile}
        className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm"
      >
        <span>{isOpen ? "Close Photo" : "Open Photo"}</span>
        <RiArrowDownSLine />
      </button>

      {isOpen && (
        <img
          className="h-auto max-w-full sm:max-w-xs transition-all duration-300  filter grayscale hover:grayscale-0 px-8"
          src={profile}
          alt="image description"
        />
      )}
    </div>
  );
};

const Bio = () => {
  const [readMore, setReadMore] = useState(false);

  const { t } = useTranslation();

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="flex flex-col-reverse gap-6 mb-4 pb-2">
      {/* <Accordion /> */}

      <div className="flex flex-col gap-2 py-2 px-4 sm:px-20 md:px-32 font-light">
        <p className="font-extralight mb-3 text-justify">
          <Trans
            i18nKey="shortBiography_1"
            values={{
              name: "Reza Fardan Adi Putra",
              nickname: "Reza",
              age: 26,
              bootcamp: "Harisenin.com",
            }}
            components={{
              highlight: (
                <span className="font-caveat text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-widest" />
              ),
              a: (
                <a
                  href="https://harisenin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-clip-text text-transparent bg-gradient-to-tl from-pink-500 to-violet-500 tracking-wide"
                />
              ),
            }}
          />
        </p>

        <p className="font-extralight mb-3 text-justify">
          <Trans i18nKey="shortBiography_2" />
        </p>

        {readMore && (
          <>
            <p className="font-extralight mb-3 text-justify">
              <Trans
                i18nKey="shortBiography_3"
                values={{ company: "PT Telkom Akses" }}
                components={{
                  highlight: (
                    <span className="bg-clip-text text-transparent bg-gradient-to-tl from-pink-500 to-violet-500 tracking-wide" />
                  ),
                }}
              />
            </p>

            <p className="font-extralight mb-3 text-justify">
              <Trans i18nKey="shortBiography_4" />
            </p>

            <p className="font-extralight mb-3 text-justify">
              <Trans i18nKey="shortBiography_5" />
            </p>

            <p className="font-extralight mb-3 text-justify">
              <Trans i18nKey="shortBiography_6" />
            </p>

            <p className="font-extralight mb-3 text-justify">
              <Trans
                i18nKey="shortBiography_7"
                values={{ contact: "contact" }}
                components={{
                  a: (
                    <a
                      href="#contact"
                      className="bg-clip-text text-transparent bg-gradient-to-tl from-pink-500 to-violet-500 tracking-wide"
                    />
                  ),
                }}
              />
            </p>
          </>
        )}

        <button
          onClick={toggleReadMore}
          className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal"
        >
          <span>{t("readMoreButton")}</span>
          <MdReadMore />
        </button>
      </div>
    </section>
  );
};

export default Bio;

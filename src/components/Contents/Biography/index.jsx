import React from "react";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import Button from "../../Button";

const Biography = () => {
  const [readMore, setReadMore] = useState(false);
  const { t } = useTranslation();

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="flex flex-col-reverse gap-6 mb-4 pb-2">
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

        <Button onClick={toggleReadMore}>
          {readMore ? t("closeButton") : t("readMoreButton")}
        </Button>
      </div>
    </section>
  );
};

export default Biography;

import js_dicoding from "../../../assets/sertifikat/js-dicoding.jpg";
import fe_dicoding from "../../../assets/sertifikat/fe-dicoding.jpg";
import basic_leadership from "../../../assets/sertifikat/basic_leadership.jpg";
import cybersecurity from "../../../assets/sertifikat/cybersecurity.png";
import networking_basics from "../../../assets/sertifikat/networking-basics.png";
import fsd_harisenin from "../../../assets/sertifikat/fsd-harisenin.jpg";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const Certification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex gap-4">
        <div className="w-32 mt-4">
          <a
            href="https://www.credly.com/badges/eb630edf-8f9d-468a-93cd-ff5c04d7e3ac/public_url"
            target="_blank"
          >
            <img src={cybersecurity} alt="Cybersecurity Cisco" />
          </a>
        </div>

        <div className="w-32 mt-4">
          <a
            href="https://www.credly.com/badges/74f01988-3fcb-4c97-9d30-046909149aa6/public_url"
            target="_blank"
          >
            <img src={networking_basics} alt="Networking Basic Cisco" />
          </a>
        </div>
      </div>

      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-4">
        {t("certification1")}
      </p>

      <div className="w-60 mt-10">
        <a href="https://www.linkedin.com/in/reza-fardan/" target="_blank">
          <img
            src={fsd_harisenin}
            alt="Fullstack Web Development Harisenin.com"
          />
        </a>
      </div>

      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-4">
        {t("certification2")}
      </p>

      <div className="flex flex-col md:flex-row gap-8 my-4 justify-start items-start mt-10">
        <div className="w-[14.75rem] border-[6px] border-slate-700 bg-white">
          <a href="https://www.linkedin.com/in/reza-fardan/" target="_blank">
            <img src={basic_leadership} />
          </a>
        </div>

        <div className="w-60 bg-white">
          <a
            href="https://www.dicoding.com/certificates/4EXG4R931PRL"
            target="_blank"
          >
            <img src={js_dicoding} />
          </a>
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

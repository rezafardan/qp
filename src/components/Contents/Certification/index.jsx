// src/components/Contents/Certification/index.jsx
import { useTranslation, Trans } from "react-i18next";
import CertBadge from "./CertBadge";
import { CERT_CISCO, CERT_BOOTCAMP, CERT_OTHERS } from "./certData";

const Certification = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center">

      {/* Cisco badges */}
      <div className="flex gap-4">
        {CERT_CISCO.map((cert) => (
          <div key={cert.alt} className="w-32 mt-4">
            <CertBadge {...cert} />
          </div>
        ))}
      </div>
      <p className="text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-4">
        {t("certification1")}
      </p>

      {/* Bootcamp cert */}
      {CERT_BOOTCAMP.map((cert) => (
        <div key={cert.alt} className="w-60 mt-10">
          <CertBadge {...cert} />
        </div>
      ))}
      <p className="text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-4">
        {t("certification2")}
      </p>

      {/* Other certs */}
      <div className="flex flex-col md:flex-row gap-8 my-4 justify-start items-start mt-10">
        {CERT_OTHERS.map((cert) => (
          <CertBadge key={cert.alt} {...cert} />
        ))}
      </div>

      <p className="text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-10">
        <Trans
          i18nKey="certificationDetail"
          values={{ linkedin: "LINKEDIN" }}
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

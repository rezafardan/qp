import React, { useState } from "react";
import basic_leadership from "../../assets/basic_leadership.jpg";
import bekerja_tim from "../../assets/bekerja_tim.jpg";
import impersonal_communication from "../../assets/impersonal_communication.jpg";
import osp_ftth from "../../assets/osp_ftth.jpg";
import product_knowledge from "../../assets/product_knowledge.jpg";
import indihome_technician from "../../assets/indihome_technician.jpg";
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
        {t("certification")}
      </p>
      <div className="grid grid-cols-1 gap-2 w-1/2 sm:w-1/4 my-4">
        <a href="https://www.linkedin.com/in/reza-fardan/" target="_blank">
          <img src={indihome_technician} />{" "}
        </a>
        {isOpen && (
          <>
            <a href="https://www.linkedin.com/in/reza-fardan/" target="_blank">
              <img src={osp_ftth} />{" "}
            </a>
            <a href="https://www.linkedin.com/in/reza-fardan/" target="_blank">
              <img src={basic_leadership} />{" "}
            </a>
          </>
        )}
      </div>
      <button
        onClick={handleOpen}
        className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal"
      >
        <span>Read More</span>
        <MdReadMore />
      </button>

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

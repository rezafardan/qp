import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";
import profile from "../../../assets/profile.jpg";

const ProfilePhoto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-2 mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="max-w-max text-xs flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm"
      >
        <span>{isOpen ? t("biography.closePhoto") : t("biography.openPhoto")}</span>
        <RiArrowDownSLine />
      </button>
      {isOpen && (
        <img
          className="h-auto max-w-full sm:max-w-xs transition-all duration-300 px-8"
          src={profile}
          alt="Reza Fardan"
        />
      )}
    </div>
  );
};

export default ProfilePhoto;

import { useTranslation } from "react-i18next";

const LastUpdated = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed flex flex-col gap-1 -left-[14.2rem] bottom-[16rem] -rotate-90">
      <p className="text-xs font-extralight font-sans tracking-[0.3em] flex">
        <div className="border-b m-2 w-48" />
        <span>{t("app.lastUpdated")}</span>
      </p>
    </div>
  );
};

export default LastUpdated;

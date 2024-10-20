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

const Description = ({ description, keyresponsibilities }) => {
  return (
    <>
      <h2 className="mb-2 text-sm text-white font-extralight">{description}</h2>
      <span className="text-sm font-extralight">{keyresponsibilities}</span>
    </>
  );
};

const ListItem = ({ listTitle, listDetail }) => {
  return (
    <li>
      <span className="text-gray-300">{listTitle}</span>
      <p>{listDetail}</p>
    </li>
  );
};

const Contents = () => {
  const { t } = useTranslation();

  return (
    <div className="border-b flex flex-col pb-2">
      <Head
        title={t("experience.bootcamp.title")}
        duration={t("experience.bootcamp.duration")}
        months={t("experience.bootcamp.months")}
      />

      <div className="p-4 sm:p-6 text-justify">
        <Description
          description={t("experience.bootcamp.description")}
          keyresponsibilities={t("experience.bootcamp.keyResponsibilities")}
        />

        <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.0.title")}
            listDetail={t("experience.bootcamp.responsibilities.0.details")}
          />

          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.1.title")}
            listDetail={t("experience.bootcamp.responsibilities.1.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.2.title")}
            listDetail={t("experience.bootcamp.responsibilities.2.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.3.title")}
            listDetail={t("experience.bootcamp.responsibilities.3.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.4.title")}
            listDetail={t("experience.bootcamp.responsibilities.4.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.5.title")}
            listDetail={t("experience.bootcamp.responsibilities.5.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.6.title")}
            listDetail={t("experience.bootcamp.responsibilities.6.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.7.title")}
            listDetail={t("experience.bootcamp.responsibilities.7.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.8.title")}
            listDetail={t("experience.bootcamp.responsibilities.8.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.9.title")}
            listDetail={t("experience.bootcamp.responsibilities.9.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.10.title")}
            listDetail={t("experience.bootcamp.responsibilities.10.details")}
          />
          <ListItem
            listTitle={t("experience.bootcamp.responsibilities.11.title")}
            listDetail={t("experience.bootcamp.responsibilities.11.details")}
          />
        </ul>
      </div>
    </div>
  );
};

export default Contents;

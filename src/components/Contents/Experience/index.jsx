// src/components/Contents/Experience/index.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import Titles from "./Titles";
import TimelineBlock from "./TimelineBlock";
import TimelineCircle from "./TimelineCircle";
import { TELKOM_ROLES } from "./experienceData";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-[30%_69%]">

        {/* 1. PT. Gudang Baru Berkah */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.current.company")}
          location={t("experience.current.location")}
          duration={t("experience.current.duration")}
        />
        <TimelineBlock>
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<MdSecurity />} />
            <ExperienceCard experienceKey="current" isCurrent={true} />
          </li>
        </TimelineBlock>

        {/* 2. Yukti ID */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.internship.company")}
          location={t("experience.internship.location")}
          duration={t("experience.internship.duration")}
        />
        <TimelineBlock>
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<FaBookOpenReader />} />
            <ExperienceCard experienceKey="internship" />
          </li>
        </TimelineBlock>

        {/* 3. Harisenin.com */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.bootcamp.company")}
          location={t("experience.bootcamp.location")}
          duration={t("experience.bootcamp.duration")}
        />
        <TimelineBlock>
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<FaBookOpenReader />} />
            <ExperienceCard experienceKey="bootcamp" />
          </li>
        </TimelineBlock>

        {/* 4. PT. Telkom Akses — 5 roles */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.company")}
          location={t("experience.years")}
          duration={t("experience.duration")}
        />
        <TimelineBlock>
          {TELKOM_ROLES.map(({ key, icon }) => (
            <li key={key} className="flex flex-col relative mb-6">
              <TimelineCircle icon={icon} />
              <ExperienceCard experienceKey={key} />
            </li>
          ))}
        </TimelineBlock>

        {/* 5. SMK */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("education.school")}
          duration={t("education.durationSchool")}
        />
        <TimelineBlock isLast>
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<FaBookOpenReader />} />
            <ExperienceCard experienceKey="education" />
          </li>
        </TimelineBlock>

      </div>
    </section>
  );
};

export default Experience;

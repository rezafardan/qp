// src/components/Contents/Experience/index.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { BsFillRouterFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import Titles from "./Titles";

// ── Komponen timeline reusable ──────────────────────────────────
const TimelineBlock = ({ children, isLast = false }) => (
  <ul className="relative ml-3 flex flex-col">
    <div className="relative px-4 ml-2 sm:ml-0">
      <div className={`absolute -left-3 top-0 w-px bg-white ${isLast ? "bottom-0" : "bottom-[-24px]"}`} />
      {children}
    </div>
  </ul>
);

const TimelineCircle = ({ icon }) => (
  <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
    {icon}
  </div>
);

// ── Data experiences ────────────────────────────────────────────
// Telkom memiliki banyak roles dalam 1 grup Titles
const TELKOM_ROLES = [
  { key: "teamLeader",   icon: <BsFillRouterFill /> },
  { key: "helpdesk",     icon: <BsFillRouterFill /> },
  { key: "Ioan",         icon: <BsFillRouterFill /> },
  { key: "dshr",         icon: <BsFillRouterFill /> },
  { key: "provisioning", icon: <BsFillRouterFill /> },
];

// ── Main Component ──────────────────────────────────────────────
const Experience = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-[30%_69%]">

        {/* ══════════════════════════════════════════════
            1. CURRENT — PT. Gudang Baru Berkah
        ══════════════════════════════════════════════ */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.current.company")}
          location={t("experience.current.location")}
          duration={t("experience.current.duration")}
        />
        <TimelineBlock lineTop="-top-20" lineBottom="bottom-6">
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<MdSecurity />} />
            <ExperienceCard experienceKey="current" isCurrent={true} />
          </li>
        </TimelineBlock>

        {/* ══════════════════════════════════════════════
            2. INTERNSHIP — Yukti ID
        ══════════════════════════════════════════════ */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.internship.company")}
          location={t("experience.internship.location")}
          duration={t("experience.internship.duration")}
        />
        <TimelineBlock lineTop="-top-20" lineBottom="bottom-6">
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<FaBookOpenReader />} />
            <ExperienceCard experienceKey="internship" />
          </li>
        </TimelineBlock>

        {/* ══════════════════════════════════════════════
            3. BOOTCAMP — Harisenin.com
        ══════════════════════════════════════════════ */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.bootcamp.company")}
          location={t("experience.bootcamp.location")}
          duration={t("experience.bootcamp.duration")}
        />
        <TimelineBlock lineTop="-top-20" lineBottom="-bottom-12">
          <li className="flex flex-col relative mb-6">
            <TimelineCircle icon={<FaBookOpenReader />} />
            <ExperienceCard experienceKey="bootcamp" />
          </li>
        </TimelineBlock>

        {/* ══════════════════════════════════════════════
            4. PT. TELKOM AKSES — 5 roles dalam 1 grup
        ══════════════════════════════════════════════ */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.company")}
          location={t("experience.years")}
          duration={t("experience.duration")}
        />
        <TimelineBlock lineTop="-top-12" lineBottom="-bottom-12">
          {TELKOM_ROLES.map(({ key, icon }, i) => (
            <li key={key} className="flex flex-col relative mb-6">
              <TimelineCircle icon={icon} />
              <ExperienceCard experienceKey={key} />
            </li>
          ))}
        </TimelineBlock>

        {/* ══════════════════════════════════════════════
            5. PENDIDIKAN — SMK
        ══════════════════════════════════════════════ */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("education.school")}
          duration={t("education.durationSchool")}
        />
        <TimelineBlock isLast lineTop="-top-20" lineBottom="bottom-6">
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

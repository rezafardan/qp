import React, { useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { BsFillRouterFill } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import arrow_left from "../../../assets/arrow_left.svg";
import arrow_right from "../../../assets/arrow_right.svg";
import Contents from "./Contents";
import Titles from "./Titles";

const ScrollButtonListPoster = ({ className = "", src, click, listRef }) => {
  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={click === "left" ? scrollLeft : scrollRight}
        className={`hidden lg:block absolute bottom-[44%] p-2 border-[#E7E3FC] border-opacity-25 border-[1px] text-2xl bg-[#2F3334] rounded-full z-10 ${className}`}
      >
        <img
          src={src === "left" ? arrow_left : arrow_right}
          alt=""
          className="w-6 h-6"
        />
      </button>
    </>
  );
};

const Experience = () => {
  const [readMore, setReadMore] = useState(false);
  const { t } = useTranslation();
  const listRef = useRef(null);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section>
      {/* CONTAINER */}
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-[30%_69%]">
        {/*  */}

        {/* JUDUL */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.internship.company")}
          location={t("experience.internship.location")}
          duration={t("experience.internship.duration")}
        />
        {/* JUDUL */}

        {/* CONTAINER ISI */}
        <ul className="relative ml-3 flex flex-col">
          {/* == */}
          <div className="relative px-4 ml-2 sm:ml-0 before:absolute before:-top-20 sm:before:top-0 before:bottom-6 before:w-0.5 before:-left-3 before:bg-white">
            {/* diatas ini garis */}

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <FaBookOpenReader />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.internship.title")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.internship.title")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.internship.description1")}
                  </h2>
                  <ul className="text-sm text-gray-400 list-disc list-outside flex flex-col pl-4 mb-2">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.internship.keyResponsibilities.0.title")}
                      </span>
                      <p>
                        {t(
                          "experience.internship.keyResponsibilities.0.details"
                        )}
                      </p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("experience.internship.keyResponsibilities.1.title")}
                      </span>
                      <p>
                        {t(
                          "experience.internship.keyResponsibilities.1.details"
                        )}
                      </p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("experience.internship.keyResponsibilities.2.title")}
                      </span>
                      <p>
                        {t(
                          "experience.internship.keyResponsibilities.2.details"
                        )}
                      </p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("experience.internship.keyResponsibilities.3.title")}
                      </span>
                      <p>
                        {t(
                          "experience.internship.keyResponsibilities.3.details"
                        )}
                      </p>
                    </li>
                  </ul>
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.internship.description2")}
                  </h2>
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.internship.description3")}
                  </h2>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>
          </div>
        </ul>
        {/* CONTAINER ISI */}

        {/* JUDUL */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.bootcamp.company")}
          location={t("experience.bootcamp.location")}
          duration={t("experience.bootcamp.duration")}
        />
        {/* JUDUL */}

        {/* CONTAINER ISI */}
        <ul className="relative ml-3 flex flex-col">
          {/* CONTAINER ISI */}

          {/* INI GARIS PUTIH */}
          <div className="relative px-4 ml-2 sm:ml-0 before:absolute before:-top-20 sm:before:top-0 before:-bottom-12 before:w-0.5 before:-left-3 before:bg-white">
            {/* INI GARIS PUTIH */}

            <li className="flex flex-col relative mb-6">
              {/* == */}

              {/* LINGKARANG UNGU */}
              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <FaBookOpenReader />
              </div>
              {/* LINGKARANG UNGU */}

              {/* BOX CONTENT */}
              <Contents
                description={t("experience.bootcamp.description")}
                keyresponsibilities={t(
                  "experience.bootcamp.keyResponsibilities"
                )}
              />
              {/* BOX CONTENT */}
            </li>
          </div>
        </ul>
        {/* CONTAINER ISI */}

        {/* JUDUL */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("experience.company")}
          location={t("experience.company")}
          duration={t("experience.duration")}
        />
        {/* JUDUL */}

        {/* CONTAINER ISI */}
        <ul className="relative ml-3 flex flex-col">
          {/*  */}

          <div className="relative px-4 ml-2 sm:ml-0 before:absolute before:-top-12 sm:before:top-0 before:-bottom-12 before:w-0.5 before:-left-3 before:bg-white">
            {/* diatas ini garis */}

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <BsFillRouterFill />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.teamLeader.title")} <br />
                    {t("experience.teamLeader.position")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.teamLeader.duration")}
                  </h6>
                  <h6 className="font-thin text-black text-xs">
                    {t("experience.teamLeader.years")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.teamLeader.description")}
                  </h2>
                  <span className="text-sm font-extralight">
                    {t("experience.teamLeader.keyResponsibilities")}
                  </span>
                  <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.teamLeader.responsibilities.0.title")}
                      </span>
                      <p>
                        {t("experience.teamLeader.responsibilities.0.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.teamLeader.responsibilities.1.title")}
                      </span>
                      <p>
                        {t("experience.teamLeader.responsibilities.1.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.teamLeader.responsibilities.2.title")}
                      </span>
                      <p>
                        {t("experience.teamLeader.responsibilities.2.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.teamLeader.responsibilities.3.title")}
                      </span>
                      <p>
                        {t("experience.teamLeader.responsibilities.3.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.teamLeader.responsibilities.4.title")}
                      </span>
                      <p>
                        {t("experience.teamLeader.responsibilities.4.details")}
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <BsFillRouterFill />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.helpdesk.title")} <br />
                    {t("experience.helpdesk.position")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.helpdesk.duration")}
                  </h6>
                  <h6 className="font-thin text-black text-xs">
                    {t("experience.helpdesk.years")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.helpdesk.description")}
                  </h2>
                  <span className="text-sm font-extralight">
                    {t("experience.helpdesk.keyResponsibilities")}
                  </span>
                  <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.0.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.0.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.1.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.1.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.2.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.2.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.3.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.3.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.4.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.4.details")}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.helpdesk.responsibilities.5.title")}
                      </span>
                      <p>
                        {t("experience.helpdesk.responsibilities.5.details")}
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <BsFillRouterFill />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.ioan.title")} <br />
                    {t("experience.ioan.position")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.ioan.duration")}
                  </h6>
                  <h6 className="font-thin text-black text-xs">
                    {t("experience.ioan.years")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.ioan.description")}
                  </h2>
                  <span className="text-sm font-extralight">
                    {t("experience.ioan.keyResponsibilities")}
                  </span>
                  <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.ioan.responsibilities.0.title")}
                      </span>
                      <p>{t("experience.ioan.responsibilities.0.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.ioan.responsibilities.1.title")}
                      </span>
                      <p>{t("experience.ioan.responsibilities.1.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.ioan.responsibilities.2.title")}
                      </span>
                      <p>{t("experience.ioan.responsibilities.2.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.ioan.responsibilities.3.title")}
                      </span>
                      <p>{t("experience.ioan.responsibilities.3.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.ioan.responsibilities.4.title")}
                      </span>
                      <p>{t("experience.ioan.responsibilities.4.details")}</p>
                    </li>
                  </ul>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <BsFillRouterFill />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.dshr.title")} <br />
                    {t("experience.dshr.position")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.dshr.duration")}
                  </h6>
                  <h6 className="font-thin text-black text-xs">
                    {t("experience.dshr.years")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.dshr.description")}
                  </h2>
                  <span className="text-sm font-extralight">
                    {t("experience.dshr.keyResponsibilities")}
                  </span>
                  <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.dshr.responsibilities.0.title")}
                      </span>
                      <p>{t("experience.dshr.responsibilities.0.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.dshr.responsibilities.1.title")}
                      </span>
                      <p>{t("experience.dshr.responsibilities.1.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.dshr.responsibilities.2.title")}
                      </span>
                      <p>{t("experience.dshr.responsibilities.2.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.dshr.responsibilities.3.title")}
                      </span>
                      <p>{t("experience.dshr.responsibilities.3.details")}</p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.dshr.responsibilities.4.title")}
                      </span>
                      <p>{t("experience.dshr.responsibilities.4.details")}</p>
                    </li>
                  </ul>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <BsFillRouterFill />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("experience.provisioning.title")} <br />
                    {t("experience.provisioning.position")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("experience.provisioning.duration")}
                  </h6>
                  <h6 className="font-thin text-black text-xs">
                    {t("experience.provisioning.years")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("experience.provisioning.description")}
                  </h2>
                  <span className="text-sm font-extralight">
                    {t("experience.provisioning.keyResponsibilities")}
                  </span>
                  <ul className="text-sm text-gray-400 font-extralight list-disc list-outside flex flex-col pl-4">
                    <li>
                      <span className="text-gray-300">
                        {t("experience.provisioning.responsibilities.0.title")}
                      </span>
                      <p>
                        {t(
                          "experience.provisioning.responsibilities.0.details"
                        )}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.provisioning.responsibilities.1.title")}
                      </span>
                      <p>
                        {t(
                          "experience.provisioning.responsibilities.1.details"
                        )}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.provisioning.responsibilities.2.title")}
                      </span>
                      <p>
                        {t(
                          "experience.provisioning.responsibilities.2.details"
                        )}
                      </p>
                    </li>

                    <li>
                      <span className="text-gray-300">
                        {t("experience.provisioning.responsibilities.3.title")}
                      </span>
                      <p>
                        {t(
                          "experience.provisioning.responsibilities.3.details"
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>
          </div>
        </ul>
        {/* CONTAINER ISI */}

        {/* JUDUL */}
        <Titles
          icon={<RiArrowDownSLine />}
          company={t("education.school")}
          duration={t("education.durationSchool")}
        />
        {/* JUDUL */}

        {/* CONTAINER ISI */}
        <ul className="relative ml-3 flex flex-col">
          {/* == */}
          <div className="relative px-4 ml-2 sm:ml-0 before:absolute before:-top-20 sm:before:top-0 before:bottom-6 before:w-0.5 before:-left-3 before:bg-white">
            {/* diatas ini garis */}

            <li className="flex flex-col relative mb-6">
              {/* == */}

              <div className="absolute flex items-center justify-center top-6 w-8 h-8 rounded-full left-[-43px] border-2 bg-violet-500">
                <FaBookOpenReader />
              </div>
              {/* diatas ini lingkaran ungu */}

              <div className="border-b flex flex-col pb-2">
                {/* ini kotak isi */}

                <div className="bg-white flex flex-col gap-0 items-center justify-center py-4 px-4">
                  <h4 className="text-black text-base text-center font-bold tracking-wide">
                    {t("education.title")}
                  </h4>
                  <h6 className="font-thin text-black text-sm">
                    {t("education.title")}
                  </h6>
                </div>

                <div className="p-4 sm:p-6 text-justify">
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("education.description1")}
                  </h2>
                  <ul className="text-sm text-gray-400 list-disc list-outside flex flex-col pl-4 mb-2">
                    <li>
                      <span className="text-gray-300">
                        {t("education.keyResponsibilities.0.title")}
                      </span>
                      <p>{t("education.keyResponsibilities.0.details")}</p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("education.keyResponsibilities.1.title")}
                      </span>
                      <p>{t("education.keyResponsibilities.1.details")}</p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("education.keyResponsibilities.2.title")}
                      </span>
                      <p>{t("education.keyResponsibilities.2.details")}</p>
                    </li>
                    <li>
                      <span className="text-gray-300">
                        {t("education.keyResponsibilities.3.title")}
                      </span>
                      <p>{t("education.keyResponsibilities.3.details")}</p>
                    </li>
                  </ul>
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("education.description2")}
                  </h2>
                  <h2 className="mb-2 text-sm text-white font-extralight">
                    {t("education.description3")}
                  </h2>
                </div>
                {/* <ReadMoreButton /> */}
              </div>
            </li>
          </div>
        </ul>
        {/* CONTAINER ISI */}
      </div>
    </section>
  );
};

export default Experience;

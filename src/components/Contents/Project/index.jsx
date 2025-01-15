import React from "react";
import bg_a from "../../../assets/bg/bg-a.jpg";
import bg_b from "../../../assets/bg/bg-b.jpg";
import bg_c from "../../../assets/bg/bg-c.jpg";
import p_a_image_a from "../../../assets/project-a/image-a.jpg";
import p_a_image_b from "../../../assets/project-a/image-b.jpg";
import p_b_image_a from "../../../assets/project-b/image-a.jpg";
import p_b_image_b from "../../../assets/project-b/image-b.jpg";

import { PiArrowUpRightBold } from "react-icons/pi";

import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      {/* CARD */}
      <div className="relative">
        <img src={bg_a} className="filter brightness-50" />
        <img
          src={p_a_image_a}
          alt=""
          className=" md:block absolute w-4/6 right-14 bottom-4 sm:bottom-6 md:bottom-8 filter brightness-50 contrast-75"
        />
        <img
          src={p_a_image_b}
          alt=""
          className=" md:block absolute w-2/12 right-4 bottom-2 sm:bottom-4 md:bottom-6 filter brightness-50 contrast-75"
        />
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="max-w-max absolute right-6 bottom-6 text-xs sm:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="hidden max-w-max absolute right-6 top-6 text-xs sm:flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>
        <div className="absolute px-4 text-lg text-white bottom-0 top-2 sm:top-4 sm:left-4 md:top-12 md:left-10 w-4/5 sm:w-3/4">
          <a
            href="https://y-dashboard-delta.vercel.app/"
            className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide flex items-center gap-2 transform translate-y-0 group"
          >
            <span>Dashboard Panel CMS Blog</span>
            <span className="transform group-hover:rotate-45 ease-in-out duration-500">
              <PiArrowUpRightBold size={30} />
            </span>
          </a>
          <p className="text-xs tracking-wider">2025 | Yukti ID</p>
        </div>
        <div className="absolute text-white bottom-6 sm:bottom-12 md:bottom-12 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 left-4 sm:left-8 md:left-14">
          <h1 className="text-xs sm:text-sm md:text-base font-bold mt-8 mb-2">
            {/* {t("projectName")} */}
            DASHBOARD WEBSITE FOR CONTENT MANAGEMENT SYSTEM OF PROTOTYPE
            BLOGPAGE NEWS MEDIA
          </h1>
          <p className="text-sm font-thin hidden lg:block">
            This dashboard is designed with Next.js, ShadCN UI, Tailwind CSS,
            React Hook Form, Zod, CropperJS, and Axios to replace WordPress,
            providing a fast, secure, and flexible solution.
          </p>
        </div>
        <div className="absolute bottom-2 left-4 sm:left-8 sm:bottom-8 md:bottom-8 md:left-14 text-sm">
          FRONTEND DEV
        </div>
      </div>

      {/* CARD */}
      <div className="relative">
        <img src={bg_b} className="filter brightness-50" />
        <img
          src={p_b_image_a}
          alt=""
          className=" md:block absolute w-4/6 right-14 md:right-6 bottom-2 sm:bottom-4 md:bottom-6 filter brightness-50 contrast-75"
        />
        <img
          src={p_b_image_b}
          alt=""
          className=" md:block absolute w-4/12 right-2 bottom-2 sm:bottom-2 md:bottom-4 filter brightness-50 contrast-75"
        />
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="max-w-max absolute right-6 bottom-6 text-xs sm:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="hidden max-w-max absolute right-6 top-6 text-xs sm:flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>
        <div className="absolute px-4 text-lg text-white bottom-0 top-2 sm:top-4 sm:left-4 md:top-12 md:left-10 w-4/5 sm:w-3/4">
          <a
            href="https://y-dashboard-delta.vercel.app/"
            className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wide flex items-center gap-2 transform translate-y-0 group"
          >
            <span>REST API Blog</span>
            <span className="transform group-hover:rotate-45 ease-in-out duration-500">
              <PiArrowUpRightBold size={30} />
            </span>
          </a>
          <p className="text-xs tracking-wider">2025 | Yukti ID</p>
        </div>
        <div className="absolute text-white bottom-6 sm:bottom-12 md:bottom-12 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 left-4 sm:left-8 md:left-14">
          <h1 className="text-xs sm:text-sm md:text-base font-bold mt-8 mb-2">
            {/* {t("projectName")} */}
            BACKEND REST API FOR CONTENT MANAGEMENT SYSTEM OF PROTOTYPE WEBSITE
            AND BLOGPAGE NEWS MEDIA WEBSITE
          </h1>
          <p className="text-sm font-thin hidden lg:block">
            This dashboard is designed with Next.js, ShadCN UI, Tailwind CSS,
            React Hook Form, Zod, CropperJS, and Axios to replace WordPress,
            providing a fast, secure, and flexible solution.
          </p>
        </div>
        <div className="absolute bottom-2 left-4 sm:left-8 sm:bottom-8 md:bottom-8 md:left-14 text-sm">
          FRONTEND DEV
        </div>
      </div>
    </div>
  );
};

export default Project;

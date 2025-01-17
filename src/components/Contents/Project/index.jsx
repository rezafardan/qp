import React from "react";
import bg_a from "../../../assets/bg/bg-a.jpg";
import bg_b from "../../../assets/bg/bg-b.jpg";
import bg_c from "../../../assets/bg/bg-c.jpg";
import bg_d from "../../../assets/bg/bg-d.jpg";

import p_a_image_a from "../../../assets/project-a/image-a.jpg";
import p_a_image_b from "../../../assets/project-a/image-b.jpg";
import p_b_image_a from "../../../assets/project-b/image-a.jpg";
import p_b_image_b from "../../../assets/project-b/image-b.jpg";
import p_c_image_a from "../../../assets/project-c/image-a.jpg";
import p_c_image_b from "../../../assets/project-c/image-b.jpg";

import { PiArrowUpRightBold } from "react-icons/pi";

import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      {/* CARD */}
      <div className="relative">
        {/* IMAGE BACKGROUND */}
        <img
          src={bg_a}
          alt="Background Card"
          className="filter brightness-75"
        />

        {/* IMAGE CONTENT 1 */}
        <img
          src={p_a_image_a}
          alt="Image content 1"
          className="absolute w-4/6 bottom-4 sm:bottom-6 md:bottom-8 right-14 filter brightness-75 contrast-75"
        />

        {/* IMAGE CONTENT 2 */}
        <img
          src={p_a_image_b}
          alt="Image content 2"
          className="absolute w-2/12 bottom-2 sm:bottom-4 md:bottom-6 right-4 filter brightness-75 contrast-75"
        />

        {/* BUTTON MOBILE */}
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="max-w-max absolute right-2 bottom-2 text-xs md:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* BUTTON DESKTOP */}
        <a href="https://y-dashboard-delta.vercel.app/" target="_blank">
          <button className="hidden max-w-max absolute right-6 top-6 text-xs md:block items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* TEXT */}
        <div className="absolute text-white top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 w-full sm:w-3/4">
          {/* TOP LINK */}
          <a
            href="https://y-dashboard-delta.vercel.app/"
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide flex items-center gap-2 group"
          >
            <span>DASHBOARD PANEL CMS</span>
            <span className="transform group-hover:rotate-45 ease-in-out duration-500">
              <PiArrowUpRightBold />
            </span>
          </a>
          <p className="text-xs tracking-widest">2025 | Yukti ID</p>
        </div>

        {/* CONTENT */}
        <div className="absolute text-white md:bottom-16 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-full md:w-4/5 lg:w-3/4 xl:w-1/2 left-2 md:left-6">
          {/* CONTENT TITLE */}
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 hidden md:block">
            {/* {t("projectName")} */}
            DASHBOARD PANEL WEBSITE FOR CONTENT MANAGEMENT SYSTEM OF PROTOTYPE
            BLOGPAGE NEWS MEDIA
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm font-thin hidden lg:block">
            This dashboard is designed with Next.js, ShadCN UI, Tailwind CSS,
            React Hook Form, Zod, CropperJS, and Axios to replace WordPress,
            providing a fast, secure, and flexible solution.
          </p>
        </div>

        {/* FOOTER TEXT */}
        <div className="absolute text-xs md:text-base bottom-2 sm:bottom-4 left-2 sm:left-4 md:left-6 md:bottom-6">
          FRONTEND DEV
        </div>
      </div>

      {/* CARD */}
      <div className="relative">
        {/* IMAGE BACKGROUND */}
        <img
          src={bg_b}
          alt="Background Card"
          className="filter brightness-75"
        />

        {/* IMAGE CONTENT 1 */}
        <img
          src={p_b_image_a}
          alt="Image content 1"
          className="absolute w-4/6 bottom-4 sm:bottom-6 md:bottom-8 right-14 filter brightness-75 contrast-75"
        />

        {/* IMAGE CONTENT 2 */}
        <img
          src={p_b_image_b}
          alt="Image content 2"
          className="absolute w-3/12 bottom-2 sm:bottom-4 md:bottom-6 right-4 filter brightness-75 contrast-75"
        />

        {/* BUTTON MOBILE */}
        <a href="https://backend-sable-mu.vercel.app/" target="_blank">
          <button className="max-w-max absolute right-2 bottom-2 text-xs md:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* BUTTON DESKTOP */}
        <a href="https://backend-sable-mu.vercel.app/" target="_blank">
          <button className="hidden max-w-max absolute right-6 top-6 text-xs md:block items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* TEXT */}
        <div className="absolute text-white top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 w-full sm:w-3/4">
          {/* TOP LINK */}
          <a
            href="https://backend-sable-mu.vercel.app/"
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide flex items-center gap-2 group"
          >
            <span>CMS & BLOGPAGE REST API</span>
            <span className="transform group-hover:rotate-45 ease-in-out duration-500">
              <PiArrowUpRightBold />
            </span>
          </a>
          <p className="text-xs tracking-widest">2025 | Yukti ID</p>
        </div>

        {/* CONTENT */}
        <div className="absolute text-white md:bottom-16 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-full md:w-4/5 lg:w-3/4 xl:w-1/2 left-2 md:left-6">
          {/* CONTENT TITLE */}
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 hidden md:block">
            {/* {t("projectName")} */}
            BACKEND DEVELOPMENT FOR CMS DASHBOARD BLOG SYSTEM WITH EXPRESS.JS ,
            TYPESCRIPT, AND MYSQL
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm font-thin hidden lg:block">
            Backend system built with Express.js, TypeScript, and Prisma ORM,
            featuring secure authentication, content management, and media
            handling. Implements JWT for authorization, Bcrypt for password
            encryption, and Sharp for image processing.
          </p>
        </div>

        {/* FOOTER TEXT */}
        <div className="absolute text-xs md:text-base bottom-2 sm:bottom-4 left-2 sm:left-4 md:left-6 md:bottom-6">
          BACKEND DEV
        </div>
      </div>

      {/* CARD */}
      <div className="relative">
        {/* IMAGE BACKGROUND */}
        <img
          src={bg_c}
          alt="Background Card"
          className="filter brightness-75"
        />

        {/* IMAGE CONTENT 1 */}
        <img
          src={p_c_image_a}
          alt="Image content 1"
          className="absolute w-4/6 bottom-4 sm:bottom-6 md:bottom-8 right-14 filter brightness-75 contrast-75"
        />

        {/* IMAGE CONTENT 2 */}
        <img
          src={p_c_image_b}
          alt="Image content 2"
          className="absolute w-3/12 bottom-2 sm:bottom-4 md:bottom-6 right-4 filter brightness-75 contrast-75"
        />

        {/* BUTTON MOBILE */}
        <a href="https://github.com/rezafardan/y-blogpage" target="_blank">
          <button className="max-w-max absolute right-2 bottom-2 text-xs md:hidden flex items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* BUTTON DESKTOP */}
        <a href="https://github.com/rezafardan/y-blogpage" target="_blank">
          <button className="hidden max-w-max absolute right-6 top-6 text-xs md:block items-center justify-center p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm self-center font-normal cursor-pointer">
            {t("projectButton")}
          </button>
        </a>

        {/* TEXT */}
        <div className="absolute text-white top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 w-full sm:w-3/4">
          {/* TOP LINK */}
          <a
            href="https://github.com/rezafardan/y-blogpage"
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide flex items-center gap-2 group"
          >
            <span>BLOGPAGE NEWS MEDIA (ON GOING DEV)</span>
            <span className="transform group-hover:rotate-45 ease-in-out duration-500">
              <PiArrowUpRightBold />
            </span>
          </a>
          <p className="text-xs tracking-widest">2025 | Yukti ID</p>
        </div>

        {/* CONTENT */}
        <div className="absolute text-white md:bottom-16 lg:bottom-24 xl:bottom-28 2xl:bottom-32 w-full md:w-4/5 lg:w-3/4 xl:w-1/2 left-2 md:left-6">
          {/* CONTENT TITLE */}
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 hidden md:block">
            {/* {t("projectName")} */}
            MODERN NEWS BLOGPAGE WITH NEXT.JS SSR AND TYPESCRIPT FOR OPTIMAL
            PERFORMANCE
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm font-thin hidden lg:block">
            A high-performance news blog platform built with Next.js and
            TypeScript, leveraging Server-Side Rendering (SSR) for optimal data
            fetching and SEO. Features dynamic content loading, responsive
            design, and seamless integration with the CMS backend API.
          </p>
        </div>

        {/* FOOTER TEXT */}
        <div className="absolute text-xs md:text-base bottom-2 sm:bottom-4 left-2 sm:left-4 md:left-6 md:bottom-6">
          FRONTEND DEV
        </div>
      </div>
    </div>
  );
};

export default Project;

import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiShadcnui,
  SiThreedotjs,
  SiExpress,
  SiRedux,
  SiAxios,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiLinux,
} from "react-icons/si";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Box = ({ children, text, progress }) => {
  return (
    <div className="text-xs flex cursor-default items-center justify-between min-w-fit p-2 gap-2 border hover:bg-neutral-700 ease-in-out duration-300 hover:border-violet-400 hover:shadow-violet-500 hover:shadow-sm">
      <div className="flex gap-2 items-center">
        {children}
        <p>{text}</p>
      </div>
      <div className="text-[8px] text-orange-500 text-left">{progress}</div>
    </div>
  );
};

const ScrollButton = ({ listRef, click, children, className }) => {
  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -256, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 256, behavior: "smooth" });
  };

  return (
    <button
      onClick={click === "left" ? scrollLeft : scrollRight}
      className={className}
    >
      {children}
    </button>
  );
};

const Skill = () => {
  const listRef = useRef(null);
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center">
      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mb-4">
        {t("skill")}
      </p>
      <div className="relative flex flex-col items-center justify-center min-w-fit">
        <ScrollButton
          click="left"
          listRef={listRef}
          className="absolute -left-12 top-16 bottom-36 hover:bg-white/10 ease-in-out duration-500 transform translate-x-0 hover:-translate-x-1"
        >
          <RiArrowLeftWideFill size={46} />
        </ScrollButton>
        <section className="flex flex-col items-center">
          <div
            className="overflow-x-hidden overflow-y-hidden scroll-smooth flex w-64"
            ref={listRef}
          >
            <div className="flex flex-col gap-2">
              <div className="bg-white py-4 px-4 w-64">
                <h4 className="text-black text-base text-center font-bold tracking-wide">
                  FRONTEND
                </h4>
              </div>
              <div className="min-w-full flex flex-col gap-1 px-2">
                <Box text="HTML5">
                  <SiHtml5 />
                </Box>
                <Box text="CSS3">
                  <SiCss3 />
                </Box>
                <Box text="Javascript">
                  <SiJavascript />
                </Box>
                <Box text="Typescript">
                  <SiJavascript />
                </Box>
                <Box text="React JS">
                  <SiReact />
                </Box>
                <Box text="Next JS">
                  <SiReact />
                </Box>
                <Box text="Axios">
                  <SiAxios />
                </Box>
                <Box text="Redux" progress={t("skills")}>
                  <SiRedux />
                </Box>
                <Box text="Tailwind CSS">
                  <SiTailwindcss />
                </Box>
                <Box text="Shadcn UI">
                  <SiShadcnui />
                </Box>
                {/* <Box text="Three JS">
                  <SiThreedotjs />
                </Box> */}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-white py-4 px-4 w-64">
                <h4 className="text-black text-base text-center font-bold tracking-wide">
                  BACKEND
                </h4>
              </div>
              <div className="min-w-full flex flex-col gap-1 px-2">
                <Box text="Node JS">
                  <SiNodedotjs />
                </Box>
                <Box text="Express JS">
                  <SiExpress />
                </Box>
                <Box text="Hapi JS" progress={t("skills")}>
                  <SiExpress />
                </Box>
                <Box text="MySql" progress={t("skills")}>
                  <SiMysql />
                </Box>
                <Box text="Prisma ORM" progress={t("skills")}>
                  <SiMysql />
                </Box>
                <Box text="Json Web Token (JWT)">
                  <SiMysql />
                </Box>
                {/* <Box text="PostgreSql">
                <SiPostgresql />
              </Box>
              <Box text="MongoDB">
                <SiMongodb />
              </Box> */}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-white py-4 px-4 w-64">
                <h4 className="text-black text-base text-center font-bold tracking-wide">
                  NETWORK
                </h4>
              </div>
              <div className="min-w-full flex flex-col gap-1 px-2">
                {/* <Box text="Linux">
                <SiLinux />
              </Box> */}
                <Box text="Linux Server (Ubuntu, Debian)">
                  <BsTools />
                </Box>
                <Box text="MikroTik">
                  <BsTools />
                </Box>
                <Box text="OSP FTTx">
                  <LuCable />
                </Box>
                <Box text="Fusion Splicing">
                  <BsTools />
                </Box>
                <Box text="Cyber Security">
                  <BsTools />
                </Box>
              </div>
            </div>

            {/*  */}
          </div>
        </section>
        <ScrollButton
          click="right"
          listRef={listRef}
          className="absolute -right-12 top-16 bottom-36 hover:bg-white/10 ease-in-out duration-500 transform translate-x-0 hover:translate-x-1"
        >
          <RiArrowRightWideFill size={46} />
        </ScrollButton>
      </div>
    </section>
  );
};

export default Skill;

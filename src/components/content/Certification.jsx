import React, { useState } from "react";
import js_dicoding from "../../assets/js-dicoding.jpg";
import fe_dicoding from "../../assets/fe-dicoding.jpg";
import basic_leadership from "../../assets/basic_leadership.jpg";
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
        {t("certification1")}
      </p>
      <div className="flex gap-2 my-4 justify-center">
        <div className="w-1/2 sm:w-1/6 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/4EXG4R931PRL"
            target="_blank"
          >
            <img src={basic_leadership} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              Basic Leadership
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              Disusun oleh: Telkom Indonesia
            </p>
            <p className="text-gray-600 text-xs">
              ID Kredensial <br />
              <span>C.TEL.A-053443/PD620/TCU-1B000000/2020</span>
            </p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              Pembelajaran bertujuan untuk mengembangkan keterampilan
              kepemimpinan. Individu dapat memahami konsep dasar kepemimpinan,
              meningkatkan keterampilan komunikasi, pengambilan keputusan,
              manajemen waktu, dan motivasi tim.
            </p>
          </div>
        </div>
      </div>

      <p className=" text-center font-extralight text-[10px] sm:text-xs tracking-widest mt-10">
        {t("certification2")}
      </p>
      <div className="flex gap-2 my-4 justify-center">
        <div className="w-1/2 sm:w-1/6 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/4EXG4R931PRL"
            target="_blank"
          >
            <img src={js_dicoding} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              Dasar Pemrograman JavaScript
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              Disusun oleh: Dicoding Indonesia
            </p>
            <p className="text-gray-600 text-xs">ID Kredensial 4EXG4R931PRL</p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              Ditujukan untuk individu yang ingin melangkah menjadi seorang Web
              Developer/Back-end developer menggunakan teknologi Node.js
              menggunakan standar kompetensi industri yang divalidasi oleh AWS.
              Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk
              pengembangan aplikasi web menggunakan Node.Js
            </p>
          </div>
        </div>

        <div className="w-1/2 sm:w-1/6 min-w-56 bg-white">
          <a
            href="https://www.dicoding.com/certificates/72ZDVJVJLZYW"
            target="_blank"
          >
            <img src={fe_dicoding} />
          </a>
          <div className="px-4 py-2">
            <div className="font-bold text-gray-800 text-lg tracking-tight">
              Membuat Front-End Web untuk Pemula
            </div>
            <p className="font-semibold text-gray-700 text-sm">
              Disusun oleh: Dicoding Indonesia
            </p>
            <p className="text-gray-600 text-xs">ID Kredensial 72ZDVJVJLZYW</p>
            <hr className="mt-2" />
            <p className="italic text-sm text-gray-700 mt-2">
              Ditujukan untuk seorang Front-End Web Developer yang ingin
              mengembangkan website yang memiliki fungsionalitas lebih daripada
              hanya media informasi saja, sesuai dengan standar industri. Di
              akhir kelas, siswa dapat membuat aplikasi front-end web yang
              interaktif serta memiliki fitur penyimpanan menggunakan web
              storage.
            </p>
          </div>
        </div>
      </div>

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

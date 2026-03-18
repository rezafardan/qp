// src/components/Contents/Experience/ExperienceCard.jsx
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experienceKey, isCurrent = false }) => {
  const { t } = useTranslation();

  const title      = t(`experience.${experienceKey}.title`);
  const position   = t(`experience.${experienceKey}.position`);
  const duration   = t(`experience.${experienceKey}.duration`);
  const years      = t(`experience.${experienceKey}.years`,              { defaultValue: "" });
  const description= t(`experience.${experienceKey}.description`,        { defaultValue: "" });
  const respLabel  = t(`experience.${experienceKey}.keyResponsibilities`,{ defaultValue: "" });

  // ← returnObjects: true → ambil array langsung dari JSON
  const responsibilities = t(`experience.${experienceKey}.responsibilities`, {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <div className="border-b border-white/10 flex flex-col pb-2">

      {/* ── Header Putih ── */}
      <div className="bg-white flex flex-col items-center justify-center gap-1 py-4 px-4">
        <h4 className="text-black text-base text-center font-bold tracking-wide">
          {title}
        </h4>

        {position && (
          <span className="text-violet-600 text-sm font-medium text-center">
            {position}
          </span>
        )}

        <div className="flex items-center gap-2 mt-1 flex-wrap justify-center">
          <span className="text-black text-xs font-light">{duration}</span>
          {years && (
            <>
              <span className="text-gray-400 text-xs">·</span>
              <span className="text-black text-xs font-light">{years}</span>
            </>
          )}
          {isCurrent && (
            <span className="bg-violet-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Current
            </span>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-4 sm:p-6 text-justify">
        {description && (
          <p className="mb-3 text-sm text-gray-300 font-light leading-relaxed">
            {description}
          </p>
        )}

        {respLabel && (
          <span className="block mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
            {respLabel}
          </span>
        )}

        {Array.isArray(responsibilities) && responsibilities.length > 0 && (
          <ul className="text-sm list-disc list-outside flex flex-col pl-4 gap-1">
            {responsibilities.map((item, i) => (
              <li key={i} className="mb-1">
                <span className="text-gray-200 font-medium text-sm">
                  {item.title}
                </span>
                {item.details && (
                  <p className="text-gray-400 text-xs font-light mt-0.5 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;

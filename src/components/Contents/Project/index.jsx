// src/components/Contents/Project/index.jsx
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { PROJECT_ASSETS } from "./projectAssets";

const Project = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          assets={PROJECT_ASSETS[project.id] || {}}
        />
      ))}
    </div>
  );
};

export default Project;

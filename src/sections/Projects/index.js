import React from "react";
import { ProjectCard } from "../../components/Header/ProjectCard";
import { projects } from "../../data/projects";

import s from "./Projects.module.css";

export const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div className={s.container} data-tip data-for="test1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

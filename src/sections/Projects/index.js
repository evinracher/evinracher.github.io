import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

import s from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <p>
        These are some of my projects. You can find more on my{" "}
        <a
          href="https://github.com/evinracher"
          target="_blank"
          rel="noreferrer"
        >
          github profile.
        </a>
      </p>
      <div className={s.container} data-tip data-for="test1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

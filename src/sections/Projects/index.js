import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

import s from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <p>
        These are some of my recent projects. You can explore additional work on
        my{" "}
        <a
          href="https://github.com/evinracher"
          target="_blank"
          rel="noreferrer"
        >
          GitHub profile
        </a>
      </p>
      <div className={s.container} data-tip data-for="test1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p>
        <strong>Note:</strong> My commercial projects remain private, as they
        are owned by the companies I&rsquo;ve worked for. The projects showcased
        in my portfolio are personal or learning-driven initiatives that I built
        to practice, experiment, and continue improving my skills.
      </p>
    </section>
  );
};

import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects, privateProjects } from "../../data/projects";

import s from "./Projects.module.css";

export const Projects = () => {
  const allProjects = [...privateProjects, ...projects];

  return (
    <section id="projects">
      <span className="eyebrow">Selected work</span>
      <div className={s.intro}>
        <h2>Projects</h2>
        <p>
          These are some of my recent projects. You can explore additional work
          on my{" "}
          <a
            href="https://github.com/evinracher"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          . Projects marked <strong>Private</strong> were built for clients I
          worked with, so they may require a subscription or may not be
          accessible to the general public.
        </p>
      </div>
      <div className={s.container}>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className={s.note}>
        <strong>Note:</strong> My commercial projects remain private, as they
        are owned by the companies I&rsquo;ve worked for. Except for work
        explicitly marked as Private, the projects showcased in my portfolio are
        personal or learning-driven initiatives that I built to practice,
        experiment, and continue improving my skills.
      </p>
    </section>
  );
};

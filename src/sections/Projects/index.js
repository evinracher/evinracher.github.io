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
        <h2>Selected projects</h2>
        <p>
          A selection of commercial and personal products where I turn complex
          ideas into clear, reliable web experiences. Explore more experiments
          and open-source work on my{" "}
          <a
            href="https://github.com/evinracher"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          .
        </p>
      </div>
      <div className={s.container}>
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className={s.note}>
        <strong>A note on access:</strong> Projects marked{" "}
        <strong>Private</strong> are commercial products owned by the companies
        I worked with and may require a subscription or may not be publicly
        accessible. All other projects are personal builds created to explore
        ideas, sharpen my craft, and share my work openly.
      </p>
    </section>
  );
};

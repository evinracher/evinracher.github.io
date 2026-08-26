import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { TechsList } from "../TechsList";
import s from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <article className={s.card}>
      <a className={s.link} href={project.url} target="_blank" rel="noreferrer">
        <img
          className={`${s.img} ${project.private ? s.privateImage : ""}`}
          src={project.images[0]}
          alt={`${project.name} preview`}
        />
        <span className={s.viewProject}>
          View project <FiArrowUpRight />
        </span>
      </a>
      <div className={s.content}>
        <div className={s.meta}>
          <span>{project.creationDate}</span>
          <span className={project.private ? s.privateBadge : ""}>
            {project.private ? "Private" : "Selected work"}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p className={s.description}>{project.description}</p>
        <TechsList techs={project.techs} />
      </div>
      {project.repo && (
        <a
          className={s.repoLink}
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="1.2rem" />
          <span>Source</span>
        </a>
      )}
    </article>
  );
};

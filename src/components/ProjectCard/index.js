import React from "react";
import { FaGithub } from "react-icons/fa";
import { TechsList } from "../TechsList";
import s from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={s.card}>
      <a className={s.link} href={project.url} target="_blank" rel="noreferrer">
        <img className={s.img} src={project.images[0]} alt="project" />
      </a>
      <div className={s.content}>
        <b>{project.name}</b>
        <p className={s.description}>{project.description}</p>
        <TechsList techs={project.techs} />
      </div>
      <a
        className={s.repoLink}
        href={project.repo}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size="1.5rem" />
      </a>
    </div>
  );
};

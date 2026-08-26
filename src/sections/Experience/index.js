import React from "react";
import { experience, clients } from "../../data/experience";
import { TechsList } from "../../components/TechsList";
import s from "./Experience.module.css";

export const Experience = () => (
  <section id="experience">
    <span className="eyebrow">Experience</span>
    <div className={s.heading}>
      <h2>Building products for teams at global scale.</h2>
      <p>
        A focused view of the roles, teams, and outcomes that shaped my
        engineering practice.
      </p>
    </div>

    <div className={s.timeline}>
      {experience.map((job, index) => (
        <article className={s.job} key={job.company}>
          <div className={s.number}>{String(index + 1).padStart(2, "0")}</div>
          <div className={s.company}>
            <div className={s.logoFrame}>
              <img src={job.logo} alt={`${job.company} logo`} />
            </div>
            <div>
              <h3>{job.company}</h3>
              <p>{job.role}</p>
            </div>
          </div>
          <div className={s.details}>
            <div className={s.jobMeta}>
              <span>
                <b>Period</b>
                {job.period}
              </span>
              <span>
                <b>Company size</b>
                {job.size}
              </span>
              <span>
                <b>Team size</b>
                {job.team}
              </span>
            </div>
            <p className={s.milestone}>{job.milestone}</p>
            <TechsList techs={job.techs} />
          </div>
        </article>
      ))}
    </div>

    <div className={s.clients}>
      <span className="eyebrow">Selected clients</span>
      <div className={s.clientGrid}>
        {clients.map((client) => (
          <a
            className={`${s.client} ${s[client.className] || ""}`}
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${client.name}`}
          >
            <div className={s.clientLogo}>
              {client.logo ? (
                <img src={client.logo} alt={`${client.name} logo`} />
              ) : (
                <span className={s.wordmark}>all.health</span>
              )}
            </div>
            <span className={s.industryBadge}>{client.industry}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

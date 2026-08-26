import React from "react";
import s from "./About.module.css";

// TODO: remove the necessity of {" "} structure
export const About = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.heroRow}>
        <h2 className={s.title}>Welcome to my portfolio!</h2>
        <p className={s.lead}>
          I&rsquo;m a <strong>Senior Frontend Engineer</strong> with{" "}
          <strong>6 years of experience</strong> in software development,
          specializing in building scalable, user-focused web applications using{" "}
          <strong>React, Next.js, JavaScript, TypeScript, and Python</strong>.
          My expertise lies in writing high-quality, maintainable code and
          ensuring reliable delivery through strong testing practices (
          <em>Jest, React Testing Library</em>) and CI/CD workflows.
        </p>
      </div>
      <div className={s.details}>
        <p>
          I have strong experience with Agile methodologies (
          <strong>SCRUM and Kanban</strong>), actively participating in daily
          stand-ups, sprint planning, and refinement sessions to deliver
          features efficiently while maintaining high code quality. Throughout
          my career at companies like{" "}
          <strong>Globant, Perficient, and Talos</strong>, I&rsquo;ve applied
          clean code principles, mentored interns, and conducted technical
          interviews, helping teams grow while ensuring high coding standards.
          I&rsquo;m passionate about frontend excellence, code quality, and
          taking ownership to meet deadlines and deliver products that make an
          impact.
        </p>

        <p>
          I hold a{" "}
          <strong>
            Bachelor of Engineering in Computer Software Engineering
          </strong>{" "}
          from <strong>EAFIT University</strong>, where I studied on a full
          scholarship granted for my high school academic performance. During my
          time at university, I also competed in{" "}
          <strong>ACM-ICPC programming marathons</strong> at the national and
          regional levels.
        </p>
      </div>
    </section>
  );
};

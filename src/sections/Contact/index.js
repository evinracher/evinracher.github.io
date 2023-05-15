import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import s from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className={s.infoContainer}>
        <h3>Kevin Parra</h3>
        <p>Let&apos;s get in touch</p>
        <ul className={s.links}>
          <li className={s.link}>
            <a href="mailto:evinracher@gmail.com">
              <SiGmail size="2rem" />
            </a>
          </li>
          <li className={s.link}>
            <a
              href="https://www.linkedin.com/in/kevin-parra-60863b15a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="2rem" />
            </a>
          </li>
          <li className={s.link}>
            <a
              href="https://github.com/evinracher"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="2rem" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";
import s from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={s.about}>
      <h1 className={s.title}>Welcome to my portfolio!</h1>
      <p className={s.description}>
        As a Frontend Engineer with over 2 years of experience, I have worked
        with several international companies, including a Silicon Valley-based
        company. My stack mainly consists of React, JavaScript, TypeScript,
        Jest, HTML, and CSS. Currently, I am working at Globant with a Disney
        Media team on a web platform for the company.
      </p>
    </section>
  );
};

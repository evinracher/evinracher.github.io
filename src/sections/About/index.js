import React from "react";
import s from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={s.about}>
      <h1 className={s.title}>Evinracher</h1>
      <p className={s.description}>
        I am a system engineer, passionate about technology and learning.
        Working as React developer and content maintainer at Perficient.
      </p>
    </section>
  );
};

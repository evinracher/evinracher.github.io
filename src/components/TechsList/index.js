import React from "react";
import s from "./TechsList.module.css";

export const TechsList = ({ techs }) => {
  return (
    <div>
      {/* <small>techs:</small> */}
      <div className={s.techsContainer}>
        {techs.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

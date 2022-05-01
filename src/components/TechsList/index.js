import React from "react";
import { IoLogoJavascript, IoLogoAngular } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

import s from "./TechsList.module.css";

const techImages = {
  js: <IoLogoJavascript size="1.5rem" />,
  html: <FaHtml5 size="1.5rem" />,
  css: <FaCss3Alt size="1.5rem" />,
  react: <FaReact size="1.5rem" />,
  angular: <IoLogoAngular size="1.5rem" />,
};

export const TechsList = ({ techs }) => {
  return (
    <div>
      {/* <small>techs:</small> */}
      <div className={s.techsContainer}>
        {techs.map((tech) => techImages[tech])}
      </div>
    </div>
  );
};

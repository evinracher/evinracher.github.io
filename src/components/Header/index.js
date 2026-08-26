import React from "react";
import { Menu } from "../Menu";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <a className={s.logo} href="#about" aria-label="Kevin Parra — home">
        KP<span>.</span>
      </a>
      <Menu />
    </header>
  );
};

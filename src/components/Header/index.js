import React from "react";
import { Menu } from "../Menu";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <a href="/#">Evinracher</a>
      </h1>
      <Menu />
    </header>
  );
};

import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import s from "./Menu.module.css";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={s.container}>
      {toggleMenu ? (
        <CgClose
          className={s.icon}
          size="2rem"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      ) : (
        <CgMenu
          className={s.icon}
          size="2rem"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      )}
      {toggleMenu && (
        <ul className={s.menu}>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import s from "./Menu.module.css";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={s.container}>
      {toggleMenu ? (
        <button
          type="button"
          className={s.menuButton}
          onClick={() => setToggleMenu(false)}
          aria-label="Close navigation"
        >
          <CgClose size="1.6rem" />
        </button>
      ) : (
        <button
          type="button"
          className={s.menuButton}
          onClick={() => setToggleMenu(true)}
          aria-label="Open navigation"
        >
          <CgMenu size="1.6rem" />
        </button>
      )}
      <ul className={`${s.menu} ${toggleMenu ? s.open : ""}`}>
        <li>
          <a href="#about" onClick={() => setToggleMenu(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setToggleMenu(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setToggleMenu(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setToggleMenu(false)}>
            Projects
          </a>
        </li>
        <li>
          <a
            className={s.contactLink}
            href="#contact"
            onClick={() => setToggleMenu(false)}
          >
            Let&rsquo;s talk
          </a>
        </li>
      </ul>
    </div>
  );
};

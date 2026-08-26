import React from "react";
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";

import s from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={s.content}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

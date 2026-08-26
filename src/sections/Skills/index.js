import React from "react";
import s from "./Skills.module.css";

const skillGroups = [
  {
    title: "Product engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "FastAPI",
    ],
  },
  {
    title: "AI engineering",
    skills: [
      "Python",
      "Generative AI",
      "RAG",
      "LangChain",
      "LangGraph",
      "ChromaDB",
    ],
  },
  {
    title: "Data & ML",
    skills: ["PyTorch", "Hugging Face", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Platform & quality",
    skills: [
      "REST",
      "GraphQL",
      "AWS",
      "Jest",
      "MSW",
      "CI/CD",
      "Design Systems",
    ],
  },
  {
    title: "AI-assisted development",
    skills: [
      "OpenAI Codex",
      "GitHub Copilot",
      "Claude Code",
      "Prompt Engineering",
    ],
  },
];

export const Skills = () => (
  <section id="skills" className={s.skills}>
    <div>
      <span className="eyebrow">Expertise</span>
      <h2>Tools I use to turn complex problems into reliable products.</h2>
    </div>
    <div className={s.groups}>
      {skillGroups.map((group, index) => (
        <div className={s.group} key={group.title}>
          <div className={s.groupTitle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.title}</h3>
          </div>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

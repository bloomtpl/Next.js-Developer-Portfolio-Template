"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL", level: 70 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="space-y-8" ref={ref}>
      <div className="space-y-6">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded">
              <div
                className="bg-black dark:bg-white h-2 rounded transition-all duration-1000"
                style={{ width: isInView ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

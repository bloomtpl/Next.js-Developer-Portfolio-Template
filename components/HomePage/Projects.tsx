import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard Template",
    description:
      "Modern admin panel built with Next.js and Tailwind CSS. Fully responsive, animated, and production-ready.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Starter",
    description:
      "Clean and minimal e-commerce frontend with shopping cart, filters, and product pages.",
    tech: ["React", "Tailwind", "Zustand"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "Developer portfolio template with dark/light mode, animations, and responsive layout.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Job Tracker App",
    description:
      "A simple app to track job applications with tags, notes, and filtering. Built for freelancers and job seekers.",
    tech: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm bg-white dark:bg-[#111]"
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:underline"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Live demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

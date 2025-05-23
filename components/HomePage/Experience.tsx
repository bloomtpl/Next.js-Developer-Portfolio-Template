export default function Experience() {
  const experiences = [
    {
      years: "2023 → 2025",
      title: "Lead Developer · Flowspace",
      description:
        "Led the architecture and development of a scalable logistics dashboard used by 50+ enterprise clients. Introduced TypeScript across the codebase and mentored 4 junior devs. Improved API response times by 40% and led migration to a microservices setup.",
    },
    {
      years: "2020 → 2023",
      title: "Senior Software Engineer · NovaTech",
      description:
        "Worked on core features of NovaTech's B2B SaaS platform, including billing automation and user role management. Contributed to internal tools, improved CI/CD pipelines, and helped reduce bug rates in production by 60%.",
    },
    {
      years: "2018 → 2020",
      title: "Fullstack Developer · Freelance",
      description:
        "Designed and built custom web applications for startups in healthcare and e-commerce. Specialized in React, Node.js, and PostgreSQL. Delivered over 15 projects, including 3 MVPs that led to seed funding for clients.",
    },
    {
      years: "2016 → 2018",
      title: "Web Developer · PixelForge Studio",
      description:
        "Built and maintained marketing websites and landing pages for clients across Europe. Optimized performance and SEO, and contributed to the studio's internal UI component library using vanilla JS and SCSS.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-start md:gap-8"
          >
            <div className="w-32 shrink-0 text-sm text-gray-500 dark:text-gray-400 font-mono">
              {exp.years}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm underline text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          Full CV on LinkedIn →
        </a>
      </div>
    </section>
  );
}

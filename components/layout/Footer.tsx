import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-2 text-gray-600 dark:text-gray-400">
        <p>John Smith</p>
        <span className="hidden md:inline">·</span>
        <p>© 2025</p>
        <span className="hidden md:inline">·</span>
        <p>All rights reserved</p>
      </div>

      <div className="flex gap-4">
        <a href="#" aria-label="GitHub">
          <Github className="h-[1.2rem] w-[1.2rem]" />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram className="h-[1.2rem] w-[1.2rem]" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin className="h-[1.2rem] w-[1.2rem]" />
        </a>
      </div>
    </footer>
  );
}

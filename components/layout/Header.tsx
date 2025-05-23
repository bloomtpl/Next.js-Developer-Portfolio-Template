import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 mt-4">
      <h1 className="text-2xl font-bold tracking-tight">John Smith</h1>

      <div className="flex items-center gap-6">
        <nav className="hidden sm:flex gap-4 text-sm text-gray-600 dark:text-gray-400">
          <a
            href="#experience"
            className="hover:text-black dark:hover:text-white transition"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-black dark:hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-black dark:hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white transition"
          >
            Contact
          </a>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}

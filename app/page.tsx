import Bio from "@/components/HomePage/Bio";
import Contact from "@/components/HomePage/Contact";
import Experience from "@/components/HomePage/Experience";
import Projects from "@/components/HomePage/Projects";
import Skills from "@/components/HomePage/Skills";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <div className="">
      <Bio />
      <Separator id="experience" text="Experience" />
      <Experience />
      <Separator id="skills" text="Skills" />
      <Skills />
      <Separator id="projects" text="Projects" />
      <Projects />
      <Separator id="contact" text="Contact" />
      <Contact />
    </div>
  );
}

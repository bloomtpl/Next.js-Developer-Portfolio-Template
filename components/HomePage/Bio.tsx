import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Bio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-8 mt-16">
      <div className="space-y-4 text-center md:text-left">
        <p className="text-lg font-semibold">Hi, I&apos;m John.</p>
        <p>
          I&apos;m a developer, tech lead, indie hacker, and open-source
          contributor.
        </p>
        <p>
          Over the past 8 years, I&apos;ve built and shipped products at
          startups, scale-ups, and tech giants like Vercel, Notion, and Shopify.
        </p>
        <p>
          Before that, I co-founded a SaaS platform for freelancers, ran a web
          dev studio, and launched several side projects featured on Product
          Hunt and Hacker News.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
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
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/john-smith.jpg"
          width={180}
          height={180}
          alt="Picture of the author"
          className="rounded-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

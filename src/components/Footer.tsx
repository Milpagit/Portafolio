"use client";

import { portfolioData } from "@/data/portfolio";
import { useT } from "@/context/LangContext";

export default function Footer() {
  const t = useT();
  const { brand, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f3f0] w-full py-12 px-8 border-t border-[#1c1b1a]/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-headline font-bold text-lg text-[#560004]">
            {brand}
          </div>
          <div className="font-body text-sm tracking-wide text-[#1c1b1a]/70">
            © {year} Jesus Milpa Lino. {t.footer.tagline}
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wide text-[#1c1b1a]/70 hover:text-[#560004] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wide text-[#1c1b1a]/70 hover:text-[#560004] transition-colors"
          >
            GitHub
          </a>
          <a
            href={social.dribbble}
            className="font-body text-sm tracking-wide text-[#1c1b1a]/70 hover:text-[#560004] transition-colors"
          >
            Dribbble
          </a>
          <a
            href={social.newsletter}
            className="font-body text-sm tracking-wide text-[#1c1b1a]/70 hover:text-[#560004] transition-colors"
          >
            Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}

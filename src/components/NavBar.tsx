"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionMap: Record<string, string> = {
    hero: "hero",
    about: "about",
    projects: "projects",
    contact: "contact",
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdf9f6]/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold font-headline text-[#560004] tracking-tighter"
        >
          {portfolioData.brand}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionMap[sectionId];
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-headline tracking-tight leading-tight transition-colors ${
                  isActive
                    ? "text-[#560004] font-bold border-b-2 border-[#560004] pb-1"
                    : "text-[#1c1b1a]/60 hover:text-[#560004]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-bold font-headline text-[#560004] hover:bg-[#f7f3f0] rounded-xl transition-all duration-300">
            Download CV
          </button>
          <a
            href="#contact"
            className="bg-[#560004] text-white px-6 py-2 rounded-xl font-bold font-headline hover:bg-[#7a0006] transition-all duration-300 active:scale-95"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#560004] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#560004] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#560004] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf9f6] border-t border-[#e5e2df] px-8 py-6 flex flex-col gap-5">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline text-lg text-[#1c1b1a]/70 hover:text-[#560004] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#560004] text-white px-6 py-3 rounded-xl font-bold font-headline text-center hover:bg-[#7a0006] transition-all"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

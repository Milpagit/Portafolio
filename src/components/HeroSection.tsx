"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { useT } from "@/context/LangContext";

export default function HeroSection() {
  const t = useT();
  const { profileImageUrl, brand } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 px-8 overflow-hidden bg-soft-texture"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-primary text-sm font-semibold tracking-wide mb-8">
            {t.hero.role}
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-background mb-8">
            {t.hero.heading.part1}{" "}
            <span className="text-primary">{t.hero.heading.highlight}</span>{" "}
            {t.hero.heading.part2}
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-normal mb-10">
            {t.hero.bio}
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold font-headline flex items-center gap-3 soft-glow transition-all hover:bg-[#7a0006]"
            >
              {t.hero.cta}
              <span className="material-symbols-outlined text-xl">east</span>
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-xl font-bold font-headline text-on-surface border border-outline-variant hover:bg-surface-container-high transition-all"
            >
              {t.hero.stack}
            </a>
          </div>
        </div>

        {/* Right column — profile image */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={profileImageUrl}
              alt={`${brand} — Professional profile`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-headline font-bold text-xl">
                {t.hero.imageCaption}
              </p>
              <p className="text-sm opacity-90">{t.hero.imageSubCaption}</p>
            </div>
          </div>
          {/* Decorative blobs */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container rounded-full -z-10 blur-2xl opacity-60" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-tertiary-container rounded-full -z-10 blur-3xl opacity-40" />
        </div>
      </div>
    </section>
  );
}

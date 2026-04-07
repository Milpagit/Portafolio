import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Selected <span className="text-primary">Experience</span>
            </h2>
            <p className="text-on-surface-variant text-lg">
              Una muestra de productos digitales donde la excelencia técnica se
              une con el diseño propositivo.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-secondary font-semibold text-sm tracking-widest uppercase">
            <span className="w-12 h-0.5 bg-secondary/30" /> Portfolio [2026]
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="warm-card rounded-2xl overflow-hidden flex flex-col shadow-sm"
            >
              {/* Thumbnail */}
              <div className="h-60 bg-surface-container-highest relative group overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 backdrop-blur-md text-primary text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center pt-6 border-t border-outline-variant">
                  <a
                    href={project.caseStudyUrl}
                    className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    Case Study
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        code
                      </span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

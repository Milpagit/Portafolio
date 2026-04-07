import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  const { aboutPhilosophy, stats, skills } = portfolioData;

  return (
    <section id="about" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — philosophy text */}
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {aboutPhilosophy.heading.part1}{" "}
              <span className="text-primary">
                {aboutPhilosophy.heading.highlight}
              </span>{" "}
              {aboutPhilosophy.heading.part2}
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              {aboutPhilosophy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 flex gap-10">
              <div>
                <div className="text-4xl font-extrabold text-primary mb-1">
                  {stats.years}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-primary mb-1">
                  {stats.projects}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right — skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 ${skill.iconBg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <span
                    className={`material-symbols-outlined ${skill.iconColor} text-2xl`}
                  >
                    {skill.icon}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-lg mb-4">
                  {skill.name}
                </h4>
                <div className="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${skill.barColor} h-full ${skill.barWidth}`}
                  />
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

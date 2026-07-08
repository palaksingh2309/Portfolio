import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { aboutParagraphs, highlights, stats } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-light via-white to-light px-6 py-28 lg:px-8"
    >
      {/* Decorative gradient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-rose/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-blush/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="Who I Am" title="About" accent="Me" />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text and stats */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5">
                {aboutParagraphs.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className={`text-[1.05rem] leading-8 text-muted ${
                      index === 0 ? "font-medium text-charcoal/90" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card glow-hover border border-white/80 p-5 text-center transition-all duration-300 hover:scale-[1.03] hover:border-pink/30 hover:bg-white/95"
                  >
                    <div className="font-serif text-3xl font-bold bg-gradient-to-r from-pink to-deep bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Highlights side list */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {highlights.map((highlight, index) => {
              const isEducation = highlight.title.toLowerCase().includes("vit");
              return (
                <Reveal key={highlight.title} delay={index * 0.08}>
                  <div
                    className={`glass-card glow-hover flex items-start gap-4 p-5 border transition-all duration-300 hover:scale-[1.02] ${
                      isEducation
                        ? "border-pink/30 bg-blush/30 shadow-[0_10px_30px_rgba(232,103,154,0.1)]"
                        : "border-white/80 hover:border-pink/20 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-deep ${
                        isEducation ? "bg-pink text-white shadow-glow" : "bg-blush"
                      }`}
                    >
                      <Icon name={highlight.icon} className={isEducation ? "text-white" : "text-deep"} />
                    </div>
                    <div>
                      <h4 className="text-[0.98rem] font-bold text-charcoal">
                        {highlight.title}
                        {isEducation && (
                          <span className="ml-2 inline-block rounded-full bg-pink/10 px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-pink">
                            Education
                          </span>
                        )}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

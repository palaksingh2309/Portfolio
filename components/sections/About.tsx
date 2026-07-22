import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Counter from "@/components/ui/Counter";
import { aboutParagraphs, highlights, stats } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
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
                    className={`text-[1.05rem] leading-8 text-ink ${
                      index === 0 ? "font-bold text-charcoal" : "font-medium"
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
                    className="glass-card p-5 text-center transition-all duration-300 hover:scale-[1.03] border border-charcoal/15 bg-white"
                  >
                    <div className="font-serif text-3xl font-extrabold text-crimson">
                      <Counter value={stat.value} />
                    </div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-wider text-ink">
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
                    className={`glass-card flex items-start gap-4 p-5 border transition-all duration-300 hover:scale-[1.02] ${
                      isEducation
                        ? "border-crimson/30 bg-crimson/5 shadow-sm"
                        : "border-charcoal/10 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isEducation ? "bg-crimson text-white shadow-sm" : "bg-charcoal/5 text-crimson"
                      }`}
                    >
                      <Icon name={highlight.icon} className={isEducation ? "text-white" : "text-crimson"} />
                    </div>
                    <div>
                      <h4 className="text-[0.98rem] font-bold text-charcoal">
                        {highlight.title}
                        {isEducation && (
                          <span className="ml-2 inline-block rounded-full bg-crimson/10 px-2 py-0.5 font-mono text-[0.65rem] font-bold text-crimson">
                            Education
                          </span>
                        )}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink font-medium">
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

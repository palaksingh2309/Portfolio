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
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-rose/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="Who I Am" title="About" accent="Me" />

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-4">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[1.05rem] leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card glass-card-hover p-4 text-center"
                >
                  <div className="font-serif text-3xl font-bold text-pink">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 0.08}>
                <div className="glass-card glass-card-hover flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-deep">
                    <Icon name={highlight.icon} />
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold text-charcoal">
                      {highlight.title}
                    </h4>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

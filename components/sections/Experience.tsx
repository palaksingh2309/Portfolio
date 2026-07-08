import { MapPin, Briefcase, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-b from-white via-light to-white px-6 py-28 lg:px-8"
    >
      {/* Background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-rose/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-blush/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Where I've Worked"
          title="Work"
          accent="Experience"
        />

        <div className="mt-14 relative border-l-2 border-pink/20 pl-8 ml-4 sm:ml-6 md:pl-10 space-y-12">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.1}>
              <div className="relative">
                {/* Timeline node icon */}
                <span className="absolute -left-[45px] sm:-left-[53px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white shadow-glow">
                  <Briefcase size={14} />
                </span>

                <article className="glass-card glow-hover border border-white/80 p-8 sm:p-10 transition-all duration-300 hover:border-pink/25 hover:bg-white/80">
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-[1.05rem] font-bold text-pink">
                        {experience.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-xs md:text-sm font-semibold">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3.5 py-1.5 text-deep">
                        <Calendar size={13} />
                        {experience.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-white/60 px-3.5 py-1.5 text-muted">
                        <MapPin size={13} className="text-pink" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {experience.bullets.map((bullet, bIndex) => (
                      <li
                        key={bullet.slice(0, 32)}
                        className="relative pl-6 text-[0.96rem] leading-relaxed text-muted"
                      >
                        {/* Custom bullet point */}
                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-pink" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

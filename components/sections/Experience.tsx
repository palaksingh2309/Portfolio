import { MapPin, MoveRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-light px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Where I've Worked"
          title="Work"
          accent="Experience"
        />

        <div className="mt-12 flex flex-col gap-6">
          {experiences.map((experience) => (
            <Reveal key={experience.company}>
              <article className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 sm:p-10">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink to-rose"
                />
                <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      {experience.role}
                    </h3>
                    <p className="mt-0.5 font-semibold text-pink">
                      {experience.company}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="inline-block rounded-full bg-blush px-4 py-1.5 text-[0.82rem] font-semibold text-deep">
                      {experience.period}
                    </span>
                    <p className="mt-1.5 flex items-center gap-1 text-sm text-muted sm:justify-end">
                      <MapPin size={13} /> {experience.location}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 32)}
                      className="flex gap-3 text-[0.96rem] leading-relaxed text-muted"
                    >
                      <MoveRight
                        size={15}
                        className="mt-1.5 shrink-0 text-pink"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

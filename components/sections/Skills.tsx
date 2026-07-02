import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blush blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="What I Know" title="Technical" accent="Skills" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="glass-card glass-card-hover h-full p-7">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-pink">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/70 bg-white/70 px-3 py-1 font-mono text-[0.8rem] text-charcoal transition-all duration-300 hover:scale-105 hover:border-rose hover:bg-blush hover:text-deep"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

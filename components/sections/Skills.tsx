import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-light px-6 py-28 lg:px-8"
    >
      {/* Soft background decor blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blush/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-rose/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="What I Know" title="Technical" accent="Skills" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="glass-card glow-hover h-full p-7 transition-all duration-300 hover:border-pink/20">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-pink">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 font-mono text-[0.8rem] text-white transition-all duration-300 hover:scale-105 hover:border-pink/40 hover:bg-blush hover:text-white hover:shadow-sm"
                    >
                      <TechIcon name={skill} size={14} />
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

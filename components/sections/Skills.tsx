import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="What I Know" title="Technical" accent="Skills" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="glass-card h-full p-7 border border-charcoal/15 bg-white">
                <h3 className="mb-5 text-xs font-extrabold uppercase tracking-[0.12em] text-crimson">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-lg border border-charcoal/10 bg-white px-3.5 py-2.5 font-mono text-[0.8rem] font-bold text-charcoal shadow-sm transition-all duration-300 hover:scale-105 border-b-2 border-b-crimson hover:bg-crimson/5"
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

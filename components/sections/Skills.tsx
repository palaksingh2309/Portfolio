import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="What I Know" title="Technical" accent="Skills" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-light p-7 transition-all hover:-translate-y-1 hover:shadow-pink-md">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-pink">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-white px-3 py-1 font-mono text-[0.8rem] text-charcoal transition-colors hover:border-rose hover:bg-blush hover:text-deep"
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

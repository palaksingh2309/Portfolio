import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What I've Built"
          title="Featured"
          accent="Projects"
        />

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-light p-8 transition-all hover:-translate-y-1.5 hover:shadow-pink-lg">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink to-deep text-white">
                    <Icon name={project.icon} size={22} />
                  </div>
                  <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-deep">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mb-2 font-serif text-xl font-bold text-charcoal">
                  {project.name}
                </h3>
                <p className="mb-6 flex-1 text-[0.92rem] leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-sm">
                      <span className="font-bold text-deep">{stat.value}</span>{" "}
                      <span className="text-muted">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-white px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

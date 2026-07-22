import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="What I've Built"
          title="Featured"
          accent="Projects"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="group glass-card overflow-hidden flex h-full flex-col border border-charcoal/15 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-crimson/30 shadow-sm">
                
                {/* Thumbnail image with hover zoom */}
                <div className="relative h-56 w-full overflow-hidden border-b border-charcoal/10 bg-stone-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute right-4 top-4 z-10 rounded-md bg-crimson px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {project.badge}
                  </span>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="mb-3 font-serif text-2xl font-bold text-charcoal">
                      {project.name}
                    </h3>
                    
                    <p className="mb-6 text-[0.92rem] leading-7 text-ink font-medium">
                      {project.description}
                    </p>

                    {/* Stats details */}
                    <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-charcoal/10 pt-5">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-[0.82rem] font-bold text-charcoal">
                          <span className="text-crimson font-extrabold">{stat.value}</span>{" "}
                          <span className="text-ink font-semibold">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech badges */}
                    <div className="mb-7 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-charcoal/10 bg-charcoal/5 px-2.5 py-1 font-mono text-[0.72rem] text-ink font-bold shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-charcoal bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-charcoal shadow-[2px_2px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(36,33,32,1)] active:translate-y-0 active:shadow-[1px_1px_0px_rgba(36,33,32,1)]"
                        >
                          <Github size={14} className="text-crimson" />
                          GitHub
                        </a>
                      )}
                      
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-charcoal bg-crimson px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(36,33,32,1)] active:translate-y-0 active:shadow-[1px_1px_0px_rgba(36,33,32,1)]"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

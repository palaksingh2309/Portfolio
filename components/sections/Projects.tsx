import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#090605] px-6 py-28 lg:px-8"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-rose/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-blush/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="What I've Built"
          title="Featured"
          accent="Projects"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="group glass-card overflow-hidden flex h-full flex-col border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:border-pink/20 hover:shadow-pink-md">
                
                {/* Thumbnail image with hover zoom */}
                <div className="relative h-56 w-full overflow-hidden border-b border-white/[0.06] bg-[#130E0B]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-[#130E0B]/85 px-3.5 py-1.5 text-xs font-bold text-rose border border-white/[0.08] shadow-sm backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="mb-3 font-serif text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    
                    <p className="mb-6 text-[0.92rem] leading-7 text-muted">
                      {project.description}
                    </p>

                    {/* Stats details */}
                    <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.06] pt-5">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-[0.82rem] font-semibold text-white">
                          <span className="text-pink font-bold">{stat.value}</span>{" "}
                          <span className="text-muted font-normal">{stat.label}</span>
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
                          className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-mono text-[0.72rem] text-muted shadow-sm"
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
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-[18px] py-[10px] text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-white/[0.08] hover:text-pink hover:border-pink/40"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-pink px-[18px] py-[10px] text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-all duration-300 hover:bg-deep hover:shadow-[0_8px_24px_rgba(99,102,241,0.3)]"
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

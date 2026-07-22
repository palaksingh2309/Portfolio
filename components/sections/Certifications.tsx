import { Award, ExternalLink, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-light px-6 py-28 lg:px-8"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blush/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Credentials"
          title="Licenses &"
          accent="Certifications"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <div className="glass-card glow-hover flex flex-col justify-between h-full p-7 transition-all duration-300 hover:scale-[1.03] hover:border-pink/20">
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-pink/10 text-pink shadow-sm">
                    <Icon name={cert.icon} className="text-pink" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted">
                    <span className="text-pink">{cert.issuer}</span>
                    <span className="h-1 w-1 rounded-full bg-muted/40" />
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.year}
                    </span>
                  </div>
                </div>

                {cert.credentialUrl && (
                  <div className="mt-8">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink hover:text-deep transition-colors"
                    >
                      View Credential
                      <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

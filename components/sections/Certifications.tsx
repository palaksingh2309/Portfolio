import { Award, ExternalLink, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Credentials"
          title="Licenses &"
          accent="Certifications"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <div className="glass-card flex flex-col justify-between h-full p-7 border border-charcoal/15 bg-white transition-all duration-300 hover:scale-[1.03]">
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson shadow-sm">
                    <Icon name={cert.icon} className="text-crimson" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-charcoal leading-snug">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-ink">
                    <span className="text-crimson">{cert.issuer}</span>
                    <span className="h-1 w-1 rounded-full bg-charcoal/30" />
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
                      className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson hover:text-crimson/80 transition-colors"
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

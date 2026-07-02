import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Phone,
  Download,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

const contactLinks = [
  {
    label: "Send Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    primary: true,
  },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.socials.github, icon: Github },
  { label: "LeetCode", href: siteConfig.socials.leetcode, icon: Code2 },
  { label: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-charcoal to-[#2d1a26] px-6 py-24 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-pink/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="Let's Connect" title="Get In" accent="Touch" dark />

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/60">
            Open to internships, full-time roles, collaborations, and
            interesting problems. Let&apos;s build something great.
          </p>

          <div className="mt-10 flex flex-wrap gap-3.5">
            {contactLinks.map((link) => {
              const LinkIcon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.92rem] transition-all hover:-translate-y-0.5 ${
                    link.primary
                      ? "bg-pink font-bold text-white hover:bg-deep"
                      : "border border-white/20 bg-white/[0.08] font-medium text-white hover:border-pink hover:bg-pink"
                  }`}
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              );
            })}
            <a
              href={siteConfig.resume}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-[0.92rem] font-medium text-white transition-all hover:-translate-y-0.5 hover:border-pink hover:bg-pink"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

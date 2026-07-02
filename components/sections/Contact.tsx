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
      className="relative overflow-hidden bg-gradient-to-br from-charcoal to-[#2d1a26] px-6 py-28 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-pink/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-deep/25 blur-3xl"
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
                  className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.92rem] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] ${
                    link.primary
                      ? "bg-gradient-to-r from-pink to-deep font-bold text-white shadow-glow hover:shadow-[0_12px_36px_rgba(232,103,154,0.4)]"
                      : "border border-white/15 bg-white/[0.07] font-medium text-white backdrop-blur-xl hover:border-pink/60 hover:bg-pink/90"
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
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-[0.92rem] font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-pink/60 hover:bg-pink/90 active:scale-[0.97]"
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

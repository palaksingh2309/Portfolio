"use client";

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
import ContactForm from "@/components/ui/ContactForm";
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
      {/* Decorative blurs */}
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

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Info and Links */}
          <Reveal className="space-y-6">
            <p className="max-w-lg text-[1.1rem] leading-relaxed text-white/70">
              Open to internships, full-time roles, collaborations, and
              interesting problems. Let&apos;s build something great.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => {
                const LinkIcon = link.icon;
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-3.5 rounded-2xl px-6 py-4 text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
                      link.primary
                        ? "bg-gradient-to-r from-pink to-deep font-bold text-white shadow-glow hover:shadow-[0_12px_36px_rgba(232,103,154,0.4)]"
                        : "border border-white/10 bg-white/[0.05] font-medium text-white/90 backdrop-blur-xl hover:border-pink/50 hover:bg-white/[0.1] hover:text-white"
                    }`}
                  >
                    <LinkIcon size={18} className={link.primary ? "text-white" : "text-pink"} />
                    {link.label}
                  </a>
                );
              })}
              
              <a
                href={siteConfig.resume}
                download
                className="inline-flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-[0.95rem] font-medium text-white/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-pink/50 hover:bg-white/[0.1] hover:text-white active:scale-[0.98]"
              >
                <Download size={18} className="text-pink" />
                Download Resume
              </a>
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>

        </div>
      </div>
    </section>
  );
}

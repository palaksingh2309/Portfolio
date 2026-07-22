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
      className="ruled-bg relative overflow-hidden px-6 py-28 lg:px-8 border-t border-charcoal/10"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading label="Let's Connect" title="Get In" accent="Touch" />

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Info and Links */}
          <Reveal className="space-y-6">
            <p className="max-w-lg text-[1.1rem] leading-relaxed text-ink font-medium">
              Open to internships, full-time roles, collaborations, and
              interesting problems. Let&apos;s build something great.
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                const LinkIcon = link.icon;
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-3.5 border-2 border-charcoal px-6 py-4 text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                      link.primary
                        ? "bg-crimson font-bold text-white shadow-[3px_3px_0px_rgba(36,33,32,1)] hover:shadow-[5px_5px_0px_rgba(36,33,32,1)]"
                        : "bg-white font-bold text-charcoal shadow-[3px_3px_0px_rgba(36,33,32,1)] hover:shadow-[5px_5px_0px_rgba(36,33,32,1)]"
                    }`}
                  >
                    <LinkIcon size={18} className={link.primary ? "text-white" : "text-crimson"} />
                    {link.label}
                  </a>
                );
              })}
              
              <a
                href={siteConfig.resume}
                download
                className="inline-flex items-center gap-3.5 border-2 border-charcoal bg-white px-6 py-4 text-[0.95rem] font-bold text-charcoal shadow-[3px_3px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(36,33,32,1)] active:scale-[0.98]"
              >
                <Download size={18} className="text-crimson" />
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

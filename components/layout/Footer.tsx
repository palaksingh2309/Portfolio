"use client";

import { Heart, Github, Linkedin, Code2 } from "lucide-react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="ruled-bg px-6 py-12 text-center text-ink border-t border-charcoal/10">
      <div className="mx-auto max-w-4xl space-y-6">
        
        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink hover:text-crimson transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-ink">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-crimson hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-crimson hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={siteConfig.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-crimson hover:scale-110 transition-all duration-200"
            aria-label="LeetCode"
          >
            <Code2 size={20} />
          </a>
        </div>

        {/* Copyright & love statement */}
        <div className="text-xs space-y-2 border-t border-charcoal/10 pt-6 text-ink/60">
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5 font-bold">
            Designed &amp; crafted with
            <Heart size={12} className="fill-crimson text-crimson" aria-label="love" />
            by <span className="font-bold text-charcoal">{siteConfig.name}</span>
          </p>
          <p>© {new Date().getFullYear()} Palak Singh. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href.replace("#", "#")))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-[0_4px_24px_rgba(232,103,154,0.06)]"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#hero" className="font-serif text-xl font-bold text-deep">
          Palak Singh<span className="text-pink">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors hover:text-pink ${
                  activeSection === link.href ? "text-pink" : "text-charcoal"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-pink" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-pink px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-deep hover:shadow-glow sm:inline-flex"
          >
            Hire Me <Sparkles size={14} />
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="text-charcoal md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-white/95 px-6 pb-6 pt-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "bg-blush text-deep"
                      : "text-charcoal hover:bg-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={siteConfig.resume}
                download
                className="block rounded-xl bg-pink px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

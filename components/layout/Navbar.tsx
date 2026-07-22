"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // Adjusted rootMargin for more accurate scroll snapping
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-crimson"
        style={{ scaleX: progress }}
      />

      {/* Floating island nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-charcoal/10 bg-white/90 py-2.5 pl-6 pr-2.5 shadow-sm backdrop-blur-md">
          <Link
            href="#hero"
            className="font-serif text-lg font-bold text-charcoal transition-transform duration-300 hover:scale-[1.02]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Palak Singh<span className="text-crimson">.</span>
          </Link>
 
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.84rem] font-semibold transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-crimson"
                      : "text-ink hover:text-crimson"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-crimson/5 border border-crimson/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
 
          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-crimson px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-crimson/90 sm:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me <Sparkles size={14} />
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition-all duration-300 hover:bg-charcoal/10 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>
 
      {/* Mobile sheet with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-charcoal/10 bg-white p-3 shadow-lg backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`block rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      activeSection === link.href
                        ? "bg-crimson/10 text-crimson"
                        : "text-ink hover:bg-charcoal/5 hover:text-crimson"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={siteConfig.resume}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl bg-crimson px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-crimson/90 transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

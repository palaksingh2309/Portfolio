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
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-rose via-pink to-deep"
        style={{ scaleX: progress }}
      />

      {/* Floating island nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[#120E0C]/70 py-2 pl-6 pr-2 shadow-island backdrop-blur-2xl backdrop-saturate-150">
          <Link
            href="#hero"
            className="font-serif text-lg font-bold text-white transition-transform duration-300 hover:scale-[1.02]"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Palak Singh<span className="text-pink">.</span>
          </Link>
 
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.84rem] font-medium transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.04]"
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
              className="hidden items-center gap-1.5 rounded-full bg-pink px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-deep hover:shadow-glow sm:inline-flex"
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-white transition-all duration-300 hover:bg-white/[0.1] md:hidden"
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
            className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/[0.08] bg-[#120E0C]/90 p-3 shadow-island backdrop-blur-2xl md:hidden"
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
                    className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? "bg-white/[0.06] text-white"
                        : "text-muted hover:bg-white/[0.04] hover:text-white"
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
                  className="block rounded-2xl bg-gradient-to-r from-pink to-deep px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
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

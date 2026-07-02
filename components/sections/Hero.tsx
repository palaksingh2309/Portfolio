"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Download, BadgeCheck, ChevronDown } from "lucide-react";
import { heroBadges, siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 90, damping: 18 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="ambient-bg relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-8"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 lg:flex-row lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="show"
          style={prefersReducedMotion ? undefined : { y: textY, opacity: fade }}
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-pink shadow-glass backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
            </span>
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-6 font-serif text-5xl font-bold leading-[1.06] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m
            <br />
            <span className="bg-gradient-to-r from-pink via-deep to-pink bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-9 max-w-lg text-lg leading-relaxed text-muted lg:mx-0"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mb-10 flex flex-wrap justify-center gap-2.5 lg:justify-start"
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/55 px-4 py-1.5 text-[0.82rem] font-semibold text-deep shadow-glass backdrop-blur-xl"
              >
                <BadgeCheck size={14} className="text-pink" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-deep px-8 py-3.5 text-[0.95rem] font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(194,63,116,0.4)] active:scale-[0.97]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <a
              href={siteConfig.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-8 py-3.5 text-[0.95rem] font-semibold text-deep shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 active:scale-[0.97]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[340px] w-[300px] shrink-0 sm:h-[400px] sm:w-[340px]"
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.9, y: 20 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
          style={prefersReducedMotion ? undefined : { y: photoY }}
        >
          <div className="absolute inset-0 animate-blob bg-gradient-to-br from-rose to-blush opacity-90" />
          <div
            aria-hidden
            className="absolute inset-6 animate-blob rounded-full bg-white/30 backdrop-blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-float">
              <Image
                src={siteConfig.photo}
                alt={siteConfig.name}
                width={280}
                height={280}
                priority
                className="h-56 w-56 rounded-full border-[5px] border-white/90 object-cover shadow-[0_25px_60px_rgba(194,63,116,0.28)] sm:h-[280px] sm:w-[280px]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={prefersReducedMotion ? undefined : { opacity: fade }}
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/55 text-pink shadow-glass backdrop-blur-xl"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

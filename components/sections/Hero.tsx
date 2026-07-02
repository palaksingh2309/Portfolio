"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, BadgeCheck } from "lucide-react";
import { heroBadges, siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.45, 0.27, 0.9] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-white to-blush px-6 pb-16 pt-28 lg:px-8"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-blush blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 lg:flex-row lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-pink"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
            </span>
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-5 font-serif text-5xl font-bold leading-[1.08] text-charcoal sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m
            <br />
            <span className="bg-gradient-to-r from-pink to-deep bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted lg:mx-0"
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
                className="inline-flex items-center gap-1.5 rounded-full bg-blush px-4 py-1.5 text-[0.82rem] font-semibold text-deep"
              >
                <BadgeCheck size={14} />
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
              className="group inline-flex items-center gap-2 rounded-full bg-pink px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-deep hover:shadow-glow"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={siteConfig.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-rose px-8 py-3.5 text-[0.95rem] font-semibold text-pink transition-all hover:border-pink hover:bg-blush"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[340px] w-[300px] shrink-0 sm:h-[400px] sm:w-[340px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <div className="absolute inset-0 animate-blob bg-gradient-to-br from-rose to-blush" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-float">
              <Image
                src={siteConfig.photo}
                alt={siteConfig.name}
                width={280}
                height={280}
                priority
                className="h-56 w-56 rounded-full border-[5px] border-white object-cover shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:h-[280px] sm:w-[280px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

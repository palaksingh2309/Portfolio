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

  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="ruled-bg relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-36 lg:px-8"
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
            className="mb-5 inline-flex items-center gap-2 rounded-lg border border-crimson/20 bg-crimson/5 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-crimson"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
            </span>
            {siteConfig.role}
          </motion.p>
 
          <motion.h1
            variants={item}
            className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m
            <br />
            <span className="text-crimson font-serif italic relative">
              {siteConfig.name}
            </span>
          </motion.h1>
 
          <motion.p
            variants={item}
            className="mx-auto mb-9 max-w-lg text-lg leading-relaxed text-ink lg:mx-0 font-medium"
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
                className="inline-flex items-center gap-1.5 rounded-md border border-charcoal/10 bg-white px-3.5 py-1.5 text-[0.82rem] font-bold text-ink shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-crimson/5 hover:border-crimson/20"
              >
                <BadgeCheck size={14} className="text-crimson" />
                {badge}
              </span>
            ))}
          </motion.div>
 
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-5 lg:justify-start"
          >
            <a
              href={siteConfig.resume}
              download
              className="group inline-flex items-center gap-2.5 border-2 border-charcoal bg-crimson px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[3px_3px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(36,33,32,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(36,33,32,1)]"
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download Resume
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-charcoal bg-white px-8 py-3.5 text-[0.95rem] font-bold text-charcoal shadow-[3px_3px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(36,33,32,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(36,33,32,1)]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowRight size={16} className="text-crimson" />
            </Link>
          </motion.div>
        </motion.div>
 
        <motion.div
          className="relative shrink-0 pt-16 lg:pt-0"
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.95, y: 20 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
          style={prefersReducedMotion ? undefined : { y: photoY }}
        >
          {/* Hanging ID Badge Component */}
          <div className="relative mx-auto flex h-[460px] w-[310px] flex-col items-center rounded-2xl border-2 border-charcoal bg-white p-5 shadow-lg">
            {/* Lanyard/Strap & Clip */}
            <div className="absolute -top-16 left-1/2 h-16 w-8 -translate-x-1/2 bg-crimson rounded-t-sm" />
            <div className="absolute -top-2 left-1/2 h-4 w-10 -translate-x-1/2 bg-zinc-400 rounded-sm shadow-sm" />
            
            {/* Scalloped Red Border inside card */}
            <div className="absolute inset-2 rounded-xl border-2 border-dashed border-crimson" />
            
            {/* Portrait Photo */}
            <div className="relative mt-6 h-52 w-44 overflow-hidden rounded-lg border-2 border-charcoal/30 bg-stone-100 shadow-inner z-10">
              <img
                src={siteConfig.photo}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Signature Text */}
            <div className="mt-7 text-center z-10">
              <p className="font-handwritten text-[2.2rem] leading-none text-crimson font-bold">
                Hi! It&apos;s Palak Here
              </p>
              <p className="mt-1 font-serif text-[0.9rem] italic tracking-wide text-ink">
                (Software Engineer)
              </p>
              <p className="mt-1.5 font-mono text-[0.62rem] text-muted tracking-widest uppercase">
                @palaksingh2309
              </p>
            </div>
            
            {/* Spiky Sticker (Starburst) */}
            <div className="absolute -bottom-5 -right-5 z-20 h-16 w-16 transform rotate-12 drop-shadow-md">
              <svg viewBox="0 0 100 100" className="h-full w-full fill-crimson">
                <polygon points="50,0 60,35 95,25 75,55 95,85 60,75 50,100 40,75 5,85 25,55 5,25 40,35" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center transform -rotate-12">
                <span className="font-serif text-[0.55rem] font-extrabold text-white uppercase tracking-wider">
                  DEV
                </span>
              </div>
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white text-crimson shadow-sm cursor-pointer hover:bg-charcoal/5 transition-colors"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

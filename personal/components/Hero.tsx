"use client"

import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent/10 blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-primary border border-primary/30 px-4 py-2 rounded-full bg-primary/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              CS Student · UC Irvine
            </span>
          </motion.div>

          {/* Intro line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-3 italic"
            style={{ fontFamily: "var(--font-libre-baskerville), serif" }}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.95] tracking-tight mb-2"
            style={{ fontFamily: "var(--font-libre-baskerville), serif" }}
          >
            Derrick
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-libre-baskerville), serif" }}
          >
            Thrower.
          </motion.h1>

          {/* Golden accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="w-20 h-1.5 bg-secondary rounded-full mt-8 mb-8 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed mb-10"
          >
            Building software that helps people — from course planning tools
            used by 16,000+ students to nonprofit management dashboards.
            Full stack developer focused on meaningful impact.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#experience"
              className="px-7 py-3 border border-primary/40 text-primary font-semibold text-sm tracking-wide rounded-sm hover:border-primary hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              Experience
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary/50">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  )
}

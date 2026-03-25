"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Image from "next/image"

const highlights = [
  { label: "Building ideas", icon: "💡" },
  { label: "Hackathons", icon: "⚡" },
  { label: "Community", icon: "🤝" },
  { label: "Lifting", icon: "🏋️" },
  { label: "Basketball", icon: "🏀" },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400/70 text-xs font-mono tracking-widest uppercase mb-3">About me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-400/30 via-blue-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 w-72 h-80 md:w-80 md:h-96">
                <Image
                  src="/DerrickFlexing.jpeg"
                  alt="Derrick Thrower"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="text-white font-medium">UC Irvine</span> with a
                passion for building software that makes a real difference in
                people&apos;s lives.
              </p>
              <p>
                I love attending hackathons, contributing to open source, and
                being part of the CS community. Outside of code, you&apos;ll find
                me at the gym or on the basketball court.
              </p>
              <p>
                My goal is simple:{" "}
                <span className="text-blue-400 font-medium">
                  help people through software.
                </span>
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {highlights.map((h, i) => (
                <motion.span
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:border-blue-400/30 hover:text-white transition-colors"
                >
                  <span>{h.icon}</span>
                  {h.label}
                </motion.span>
              ))}
            </div>

            {/* UC Irvine badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 flex items-center gap-3"
            >
              <Image
                src="/University_of_California,_Irvine_seal.svg.png"
                alt="UC Irvine"
                width={32}
                height={32}
                className="opacity-70"
              />
              <span className="text-sm text-white/40">
                University of California, Irvine · Computer Science
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "Software Developer",
    org: "UCI ICS Student Council",
    dates: "Nov 2025 – Present",
    description:
      "Working on Anteater Almanac, used by 16,000+ active students. Contributing features and improvements to the course planning platform.",
    tech: ["PostgreSQL", "Next.js", "TypeScript"],
    link: null,
  },
  {
    role: "Full Stack Developer",
    org: "Commit the Change, UCI",
    dates: "Oct 2025 – Present",
    description:
      "Building a management dashboard for Global Creation Foundation, a nonprofit focused on arts education in underserved communities that has reached 300+ students across 5 continents.",
    tech: ["React.js", "Vite", "TypeScript"],
    link: null,
  },
  {
    role: "Software Developer",
    org: "FUSION ICS Project",
    dates: "Oct 2025 – Present",
    description:
      "Sub-lead for a team of 8 developers building PinoyPort, a platform serving the Filipino community.",
    tech: ["React.js", "Node.js"],
    link: null,
  },
  {
    role: "Intern",
    org: "FUSION at UCI",
    dates: "Oct 2025 – Feb 2026",
    description:
      "Shadowed ICS Project Directors, gaining hands-on experience with software project management and development workflows.",
    tech: [],
    link: null,
  },
  {
    role: "Web Developer",
    org: "Black in Tech UCI",
    dates: "Jun 2025 – Nov 2025",
    description:
      "Maintained and updated the club website, ensuring an accessible and up-to-date web presence for the organization.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
  {
    role: "Technical Operations Intern",
    org: "Black in Tech UCI",
    dates: "2025",
    description:
      "Provided technical operations support for club events and initiatives.",
    tech: [],
    link: null,
  },
]

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: (typeof experiences)[0]
  index: number
  inView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-emerald-400/70 border-2 border-black ring-2 ring-emerald-400/20" />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="spotlight-card p-6 ml-4"
      >
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-white font-semibold text-base">{exp.role}</h3>
              <p className="text-emerald-400/80 text-sm font-medium">{exp.org}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-xs font-mono">{exp.dates}</span>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/70 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {exp.description}
          </p>

          {exp.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400/80 border border-emerald-400/20"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400/70 text-xs font-mono tracking-widest uppercase mb-3">
            What I&apos;ve done
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

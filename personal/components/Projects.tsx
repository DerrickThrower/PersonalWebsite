"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/icons"

const projects = [
  {
    title: "Anteater Almanac",
    description:
      "Course planning platform used by 16,000+ active UC Irvine students. Contributed features and improvements to the scheduling and planning tools.",
    tech: ["Next.js", "PostgreSQL", "TypeScript"],
    github: "https://github.com/icssc/AntAlmanac",
    demo: null,
  },
  {
    title: "PinoyPort",
    description:
      "Platform serving the Filipino student community, built by a team of 8 developers. Served as sub-lead, coordinating development and reviewing code.",
    tech: ["React.js", "Node.js"],
    github: null,
    demo: null,
  },
  {
    title: "Global Creation Foundation Dashboard",
    description:
      "Management dashboard for a nonprofit focused on arts education. Supporting programs that have reached 300+ students across 5 continents.",
    tech: ["React.js", "Vite", "TypeScript"],
    github: null,
    demo: null,
  },
  {
    title: "Black in Tech UCI Website",
    description:
      "Maintained and developed the club website to keep an accessible, up-to-date web presence for the Black in Tech community at UCI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: null,
  },
]

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0]
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
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="spotlight-card p-6 h-full flex flex-col"
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-white font-semibold text-base leading-tight">
              {project.title}
            </h3>
            <div className="flex gap-2 ml-3 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/80 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white/80 transition-colors"
                  aria-label="Live demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/55 text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-300/70 border border-blue-400/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400/70 text-xs font-mono tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

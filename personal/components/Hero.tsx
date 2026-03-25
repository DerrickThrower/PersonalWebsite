"use client"

import { useEffect, useState } from "react"
import PhotonBeam from "@/components/ui/photon-beam"

const FULL_TEXT = "Hi, I'm Derrick Thrower"
const TYPING_SPEED = 80

export function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i === FULL_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, TYPING_SPEED)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <PhotonBeam
        colorBg="#000000"
        colorLine="#1a2a4a"
        colorSignal="#60a5fa"
        colorSignal2="#93c5fd"
        colorSignal3="#3b82f6"
        lineCount={80}
        spreadHeight={30.33}
        signalCount={94}
        speedGlobal={0.345}
        trailLength={3}
        bloomStrength={3.0}
        bloomRadius={0.5}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-x-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          {displayed}
          <span
            className={`inline-block w-[3px] h-[1em] align-middle ml-1 bg-blue-400 ${done ? "animate-pulse" : ""}`}
            style={{ verticalAlign: "middle" }}
          />
        </h1>
      </div>
    </section>
  )
}

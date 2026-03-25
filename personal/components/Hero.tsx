"use client"

import PhotonBeam from "@/components/ui/photon-beam"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <PhotonBeam
        colorBg="#080808"
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
    </section>
  )
}

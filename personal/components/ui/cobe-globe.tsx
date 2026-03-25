"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef } from "react"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [33.6846, -117.8265], size: 0.07 },
    { location: [37.7749, -122.4194], size: 0.05 },
    { location: [40.7128, -74.006], size: 0.05 },
  ],
}

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        state.phi = phiRef.current
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
        phiRef.current += 0.005
      },
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    }, 0)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [onResize])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", opacity: 0, transition: "opacity 1s ease" }}
    />
  )
}

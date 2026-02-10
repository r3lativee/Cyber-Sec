import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LandingZone } from './components/LandingZone'
import { FutureProof } from './components/FutureProof'
import { SecureLabs } from './components/SecureLabs'
import { SkillPaths } from './components/SkillPaths'
import { Backbone } from './components/Backbone'
import { TrustMatrix } from './components/TrustMatrix'
import { Communications } from './components/Communications'
import GlobalNav from './components/GlobalNav'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [hasWebGL, setHasWebGL] = React.useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      setHasWebGL(!!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))))
    } catch (e) {
      setHasWebGL(false)
    }

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-background">
      <GlobalNav />

      <main className="relative z-10">
        <LandingZone />
        <FutureProof />
        <SecureLabs />
        <SkillPaths />
        <Backbone />
        <TrustMatrix />
        <Communications />
      </main>

      {/* Global Grain Overlay for Cinematic Look */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  )
}

export default App

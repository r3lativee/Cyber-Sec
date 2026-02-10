import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ThreeDGallery } from './components/ThreeDGallery'
import { Photography } from './components/Photography'
import { WebDev } from './components/WebDev'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Scene } from './components/three/Scene'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
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
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <ThreeDGallery />
        <Photography />
        <WebDev />
        <Experience />
        <Contact />
      </main>

      {/* Global Grain Overlay for Cinematic Look */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  )
}

export default App

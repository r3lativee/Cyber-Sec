import React, { useEffect, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { BackgroundFX } from './three/BackgroundFX'


export function LandingZone() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power4.out',
            })

        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-24"
        >
            {/* Background Simulation */}
            <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
                <Canvas
                    camera={{ position: [0, 0, 15], fov: 75 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                    eventSource={typeof document !== 'undefined' ? document.body : null}
                    eventPrefix="client"
                >
                    <Suspense fallback={null}>
                        <BackgroundFX />
                    </Suspense>
                </Canvas>
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-30 flex flex-col items-start text-left">
                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-3 stagger-text mb-4">
                        <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-[10px] md:text-sm tracking-[0.3em] font-bold uppercase">EST. 2026 // CYBER DEFENSE</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold font-heading leading-[0.9] md:leading-[0.85] tracking-tighter stagger-text uppercase">
                        MASTER <br />
                        <span className="text-primary ">CYBERSECURITY</span> <br />
                        SKILLS
                    </h1>

                    <p className="stagger-text text-muted text-sm md:text-lg font-mono leading-relaxed max-w-2xl py-2 mt-4 md:mt-8 opacity-80">
                        <span className="text-primary font-bold">{'>'}</span> Practice on real-world scenarios in our immersive security labs. From web application testing to advanced penetration testing, enhance your skills with hands-on experience.
                    </p>
                </div>

                <div className="flex flex-wrap justify-start gap-4 stagger-text mt-8 md:mt-16 w-full font-mono">
                    <button className="group relative px-6 md:px-10 py-4 md:py-5 bg-primary text-background font-bold uppercase tracking-wider text-[11px] md:text-sm overflow-hidden transition-all duration-300">
                        <span className="relative z-10">Start Hacking Now</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                    <button className="group relative px-6 md:px-10 py-4 md:py-5 border border-primary/30 text-primary font-bold uppercase tracking-wider text-[11px] md:text-sm transition-all duration-300 hover:border-primary">
                        <span className="relative z-10">View Laboratories</span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>
                </div>
            </div>

            {/* Matrix-like vertical noise lines */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden">
                <div className="w-[1px] h-full bg-primary absolute left-1/4 animate-scan"></div>
                <div className="w-[1px] h-full bg-primary absolute left-2/4 animate-scan" style={{ animationDelay: '1s' }}></div>
                <div className="w-[1px] h-full bg-primary absolute left-3/4 animate-scan" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Seamless Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20" />
        </section>
    )
}

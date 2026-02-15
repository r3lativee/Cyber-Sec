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
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-16 md:pt-20"
        >
            <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
                <Canvas
                    camera={{ position: [0, 0, 20], fov: 75 }}
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
                <div className="space-y-3 mb-4 md:mb-8">
                    <div className="flex items-center gap-3 stagger-text mb-2 md:mb-4">
                        <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-[9px] md:text-sm tracking-[0.3em] font-bold uppercase shrink-0">EST. 2026 // CYBER DEFENSE</span>
                    </div>

                    <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] font-bold font-heading leading-[1.1] md:leading-[0.85] tracking-tighter stagger-text uppercase">
                        MASTER <br className="hidden sm:block" />
                        <span className="text-primary ">CYBERSECURITY</span> <br className="hidden sm:block" />
                        SKILLS
                    </h1>

                    <p className="stagger-text text-muted text-xs md:text-lg font-mono leading-relaxed max-w-2xl py-1 mt-2 md:mt-4 opacity-80">
                        <span className="text-primary font-bold">{'>'}</span> Practice on real-world scenarios in our immersive security labs. From web application testing to advanced penetration testing, enhance your skills with hands-on experience.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-start gap-4 stagger-text mt-4 md:mt-8 w-full font-mono">
                    <button className="group relative px-8 md:px-10 py-3.5 md:py-5 bg-primary text-background font-bold uppercase tracking-wider text-xs md:text-sm overflow-hidden transition-all duration-300 w-full sm:w-auto text-center">
                        <span className="relative z-10">Start Hacking Now</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                    <button className="group relative px-8 md:px-10 py-3.5 md:py-5 border border-primary/30 text-primary font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:border-primary w-full sm:w-auto text-center">
                        <span className="relative z-10">View Laboratories</span>
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>
                </div>
            </div>

            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden">
                <div className="w-[1px] h-full bg-primary absolute left-1/4 animate-scan"></div>
                <div className="w-[1px] h-full bg-primary absolute left-2/4 animate-scan" style={{ animationDelay: '1s' }}></div>
                <div className="w-[1px] h-full bg-primary absolute left-3/4 animate-scan" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20" />
        </section>
    )
}

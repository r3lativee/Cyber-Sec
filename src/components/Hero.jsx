import React, { useEffect, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { Scene } from './three/Scene'


export function Hero() {
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
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start text-left">
                <div className="space-y-8 mb-16">
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-heading leading-none tracking-tighter stagger-text uppercase">
                        Master <br />
                        <span className="text-gradient">Cybersecurity</span> <br />
                        <span className="text-primary">Skills</span>
                    </h1>

                    <p className="stagger-text text-muted text-base md:text-xl font-light leading-relaxed max-w-2xl py-2 border-l-2 border-primary/20 pl-8">
                        Practice on real-world scenarios in our immersive security labs. From web application testing to advanced penetration testing, enhance your skills with hands-on experience.
                    </p>
                </div>

                <div className="flex flex-wrap justify-start gap-6 stagger-text">
                    <button className="px-12 py-6 bg-primary text-background font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:shadow-[0_0_30px_rgba(0,255,156,0.5)] transition-all duration-500">
                        Start Learning
                    </button>
                    <button className="px-12 py-6 border border-white/10 glass text-foreground font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white/5 transition-all duration-300">
                        Explore Features
                    </button>
                </div>
            </div>

            {/* Seamless Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
        </section>
    )
}

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

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

            gsap.from('.hero-image', {
                scale: 1.2,
                opacity: 0,
                duration: 2,
                ease: 'expo.out'
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-20"
        >
            <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: Photo */}
                <div className="relative order-2 lg:order-1 hero-image">
                    <div className="absolute inset-x-0 -bottom-12 -top-12 bg-accent-neon/10 blur-[100px] rounded-full"></div>
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] border border-white/10 glass shadow-2xl">
                        <img
                            src="/assets/images/1.png"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center border border-accent-neon/20 hidden md:flex">
                        <div className="text-center">
                            <span className="block text-2xl font-bold font-heading text-accent-neon">5+</span>
                            <span className="text-[10px] uppercase tracking-widest text-muted">Years Exp.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col items-start order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-6 overflow-hidden"
                    >
                        <span className="text-accent-neon font-heading text-[10px] md:text-xs uppercase tracking-[0.5em] stagger-text block opacity-80">
                            CREATIVE TECHNOLOGY & SYSTEM DESIGN
                        </span>
                    </motion.div>

                    <div className="space-y-4 mb-10">
                        <h1 className="text-5xl md:text-7xl font-black font-heading leading-[0.9] tracking-tighter stagger-text uppercase">
                            <span className="block italic font-light opacity-50 lowercase text-3xl md:text-4xl mb-2">Shashanka Gogoi</span>
                            Alchemy <br />
                            <span className="text-gradient">of Code</span>
                        </h1>

                        <p className="stagger-text text-muted text-base md:text-lg font-light leading-relaxed max-w-md border-l border-accent-neon pl-6 py-2">
                            Transforming complex technical requirements into elegant, immersive digital experiences.
                            Bridging the gap between artistic vision and system reliability.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 stagger-text">
                        <span className="px-4 py-2 rounded-full glass border border-white/5 text-[10px] uppercase tracking-widest text-foreground/80 hover:bg-accent-neon hover:text-black transition-colors cursor-default">Full-Stack Developer</span>
                        <span className="px-4 py-2 rounded-full glass border border-white/5 text-[10px] uppercase tracking-widest text-foreground/80 hover:bg-accent-neon hover:text-black transition-colors cursor-default">3D Artist</span>
                        <span className="px-4 py-2 rounded-full glass border border-white/5 text-[10px] uppercase tracking-widest text-foreground/80 hover:bg-accent-neon hover:text-black transition-colors cursor-default">Management</span>
                        <span className="px-4 py-2 rounded-full glass border border-white/5 text-[10px] uppercase tracking-widest text-foreground/80 hover:bg-accent-neon hover:text-black transition-colors cursor-default">Visual Storyteller</span>
                    </div>

                    <motion.div
                        className="mt-16 hidden lg:block"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent-neon/5 rounded-full blur-[10vw] pointer-events-none"></div>
        </section>
    )
}

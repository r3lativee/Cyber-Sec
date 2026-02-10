import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        title: 'Real-time Training',
        description: 'Experience live cybersecurity scenarios with instant feedback and dynamic threat simulations.'
    },
    {
        title: 'Advanced Security',
        description: 'State-of-the-art security protocols and monitoring systems with enterprise-grade protection.'
    },
    {
        title: 'Interactive Code',
        description: 'Hands-on coding exercises with real vulnerability examples and penetration testing tools.'
    }
]

export function FutureProof() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = gsap.utils.toArray('.word')
            gsap.to(words, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    scrub: true,
                },
                opacity: 1,
                color: '#00FF9C',
                stagger: 0.1,
                ease: 'none',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="about" ref={sectionRef} className="relative py-32 bg-background overflow-hidden border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-12 h-[1px] bg-primary"></span>
                            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] font-bold">
                                // ADVANCED TRAINING ENVIRONMENT
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-12 tracking-tighter uppercase leading-tight">
                            BATTLE-TESTED <br />
                            <span className="text-primary ">SECURITY</span> <br />
                            LABORATORIES
                        </h2>
                        <p className="text-muted text-lg md:text-xl font-mono leading-relaxed mb-12 opacity-80">
                            Immerse yourself in cutting-edge cybersecurity scenarios with our advanced training environment and real-world simulations.
                        </p>
                        <div className="flex flex-wrap gap-4 font-mono">
                            <button className="px-8 py-4 bg-primary text-background font-bold uppercase tracking-widest text-xs transition-all hover:brightness-110">
                                JOIN THE ACADEMY
                            </button>
                            <button className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/5">
                                VIEW CATALOG
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-4 lg:pt-20">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#1A2332]/50 border border-white/5 p-8 transition-all duration-300 hover:border-primary/20"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-muted font-light leading-relaxed text-sm border-l-2 border-primary/10 pl-6 group-hover:border-primary transition-all">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

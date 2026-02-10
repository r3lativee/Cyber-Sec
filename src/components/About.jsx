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

export function About() {
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
                        <span className="text-secondary font-heading text-xs uppercase tracking-[0.5em] mb-8 block font-bold">
                            // EXPERIENCE THE FUTURE
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black font-heading mb-12 tracking-tighter uppercase leading-tight">
                            NEXT-GEN <br />
                            <span className="text-gradient">Advanced</span> <br />
                            Security Training
                        </h2>
                        <p className="text-muted text-lg md:text-xl font-light leading-relaxed mb-12 border-l-2 border-primary/20 pl-8">
                            Immerse yourself in cutting-edge cybersecurity scenarios with our advanced training environment and real-world simulations.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-background font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,255,156,0.4)] transition-all">
                                Start Your Journey
                            </button>
                            <button className="px-8 py-4 border border-white/5 glass text-white font-heading font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white/5 transition-all">
                                Explore Features
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 pt-4 lg:pt-20">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-2xl glass border border-white/[0.03] hover:border-primary/30 transition-all duration-500"
                            >
                                <h3 className="text-xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-muted font-light leading-relaxed text-sm">
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

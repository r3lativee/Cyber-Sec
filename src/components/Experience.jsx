import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
    {
        year: '2025 - 2026',
        role: 'UI/UX Designer',
        company: 'Subroutes',
        description: 'Directing the complete infrastructure migration to cloud-native solutions and implementing AI-driven ERP automation.'
    },
    {
        year: '2025 - 2026',
        role: 'Senior ERP Administrator',
        company: 'St. Clares convent high school',
        description: 'Spearheading digital transformation, managing massive user databases, and securing enterprise networks.'
    },
    {
        year: '2022 - 2026',
        role: '3D Artist & Rendering Specialist',
        company: 'Freelance',
        description: 'Focused on cinematic product visualization, high-fidelity shader development, and architectural rendering.'
    },
    {
        year: '2021 - 2022',
        role: '3D Artist & Rendering Specialist',
        company: 'Visionary Studios',
        description: 'Focused on cinematic product visualization, high-fidelity shader development, and architectural rendering.'
    }
]

export function Experience() {
    return (
        <section id="experience" className="relative min-h-screen py-32 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <span className="text-accent-secondary font-heading text-sm uppercase tracking-[0.3em] mb-4 block">
                        05 // Timeline
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter">
                        JOURNEY
                    </h2>
                    <p className="text-muted mt-4 max-w-sm">A professional evolution from artistic rendering to complex system architecture.</p>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-20 group"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-secondary border-4 border-background group-hover:scale-150 transition-transform duration-300"></div>

                            <span className="text-accent-secondary font-heading text-sm mb-2 block font-bold tracking-widest">
                                {item.year}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-black mb-1 font-heading uppercase tracking-tight">{item.role}</h3>
                            <p className="text-accent-neon text-xs md:text-sm mb-4 font-heading tracking-[0.2em] uppercase">
                                {item.company}
                            </p>
                            <p className="text-muted leading-relaxed max-w-2xl">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

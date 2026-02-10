import React from 'react'
import { motion } from 'framer-motion'

const learningPaths = [
    {
        title: 'Web Application Security',
        description: 'Master web application security from basics to advanced exploitation techniques. Perfect for beginners and intermediate learners.',
        stats: '15 Labs • 40-60 hours',
        level: 'Beginner to Advanced'
    },
    {
        title: 'Penetration Testing',
        description: 'Complete penetration testing methodology from reconnaissance to reporting. Industry-standard techniques and tools.',
        stats: '20 Labs • 60-80 hours',
        level: 'Intermediate to Expert'
    }
]

export function SkillPaths() {
    return (
        <section id="resources" className="relative py-32 bg-background border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-primary font-heading text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                        // STRUCTURED LEARNING
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter uppercase leading-none">
                        Follow Our <br /> <span className="text-gradient">Learning Paths</span>
                    </h2>
                    <p className="text-muted text-sm mt-6 uppercase tracking-[0.2em] font-bold">Structured pathways designed for mastery</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {learningPaths.map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="group p-10 rounded-3xl glass border border-white/[0.03] hover:border-primary/40 transition-all duration-500 overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

                            <div className="flex justify-between items-start mb-10">
                                <div className="px-4 py-2 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                                    {path.level}
                                </div>
                                <span className="text-muted text-[10px] font-bold uppercase tracking-widest">{path.stats}</span>
                            </div>

                            <h3 className="text-3xl font-bold font-heading mb-6 text-white group-hover:text-primary transition-colors uppercase tracking-tight">{path.title}</h3>
                            <p className="text-muted font-light leading-relaxed mb-10">
                                {path.description}
                            </p>

                            <button className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-widest group-hover:gap-5 transition-all">
                                Start Learning Path <span className="text-primary">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

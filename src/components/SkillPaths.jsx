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

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.8
        }
    },
}

export function SkillPaths() {
    return (
        <section id="resources" className="relative py-24 md:py-32 bg-background border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="mb-12 md:mb-20"
                >
                    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                            // STRUCTURED LEARNING
                        </span>
                    </motion.div>
                    <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tighter uppercase leading-[1.1] md:leading-none">
                        FOLLOW OUR <br className="hidden sm:block" /> <span className="text-primary ">LEARNING PATHS</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {learningPaths.map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: i * 0.2,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative bg-[#151D29] border border-white/5 p-1 transition-all duration-500 hover:border-primary/50"
                        >
                            {/* Accent indicator */}
                            <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>

                            <div className="p-8 md:p-12">
                                <div className="flex items-center justify-between mb-8 font-mono">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                        {path.level}
                                    </span>
                                    <span className="text-muted text-[10px] font-bold uppercase tracking-widest opacity-60">
                                        {path.stats}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold font-heading mb-6 text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                                    {path.title}
                                </h3>

                                <p className="text-muted font-light leading-relaxed mb-10 text-sm md:text-base border-l border-white/10 pl-6">
                                    {path.description}
                                </p>

                                <button className="flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest group-hover:gap-6 transition-all font-mono">
                                    ENROLL NOW <span className="text-primary text-lg">_</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


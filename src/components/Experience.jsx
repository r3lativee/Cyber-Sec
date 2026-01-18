import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
    {
        year: '2024 - Present',
        role: 'Design Lead & Creative Technologist',
        company: 'Google Developer Groups (GDG) Guwahati',
        description:
            'Leading UI/UX and visual design initiatives for developer events and community programs. Delivering high-impact digital assets, mentoring designers, and driving cohesive design systems across cross-functional teams.'
    },
    {
        year: '2024 - 2026',
        role: 'IT Coordinator & ERP Administrator',
        company: 'St. Clares Convent Senior Secondary School',
        description:
            'Managing ERP systems, CBSE portal operations, user databases, and digital workflows for a large-scale academic institution. Also handling digital marketing, content publishing, and technical operations across platforms.'
    },
    {
        year: '2024',
        role: 'Front-End Developer',
        company: 'Sous Itineraries International Pvt. Ltd.',
        description:
            'Designed and developed responsive React-based web applications for travel platforms. Improved performance, implemented payment integrations, and collaborated closely with product and backend teams.'
    },
    {
        year: '2023 - Present',
        role: '3D Artist & Visual Storyteller',
        company: 'Freelance',
        description:
            'Creating cinematic product visualizations, 3D animations, and branded visual content for clients. Focused on high-fidelity rendering, motion design, and storytelling across digital platforms.'
    },
    {
        year: '2023',
        role: '3D NFT Designer',
        company: 'International Client (California)',
        description:
            'Designed and delivered 3D NFT assets and immersive scenes for a commercial NFT collection, contributing to a successful digital launch.'
    },
    {
        year: '2022 - 2024',
        role: 'Design Lead & Mentor',
        company: 'Google Developer Students Club (GDSC)',
        description:
            'Led multiple UI/UX projects, mentored students through workshops, hackathons, and real-world projects, and played a key role in building a strong design-driven developer community.'
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

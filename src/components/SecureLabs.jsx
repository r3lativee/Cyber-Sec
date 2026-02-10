import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const labs = [
    {
        id: 1,
        title: 'Ghost In The Proxy',
        difficulty: 'HARD',
        duration: '30 min',
        description: "Welcome to RouteNest, the secure internal logistics knowledge base for Global Logistics Corp. To modernize our operations, we've deployed a state-of-the-art AI Assistant to handle shipment tracking and warehouse queries. The AI is equipped with our new \"Paranoid\" security protocol. We're confident it's uncrackable. Can you outsmart our digital gatekeeper and prove that even the most paranoid AI has its blind spots?",
        completed: 0
    },
    {
        id: 2,
        title: 'VulnMart',
        difficulty: 'HARD',
        duration: '30 min',
        description: "VulnMart is the latest e-commerce sensation, built for speed. Management insists it's safe for production, but the devs aren't so sure. Can you browse our aisles and find the discounts we didn't intend to offer?",
        completed: 0
    },
    {
        id: 3,
        title: 'vibecheck',
        difficulty: 'EXPERT',
        duration: '30 min',
        description: "vibecheck is the hottest new social media API and we prioritize vibes over everything. We're sure our JWTs and endpoint protections are \"good enough\". Can you vibe check our security and make sure it matches your vibe? Note: It's a fully blackbox API to sharpen your API Testing Skills.",
        completed: 0
    },
    {
        id: 4,
        title: 'InkDrop',
        difficulty: 'MEDIUM',
        duration: '30 min',
        description: "Welcome to InkDrop, the premier digital portfolio platform for modern artists. Share your work, build your brand, and join a community of professional creators. We are currently in beta and looking for security feedback. Can you adhere to our high standards, or will you find a way to make your mark where you shouldn't?",
        completed: 0
    },
    {
        id: 5,
        title: 'TinyCoder',
        difficulty: 'HARD',
        duration: '30 min',
        description: "Tiny Coder is a Coding Platform that allows you to manage your code snippets and projects. We are testing our new integrations and we think it's seamless. Can you find a loose thread in our authentication logic and access the administration panel?",
        completed: 0
    },
    {
        id: 6,
        title: 'Threadly',
        difficulty: 'MEDIUM',
        duration: '30 min',
        description: "Threadly is the freshest social media platform of 2026. No cap. However, a user named toxic_gigachad is ruining the vibe with offensive posts. Our \"advanced\" moderation AI is supposed to ban people who get reported enough, but it seems toxic_gigachad is immune or something? Can you figure out how our moderation system works (or doesn't) and finally de-platform this nuisance? Access the frontend on port 3000",
        completed: 0
    }
]

function LabCard({ lab, index }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#151D29] border border-white/5 p-8 transition-all duration-300 hover:border-primary/40 flex flex-col"
        >
            <div className="flex justify-between items-start mb-6 font-mono text-[10px] font-bold tracking-widest uppercase">
                <span className={`px-2 py-1 border ${lab.difficulty === 'EXPERT' ? 'text-red-500 border-red-500/20 bg-red-500/5' :
                    lab.difficulty === 'HARD' ? 'text-orange-500 border-orange-500/20 bg-orange-500/5' :
                        'text-yellow-500 border-yellow-500/20 bg-yellow-500/5'
                    }`}>
                    {lab.difficulty}
                </span>
                <span className="text-muted">{lab.duration}</span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                {lab.title}
            </h3>

            <div className="relative mb-8 flex-grow">
                <p className={`text-muted text-xs leading-relaxed font-mono opacity-70 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {lab.description}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary text-[10px] uppercase tracking-widest font-bold mt-2 hover:underline focus:outline-none"
                >
                    {isExpanded ? '[ SHOW LESS ]' : '[ READ MORE ]'}
                </button>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5 font-mono">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-muted">{lab.completed} COMPLETED</span>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                        <span className="text-primary">ONLINE</span>
                    </div>
                </div>
                <button className="w-full py-4 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-primary hover:text-background flex items-center justify-center gap-2">
                    START LAB <span className="text-xs">→</span>
                </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-primary/30 transition-colors"></div>
        </motion.div>
    )
}

export function SecureLabs() {
    const [showAll, setShowAll] = useState(false)
    const displayedLabs = showAll ? labs : labs.slice(0, 3)

    return (
        <section id="labs" className="relative min-h-screen py-32 bg-background overflow-hidden border-t border-white/5 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-primary"></span>
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] font-bold">
                            // TRAINING GROUND
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold font-heading mb-8 tracking-tighter leading-none uppercase">
                        START YOUR <br /> <span className="text-primary ">LEARNING JOURNEY</span>
                    </h2>
                    <p className="text-muted text-lg font-mono max-w-2xl opacity-80 leading-relaxed border-l border-white/10 pl-6">
                        <span className="text-primary mr-2">{">"}</span> Choose from our carefully crafted labs designed to challenge and improve your cybersecurity skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedLabs.map((lab, index) => (
                        <LabCard key={lab.id} lab={lab} index={index} />
                    ))}
                </div>

                {!showAll && labs.length > 3 && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group relative px-12 py-6 bg-transparent border border-white/10 overflow-hidden transition-all hover:border-primary/50"
                        >
                            <span className="relative z-10 text-white font-mono font-bold uppercase tracking-[0.3em] text-xs transition-colors group-hover:text-primary">
                                Load More Labs
                            </span>
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}


import React from 'react'
import { motion } from 'framer-motion'

const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070', title: 'Geometric Silence', span: 'col-span-2 row-span-2' },
    { id: 2, url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2070', title: 'Chromodynamics', span: 'col-span-1 row-span-1' },
    { id: 3, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638', title: 'Abstract Forms', span: 'col-span-1 row-span-2' },
    { id: 4, url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070', title: 'Urban Rhythms', span: 'col-span-1 row-span-1' },
]

export function Photography() {
    return (
        <section id="photography" className="relative min-h-screen py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-accent-secondary font-heading text-sm uppercase tracking-[0.3em] mb-4 block">
                            03 // Visual Arts
                        </span>
                        <h2 className="text-5xl md:text-8xl font-bold font-heading">
                            PHOTOGRAPHY
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm mb-2 text-sm md:text-base leading-relaxed">
                        Capturing the intersection of light, shadow, and geometry.
                        A study in composition and visual storytelling focused on cinematic depth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-3xl cursor-pointer ${photo.span}`}
                        >
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                                <span className="text-accent-neon font-heading text-[10px] tracking-[0.4em] uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Composition Series
                                </span>
                                <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{photo.title}</h3>
                            </div>

                            {/* Grain/Noise Overlay on Hover */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Blog', href: '#blog' },
]

export default function GlobalNav() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-[#0D1117]/95 backdrop-blur-md border-b border-primary/10' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="group">
                    <img
                        src="/assets/images/Full-word_11zon.png"
                        alt="Cyber-Sec Academy"
                        className="h-12 md:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 items-center font-mono">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] uppercase tracking-widest text-muted hover:text-primary transition-all font-bold relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <div className="flex items-center gap-6 ml-6 border-l border-white/10 pl-6">
                        <button className="text-[11px] uppercase tracking-widest text-muted hover:text-white transition-all font-bold">
                            Login
                        </button>
                        <button className="px-6 py-2 bg-primary text-background text-[11px] uppercase tracking-widest font-bold transition-all hover:brightness-110">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed inset-y-0 right-0 w-64 bg-background/95 backdrop-blur-2xl border-l border-white/5 py-12 px-8 flex flex-col gap-8 md:hidden shadow-2xl z-[110]"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Navigation</span>
                            <button onClick={() => setIsMenuOpen(false)}><X size={20} /></button>
                        </div>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-bold font-heading uppercase tracking-widest text-muted hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

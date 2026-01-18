import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function About() {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)


    const text1 = "I design and engineer systems where aesthetics meet performance."
    const text2 = "From full-stack applications to real-time 3D experiences, I build products that are visually compelling and technically sound."
    const text3 = "With hands-on experience in ERP administration, IT operations, and digital marketing, I build solutions that scale beyond code and into real organizations."

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = gsap.utils.toArray('.word')

            gsap.to(words, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: true,
                },
                opacity: 1,
                color: '#EDEDED',
                stagger: 0.1,
                ease: 'none',
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const splitWords = (text) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="word inline-block opacity-20 text-[#444] mr-[0.25em]">
                {word}
            </span>
        ))
    }

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-32 px-6 flex items-center justify-center bg-background"
        >
            <div className="max-w-5xl mx-auto" ref={containerRef}>
                <span className="text-accent-secondary font-heading text-sm uppercase tracking-[0.3em] mb-12 block">
                    01 // Identity
                </span>
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-6xl font-heading leading-tight font-bold">
                        {splitWords(text1)}
                    </h2>
                    <p className="text-3xl md:text-5xl font-heading leading-tight">
                        {splitWords(text2)}
                    </p>
                    <p className="text-3xl md:text-5xl font-heading leading-tight">
                        {splitWords(text3)}
                    </p>
                </div>
            </div>
        </section>
    )
}

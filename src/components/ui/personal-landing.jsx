import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
    Github,
    Youtube,
    Linkedin,
    Code2,
    ArrowRight,
    Send,
    Twitter
} from "lucide-react";
import GradientBlinds from "./GradientBlinds";

const socialLinks = [
    {
        href: 'https://youtube.com/@harshilpatel-20?si=L9HrbJJDXA0dCqUG',
        label: 'YouTube',
        icon: <Youtube size={18} />,
        bg: 'hover:bg-red-500/10 hover:border-red-500/50',
        text: 'text-white/60 hover:text-red-400',
    },
    {
        href: 'https://github.com/HARSHILL2023',
        label: 'GitHub',
        icon: <Github size={18} />,
        bg: 'hover:bg-white/10 hover:border-white/50',
        text: 'text-white/60 hover:text-white',
    },
    {
        href: 'https://www.linkedin.com/in/harshil-patel-b00063395/',
        label: 'LinkedIn',
        icon: <Linkedin size={18} />,
        bg: 'hover:bg-purple-500/10 hover:border-purple-500/30',
        text: 'text-white/70 hover:text-white',
    },
    {
        href: 'https://leetcode.com/u/HARSHILL2023/',
        label: 'LeetCode',
        icon: <Code2 size={18} />,
        bg: 'hover:bg-yellow-500/10 hover:border-yellow-500/30',
        text: 'text-white/70 hover:text-yellow-400',
    },
    {
        href: 'https://twitter.com/example',
        label: 'Twitter',
        icon: <Twitter size={18} />,
        bg: 'hover:bg-blue-400/10 hover:border-blue-400/30',
        text: 'text-white/70 hover:text-blue-400',
    },
];

export const PersonalLanding = () => {
    return (
        <section id="home" className="min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden bg-[#050505]">
            
            {/* ── BACKGROUND LAYER ── */}
            <div className="absolute inset-0 z-0">
                <GradientBlinds
                    gradientColors={['#8B5CF6', '#EC4899', '#3B82F6']}
                    angle={15}
                    noise={0.2}
                    blindCount={10}
                    blindMinWidth={80}
                    spotlightRadius={0.4}
                    spotlightSoftness={1.2}
                    spotlightOpacity={0.8}
                    mouseDampening={0.2}
                    distortAmount={0.2}
                    shineDirection="left"
                    mixBlendMode="lighten"
                />
            </div>

            {/* ── OVERLAY FIX ── */}
            <div className="absolute inset-0 z-[1] bg-black/40 backdrop-blur-[2px]" />

            {/* ── CONTENT LAYER ── */}
            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative p-8 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group"
                >
                    {/* Interior Glow */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full group-hover:bg-purple-500/30 transition-colors duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Greeting badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-mono tracking-[0.3em] uppercase bg-black/40 border border-white/10 text-purple-300 mb-8"
                        >
                            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                            MERN Stack Developer | AI Enthusiast
                        </motion.span>

                        {/* Name heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-6"
                        >
                            <span className="text-white drop-shadow-2xl text-shadow-glow">HARSHIL</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">PATEL</span>
                        </motion.h1>

                        {/* Short intro */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12 font-medium"
                        >
                            Building <span className="text-white">scalable systems</span> and 
                            <span className="text-purple-300"> immersive digital experiences</span> 
                            with a focus on architectural excellence.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-6 mb-12"
                        >
                            <a 
                                href="#projects" 
                                className="px-10 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-xl shadow-purple-500/20 active:scale-95"
                            >
                                <span className="flex items-center gap-3">
                                    View Projects <ArrowRight size={16} />
                                </span>
                            </a>
                            <a 
                                href="#contact" 
                                className="px-10 py-5 rounded-2xl bg-white/5 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-300 backdrop-blur-md active:scale-95"
                            >
                                <span className="flex items-center gap-3">
                                    Contact Me <Send size={16} />
                                </span>
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-4"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={twMerge(
                                        'p-4 rounded-2xl bg-black/40 border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1',
                                        link.text
                                    )}
                                    title={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

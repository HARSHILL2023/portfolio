import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
    Github,
    Youtube,
    Linkedin,
    Twitter,
    Code2,
    ArrowRight,
    Send
} from "lucide-react";

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
        <div className="min-h-screen w-full flex items-start justify-center px-6 pt-28 pb-10 relative overflow-hidden selection:bg-cyan-500/30">

            {/* ── Split layout: LEFT text, RIGHT photo ── */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20 z-10">

                {/* ─── LEFT: Liquid glass text card ─── */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 max-w-xl w-full"
                >
                    {/* Borderless frosted glass card */}
                    <div
                        className="rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col gap-8 text-left border border-white/10"
                        style={{
                            background: 'rgba(10, 8, 20, 0.4)',
                            backdropFilter: 'blur(32px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
                            boxShadow: '0 8px 64px rgba(0,0,0,0.24)',
                        }}
                    >


                        {/* Greeting badge */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                        >
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                            MERN Stack Developer | AI Enthusiast
                        </motion.span>

                        {/* Name heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
                        >
                            <span
                                className="text-white"
                                style={{ textShadow: '0 2px 20px rgba(255,255,255,0.25)' }}
                            >
                                Hi, I'm{' '}
                            </span>
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400"
                                style={{
                                    filter: 'drop-shadow(0 2px 12px rgba(168,85,247,0.50))',
                                }}
                            >
                                Harshil
                            </span>
                        </motion.h1>

                        {/* About text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-lg md:text-xl leading-relaxed text-white/70 font-medium max-w-lg"
                        >
                            Senior Software Engineer crafting{' '}
                            <span className="text-white font-bold">high-signal</span>, performant web architectures.
                            Specializing in the <span className="text-purple-300 font-bold">MERN stack</span> and interactive design.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a 
                                href="#projects" 
                                className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-purple-500 hover:text-white transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 uppercase">
                                    View Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                            <a 
                                href="#contact" 
                                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all duration-300"
                            >
                                Contact Me <Send size={14} />
                            </a>
                        </motion.div>

                        {/* Divider */}
                        <div
                            className="w-full h-px mt-4"
                            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.12), rgba(168,85,247,0.18), transparent)' }}
                        />

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-3"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className={twMerge(
                                        'group flex items-center justify-center w-12 h-12 rounded-xl text-sm transition-all duration-300 hover:scale-110 focus:outline-none bg-white/5 border border-white/10 hover:border-purple-500/40',
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

                {/* ─── RIGHT: Circular profile photo ─── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-center justify-center flex-shrink-0"
                >
                    {/* Ambient glow blob — square-aware, bigger */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            width: 480,
                            height: 480,
                            background: 'radial-gradient(circle, rgba(130,0,219,0.35) 0%, rgba(99,102,241,0.15) 55%, transparent 75%)',
                            filter: 'blur(60px)',
                            borderRadius: '2rem',
                            animation: 'plGlowPulse 4s ease-in-out infinite',
                        }}
                    />



                    {/* Photo — square */}
                    <div
                        style={{
                            position: 'relative',
                            width: 380,
                            height: 380,
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.18)',
                            boxShadow: '0 0 80px rgba(130,0,219,0.45), 0 0 120px rgba(99,102,241,0.15)',
                        }}
                    >
                        <img
                            src="/assets/profile.jpg"
                            alt="Harshil Patel"
                            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                            loading="eager"
                            style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                        />
                        {/* Vignette */}
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)', pointerEvents: 'none' }} />
                    </div>

                    {/* Status pill */}
                    <motion.div
                        className="absolute flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-2xl shadow-2xl"
                        style={{ bottom: -10 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-[0.2em]">
                            Available for Work
                        </span>
                    </motion.div>

                    <style>{`
                        @keyframes plGlowPulse {
                            0%, 100% { opacity: 0.8; transform: scale(1); }
                            50%       { opacity: 1;   transform: scale(1.1); }
                        }
                    `}</style>
                </motion.div>
            </div>
        </div>
    );
};



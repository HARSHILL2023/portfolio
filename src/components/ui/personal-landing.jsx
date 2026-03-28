import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
    Github,
    Youtube,
    Linkedin,
} from "lucide-react";

const socialLinks = [
    {
        href: 'https://youtube.com/@harshilpatel-20?si=L9HrbJJDXA0dCqUG',
        label: 'YouTube',
        icon: <Youtube size={20} />,
        bg: 'hover:bg-red-500/10 hover:border-red-500/50',
        text: 'text-white/60 hover:text-red-400',
    },
    {
        href: 'https://github.com/HARSHILL2023',
        label: 'GitHub',
        icon: <Github size={20} />,
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
                        className="rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col gap-7 text-left"
                        style={{
                            background: 'rgba(10, 8, 20, 0.08)',
                            backdropFilter: 'blur(20px) saturate(160%)',
                            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                            boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
                        }}
                    >


                        {/* Greeting badge */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase"
                            style={{
                                background: 'rgba(168,85,247,0.14)',
                                border: '1px solid rgba(168,85,247,0.38)',
                                color: '#e9d5ff',
                                textShadow: '0 0 12px rgba(168,85,247,0.6)',
                            }}
                        >
                            <span className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" />
                            Full Stack Developer
                        </motion.span>

                        {/* Name heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-5xl md:text-6xl font-black tracking-tight leading-[1.08]"
                        >
                            <span
                                className="text-white"
                                style={{ textShadow: '0 2px 20px rgba(255,255,255,0.25)' }}
                            >
                                Hi, I'm{' '}
                            </span>
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #e879f9 0%, #a78bfa 50%, #67e8f9 100%)',
                                    filter: 'drop-shadow(0 2px 8px rgba(168,85,247,0.50))',
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
                            className="text-base md:text-lg leading-relaxed font-medium"
                            style={{
                                color: 'rgba(255,255,255,0.92)',
                                textShadow: '0 1px 8px rgba(0,0,0,0.60)',
                            }}
                        >
                            Software Engineer and UI/UX Specialist crafting{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>high-signal</span>, performant web architectures.
                            Obsessed with{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>structural elegance</span> and{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>interactive precision</span>.
                        </motion.p>

                        {/* Divider */}
                        <div
                            className="w-full h-px"
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
                                        'flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300 hover:scale-105 focus:outline-none',
                                        link.bg,
                                    )}
                                    style={{
                                        background: 'rgba(255,255,255,0.07)',
                                        border: '1px solid rgba(255,255,255,0.16)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        color: 'rgba(255,255,255,0.88)',
                                        textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
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
                            width: 420,
                            height: 420,
                            background: 'radial-gradient(circle, rgba(130,0,219,0.32) 0%, rgba(99,102,241,0.14) 55%, transparent 75%)',
                            filter: 'blur(50px)',
                            borderRadius: '1.5rem',
                            animation: 'plGlowPulse 4s ease-in-out infinite',
                        }}
                    />



                    {/* Photo — square */}
                    <div
                        style={{
                            position: 'relative',
                            width: 360,
                            height: 360,
                            borderRadius: '1.1rem',
                            overflow: 'hidden',
                            border: '2px solid rgba(255,255,255,0.18)',
                            boxShadow: '0 0 60px rgba(130,0,219,0.40), 0 0 100px rgba(99,102,241,0.14), inset 0 0 20px rgba(0,0,0,0.4)',
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
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '1.1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.18), transparent)', pointerEvents: 'none' }} />
                    </div>

                    {/* "Available for Work" status pill */}
                    <motion.div
                        className="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-xl"
                        style={{ bottom: -6 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                            Available for Work
                        </span>
                    </motion.div>

                    <style>{`
                        @keyframes plGlowPulse {
                            0%, 100% { opacity: 0.82; transform: scale(1); }
                            50%       { opacity: 1;    transform: scale(1.07); }
                        }
                    `}</style>
                </motion.div>
            </div>
        </div>
    );
};


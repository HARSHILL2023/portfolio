import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Meteors } from './ui/meteors';



/* ─────────────────────────────────────────────
   GRID BACKGROUND
   Subtle dot grid with animated gradient mask
   ───────────────────────────────────────────── */
const GridBackground = memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }}
        />
        {/* Animated gradient orbs */}
        <motion.div
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
            }}
            animate={{
                x: [0, 100, 0],
                y: [0, 80, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
            }}
            animate={{
                x: [0, -80, 0],
                y: [0, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
    </div>
));

/* ─────────────────────────────────────────────
   TYPING ANIMATION HOOK
   ───────────────────────────────────────────── */
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2500) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentWord.length) {
                    setText(currentWord.substring(0, text.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (text.length > 0) {
                    setText(text.substring(0, text.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
};

/* ─────────────────────────────────────────────
   STAT COUNTER
   Animated number counter for impact metrics
   ───────────────────────────────────────────── */
const StatCounter = memo(({ value, label, suffix = '', delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            let start = 0;
            const duration = 2000;
            const startTime = Date.now();
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * value));
                if (progress < 1) requestAnimationFrame(animate);
            };
            animate();
        }, delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay / 1000 + 0.5, duration: 0.6 }}
            className="text-center"
        >
            <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
                {count}{suffix}
            </div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mt-1">
                {label}
            </div>
        </motion.div>
    );
});

/* ─────────────────────────────────────────────
   MAIN HERO COMPONENT
   ───────────────────────────────────────────── */
export default function AnimatedHero() {
    const roles = [
        'Full Stack Developer',
        'Creative Problem Solver',
        'UI/UX Enthusiast',
        'Always Learning',
    ];
    const typedRole = useTypewriter(roles);

    return (
        <header
            id="hero"
            className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10"
            aria-label="Introduction Section"
        >
            <GridBackground />

            {/* ─── Main Content ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto w-full relative z-10"
            >
                {/* Split layout: text LEFT, image RIGHT */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">

                    {/* ─── LEFT: Text Content ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 max-w-xl w-full flex flex-col items-start gap-6 text-left"
                    >
                        {/* Greeting Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[11px] font-mono text-cyan-400 tracking-[0.15em] uppercase">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                Welcome to my portfolio
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                                <span className="text-white">Harshil</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                    Patel
                                </span>
                            </h1>
                        </motion.div>

                        {/* Typewriter Role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
                            <p className="text-lg md:text-xl font-mono font-medium text-gray-400 tracking-wide">
                                {typedRole}
                                <span className="inline-block w-[2px] h-5 bg-cyan-400 ml-1 animate-pulse" />
                            </p>
                        </motion.div>

                        {/* Value Proposition */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg"
                        >
                            I craft performant, pixel-perfect web experiences with modern technologies.
                            Passionate about turning complex problems into elegant, user-centric solutions.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                            className="flex items-center gap-8 pt-2"
                        >
                            <StatCounter value={15} suffix="+" label="Projects" delay={1800} />
                            <div className="w-px h-10 bg-white/10" />
                            <StatCounter value={6} suffix="+" label="Tech Stack" delay={2000} />
                            <div className="w-px h-10 bg-white/10" />
                            <StatCounter value={2} suffix="" label="Certifications" delay={2200} />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <a
                                href="#projects"
                                className="group/btn relative px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-95"
                            >
                                View Projects
                                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white text-sm font-bold uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                            >
                                Get in Touch
                            </a>
                        </motion.div>

                        {/* Quick Tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0 }}
                            className="flex flex-wrap gap-2 pt-1"
                        >
                            {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-500 uppercase tracking-widest"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ─── RIGHT: Circular Profile Image ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex items-center justify-center flex-shrink-0"
                    >
                        {/* Ambient glow layer behind the photo */}
                        <div
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                width: 380,
                                height: 380,
                                background: 'radial-gradient(circle, rgba(130,0,219,0.35) 0%, rgba(99,102,241,0.15) 50%, transparent 75%)',
                                filter: 'blur(40px)',
                                animation: 'profileGlowPulse 4s ease-in-out infinite',
                            }}
                        />

                        {/* Slow-spinning conic border ring */}
                        <motion.div
                            className="absolute rounded-full"
                            style={{
                                width: 316,
                                height: 316,
                                background: 'conic-gradient(from 0deg, #22d3ee 0%, #a855f7 40%, #3b82f6 70%, #22d3ee 100%)',
                                padding: 2,
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                            {/* Inner mask to show only the border */}
                            <div className="w-full h-full rounded-full bg-[#000005]" />
                        </motion.div>

                        {/* Photo container */}
                        <div
                            className="relative rounded-full overflow-hidden"
                            style={{
                                width: 308,
                                height: 308,
                                border: '2px solid rgba(255,255,255,0.18)',
                                boxShadow: '0 0 60px rgba(130, 0, 219, 0.4), 0 0 120px rgba(99,102,241,0.15), inset 0 0 30px rgba(0,0,0,0.5)',
                            }}
                        >
                            <img
                                src="/assets/profile.jpg"
                                alt="Harshil Patel - Full Stack Developer"
                                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                                loading="eager"
                                style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                            />
                            {/* Soft vignette overlay */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Status pill — anchored below the circle */}
                        <motion.div
                            className="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-xl"
                            style={{ bottom: -6 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                                Available for Work
                            </span>
                        </motion.div>

                        {/* Inject the glow keyframe once */}
                        <style>{`
                            @keyframes profileGlowPulse {
                                0%, 100% { opacity: 0.85; transform: scale(1); }
                                50%       { opacity: 1;    transform: scale(1.06); }
                            }
                        `}</style>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="flex flex-col items-center mt-20 gap-2"
                >
                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em]">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1"
                    >
                        <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </header>
    );
}

import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import TechKeyboard from './TechKeyboard';
import SplineScene from './SplineScene';

const roles = [
    'Frontend Developer',
    'Creative Designer',
    'Always Learning',
    'Problem Solver'
];

const socialAccounts = [
    {
        name: 'GitHub',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
        ),
        url: 'https://github.com/HARSHILL2023',
        color: 'from-gray-700 to-black',
        planetColor: '#6e5494',
        orbitRadius: 180,
        orbitDuration: 15,
        orbitAngle: 15,
        orbitTilt: 10
    },
    {
        name: 'LinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        url: 'https://www.linkedin.com/in/harshil-patel-b00063395/',
        color: 'from-blue-600 to-blue-800',
        planetColor: '#0077b5',
        orbitRadius: 280, // Slightly adjusted
        orbitDuration: 22,
        orbitAngle: 10,
        orbitTilt: 5
    },
    {
        name: 'LeetCode',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M10 2l-6 6 6 6" />
                <path d="M14 22l6-6-6-6" />
                <path d="m18 2-12 20" />
            </svg>
        ),
        url: 'https://leetcode.com/profile/',
        color: 'from-yellow-600 to-orange-700',
        planetColor: '#ffa116',
        orbitRadius: 400,
        orbitDuration: 28,
        orbitAngle: -15,
        orbitTilt: 10
    }
];

const creativeProjects = [
    { title: 'AI-Powered Chat Application', description: 'Real-time messaging app with AI integration for smart replies and sentiment analysis', tech: ['React', 'Node.js', 'OpenAI', 'Socket.io'], color: 'from-cyan-500 to-blue-600', animation: 'float-slow' },
    { title: 'E-Learning Platform', description: 'Interactive platform with video courses, quizzes, and progress tracking', tech: ['React', 'MongoDB', 'Express', 'JWT'], color: 'from-purple-500 to-pink-600', animation: 'tilt-rotate' },
    { title: 'Weather Dashboard', description: 'Beautiful weather app with detailed forecasts and interactive maps', tech: ['JavaScript', 'OpenWeather API', 'Chart.js'], color: 'from-orange-500 to-red-600', animation: 'pulse-glow' },
    { title: 'Portfolio Builder Tool', description: 'Drag-and-drop portfolio website creator with live preview', tech: ['React', 'Tailwind', 'Firebase'], color: 'from-green-500 to-emerald-600', animation: 'slide-bounce' },
    { title: 'Task Management System', description: 'Collaborative project management with kanban boards and team chat', tech: ['React', 'Redux', 'Firebase', 'Material-UI'], color: 'from-indigo-500 to-purple-600', animation: 'scale-swing' },
    { title: 'Code Snippet Manager', description: 'Save, organize, and share code snippets with syntax highlighting', tech: ['JavaScript', 'IndexedDB', 'Prism.js'], color: 'from-yellow-500 to-orange-600', animation: 'rotate-3d' }
];

// Memoized Components for Performance
const ProjectCard = memo(({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
        className={`group backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/20 transition-all duration-500 cursor-pointer relative overflow-hidden animate-${project.animation} will-change-transform shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-cyan-500/20`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/20 group-hover:to-purple-400/20 transition-all duration-700 rounded-2xl"></div>
        <div className="relative z-10">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">{project.title}</h3>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                    <span key={idx} className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 border border-white/30 text-white font-semibold transform group-hover:scale-110 transition-transform`}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
));

const StarField = memo(({ stars }) => (
    <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
            <div
                key={i}
                className={`absolute rounded-full bg-white transition-opacity duration-1000 ${star.depth} animate-pulse will-change-transform`}
                style={{
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    opacity: star.opacity,
                    transform: `translate3d(calc(var(--mouse-x, 0) / ${60 + i}), calc(var(--mouse-y, 0) / ${60 + i}), 0)`,
                }}
            />
        ))}
    </div>
));

export default function Portfolio() {
    const rootRef = useRef(null);
    const [typewriterText, setTypewriterText] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [hoveredAccount, setHoveredAccount] = useState(null);
    const [isGalaxyHovered, setIsGalaxyHovered] = useState(false);

    // Smooth Cursor Physics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (rootRef.current) {
                rootRef.current.style.setProperty('--mouse-x', `${e.clientX - window.innerWidth / 2}px`);
                rootRef.current.style.setProperty('--mouse-y', `${e.clientY - window.innerHeight / 2}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[typewriterIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typewriterText.length < currentRole.length) {
                    setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typewriterText.length > 0) {
                    setTypewriterText(typewriterText.substring(0, typewriterText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTypewriterIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [typewriterText, isDeleting, typewriterIndex]);

    // Cursor blink
    useEffect(() => {
        const blinkInterval = setInterval(() => setShowCursor(prev => !prev), 530);
        return () => clearInterval(blinkInterval);
    }, []);

    const stardust = useMemo(() => [...Array(20)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        depth: Math.random() > 0.5 ? 'blur-sm' : 'blur-none',
        opacity: Math.random() * 0.3 + 0.1,
    })), []);

    const warpStars = useMemo(() => [...Array(30)].map((_, i) => ({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 800,
        size: Math.random() * 1.5 + 1,
        color: i % 2 === 0 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(255, 255, 255, 0.3)'
    })), []);

    const streaks = useMemo(() => [...Array(15)].map((_, i) => ({
        angle: Math.random() * 360,
        length: 100 + Math.random() * 200,
        duration: 0.5 + Math.random() * 1,
        delay: Math.random() * 2
    })), []);

    return (
        <div ref={rootRef} className="min-h-screen bg-black text-white overflow-x-hidden relative">
            {/* Optimized Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-black"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 via-transparent to-transparent animate-aurora"></div>
                </div>
                <StarField stars={stardust} />
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] animate-float-slow will-change-transform"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-float-slow-reverse will-change-transform"></div>
            </div>

            {/* Optimized Custom Cursor */}
            <motion.div
                className="fixed pointer-events-none z-50 mix-blend-screen"
                style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
            >
                <div className="relative">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="relative backdrop-blur-xl rounded-3xl p-10 lg:p-14 border border-white/10 mt-20 shadow-2xl bg-black/60 will-change-transform overflow-hidden group">
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-colors duration-1000"></div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-1000"></div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-6 flex justify-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse-slow">
                                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                                        <motion.span
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="text-4xl"
                                        >
                                            👨‍💻
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.div>


                            <motion.h1
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="text-5xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic tracking-tighter will-change-transform"
                                style={{
                                    transform: `perspective(1000px) rotateY(calc(var(--mouse-x, 0) / 40 * 1deg)) rotateX(calc(var(--mouse-y, 0) / -40 * 1deg))`
                                }}
                            >
                                {"Harshil Patel".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6 + i * 0.05,
                                            ease: [0.215, 0.61, 0.355, 1]
                                        }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="h-12 mb-6"
                            >
                                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-flex items-center">
                                    {typewriterText}
                                    <span className={`inline-block w-0.5 h-8 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
                            >
                                Crafting innovative digital experiences through code. First Year B.Tech CSE student passionate about Web3, 3D Graphics, and Creative Coding.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.8 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#projects"
                                    className="px-8 py-3 bg-cyan-500 rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:shadow-cyan-500/40"
                                >
                                    View Work
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#contact"
                                    className="px-8 py-3 border border-white/20 rounded-xl font-bold transition-all"
                                >
                                    Contact Me
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Restored Social Galaxy with Solar System */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 overflow-hidden">
                {/* Background Warp Field */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black opacity-90" />

                    {/* Perspective Depth Stars */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {warpStars.map((star, i) => (
                            <div key={i} className="absolute rounded-full animate-pulse"
                                style={{
                                    left: '50%', top: '50%',
                                    width: `${star.size}px`, height: `${star.size}px`,
                                    backgroundColor: star.color,
                                    transform: `translate(${star.x}px, ${star.y}px) translateZ(${star.z}px)`,
                                    opacity: 0.15,
                                    boxShadow: `0 0 10px ${star.color}`
                                }}
                            />
                        ))}
                    </div>

                    {/* Warp Streaks */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
                        {streaks.map((s, i) => (
                            <div key={i} className="absolute bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                                style={{
                                    width: `${s.length}px`, height: '1px',
                                    transform: `rotate(${s.angle}deg) translateX(100px)`,
                                    transformOrigin: 'left center',
                                    animation: `hyperWarp ${s.duration}s linear infinite`,
                                    animationDelay: `${s.delay}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-8 opacity-40">
                            <div className="h-[1px] w-12 bg-cyan-500"></div>
                            <span className="text-cyan-500 font-mono text-[10px] tracking-[1em] uppercase">Digital_Frontier</span>
                            <div className="h-[1px] w-12 bg-cyan-500"></div>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black bg-[linear-gradient(to_right,#fff_20%,#06b6d4_50%,#fff_80%)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent italic tracking-tighter uppercase filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                            THE SOCIAL <span className="text-white not-italic">GALAXY</span>
                        </h2>
                    </div>

                    {/* The Solar System */}
                    <div
                        className="relative w-full flex items-center justify-center solar-system-container"
                        style={{ minHeight: '800px' }}
                        onMouseEnter={() => setIsGalaxyHovered(true)}
                        onMouseLeave={() => setIsGalaxyHovered(false)}
                    >
                        <div className="relative" style={{ width: '800px', height: '800px' }}>
                            {/* Central Core */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className={`relative w-32 h-32 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-500 ${isGalaxyHovered ? 'border-cyan-400 scale-110 shadow-[0_0_80px_rgba(6,182,212,0.5)]' : ''}`}>
                                    <span className="text-cyan-400 font-black tracking-widest text-xs">CORE</span>
                                </div>
                            </div>

                            {/* Orbits & Planets */}
                            {socialAccounts.map((account, index) => (
                                <div key={account.name} className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                                    {/* Static Orbit Plane (Tilt) */}
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            width: `${account.orbitRadius * 2}px`,
                                            height: `${account.orbitRadius * 2}px`,
                                            transform: `rotateX(${account.orbitAngle}deg) rotateY(${account.orbitTilt}deg)`,
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Visual Ring */}
                                        <div className="absolute inset-0 rounded-full border border-white/5" />

                                        {/* Rotating Container (Uses base orbit animation) */}
                                        <div className="absolute inset-0"
                                            style={{
                                                animation: `orbit-base ${account.orbitDuration}s linear infinite`,
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {/* Planet Container (Moves to the top edge and counter-rotates) */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto"
                                                style={{
                                                    animation: `counterOrbit ${account.orbitDuration}s linear infinite`,
                                                    transform: `rotateX(${-account.orbitAngle}deg) rotateY(${-account.orbitTilt}deg)`
                                                }}
                                            >
                                                <motion.a
                                                    href={account.url} target="_blank" rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2 }}
                                                    className="block relative group"
                                                >
                                                    {/* Radar Scan Effect on Hover */}
                                                    <AnimatePresence>
                                                        {isGalaxyHovered && (
                                                            <>
                                                                <div className="radar-scan-effect" />
                                                                <div className="radar-scan-effect" style={{ animationDelay: '0.5s' }} />
                                                                <div className="radar-scan-effect" style={{ animationDelay: '1s' }} />
                                                            </>
                                                        )}
                                                    </AnimatePresence>

                                                    {/* Planet Glow */}
                                                    <div className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 ${isGalaxyHovered ? 'opacity-60' : 'opacity-20'}`}
                                                        style={{ backgroundColor: account.planetColor, width: '100px', height: '100px', margin: '-30px' }} />

                                                    {/* Planet Body */}
                                                    <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${account.color} flex items-center justify-center border border-white/20 shadow-xl overflow-hidden transition-all duration-500 ${isGalaxyHovered ? 'scale-110' : ''} will-change-transform`}>
                                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
                                                        <div className="relative z-10 text-white transition-transform duration-500">
                                                            {account.icon}
                                                        </div>
                                                    </div>

                                                    {/* Label */}
                                                    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isGalaxyHovered ? 'opacity-100' : 'opacity-0'} whitespace-nowrap`}>
                                                        <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">{account.name}</span>
                                                    </div>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TechKeyboard />

            {/* Projects Section */}
            <section id="projects" className="min-h-screen px-6 py-40 relative z-10">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-20 text-center uppercase tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {creativeProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center opacity-30 border-t border-white/10">
                <p className="text-[10px] font-mono tracking-[2em] uppercase">© Harshil Patel • 2026</p>
            </footer>
        </div >
    );
}

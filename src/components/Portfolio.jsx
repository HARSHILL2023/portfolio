import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import SplineScene from './SplineScene';
import { Meteors } from './ui/meteors';
import { Particles } from './ui/particles';
import { HyperText } from './ui/hyper-text';
import { MagicCard } from './ui/magic-card';
import { Dock, DockIcon } from './ui/dock';
import { MorphingText } from './ui/morphing-text';

const roles = [
    'Frontend Developer',
    'Creative Designer',
    'Always Learning',
    'Problem Solver'
];

const socialAccounts = [
    {
        name: 'GitHub',
        label: 'Code & Projects',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
        url: 'https://github.com/HARSHILL2023',
        gradient: 'from-gray-400 to-gray-700',
        glow: 'rgba(110, 84, 148, 0.4)',
    },
    {
        name: 'LinkedIn',
        label: 'Professional Network',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        url: 'https://www.linkedin.com/in/harshil-patel-b00063395/',
        gradient: 'from-blue-500 to-blue-700',
        glow: 'rgba(0, 119, 181, 0.4)',
    },
    {
        name: 'LeetCode',
        label: 'Problem Solving',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
        ),
        url: 'https://leetcode.com/profile/',
        gradient: 'from-amber-500 to-orange-600',
        glow: 'rgba(255, 161, 22, 0.4)',
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


export default function Portfolio() {
    const rootRef = useRef(null);
    const [typewriterText, setTypewriterText] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);


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


    return (
        <div ref={rootRef} className="min-h-screen bg-black text-white overflow-x-hidden relative">
            {/* Whole Background Particles */}
            <Particles
                className="fixed inset-0 z-0"
                quantity={150}
                ease={80}
                color="#ffffff"
                staticity={30}
                refresh
            />

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px] animate-float-slow will-change-transform"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] animate-float-slow-reverse will-change-transform"></div>
            </div>


            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="relative backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-[0_0_100px_-20px_rgba(34,211,238,0.15)] bg-black/40 will-change-transform overflow-hidden group">
                        {/* Meteors Effect inside Hero Card */}
                        <Meteors number={100} />

                        <div className="relative z-10 flex flex-col items-center p-8 md:p-12">
                            <HyperText
                                className="text-5xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic tracking-tighter"
                                duration={1200}
                            >
                                Harshil Patel
                            </HyperText>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="h-10 mb-6"
                            >
                                <p className="text-xl md:text-2xl font-medium text-gray-400 inline-flex items-center">
                                    {typewriterText}
                                    <span className={`inline-block w-0.5 h-6 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                                </p>
                            </motion.div>

                            {/* Unique Terminal/System Status Bio */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6, duration: 0.8 }}
                                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl px-4"
                            >
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group/item">
                                    <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    <p className="text-[10px] font-mono text-cyan-400 mb-1 tracking-widest uppercase">Location</p>
                                    <p className="text-sm font-bold text-white uppercase italic">Planet Earth</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group/item">
                                    <div className="absolute inset-0 bg-purple-400/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    <p className="text-[10px] font-mono text-purple-400 mb-1 tracking-widest uppercase">Status</p>
                                    <p className="text-sm font-bold text-white uppercase italic">Active_Sync</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group/item col-span-2 md:col-span-1">
                                    <div className="absolute inset-0 bg-pink-400/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    <p className="text-[10px] font-mono text-pink-400 mb-1 tracking-widest uppercase">Version</p>
                                    <p className="text-sm font-bold text-white uppercase italic">2026.Build_1.0</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorator Scan Line */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] animate-scan" />
                    </div>
                </motion.div>
            </section>

            {/* Connect — Premium Social Links */}
            <section id="connect" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 overflow-hidden">
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                            Let's Connect
                        </span>
                        <div className="flex flex-row items-baseline justify-center gap-x-3 mb-4 whitespace-nowrap">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Find Me on
                            </h2>
                            <div className="w-[180px] md:w-[320px] text-left">
                                <MorphingText
                                    texts={["GitHub", "LinkedIn", "LeetCode"]}
                                    className="text-4xl md:text-6xl font-black italic tracking-tighter text-cyan-400"
                                    width="w-full"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg">
                            Code, connect, and collaborate — tap any card to visit my profile.
                        </p>
                    </motion.div>

                    <div className="flex items-center justify-center scale-150 py-12">
                        <Dock magnification={80} distance={150}>
                            {socialAccounts.map((account, index) => (
                                <DockIcon key={account.name} className="bg-white/10 p-3 group relative">
                                    <a
                                        href={account.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full h-full"
                                    >
                                        <div className={`text-white transition-colors duration-300 group-hover:text-cyan-400`}>
                                            {account.icon}
                                        </div>

                                        {/* Label Tooltip */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                                            <p className="text-[10px] font-mono text-white tracking-widest uppercase">{account.name}</p>
                                        </div>
                                    </a>
                                </DockIcon>
                            ))}
                        </Dock>
                    </div>
                </div>
            </section>


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

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-40 relative z-10 overflow-hidden">
                <div className="max-w-4xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                            Ready to work?
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-4">
                            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Get in</span>
                            <span className="text-white"> Touch</span>
                        </h2>

                        {/* Hover Hint */}
                        <div className="flex items-center justify-center gap-2 mt-4 text-purple-400/60 animate-pulse">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span className="text-[10px] font-mono tracking-widest uppercase italic">Move mouse over the form to reveal energy</span>
                        </div>
                    </motion.div>

                    <MagicCard className="p-8 md:p-12 shadow-2xl border border-white/5">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest ml-1">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="YOUR NAME"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-colors font-mono placeholder:text-gray-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-purple-400 uppercase tracking-widest ml-1">Frequency</label>
                                    <input
                                        type="email"
                                        placeholder="YOUR EMAIL"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-400/50 transition-colors font-mono placeholder:text-gray-700"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-pink-400 uppercase tracking-widest ml-1">Signal Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="HOW CAN I HELP YOU?"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-pink-400/50 transition-colors font-mono placeholder:text-gray-700 resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] transition-transform shadow-[0_10px_30px_-5px_rgba(192,132,252,0.3)] group/btn relative overflow-hidden">
                                <span className="relative z-10">Initialize Transmission</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                            </button>
                        </form>
                    </MagicCard>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center opacity-30 border-t border-white/10">
                <p className="text-[10px] font-mono tracking-[2em] uppercase">© Harshil Patel • 2026</p>
            </footer>
        </div >
    );
}

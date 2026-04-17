import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const projects = [
    {
        id: '01',
        title: 'Tic Tech Toe Ecommerce',
        description: 'A robust full-stack e-commerce marketplace featuring secure checkout, real-time product management, and a unified shopping dashboard.',
        tag: 'Full Stack',
        status: 'Live',
        link: 'https://tic-tech-toe-ecommerce-website.vercel.app/',
        github: 'https://github.com/HARSHILL2023/tic_tech_toe-ecommerce-website-',
        image: 'https://placehold.co/600x400?text=Tic+Tech+Toe+Server'
    },
    {
        id: '02',
        title: 'FleetFlow Logistics',
        description: 'A mission-critical logistics platform integrating real-time fleet synchronization, driver telemetry, and scalable backend operations.',
        tag: 'Full Stack',
        status: 'Production',
        link: '', // Currently Down
        github: 'https://github.com/HARSHILL2023/odoo_x_gujarat-vidyapith',
        image: 'https://placehold.co/600x400?text=FleetFlow+Platform'
    },
    {
        id: '03',
        title: 'AI Onboarding Engine',
        description: 'An AI-powered talent acquisition ecosystem automating skill gap analysis and roadmap generation through predictive LLM logic.',
        tag: 'Full Stack',
        status: 'Active',
        link: 'https://art-park-code-forge-hackathon-virid.vercel.app',
        github: 'https://github.com/HARSHILL2023/ArtPark_CodeForge_Hackathon',
        image: 'https://placehold.co/600x400?text=AI+Onboarding+SaaS'
    },
    {
        id: '04',
        title: 'Lenskart Experience',
        description: 'A high-fidelity frontend implementation of the Lenskart eyewear browsing experience focusing on smooth transitions and item selection.',
        tag: 'Frontend',
        status: 'UI Prototype',
        link: '', // Currently Down
        github: 'https://github.com/HARSHILL2023/lenskart',
        image: 'https://placehold.co/600x400?text=Lenskart+Frontend'
    },
    {
        id: '04b',
        title: 'Lenskart Clone',
        description: 'A structural clone of the Lenskart e-commerce flow, focusing on component-based architecture and design system replication.',
        tag: 'Clones',
        status: 'Clone',
        link: '', // Currently Down
        github: 'https://github.com/HARSHILL2023/lenskart',
        image: 'https://placehold.co/600x400?text=Lenskart+Clone'
    },
    {
        id: '05',
        title: 'MemoFlip Challenge',
        description: 'An interactive memory-based card matching game developed as part of a gaming logic study.',
        tag: 'Games',
        status: 'Research',
        link: '', // Currently Down
        github: 'https://github.com/HARSHILL2023/game',
        image: 'https://placehold.co/600x400?text=Memory+Game'
    },
    {
        id: '06',
        title: 'Typing Velocity Test',
        description: 'A performance-tracking typing test game measuring words per minute and keystroke accuracy.',
        tag: 'Games',
        status: 'Research',
        link: '', // Currently Down
        github: 'https://github.com/HARSHILL2023/game',
        image: 'https://placehold.co/600x400?text=Typing+Test'
    }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Games', 'Clones'];

export default function ProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.tag === activeCategory);

    return (
        <section id="projects" className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden selection:bg-indigo-500/30">
            {/* Global Design System Background Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 px-6">
                {/* System-Aligned Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-8">
                        The Repository
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                        Project <span className="text-purple-400">Showroom</span>
                    </h2>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                                activeCategory === cat 
                                ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid (System Integrated) */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    tag={project.tag}
                                    status={project.status}
                                    link={project.link}
                                    github={project.github}
                                    image={project.image}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const projects = [
    {
        id: '01',
        title: 'Lenskart Experience',
        description: 'Optimized eyewear e-commerce flow for higher conversion rates and architectural scalability.',
        tag: 'Full Stack',
        status: 'Active',
        link: 'https://lambent-macaron-c52cee.netlify.app/',
        github: '',
        youtube: '',
        api: ''
    },
    {
        id: '02',
        title: 'Fancode Live',
        description: 'Real-time sports engagement platform with zero-latency synchronization and dynamic state management.',
        tag: 'Full Stack',
        status: 'Live',
        link: 'https://quiet-chaja-9781c8.netlify.app/',
        github: '',
        youtube: '',
        api: ''
    },
    {
        id: '03',
        title: 'Zetwork Enterprise',
        description: 'Industrial procurement discovery interface optimized for large-scale enterprise trade flows.',
        tag: 'Frontend',
        status: 'Live',
        link: 'https://incandescent-gaufre-51bce6.netlify.app/',
        github: '',
        figma: ''
    },
    {
        id: '04',
        title: 'Retro Shooter',
        description: 'High-performance 2D space shooter built with native Javascript engines and optimized collision detection.',
        tag: 'Games',
        status: 'Deployed',
        link: 'https://resilient-mooncake-6f5f97.netlify.app',
        github: ''
    },
    {
        id: '05',
        title: 'Udaan B2B Clone',
        description: 'Full-stack marketplace architecture designed for large-scale trade and inventory management.',
        tag: 'Clones',
        status: 'Active',
        link: 'https://regal-torrone-7fbf6b.netlify.app',
        github: '',
        youtube: ''
    },
    {
        id: '06',
        title: 'Paperboat Design',
        description: 'Strategic motion-driven UI centered on narrative storytelling and user experience strategy.',
        tag: 'Frontend',
        status: 'Deployed',
        link: 'https://github.com/HARSHILL2023/6th-project',
        github: '',
        figma: ''
    }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Games', 'Clones'];

export default function ProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.tag === activeCategory);

    return (
        <section className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden selection:bg-indigo-500/30">
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
                                    youtube={project.youtube}
                                    figma={project.figma}
                                    api={project.api}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}


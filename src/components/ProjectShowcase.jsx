import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const projects = [
    {
        id: '01',
        title: 'Lenskart Experience',
        description: 'Optimized eyewear e-commerce flow for higher conversion rates and architectural scalpability.',
        tag: 'E-commerce Architecture',
        status: 'Active',
        link: 'https://lambent-macaron-c52cee.netlify.app/'
    },
    {
        id: '02',
        title: 'Fancode Live',
        description: 'Real-time sports engagement platform with zero-latency synchronization and dynamic state management.',
        tag: 'Systems Integration',
        status: 'Live',
        link: 'https://quiet-chaja-9781c8.netlify.app/'
    },
    {
        id: '03',
        title: 'Zetwork Enterprise',
        description: 'Industrial procurement discovery interface optimized for large-scale enterprise trade flows.',
        tag: 'Procurement Systems',
        status: 'Live',
        link: 'https://incandescent-gaufre-51bce6.netlify.app/'
    },
    {
        id: '04',
        title: 'Rapido Logistics',
        description: 'Logistics booking system focused on mobile-first ergonomics and high-concurrency booking.',
        tag: 'Mobile Ergonomics',
        status: 'Deployed',
        link: 'https://resilient-mooncake-6f5f97.netlify.app'
    },
    {
        id: '05',
        title: 'Udaan B2B',
        description: 'Full-stack marketplace architecture designed for large-scale trade and inventory management.',
        tag: 'B2B Infrastructure',
        status: 'Active',
        link: 'https://regal-torrone-7fbf6b.netlify.app'
    },
    {
        id: '06',
        title: 'Paperboat Branding',
        description: 'Strategic motion-driven UI centered on narrative storytelling and user experience strategy.',
        tag: 'Motion UI Strategy',
        status: 'Deployed',
        link: 'https://github.com/HARSHILL2023/6th-project'
    }
];

export default function ProjectShowcase() {
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
                    className="text-center mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-8">
                        The Repository
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                        Project <span className="text-purple-400">Showroom</span>
                    </h2>
                    <p className="mt-8 text-white/70 font-mono text-[10px] uppercase tracking-[0.4em] max-w-xl mx-auto leading-relaxed italic">
                        Strategic architectural builds and high-signal product design implementations.
                    </p>
                </motion.div>

                {/* Grid (System Integrated) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tag={project.tag}
                            status={project.status}
                            link={project.link}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}

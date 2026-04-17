import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code, Link as LinkIcon, ExternalLink, Cpu } from "lucide-react";

const hackathons = [
    {
        name: "Tic Tech Toe Ecommerce",
        problem: "Inefficient online shopping interfaces with slow response times and complex product management systems for modern shoppers.",
        solution: "A modern, responsive e-commerce platform with seamless product browsing, robust cart management, and a unified dashboard built for speed and performance.",
        outcome: "Hackathon Entry",
        repo: "https://github.com/HARSHILL2023/tic_tech_toe-ecommerce-website-",
        demo: "https://tic-tech-toe-ecommerce-website.vercel.app/",
        image: "/assets/hackathons/tic-tech-toe.png",
        tech: ["TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Vercel"]
    },
    {
        name: "AI-Adaptive Onboarding Engine",
        problem: "Generic onboarding processes lead to productivity loss, forcing senior talent into irrelevant training and failing to address critical skill gaps.",
        solution: "A SaaS platform generating personalized, dependency-aware learning roadmaps using LLMs and Topological Sorting (Kahn’s Algorithm) to accelerate talent productivity.",
        outcome: "Hackathon Project",
        repo: "https://github.com/HARSHILL2023/ArtPark_CodeForge_Hackathon",
        demo: "https://art-park-code-forge-hackathon-virid.vercel.app",
        image: "/assets/hackathons/art-park.png",
        tech: ["React", "Express", "Node.js", "MongoDB", "GPT-4o", "Docker", "React Flow"]
    },
    {
        name: "FleetFlow - Logistics System",
        problem: "Manual fleet management leads to operational inefficiencies, poor vehicle tracking, and a lack of real-time insights for logistics providers.",
        solution: "A full-stack management system featuring secure vehicle/driver tracking, JWT authentication, and a scalable RESTful API architecture for rapid logistics digitization.",
        outcome: "Hackathon Submission",
        repo: "https://github.com/HARSHILL2023/odoo_x_gujarat-vidyapith",
        demo: "",
        image: "/assets/hackathons/fleet-flow.png",
        tech: ["React (Vite)", "Node.js", "Express", "MongoDB Atlas", "JWT", "Vercel"]
    }
];

export default function HackathonSection() {
    return (
        <section id="hackathons" className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                        Competitive Coding
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        Hackathon <span className="text-purple-400">Arena</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {hackathons.map((hack, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group rounded-3xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/20 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                                {/* Large Strategic Image Container */}
                                <div className="w-full lg:w-[480px] h-[280px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0 relative shadow-2xl shadow-purple-500/10">
                                    <img 
                                        src={hack.image} 
                                        alt={hack.name} 
                                        loading="lazy"
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                                        <div className="p-2 rounded-xl bg-purple-500/20 backdrop-blur-md border border-purple-500/30">
                                            <Trophy size={22} className="text-purple-400" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-between py-2">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                            <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">{hack.name}</h3>
                                            <span className="px-4 py-1.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 uppercase tracking-[0.2em] backdrop-blur-sm">
                                                {hack.outcome}
                                            </span>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                            <div className="space-y-3">
                                                <h4 className="text-[10px] font-mono uppercase text-purple-400/80 tracking-[0.2em] flex items-center gap-2">
                                                    <Code size={12} /> Problem
                                                </h4>
                                                <p className="text-[13px] text-white/60 leading-relaxed font-light">
                                                    {hack.problem}
                                                </p>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-[10px] font-mono uppercase text-emerald-400/80 tracking-[0.2em] flex items-center gap-2">
                                                    <ExternalLink size={12} /> Solution
                                                </h4>
                                                <p className="text-[13px] text-white/60 leading-relaxed font-light">
                                                    {hack.solution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Tech Stack Integration */}
                                        <div className="mt-8">
                                            <h4 className="text-[10px] font-mono uppercase text-blue-400/80 tracking-[0.2em] mb-4 flex items-center gap-2">
                                                <Cpu size={12} /> Technical Architecture
                                            </h4>
                                            <div className="flex flex-wrap gap-2.5">
                                                {hack.tech.map((t, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-lg border border-white/5 bg-white/[0.03] text-[10px] text-white/40 font-mono group-hover:border-purple-500/20 group-hover:text-white/60 transition-all">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 mt-10 pt-8 border-t border-white/5">
                                        <a href={hack.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-purple-400 transition-all group/link">
                                            <LinkIcon size={14} className="group-hover/link:-rotate-12 transition-transform" /> Repository
                                        </a>
                                        {hack.demo && (
                                            <a href={hack.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-emerald-400 transition-all group/link">
                                                <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" /> Live Architecture
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code, Link as LinkIcon, ExternalLink } from "lucide-react";

const hackathons = [
    {
        name: "Google Solution Challenge 2024",
        problem: "Climate change impact on local agriculture and food security.",
        solution: "EcoTrack: An AI-powered platform for sustainable farming and resource optimization.",
        outcome: "Global Top 100 Finalist",
        repo: "https://github.com/HARSHILL2023",
        demo: "https://youtube.com/demo1"
    },
    {
        name: "Smart India Hackathon 2023",
        problem: "Automating manual record-keeping for MSMEs.",
        solution: "BizLedger: Hyperledger-based secure transparent accounting system.",
        outcome: "Winner (National Level)",
        repo: "https://github.com/HARSHILL2023",
        demo: "https://youtube.com/demo2"
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
                            className="relative group rounded-3xl p-8 border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30">
                                    <Trophy size={32} className="text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-white">{hack.name}</h3>
                                        <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-widest">
                                            {hack.outcome}
                                        </span>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <h4 className="text-xs font-mono uppercase text-purple-400 tracking-widest mb-2 flex items-center gap-2">
                                                <Code size={14} /> Problem
                                            </h4>
                                            <p className="text-sm text-white/70 leading-relaxed font-medium">
                                                {hack.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-widest mb-2 flex items-center gap-2">
                                                <ExternalLink size={14} /> Solution
                                            </h4>
                                            <p className="text-sm text-white/70 leading-relaxed font-medium">
                                                {hack.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/5">
                                        <a href={hack.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                                            <LinkIcon size={14} /> Repository
                                        </a>
                                        <a href={hack.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                                            <ExternalLink size={14} /> Video Demo
                                        </a>
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

import React from "react";
import { motion } from "framer-motion";
import { Star, Milestone, Award } from "lucide-react";

const achievements = [
    {
        title: "Top 1% React Developer",
        provider: "GitHub Community",
        description: "Recognized for contributions and performance in modern web architecture.",
        icon: <Star className="text-yellow-400" />
    },
    {
        title: "100+ Production Deployments",
        provider: "Vercel / AWS",
        description: "Maintained 99.9% uptime for enterprise-scale React applications.",
        icon: <Milestone className="text-purple-400" />
    },
    {
        title: "Open Source Contributor",
        provider: "Major Libraries",
        description: "Active contributor to core UI libraries and performance optimization tools.",
        icon: <Award className="text-cyan-400" />
    }
];

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                        Milestones
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                        Core <span className="text-purple-400">Achievements</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 group"
                        >
                            <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-purple-500/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-[10px] uppercase font-mono tracking-widest text-purple-400 mb-4">{item.provider}</p>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

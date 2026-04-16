import React from "react";
import { Github, ExternalLink, Youtube, Figma, Server } from "lucide-react";

export default function ProjectCard({
    title = "Project Title",
    description = "Project description goes here with technical details.",
    tag = "Development",
    status = "Live",
    link = "#",
    github = "",
    youtube = "",
    figma = "",
    api = "",
    className = ""
}) {
    return (
        <div 
            className={`w-full flex flex-col rounded-[2rem] p-8 border border-white/10 shadow-2xl hover:border-purple-500/40 transition-all duration-500 group relative overflow-hidden ${className}`}
            style={{
                background: 'rgba(10, 8, 20, 0.4)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            }}
        >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Header Row */}
            <div className="flex justify-between items-start relative z-10">
                <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <span className="text-[10px] font-bold text-purple-300 tracking-widest uppercase">
                        {tag}
                    </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">
                    {status}
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mt-6 group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
                <p className="text-white/60 text-sm mt-3 line-clamp-2 leading-relaxed min-h-[40px]">
                    {description}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/5 relative z-10">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded-xl bg-white text-black hover:bg-purple-400 hover:text-white transition-all active:scale-95"
                    >
                        <ExternalLink size={14} /> Live
                    </a>
                )}
                <div className="flex gap-2">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all active:scale-95" title="GitHub Source">
                            <Github size={18} />
                        </a>
                    )}
                    {youtube && (
                        <a href={youtube} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-red-500/20 hover:border-red-500/40 transition-all active:scale-95" title="YouTube Demo">
                            <Youtube size={18} />
                        </a>
                    )}
                    {figma && (
                        <a href={figma} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/40 transition-all active:scale-95" title="Figma Design">
                            <Figma size={18} />
                        </a>
                    )}
                    {api && (
                        <a href={api} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all active:scale-95" title="API Documentation">
                            <Server size={18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}


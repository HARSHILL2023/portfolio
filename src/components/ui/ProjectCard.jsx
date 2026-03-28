import React from "react";

/**
 * Minimal dark-themed ProjectCard as requested by the redesign prompt.
 * Features a clean layout without extra canvas/wave graphics, strict 2-line descriptions,
 * clear action buttons, and a focused dark color palette.
 */
export default function ProjectCard({
    title = "Project Title",
    description = "Project description goes here with technical details.",
    tag = "Development",
    status = "Live",
    link = "#",
    className = ""
}) {
    return (
        <div 
            className={`w-full flex flex-col bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(139,92,246,0.4)] hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 ${className}`}
        >
            {/* Category Tag */}
            <div className="self-start px-3 py-1 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                    {tag}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mt-5">
                {title}
            </h3>

            {/* Description (strict 2 lines via line-clamp) */}
            <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed min-h-[40px]">
                {description}
            </p>

            {/* Bottom Row */}
            <div className="mt-8 flex justify-between items-center pt-5 border-t border-white/5">
                {/* Analyze Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
                >
                    Analyze
                </a>

                {/* Status Pill */}
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] text-gray-500">
                    {status}
                </span>
            </div>
        </div>
    );
}

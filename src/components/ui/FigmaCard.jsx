import React from "react";
import { motion } from "framer-motion";
import { Figma, Eye, Star, Layout } from "lucide-react";

export default function FigmaCard({ 
    title, 
    description, 
    image, 
    figmaLink, 
    tags, 
    isFeatured = false 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative flex flex-col rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]"
        >
            {/* Featured Badge */}
            {isFeatured && (
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-purple-500/20">
                    <Star size={12} fill="currentColor" />
                    Featured Design
                </div>
            )}

            {/* Preview Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Figma Icon */}
                <div className="absolute top-6 right-6 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Figma size={20} />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-[0.15em] text-white/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
                
                <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
                    <a
                        href={figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-purple-500 hover:text-white transition-all duration-300 active:scale-95"
                    >
                        <Figma size={14} /> View Design
                    </a>
                    <button
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 font-bold uppercase tracking-widest text-[10px] cursor-not-allowed group-hover:text-white/60 transition-all"
                        disabled
                    >
                        <Layout size={14} /> Prototype Ready
                    </button>
                </div>
            </div>

            {/* Subtle Gradient Border Glow */}
            <div className="absolute inset-0 p-[1px] rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}

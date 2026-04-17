import React from "react";
import { motion } from "framer-motion";
import FigmaCard from "./ui/FigmaCard";

const projects = [
    {
        title: "Cubextra OTT Platform",
        description: "A modern OTT streaming platform UI designed for seamless content discovery and immersive viewing experience, featuring intuitive navigation, personalized recommendations, and sleek media presentation.",
        image: "/assets/cubextra.png",
        figmaLink: "https://www.figma.com/design/crvd8JlvwBClPBBdkkx9nM/poco--design?node-id=391-297&t=qnuN8fsOwAAdjeL9-1",
        tags: ["UI Design", "Mobile Design", "E-commerce"],
        isFeatured: true
    },
    {
        title: "Test Platform",
        description: "A flexible and scalable testing platform interface built for performance monitoring and system validation, focusing on clarity, usability, and efficient workflow management.",
        image: "/assets/test-platform.png",
        figmaLink: "",
        tags: ["Dashboard", "SaaS", "Enterprise"],
        isFeatured: false
    },
    {
        title: "Nike Shoes Design",
        description: "A stylish and high-conversion e-commerce UI concept for showcasing Nike footwear, designed with bold visuals, smooth product browsing, and an engaging shopping experience.",
        image: "/assets/nike.png",
        figmaLink: "",
        tags: ["Web3", "Finance", "Security"],
        isFeatured: false
    }
];


export default function FigmaShowcase() {
    return (
        <section className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden">
            {/* Background Ambient Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-[10px] font-mono tracking-[0.2em] uppercase mb-6 bg-purple-500/5">
                        Design Studio
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4">
                        Figma <span className="text-purple-400">Designs</span>
                    </h2>
                    <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] max-w-lg mx-auto">
                        High-fidelity UI/UX designs and interactive prototypes crafted for digital precision.
                    </p>
                </motion.div>

                {/* Grid Layout: 1 col on Mobile, 2 on Tablet, 3 on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, idx) => (
                        <FigmaCard 
                            key={idx}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


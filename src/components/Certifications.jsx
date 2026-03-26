import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: "Google AI Agent Camp Certificate",
        issuer: "Google Kaggle",
        date: "2024",
        url: "https://drive.google.com/file/d/1pgr2FfDp53mVSGFYCnaeRTW82QkwxScF/view?usp=drivesdk",
        color: "from-blue-500 to-cyan-500",
        description: "Successfully completed the Google AI Agent Camp, gaining knowledge and hands-on experience in AI concepts and practical implementations."
    },
    {
        title: "Web Development Hackathon",
        issuer: "Sanagma University",
        date: "2024",
        url: "https://drive.google.com/file/d/1OkSxhxNUC41Ep-jYvjS4sh1RSe4VFvzZ/view?usp=drivesdk",
        color: "from-purple-500 to-pink-500",
        description: "Participated in a web development hackathon at Sanagma University, focusing on building practical and innovative web solutions."
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-40 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                        Certifications
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
                        Industry-recognized proofs of technical competence and continuous professional growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto justify-items-center">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Animated Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-700" />
                            
                            {/* Decorative Accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} mb-6 flex items-center justify-center text-xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
                                    🏆
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm font-medium mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">{cert.date}</p>
                                
                                {cert.description && (
                                    <p className="text-gray-500 text-[11px] leading-relaxed mb-6 group-hover:text-gray-400 transition-colors line-clamp-3">
                                        {cert.description}
                                    </p>
                                )}
                                
                                <div className="mt-auto">
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-all group-hover:gap-4"
                                    >
                                        View Certificate
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

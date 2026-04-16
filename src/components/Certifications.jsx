import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award } from 'lucide-react';

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
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-8">
                        The Credentials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
                        Official <span className="text-purple-400">Verifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative border border-white/10 p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer hover:border-purple-400/40"
                            style={{
                                background: 'rgba(10, 8, 20, 0.4)',
                                backdropFilter: 'blur(20px) saturate(160%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                            }}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="p-4 w-fit rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Award className="text-purple-400" size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-white/60 text-sm font-medium">{cert.issuer}</p>
                                    <p className="text-purple-400 text-[10px] font-mono uppercase tracking-widest">{cert.date}</p>
                                </div>

                                <p className="text-white/40 text-sm leading-relaxed mb-8">
                                    {cert.description}
                                </p>

                                <button className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                    View Protocol Details
                                    <X className="rotate-[135deg]" size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-zinc-900/90 border border-white/10 p-12 rounded-[3rem] shadow-3xl text-center"
                        >
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90"
                            >
                                <X size={24} />
                            </button>

                            <div className="inline-flex items-center justify-center p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 mb-10">
                                <Award className="text-purple-400" size={48} />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {selectedCert.title}
                            </h2>
                            <p className="text-purple-300 font-mono text-xs uppercase tracking-[0.3em] mb-8">
                                Issued by {selectedCert.issuer} • {selectedCert.date}
                            </p>
                            
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
                                {selectedCert.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={selectedCert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all duration-300"
                                >
                                    Verify Certificate <ExternalLink size={16} />
                                </a>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-300"
                                >
                                    Return to Terminal
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // Replace these with your actual local EmailJS Service ID, Template ID, and Public Key
        // I am setting them as placeholders for the user to fill.
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setStatus('success');
                setIsSubmitting(false);
                form.current.reset();
            }, (error) => {
                setStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-24 md:py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                                Get In Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-8">
                                Signal <span className="text-purple-400">Interception</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md">
                                Have a specialized project or just want to discuss high-signal technical architectures? Send a frequency.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                                        <Mail className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Email</p>
                                        <p className="text-white font-medium">harshil.dev@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                                        <MapPin className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Location</p>
                                        <p className="text-white font-medium">Gujarat, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1">
                        <motion.form
                            ref={form}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Identity Name</label>
                                    <input 
                                        type="text" 
                                        name="user_name" 
                                        required
                                        placeholder="Cipher Node"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        required
                                        placeholder="node@network.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Encrypted Message</label>
                                    <textarea 
                                        name="message" 
                                        required
                                        rows="4"
                                        placeholder="Transmission content..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all font-medium resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-500 disabled:bg-white/10 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-xs py-5 rounded-2xl transition-all overflow-hidden"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            Initialize Transmission
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-3 text-emerald-400 text-xs font-mono uppercase tracking-widest bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20"
                                    >
                                        <CheckCircle size={16} /> Transmission Complete
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-3 text-red-400 text-xs font-mono uppercase tracking-widest bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                                    >
                                        <AlertCircle size={16} /> Transmission Failed
                                    </motion.div>
                                )}
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

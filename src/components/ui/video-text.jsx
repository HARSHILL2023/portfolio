"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * VideoText Component
 * 
 * Creates a text overlay effect where a video plays inside the text characters.
 * Supports rotating through a list of words.
 */
export function VideoText({
    src,
    text, // Single string
    words, // Array of strings for rotation
    duration = 2000,
    className,
    containerClassName,
}) {
    const [index, setIndex] = useState(0);
    const displayWords = words || (text ? [text] : []);

    useEffect(() => {
        if (displayWords.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % displayWords.length);
        }, duration);

        return () => clearInterval(interval);
    }, [displayWords, duration]);

    return (
        <div
            className={cn(
                "relative inline-block overflow-hidden rounded-2xl bg-black",
                containerClassName
            )}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                src={src}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div
                className={cn(
                    "relative z-10 bg-black text-white mix-blend-multiply flex items-center justify-center py-4 px-8",
                    className
                )}
            >
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={displayWords[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter italic select-none text-center whitespace-nowrap"
                    >
                        {displayWords[index]}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </div>
    );
}

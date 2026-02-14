"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({
    number = 20,
    minDelay = 0.2,
    maxDelay = 2,
    minDuration = 8,
    maxDuration = 20,
    angle = 215,
    className,
}) => {
    const [meteorStyles, setMeteorStyles] = useState([]);

    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            "--angle": angle + "deg",
            top: "-10%",
            right: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
            animationDuration:
                Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
                "s",
        }));
        setMeteorStyles(styles);
    }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

    return (
        <>
            {[...meteorStyles].map((style, idx) => (
                <span
                    key={idx}
                    style={{ ...style }}
                    className={cn(
                        "animate-meteor pointer-events-none absolute size-1 rotate-[var(--angle)] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]",
                        className
                    )}
                >
                    {/* Meteor Tail - Trailing behind for 215deg direction */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[60px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
                </span>
            ))}
        </>
    );
};

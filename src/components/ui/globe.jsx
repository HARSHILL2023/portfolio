"use strict";

import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { cn } from "../../lib/utils";

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.03 },
        { location: [23.0225, 72.5714], size: 0.0104 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [35.6895, 139.6917], size: 0.1 },
        { location: [-34.6037, -58.3816], size: 0.1 },
    ],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [r, setR] = useState(0);

    const updatePointerInteraction = (value) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab";
        }
    };

    const updateMovement = (delta) => {
        if (pointerInteracting.current !== null) {
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
        }
    };

    const onRender = useCallback(
        (state) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + r;
            state.width = width * 2;
            state.height = width * 2;
        },
        [r],
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => (canvasRef.current.style.opacity = "1"));
        return () => globe.destroy();
    }, [onRender, config]);

    return (
        <div
            className={cn(
                "inset-0 mx-auto aspect-square h-full w-full max-w-[600px]",
                className,
            )}
        >
            <canvas
                className={cn(
                    "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current,
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) =>
                    updateMovement(e.clientX - pointerInteracting.current)
                }
                onTouchMove={(e) =>
                    e.touches[0] &&
                    updateMovement(e.touches[0].clientX - pointerInteracting.current)
                }
            />
        </div>
    );
}

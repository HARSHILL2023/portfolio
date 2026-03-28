import React, { useState, useEffect, useRef } from 'react';

export const Magnet = ({
    children,
    padding = 100,
    disabled = false,
    magnetStrength = 2.5,
    activeTransition = "transform 0.1s ease-out",
    inactiveTransition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    wrapperClassName = "",
    innerClassName = "",
    ...props
}) => {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const magnetRef = useRef(null);

    useEffect(() => {
        if (disabled) {
            setPosition({ x: 0, y: 0 });
            return;
        }

        const handleMouseMove = (e) => {
            if (!magnetRef.current) return;
            
            const { clientX, clientY } = e;
            const rect = magnetRef.current.getBoundingClientRect();
            
            const middleX = clientX - (rect.left + rect.width / 2);
            const middleY = clientY - (rect.top + rect.height / 2);

            // Calculate distance from center of bounding box to cursor
            const distance = Math.sqrt(middleX * middleX + middleY * middleY);

            if (distance < padding) {
                setIsActive(true);
                // The strength determines how far the element moves towards the cursor.
                setPosition({ x: middleX / magnetStrength, y: middleY / magnetStrength });
            } else {
                setIsActive(false);
                setPosition({ x: 0, y: 0 });
            }
        };

        const handleMouseLeave = () => {
            setIsActive(false);
            setPosition({ x: 0, y: 0 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, [padding, disabled, magnetStrength]);

    return (
        <div 
            ref={magnetRef} 
            className={`relative inline-block ${wrapperClassName}`}
            style={{ position: 'relative' }}
            {...props}
        >
            <div 
                className={innerClassName}
                style={{ 
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`, 
                    transition: isActive ? activeTransition : inactiveTransition, 
                    willChange: "transform",
                }}
            >
                {children}
            </div>
        </div>
    );
};

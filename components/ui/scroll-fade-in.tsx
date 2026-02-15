"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollFadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function ScrollFadeIn({
    children,
    delay = 0,
    className,
}: ScrollFadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

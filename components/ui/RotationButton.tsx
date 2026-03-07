"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * RotationNavItem — 3D rotation hover effect
 *
 * Recreates the Framer "Rotation Button" using the 3D arms technique.
 * - Arm 1 (Default Text): Rotates 0° → 25°
 * - Arm 2 (Fill Background): Rotates -18° → 0°
 * - Arm 3 (Hover Text): Rotates -35° → 0°
 */

const springMain = {
    type: "spring" as const,
    bounce: 0.35,
    duration: 0.6,
};

const springDelayed = {
    type: "spring" as const,
    bounce: 0.25,
    duration: 0.5,
    delay: 0.03,
};

export default function RotationNavItem({
    label,
    isActive = false,
    className = "",
}: {
    label: string;
    isActive?: boolean;
    className?: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const showActive = isActive || isHovered;

    return (
        <span
            className={`relative inline-flex h-11 cursor-pointer items-center justify-center px-6 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
            {/* Invisible helper text to define width */}
            <span
                className="pointer-events-none select-none text-[15px] font-medium leading-none tracking-wide"
                style={{ opacity: 0 }}
                aria-hidden="true"
            >
                {label}
            </span>

            {/* ─── Arm 1: Default Text (Light Gray) ─── */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    width: "200%",
                    left: "-50%", // Center the 200% width arm over the container
                    transformOrigin: "100% 50%",
                    transformStyle: "preserve-3d",
                    zIndex: 1,
                }}
                initial={false}
                animate={{
                    rotate: showActive ? 25 : 0,
                    opacity: showActive ? 0 : 1,
                }}
                transition={springMain}
            >
                <span className="text-[15px] font-medium leading-none tracking-wide text-[#e7e5e4]/80">
                    {label}
                </span>
            </motion.span>

            {/* ─── Arm 2: Pill Background (Light Gray) ─── */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    width: "200%",
                    left: "-50%",
                    transformOrigin: "100% 50%",
                    transformStyle: "preserve-3d",
                    zIndex: 2,
                }}
                initial={false}
                animate={{
                    rotate: showActive ? 0 : -18,
                    opacity: showActive ? 1 : 0,
                }}
                transition={springMain}
            >
                {/* The actual background pill — matches the container size */}
                <span className="absolute left-1/4 h-full w-1/2 rounded-full bg-[#e7e5e4]" />
            </motion.span>

            {/* ─── Arm 3: Hover Text (Dark) ─── */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    width: "200%",
                    left: "-50%",
                    transformOrigin: "100% 50%",
                    transformStyle: "preserve-3d",
                    zIndex: 3,
                }}
                initial={false}
                animate={{
                    rotate: showActive ? 0 : -35,
                    opacity: showActive ? 1 : 0,
                }}
                transition={springDelayed}
            >
                <motion.span
                    className="text-[15px] font-medium leading-none tracking-wide text-[#0c0a09]"
                    initial={false}
                    animate={{ scale: showActive ? 1 : 0.6 }}
                    transition={springDelayed}
                >
                    {label}
                </motion.span>
            </motion.span>
        </span>
    );
}

"use client";

import { motion } from "framer-motion";

/* ── Architecture Graph Data ─────────────────────────────── */
const centralNode = { cx: 200, cy: 140, r: 22 };

const serviceNodes = [
  { cx: 90, cy: 60, r: 12 },
  { cx: 310, cy: 60, r: 12 },
  { cx: 55, cy: 160, r: 12 },
  { cx: 345, cy: 160, r: 12 },
  { cx: 110, cy: 240, r: 12 },
  { cx: 290, cy: 240, r: 12 },
];

const edges = serviceNodes.map((n) => ({
  x1: centralNode.cx,
  y1: centralNode.cy,
  x2: n.cx,
  y2: n.cy,
}));

export function AboutHero() {
  return (
    <section className="relative px-6 pb-20 pt-20 md:pt-28 overflow-hidden">
      {/* Background architecture SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 400 300"
          className="w-full max-w-2xl opacity-100"
          fill="none"
        >
          {/* Edges */}
          {edges.map((e, i) => (
            <motion.line
              key={`e-${i}`}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.8"
              strokeDasharray="120"
              initial={{ strokeDashoffset: 120, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Central node */}
          <motion.circle
            cx={centralNode.cx}
            cy={centralNode.cy}
            r={centralNode.r}
            fill="rgba(255,255,255,0.02)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.8"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          {/* Pulse ring */}
          <motion.circle
            cx={centralNode.cx}
            cy={centralNode.cy}
            r={centralNode.r + 8}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.6"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 4,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Service nodes */}
          {serviceNodes.map((node, i) => (
            <motion.circle
              key={`n-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="rgba(255,255,255,0.015)"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.6"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.35 + i * 0.08,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="ui-label mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Orydle
        </motion.p>

        <motion.h1
          className="editorial-h1 mb-6 text-platinum leading-[1.2]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          We believe software should follow the&nbsp;system.
          <br />
          <em>Not the other way around.</em>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-xl text-[18px] leading-relaxed text-platinum/55"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Orydle exists because growing systems lose clarity by default.
          We&apos;re building Krum to make structural truth inevitable, not
          aspirational.
        </motion.p>
      </div>
    </section>
  );
}

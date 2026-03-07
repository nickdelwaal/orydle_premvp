"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ── SVG Architecture Graph Nodes ──────────────────────────── */
const centralNode = { cx: 200, cy: 180, r: 28, label: "System" };

const serviceNodes = [
  { cx: 80, cy: 70, r: 16, label: "Auth" },
  { cx: 320, cy: 70, r: 16, label: "API" },
  { cx: 60, cy: 200, r: 16, label: "Data" },
  { cx: 340, cy: 200, r: 16, label: "Events" },
  { cx: 100, cy: 310, r: 16, label: "Agent" },
  { cx: 300, cy: 310, r: 16, label: "Deploy" },
];

const edges = serviceNodes.map((n) => ({
  x1: centralNode.cx,
  y1: centralNode.cy,
  x2: n.cx,
  y2: n.cy,
}));

/* ── Floating Labels ───────────────────────────────────────── */
const floatingLabels = [
  { text: "System is truth", x: 10, y: 30 },
  { text: "Architecture is data", x: 260, y: 360 },
  { text: "Code follows structure", x: 300, y: 30 },
];

export function ApproachHero() {
  return (
    <section className="px-6 pb-16 pt-14 md:pt-18">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[6fr_5fr] md:items-center">
        {/* ── Left Column ── */}
        <div>
          <motion.p
            className="ui-label mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            THE APPROACH
          </motion.p>

          <motion.h1
            className="editorial-h1 mb-6 text-platinum"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The proof behind <em>the alignment model</em>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-[18px] leading-relaxed text-platinum/65"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            For engineers who want to understand why Krum works — not just that it does.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link
              href="/request-access"
              className="cta-button"
            >
              Request Early Access →
            </Link>
          </motion.div>
        </div>

        {/* ── Right Column: SVG Architecture Diagram ── */}
        <motion.div
          className="relative overflow-visible rounded-2xl border border-white/10 bg-gradient-to-br from-[#141210]/80 to-[#0c0a09]/80 p-4 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Faint radial glow inside */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden rounded-2xl">
            <div className="w-[500px] h-[500px] bg-blue-500 opacity-[0.03] rounded-full blur-[80px]" />
          </div>

          <svg
            viewBox="0 0 400 380"
            className="relative z-10 w-full"
            fill="none"
          >
            {/* ── Edges ── */}
            {edges.map((e, i) => (
              <motion.line
                key={`edge-${i}`}
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
                strokeDasharray="120"
                initial={{ strokeDashoffset: 120, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* ── Central Node ── */}
            <motion.circle
              cx={centralNode.cx}
              cy={centralNode.cy}
              r={centralNode.r}
              fill="#0f0d0c"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            {/* Central pulse ring */}
            <motion.circle
              cx={centralNode.cx}
              cy={centralNode.cy}
              r={centralNode.r + 6}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.9, 1.3, 0.9] }}
              transition={{
                duration: 3,
                delay: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.text
              x={centralNode.cx}
              y={centralNode.cy + 4}
              textAnchor="middle"
              className="fill-platinum/70 text-[10px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {centralNode.label}
            </motion.text>

            {/* ── Service Nodes ── */}
            {serviceNodes.map((node, i) => (
              <g key={node.label}>
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="#0f0d0c"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.1 }}
                />
                <motion.text
                  x={node.cx}
                  y={node.cy + 3.5}
                  textAnchor="middle"
                  className="fill-platinum/55 text-[8px] font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.65 + i * 0.1 }}
                >
                  {node.label}
                </motion.text>
              </g>
            ))}

            {/* ── Floating Principle Labels ── */}
            {floatingLabels.map((lbl, i) => (
              <motion.text
                key={lbl.text}
                x={lbl.x}
                y={lbl.y}
                className="fill-platinum/25 text-[9px] font-mono"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0.5],
                  y: [lbl.y, lbl.y - 4, lbl.y],
                }}
                transition={{
                  duration: 4,
                  delay: 1.6 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {lbl.text}
              </motion.text>
            ))}
          </svg>

          {/* Bottom caption */}
          <div className="border-t border-white/5 mt-2 px-3 py-3 text-[13px] text-platinum/40 font-mono">
            System is truth. Architecture is data. Code follows structure.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

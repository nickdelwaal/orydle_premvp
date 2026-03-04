"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ── Trust Indicator Data ─────────────────────────────────── */
interface TrustCard {
  icon: ReactNode;
  label: string;
  explanation: string;
}

const trustCards: TrustCard[] = [
  {
    label: "Encryption in transit",
    explanation: "All data encrypted via TLS 1.3 between client and services.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: "Encryption at rest",
    explanation: "Stored data encrypted with AES-256 in isolated environments.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
      </svg>
    ),
  },
  {
    label: "Role-based access control",
    explanation: "Permissions follow least-privilege policies per role.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    label: "Audit logging",
    explanation: "Complete trail of architecture changes and access events.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

/* ── Background Diagram Nodes ─────────────────────────────── */
const secNodes = [
  { cx: 60, cy: 70, label: "User" },
  { cx: 160, cy: 70, label: "Auth" },
  { cx: 260, cy: 70, label: "Services" },
  { cx: 360, cy: 70, label: "Storage" },
];

const secEdges = [
  { x1: 72, y1: 70, x2: 148, y2: 70 },
  { x1: 172, y1: 70, x2: 248, y2: 70 },
  { x1: 272, y1: 70, x2: 348, y2: 70 },
];

export function SecurityHero() {
  return (
    <section className="relative px-6 pb-16 pt-14 md:pt-20 overflow-hidden">
      {/* Background security diagram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg viewBox="0 0 420 140" className="w-full max-w-2xl" fill="none">
          {secEdges.map((e, i) => (
            <motion.line
              key={`se-${i}`}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.8"
              strokeDasharray="120"
              initial={{ strokeDashoffset: 120 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: "easeOut" }}
            />
          ))}
          {secNodes.map((n, i) => (
            <g key={n.label}>
              <motion.circle
                cx={n.cx} cy={n.cy} r="14"
                fill="rgba(255,255,255,0.02)"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.6"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              />
              <motion.text
                x={n.cx} y={n.cy + 3.5}
                textAnchor="middle"
                className="text-[7px] font-mono"
                fill="rgba(255,255,255,0.2)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.12 }}
              >
                {n.label}
              </motion.text>
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-4">Security</p>
          <h1 className="editorial-h1 mb-6 text-platinum">
            Security and <em>trust</em>
          </h1>
          <p className="mx-auto max-w-xl text-[18px] leading-relaxed text-platinum/55">
            How we handle your system data and code with enterprise-grade
            protection at every layer.
          </p>
        </motion.div>

        {/* Trust Indicator Cards */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {trustCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-white/[0.06] bg-[#0a0908]/50 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-platinum/50">
                {card.icon}
              </div>
              <h3 className="mb-1 text-[14px] font-medium text-platinum/80">
                {card.label}
              </h3>
              <p className="text-[13px] leading-relaxed text-platinum/40">
                {card.explanation}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

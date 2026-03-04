"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ── Graph Data ──────────────────────────────────────────── */
interface GraphNode {
  id: string;
  label: string;
  cx: number;
  cy: number;
  layer: "intent" | "structure" | "execution";
}

interface GraphEdge {
  from: string;
  to: string;
}

const nodes: GraphNode[] = [
  // Intent layer
  { id: "req", label: "Reqs", cx: 200, cy: 40, layer: "intent" },
  { id: "rules", label: "Rules", cx: 320, cy: 60, layer: "intent" },
  // Structure layer
  { id: "auth", label: "Auth", cx: 80, cy: 140, layer: "structure" },
  { id: "api", label: "API", cx: 200, cy: 130, layer: "structure" },
  { id: "data", label: "Data", cx: 320, cy: 140, layer: "structure" },
  { id: "events", label: "Events", cx: 140, cy: 190, layer: "structure" },
  // Execution layer
  { id: "svc1", label: "Svc-A", cx: 100, cy: 280, layer: "execution" },
  { id: "svc2", label: "Svc-B", cx: 220, cy: 270, layer: "execution" },
  { id: "svc3", label: "Deploy", cx: 320, cy: 290, layer: "execution" },
];

const edges: GraphEdge[] = [
  { from: "req", to: "api" },
  { from: "req", to: "auth" },
  { from: "rules", to: "data" },
  { from: "rules", to: "api" },
  { from: "auth", to: "events" },
  { from: "api", to: "events" },
  { from: "api", to: "data" },
  { from: "events", to: "svc1" },
  { from: "events", to: "svc2" },
  { from: "data", to: "svc2" },
  { from: "data", to: "svc3" },
  { from: "api", to: "svc1" },
];

const layerColors = {
  intent: { stroke: "rgba(168,140,255,0.5)", fill: "rgba(168,140,255,0.08)" },
  structure: { stroke: "rgba(96,165,250,0.5)", fill: "rgba(96,165,250,0.08)" },
  execution: {
    stroke: "rgba(74,222,128,0.45)",
    fill: "rgba(74,222,128,0.06)",
  },
};

const scenarios = [
  {
    trigger: "When you change the Intent Layer:",
    outcomes: [
      "Structure updates to match",
      "Execution scaffolding regenerates",
    ],
    fallback: "System flags conflicts and requires resolution",
  },
  {
    trigger: "When you change the Structure Layer:",
    outcomes: ["Intent validation runs", "Execution code updates"],
    fallback: "Dependency violations surface immediately",
  },
  {
    trigger: "When you change the Execution Layer:",
    outcomes: [
      "Structure consistency check runs",
      "Intent alignment verified",
    ],
    fallback: "Change is rejected with explanation",
  },
];

/* ── Helpers ─────────────────────────────────────────────── */
function getNodeById(id: string) {
  return nodes.find((n) => n.id === id);
}

function getConnected(nodeId: string): Set<string> {
  const connected = new Set<string>();
  for (const e of edges) {
    if (e.from === nodeId) connected.add(e.to);
    if (e.to === nodeId) connected.add(e.from);
  }
  return connected;
}

/* ── Component ───────────────────────────────────────────── */
export function EnforcementModel() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const connectedSet = hoveredNode ? getConnected(hoveredNode) : new Set<string>();

  const isNodeHighlighted = useCallback(
    (nodeId: string) => {
      if (hoveredNode) {
        return nodeId === hoveredNode || connectedSet.has(nodeId);
      }
      if (activeLayer) {
        return getNodeById(nodeId)?.layer === activeLayer;
      }
      return true;
    },
    [hoveredNode, connectedSet, activeLayer]
  );

  const isEdgeHighlighted = useCallback(
    (edge: GraphEdge) => {
      if (hoveredNode) {
        return edge.from === hoveredNode || edge.to === hoveredNode;
      }
      if (activeLayer) {
        const fromNode = getNodeById(edge.from);
        const toNode = getNodeById(edge.to);
        return fromNode?.layer === activeLayer || toNode?.layer === activeLayer;
      }
      return false;
    },
    [hoveredNode, activeLayer]
  );

  const layers = [
    { key: "intent", label: "Intent" },
    { key: "structure", label: "Structure" },
    { key: "execution", label: "Execution" },
  ];

  return (
    <section ref={ref} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="ui-label mb-3">System Map Explorer</p>
          <h2 className="editorial-h2 text-platinum">
            Changes propagate or get <em>rejected</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-[5fr_6fr] md:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Left column: Explanation */}
          <div className="space-y-6">
            {/* Layer toggles */}
            <div>
              <p className="text-[13px] font-mono text-platinum/40 mb-3 uppercase tracking-widest">
                Toggle Layers
              </p>
              <div className="flex flex-wrap gap-2">
                {layers.map((l) => (
                  <button
                    key={l.key}
                    onClick={() =>
                      setActiveLayer(activeLayer === l.key ? null : l.key)
                    }
                    className={`rounded-full border px-4 py-1.5 text-[13px] font-mono transition-all duration-200 ${activeLayer === l.key
                        ? "border-white/20 bg-white/10 text-platinum/90"
                        : "border-white/[0.06] bg-white/[0.02] text-platinum/45 hover:border-white/10 hover:text-platinum/60"
                      }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario cards */}
            <div className="space-y-4">
              {scenarios.map((scenario) => (
                <div
                  key={scenario.trigger}
                  className="rounded-xl border border-white/[0.06] bg-[#0a0908]/40 p-5 backdrop-blur-sm"
                >
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-platinum/50">
                    {scenario.trigger}
                  </p>
                  <div className="space-y-1.5">
                    {scenario.outcomes.map((outcome) => (
                      <p
                        key={outcome}
                        className="flex items-start gap-2 text-[14px] text-platinum/65"
                      >
                        <span className="shrink-0 text-platinum/35">→</span>
                        {outcome}
                      </p>
                    ))}
                    <p className="flex items-start gap-2 text-[14px] text-platinum/45">
                      <span className="shrink-0 text-platinum/30">→</span>
                      <span>OR: {scenario.fallback}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.04] p-4 text-center text-[14px] text-platinum/55">
              This isn&apos;t CI/CD. This is architectural governance as a
              first-class system.
            </div>
          </div>

          {/* Right column: Interactive Architecture Map */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0e0c0b]/80 to-[#0a0908]/80 p-4 backdrop-blur-sm">
            {/* Faint glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden rounded-2xl">
              <div className="w-[400px] h-[400px] bg-blue-500 opacity-[0.02] rounded-full blur-[80px]" />
            </div>

            <svg
              viewBox="0 0 400 340"
              className="relative z-10 w-full"
              fill="none"
            >
              {/* SVG Defs for pulse animation */}
              <defs>
                <linearGradient id="pulse-grad">
                  <stop offset="0%" stopColor="rgba(96,165,250,0)" />
                  <stop offset="50%" stopColor="rgba(96,165,250,0.6)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                </linearGradient>
              </defs>

              {/* Edges */}
              {edges.map((edge, i) => {
                const from = getNodeById(edge.from);
                const to = getNodeById(edge.to);
                if (!from || !to) return null;
                const highlighted = isEdgeHighlighted(edge);
                const dimmed =
                  (hoveredNode || activeLayer) && !highlighted;

                return (
                  <g key={`edge-${i}`}>
                    <motion.line
                      x1={from.cx}
                      y1={from.cy}
                      x2={to.cx}
                      y2={to.cy}
                      stroke={
                        highlighted
                          ? "rgba(96,165,250,0.35)"
                          : "rgba(255,255,255,0.05)"
                      }
                      strokeWidth={highlighted ? 1.2 : 0.8}
                      strokeDasharray="120"
                      initial={{ strokeDashoffset: 120, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                            strokeDashoffset: 0,
                            opacity: dimmed ? 0.3 : 1,
                          }
                          : {}
                      }
                      transition={{
                        strokeDashoffset: {
                          duration: 0.8,
                          delay: 0.5 + i * 0.06,
                          ease: "easeInOut",
                        },
                        opacity: { duration: 0.2 },
                      }}
                    />
                    {/* Pulse dot traveling along highlighted edge */}
                    {highlighted && (
                      <circle r="2" fill="rgba(96,165,250,0.5)">
                        <animateMotion
                          dur="2.5s"
                          repeatCount="indefinite"
                          path={`M${from.cx},${from.cy} L${to.cx},${to.cy}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {nodes.map((node, i) => {
                const highlighted = isNodeHighlighted(node.id);
                const dimmed =
                  (hoveredNode || activeLayer) && !highlighted;
                const colors =
                  layerColors[node.layer];

                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    {/* Glow ring on highlight */}
                    {highlighted && (hoveredNode || activeLayer) && (
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r="20"
                        fill="none"
                        stroke={colors.stroke}
                        strokeWidth="0.5"
                        opacity="0.4"
                      />
                    )}

                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r="14"
                      fill={dimmed ? "rgba(15,13,12,0.6)" : colors.fill}
                      stroke={dimmed ? "rgba(255,255,255,0.04)" : colors.stroke}
                      strokeWidth="1"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={
                        isInView
                          ? { opacity: dimmed ? 0.3 : 1, scale: 1 }
                          : {}
                      }
                      transition={{
                        opacity: { duration: 0.2 },
                        scale: {
                          duration: 0.4,
                          delay: 0.3 + i * 0.06,
                        },
                      }}
                    />
                    <motion.text
                      x={node.cx}
                      y={node.cy + 3.5}
                      textAnchor="middle"
                      className="text-[8px] font-mono pointer-events-none select-none"
                      fill={
                        dimmed
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.6)"
                      }
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: dimmed ? 0.2 : 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + i * 0.06,
                      }}
                    >
                      {node.label}
                    </motion.text>
                  </g>
                );
              })}

              {/* Layer region labels */}
              <text
                x="385"
                y="48"
                textAnchor="end"
                className="text-[8px] font-mono"
                fill="rgba(168,140,255,0.25)"
              >
                intent
              </text>
              <text
                x="385"
                y="165"
                textAnchor="end"
                className="text-[8px] font-mono"
                fill="rgba(96,165,250,0.25)"
              >
                structure
              </text>
              <text
                x="385"
                y="285"
                textAnchor="end"
                className="text-[8px] font-mono"
                fill="rgba(74,222,128,0.2)"
              >
                execution
              </text>
            </svg>

            {/* Legend */}
            <div className="flex items-center justify-center gap-5 border-t border-white/5 mt-2 pt-3 pb-1">
              {layers.map((l) => {
                const c =
                  layerColors[l.key as keyof typeof layerColors];
                return (
                  <div
                    key={l.key}
                    className="flex items-center gap-1.5 text-[10px] font-mono text-platinum/35"
                  >
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.stroke }}
                    />
                    {l.label}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

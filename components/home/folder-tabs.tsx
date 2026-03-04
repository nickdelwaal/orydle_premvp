"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TabId = "mismatch" | "workflow" | "team-fit";

type TabItem = {
  id: TabId;
  label: string;
};

const tabItems: TabItem[] = [
  { id: "mismatch", label: "The Problem" },
  { id: "workflow", label: "How Krum Works" },
  { id: "team-fit", label: "Who It's For" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const slideInItem = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} as const;

const mismatchPoints = [
  "Code diverges from architecture",
  "Architecture diverges from intent",
  "Teams rebuild mental models from scratch",
];

const workflowSteps = [
  { id: "01", label: "Intent Layer", detail: "Define what the system should do, in plain language with constraints" },
  { id: "02", label: "Structure Layer", detail: "Design components visually—services, flows, agents, resources—as formal objects" },
  { id: "03", label: "Execution Layer", detail: "Generate production-ready code that implements your structure and respects your intent" },
];

const teamFitPoints = [
  "Systems span multiple services",
  "New engineers can't grok the codebase in a day",
  "AI coding tools generate correct syntax but wrong architecture",
  "'Just read the code' stopped being a viable answer",
];

function PanelMismatchedTools() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[18px] text-platinum/70">
        Traditional development breaks alignment:
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col gap-5"
      >
        {mismatchPoints.map((point) => (
          <motion.div variants={slideInItem} key={point} className="surface-card flex w-full items-start gap-4 rounded-2xl p-6">
            <div className="mt-1.5 flex w-8 shrink-0 justify-center">
              <span className="h-2 w-2 rounded-full bg-blue-electric" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[16px] leading-relaxed text-platinum/82">{point}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="text-[16px] text-platinum/60">
        Every PR is a gamble. Every new engineer needs weeks to contribute confidently.
      </p>
    </div>
  );
}

function PanelWorkflow() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[18px] text-platinum/70">
        We enforce three-layer consistency:
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col gap-5"
      >
        {workflowSteps.map((step) => (
          <motion.div variants={slideInItem} key={step.id} className="surface-card flex w-full items-start gap-4 rounded-2xl p-6">
            <div className="mt-1 flex w-8 shrink-0 justify-center">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-platinum/60">{step.id}</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <h3 className="editorial-h3 text-[1.25rem] leading-tight text-platinum">
                <em>{step.label}</em>
              </h3>
              <p className="text-[16px] leading-relaxed text-platinum/70">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="text-[16px] text-platinum/60">
        Change one layer? The others update automatically—or the system rejects it if alignment breaks.
      </p>
    </div>
  );
}

function PanelTeamFit() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[18px] text-platinum/70">
        Built for teams where:
      </p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col gap-5"
      >
        {teamFitPoints.map((item) => (
          <motion.div variants={slideInItem} key={item} className="surface-card flex w-full items-start gap-4 rounded-2xl p-6">
            <div className="mt-1.5 flex w-8 shrink-0 justify-center">
              <span className="h-2 w-2 rounded-full bg-blue-electric" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[16px] leading-relaxed text-platinum/80">{item}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <p className="text-[16px] text-platinum/60">
        Primary users: engineers, architects, technical founders scaling past the &lsquo;everyone knows everything&rsquo; phase.
      </p>
    </div>
  );
}

const panels: Record<TabId, React.ReactNode> = {
  mismatch: <PanelMismatchedTools />,
  workflow: <PanelWorkflow />,
  "team-fit": <PanelTeamFit />,
};

const contentVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export function FolderTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("workflow");

  return (
    <section id="system-tabs" className="px-6 py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={slideInItem} className="mb-8">
          <p className="ui-label mb-3">Core Narrative</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Three layers. Always <em>aligned</em>.
          </h2>
        </motion.div>

        <div className="relative">
          {/* ─── Tab row ─── */}
          <motion.div variants={slideInItem} className="relative flex flex-wrap gap-2 px-2 md:px-6">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "folder-tab relative cursor-pointer px-5 py-3 text-sm font-semibold",
                    isActive && "folder-tab-active"
                  )}
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(37, 91, 252, 0.25)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-pressed={isActive}
                >
                  {/* Sliding active background pill */}
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-bg"
                      className="absolute inset-0 rounded-t-[18px]"
                      style={{
                        background: "linear-gradient(180deg, rgba(37, 91, 252, 0.95) 0%, rgba(37, 91, 252, 0.82) 100%)",
                        boxShadow: "0 0 20px rgba(37, 91, 252, 0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
                        zIndex: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {/* Tab label — above the sliding bg */}
                  <span className="relative z-[1]">{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ─── Content panel ─── */}
          <div className="surface-panel relative overflow-hidden px-5 pb-8 pt-9 md:px-8 md:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid-40-overlay rounded-2xl p-4 pt-6 md:p-6"
              >
                {panels[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section >
  );
}

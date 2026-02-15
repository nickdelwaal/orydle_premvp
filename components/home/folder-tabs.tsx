"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { SerratedDivider } from "@/components/ui/serrated-divider";

type TabId = "mismatch" | "workflow" | "team-fit";

type TabItem = {
  id: TabId;
  label: string;
  rotation: number;
};

const tabItems: TabItem[] = [
  { id: "mismatch", label: "Why tools break", rotation: -2 },
  { id: "workflow", label: "Krum workflow", rotation: -1.4 },
  { id: "team-fit", label: "Team fit", rotation: -1 },
];

const mismatchPoints = [
  "Most AI tools reason in isolated files, not across boundaries.",
  "Production changes need service context, dependency awareness, and review gates.",
  "Speed without architecture awareness increases rollback and incident risk.",
];

const workflowSteps = [
  { id: "01", label: "Map", detail: "Index services, shared libraries, and critical ownership boundaries." },
  { id: "02", label: "Plan", detail: "Propose structured changes and expected blast radius before coding." },
  { id: "03", label: "Review", detail: "Collaborate with engineers before execution to remove blind spots." },
  { id: "04", label: "Change", detail: "Apply changes with context-aware implementation and confidence checks." },
];

const teamFitPoints = [
  "Growing codebases that outgrew file-level assistants",
  "Platform and microservice teams with shared ownership",
  "Organizations with strict reliability and change-management expectations",
];

function PanelMismatchedTools() {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-[18px] text-platinum/70">
        The gap is not typing speed. The gap is architecture understanding and coordinated change.
      </p>
      <ul className="space-y-4">
        {mismatchPoints.map((point) => (
          <li key={point} className="surface-card flex items-start gap-3 p-5 text-platinum/82">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelWorkflow() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {workflowSteps.map((step) => (
        <article key={step.id} className="surface-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="editorial-h3 text-[1.5rem] text-platinum">
              <em>{step.label}</em>
            </h3>
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-platinum/60">{step.id}</span>
          </div>
          <p className="text-[16px] text-platinum/70">{step.detail}</p>
        </article>
      ))}
    </div>
  );
}

function PanelTeamFit() {
  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-[18px] text-platinum/70">
        Krum is designed for teams that treat software as an evolving system, not a static collection of files.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {teamFitPoints.map((item, index) => (
          <article key={item} className="surface-card p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-platinum/55">
              Fit {index + 1}
            </span>
            <p className="mt-3 text-[16px] text-platinum/80">{item}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FolderTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("workflow");

  const panel = useMemo(() => {
    if (activeTab === "mismatch") {
      return <PanelMismatchedTools />;
    }

    if (activeTab === "team-fit") {
      return <PanelTeamFit />;
    }

    return <PanelWorkflow />;
  }, [activeTab]);

  return (
    <section id="system-tabs" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="ui-label mb-3">Core Narrative</p>
          <h2 className="editorial-h2 max-w-3xl text-platinum">
            Product thinking shaped as a <em>folder-tab</em> briefing.
          </h2>
        </div>

        <div className="relative">
          <div className="relative z-10 flex flex-wrap gap-2 px-2 md:px-6">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "folder-tab cursor-pointer px-5 py-3 text-sm font-semibold",
                    isActive && "folder-tab-active px-6 py-3.5"
                  )}
                  style={{ transform: isActive ? `rotate(${tab.rotation}deg) translateY(-6px)` : `rotate(${tab.rotation}deg)` }}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="surface-panel relative overflow-hidden px-5 pb-8 pt-9 md:px-8 md:pt-10">
            <SerratedDivider className="absolute left-0 right-0 top-0" />
            <div className="grid-40-overlay rounded-2xl p-4 pt-6 md:p-6">{panel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

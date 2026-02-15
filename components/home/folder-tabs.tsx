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
  { id: "mismatch", label: "The Problem", rotation: -2 },
  { id: "workflow", label: "How Krum Works", rotation: -1.4 },
  { id: "team-fit", label: "Who It's For", rotation: -1 },
];

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
    <div className="space-y-6">
      <p className="max-w-3xl text-[18px] text-platinum/70">
        Traditional development breaks alignment:
      </p>
      <ul className="space-y-4">
        {mismatchPoints.map((point) => (
          <li key={point} className="surface-card flex items-start gap-3 p-5 text-platinum/82">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="max-w-3xl text-[16px] text-platinum/60">
        Every PR is a gamble. Every new engineer needs weeks to contribute confidently.
      </p>
    </div>
  );
}

function PanelWorkflow() {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-[18px] text-platinum/70">
        We enforce three-layer consistency:
      </p>
      <div className="grid gap-4 md:grid-cols-3">
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
      <p className="max-w-3xl text-[16px] text-platinum/60">
        Change one layer? The others update automatically—or the system rejects it if alignment breaks.
      </p>
    </div>
  );
}

function PanelTeamFit() {
  return (
    <div className="space-y-5">
      <p className="max-w-3xl text-[18px] text-platinum/70">
        Built for teams where:
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {teamFitPoints.map((item, index) => (
          <article key={item} className="surface-card flex items-start gap-3 p-5">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-electric" />
            <p className="text-[16px] text-platinum/80">{item}</p>
          </article>
        ))}
      </div>
      <p className="max-w-3xl text-[16px] text-platinum/60">
        Primary users: engineers, architects, technical founders scaling past the &lsquo;everyone knows everything&rsquo; phase.
      </p>
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
            Three layers. Always <em>aligned</em>.
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

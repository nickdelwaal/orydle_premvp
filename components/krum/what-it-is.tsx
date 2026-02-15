"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SerratedDivider } from "@/components/ui/serrated-divider";

const panels = {
  is: [
    "A workspace for system-level reasoning",
    "A planning layer before code modification",
    "A collaborative flow for architecture-aware changes",
    "Built for complexity in production environments",
  ],
  isnt: [
    "A generic code chatbot",
    "Autocomplete for isolated snippets",
    "Blind generation without architectural context",
    "A replacement for engineering review",
  ],
};

export function WhatItIs() {
  const [active, setActive] = useState<"is" | "isnt">("is");

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="ui-label mb-3">Definition</p>
          <h2 className="editorial-h2 text-platinum">What Krum <em>is</em> and what it is not.</h2>
        </div>

        <div className="relative">
          <div className="relative z-10 flex flex-wrap justify-center gap-2 px-2 md:px-6">
            <button
              type="button"
              onClick={() => setActive("is")}
              className={cn(
                "folder-tab cursor-pointer px-6 py-3 text-sm font-semibold",
                active === "is" && "folder-tab-active"
              )}
              style={{ transform: active === "is" ? "rotate(-1.4deg) translateY(-6px)" : "rotate(-1.4deg)" }}
            >
              What Krum Is
            </button>
            <button
              type="button"
              onClick={() => setActive("isnt")}
              className={cn(
                "folder-tab cursor-pointer px-6 py-3 text-sm font-semibold",
                active === "isnt" && "folder-tab-active"
              )}
              style={{ transform: active === "isnt" ? "rotate(-0.7deg) translateY(-6px)" : "rotate(-0.7deg)" }}
            >
              What Krum Is Not
            </button>
          </div>

          <div className="surface-panel relative overflow-hidden p-6 md:p-8">
            <SerratedDivider className="absolute left-0 right-0 top-0" />

            <ul className="grid gap-4 pt-5 md:grid-cols-2">
              {panels[active].map((item, index) => (
                <li key={item} className="surface-card flex gap-3 p-5">
                  <span
                    className={cn(
                      "mt-[7px] h-2 w-2 shrink-0 rounded-full",
                      active === "is" ? "bg-blue-electric" : "bg-platinum/45"
                    )}
                  />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-platinum/55">
                      {active === "is" ? "Signal" : "Guardrail"} {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-[16px] text-platinum/82">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

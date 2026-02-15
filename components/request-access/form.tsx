"use client";

import { useState, type FormEvent } from "react";
import { RequestAccessSuccess } from "@/components/request-access/success";

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  useCase: "",
};

export function RequestAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);

  const filledCount = Object.values(formData).filter(Boolean).length;
  const progress = (filledCount / 5) * 100;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1300));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return <RequestAccessSuccess />;
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/15 bg-[#0f0d0c] px-4 py-3 text-[16px] text-platinum placeholder:text-platinum/35 transition-colors focus:border-blue-electric/60 focus:outline-none";

  return (
    <section className="px-6 pb-24">
      <form onSubmit={handleSubmit} className="surface-panel mx-auto max-w-3xl overflow-hidden p-6 md:p-8">
        <div className="mb-7">
          <div className="mb-2 flex items-center justify-between text-[14px] text-platinum/62">
            <span>Application Progress</span>
            <span>{filledCount} / 5</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-blue-electric transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-[14px] text-platinum/84">
            Name <span className="text-platinum/45">*</span>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Your name"
              className={inputClass}
            />
          </label>

          <label className="block text-[14px] text-platinum/84">
            Work Email <span className="text-platinum/45">*</span>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="you@company.com"
              className={inputClass}
            />
          </label>

          <label className="block text-[14px] text-platinum/84">
            Company <span className="text-platinum/45">*</span>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
              placeholder="Company name"
              className={inputClass}
            />
          </label>

          <label className="block text-[14px] text-platinum/84">
            Role
            <input
              type="text"
              value={formData.role}
              onChange={(event) => setFormData((prev) => ({ ...prev, role: event.target.value }))}
              placeholder="Staff Engineer, EM, Architect"
              className={inputClass}
            />
          </label>
        </div>

        <label className="mt-5 block text-[14px] text-platinum/84">
          What do you want to use Krum for?
          <textarea
            rows={5}
            value={formData.useCase}
            onChange={(event) => setFormData((prev) => ({ ...prev, useCase: event.target.value }))}
            placeholder="Describe your system and the change-planning or architecture challenges you want to solve."
            className={`${inputClass} resize-y`}
          />
        </label>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[13px] text-platinum/55">We prioritize teams with production complexity.</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-pill-primary min-h-11 px-7 py-3 text-[15px] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {isSubmitting ? "Submitting..." : "Request Access"}
          </button>
        </div>
      </form>
    </section>
  );
}

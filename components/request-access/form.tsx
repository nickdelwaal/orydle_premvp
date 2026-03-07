"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  useCase: "",
};

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0FyAIt1P1BznJ3uzd02KaB0BNV5OR-_tNV2jq7zC0KyHc63w2wJZ5TikXm_IRqjtE-A/exec";

const steps = [
  { number: "01", label: "You" },
  { number: "02", label: "Company" },
  { number: "03", label: "Use case" },
];

function validateStep(step: number, data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (step === 1) {
    if (!data.name.trim()) errors.name = "Required";
    if (!data.email.trim()) {
      errors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Enter a valid work email";
    }
  }
  if (step === 2) {
    if (!data.company.trim()) errors.company = "Required";
    if (!data.role.trim()) errors.role = "Required";
  }
  if (step === 3) {
    if (!data.useCase.trim()) errors.useCase = "Required";
    else if (data.useCase.trim().length < 20)
      errors.useCase = "Please add a bit more detail";
  }
  return errors;
}

export function RequestAccessForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(initialData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function update(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleNext() {
    const errors = validateStep(currentStep, formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setDirection(1);
    setCurrentStep((s) => s + 1);
  }

  function handleBack() {
    setDirection(-1);
    setFieldErrors({});
    setCurrentStep((s) => s - 1);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validateStep(3, formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          useCase: formData.useCase,
        }),
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/12 bg-[#0f0d0c] px-4 py-3.5 text-[16px] text-platinum placeholder:text-platinum/30 transition-colors duration-200 focus:border-blue-electric/50 focus:outline-none focus:bg-[#111009]";

  const errorInputClass =
    "mt-2 w-full rounded-2xl border border-red-500/50 bg-[#0f0d0c] px-4 py-3.5 text-[16px] text-platinum placeholder:text-platinum/30 transition-colors duration-200 focus:border-red-500/70 focus:outline-none";

  function inputCls(field: keyof FormData) {
    return fieldErrors[field] ? errorInputClass : inputClass;
  }

  const labelClass = "block text-[14px] font-medium text-platinum/75";

  // Success state — replace entire form
  if (submitStatus === "success") {
    return (
      <section className="px-6 pb-24">
        <motion.div
          className="surface-panel mx-auto max-w-xl p-8 text-center md:p-12"
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Check icon */}
          <motion.div
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-blue-electric/30 bg-blue-electric/10 text-blue-electric"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.h2
            className="editorial-h2 text-platinum"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Request received.
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-sm text-[17px] leading-relaxed text-platinum/55"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            You will hear from us soon!
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-24">
      <form
        onSubmit={handleSubmit}
        className="surface-panel mx-auto max-w-xl overflow-hidden p-6 md:p-8"
        noValidate
      >
        {/* Step indicator */}
        <div className="mb-8 flex items-center justify-center gap-6">
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isActive = currentStep === stepNum;
            const isDone = currentStep > stepNum;
            return (
              <div key={step.number} className="flex items-center gap-2">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[11px] transition-all duration-300 ${isActive
                  ? "border-blue-electric bg-blue-electric/15 text-blue-electric"
                  : isDone
                    ? "border-blue-electric/40 bg-blue-electric/8 text-blue-electric/60"
                    : "border-white/10 bg-transparent text-platinum/25"
                  }`}>
                  {isDone ? (
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span className={`text-[13px] transition-colors duration-300 ${isActive ? "text-platinum/75" : "text-platinum/25"
                  }`}>
                  {step.label}
                </span>
                {i < steps.length - 1 && (
                  <span className="ml-4 text-platinum/15">·</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Step content */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait" initial={false}>
            {currentStep === 1 && (
              <motion.div
                key="step1"
                className="space-y-5"
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                <label className={labelClass}>
                  Name <span className="text-platinum/30">*</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className={inputCls("name")}
                    autoFocus
                  />
                  {fieldErrors.name && (
                    <span className="mt-1.5 block font-mono text-[12px] text-red-400">{fieldErrors.name}</span>
                  )}
                </label>

                <label className={labelClass}>
                  Work Email <span className="text-platinum/30">*</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@company.com"
                    className={inputCls("email")}
                  />
                  {fieldErrors.email && (
                    <span className="mt-1.5 block font-mono text-[12px] text-red-400">{fieldErrors.email}</span>
                  )}
                </label>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                className="space-y-5"
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                <label className={labelClass}>
                  Company <span className="text-platinum/30">*</span>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Company name"
                    className={inputCls("company")}
                    autoFocus
                  />
                  {fieldErrors.company && (
                    <span className="mt-1.5 block font-mono text-[12px] text-red-400">{fieldErrors.company}</span>
                  )}
                </label>

                <label className={labelClass}>
                  Role <span className="text-platinum/30">*</span>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => update("role", e.target.value)}
                    placeholder="Staff Engineer, EM, Architect..."
                    className={inputCls("role")}
                  />
                  {fieldErrors.role && (
                    <span className="mt-1.5 block font-mono text-[12px] text-red-400">{fieldErrors.role}</span>
                  )}
                </label>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                className="space-y-2"
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                <label className={labelClass}>
                  Describe your system and what you&apos;re trying to solve{" "}
                  <span className="text-platinum/30">*</span>
                </label>
                <p className="font-mono text-[12px] text-platinum/30 mb-1">
                  The more specific, the faster we can assess fit.
                </p>
                <textarea
                  rows={6}
                  value={formData.useCase}
                  onChange={(e) => update("useCase", e.target.value)}
                  placeholder="e.g. We have a 12-service platform and drift between our intended architecture and what's actually deployed is causing incident response to take 3× longer..."
                  className={`${inputCls("useCase")} resize-y`}
                  autoFocus
                />
                {fieldErrors.useCase && (
                  <span className="mt-1.5 block font-mono text-[12px] text-red-400">{fieldErrors.useCase}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error banner (submission error) */}
        {submitStatus === "error" && (
          <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/8 px-5 py-4 text-[14px] text-red-300">
            Something went wrong. Please try again or email{" "}
            <a href="mailto:founders@orydle.com" className="underline underline-offset-2">
              founders@orydle.com
            </a>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="font-mono text-[13px] text-platinum/40 transition-colors hover:text-platinum/70"
            >
              ← Back
            </button>
          ) : (
            <p className="font-mono text-[12px] text-platinum/30">
              We prioritize teams with production complexity.
            </p>
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="cta-button"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request Access"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

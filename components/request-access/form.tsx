"use client";

import { useState, type FormEvent } from "react";

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

const WEB3FORMS_ACCESS_KEY = "PLACEHOLDER_GET_FROM_WEB3FORMS";

function validateForm(data: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Work email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.company.trim()) errors.company = "Company is required";
  if (!data.role.trim()) errors.role = "Role is required";
  if (!data.useCase.trim()) errors.useCase = "Please describe your use case";

  return errors;
}

export function RequestAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(initialData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const filledCount = Object.values(formData).filter(Boolean).length;
  const progress = (filledCount / 5) * 100;

  function clearFieldError(field: keyof FormData) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Validate
    const errors = validateForm(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          use_case: formData.useCase,
          subject: `New Krum Access Request from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/15 bg-[#0f0d0c] px-4 py-3 text-[16px] text-platinum placeholder:text-platinum/35 transition-colors focus:border-blue-electric/60 focus:outline-none";

  const errorInputClass =
    "mt-2 w-full rounded-2xl border border-red-500/60 bg-[#0f0d0c] px-4 py-3 text-[16px] text-platinum placeholder:text-platinum/35 transition-colors focus:border-red-500/80 focus:outline-none";

  function getInputClass(field: keyof FormData) {
    return fieldErrors[field] ? errorInputClass : inputClass;
  }

  const buttonText =
    submitStatus === "success"
      ? "Submitted ✓"
      : isSubmitting
        ? "Submitting..."
        : "Request Access";

  return (
    <section className="px-6 pb-24">
      <form onSubmit={handleSubmit} className="surface-panel mx-auto max-w-3xl overflow-hidden p-6 md:p-8" noValidate>
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
              value={formData.name}
              onChange={(event) => {
                setFormData((prev) => ({ ...prev, name: event.target.value }));
                clearFieldError("name");
              }}
              placeholder="Your name"
              className={getInputClass("name")}
            />
            {fieldErrors.name && (
              <span className="mt-1.5 block text-[13px] text-red-400">{fieldErrors.name}</span>
            )}
          </label>

          <label className="block text-[14px] text-platinum/84">
            Work Email <span className="text-platinum/45">*</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => {
                setFormData((prev) => ({ ...prev, email: event.target.value }));
                clearFieldError("email");
              }}
              placeholder="you@company.com"
              className={getInputClass("email")}
            />
            {fieldErrors.email && (
              <span className="mt-1.5 block text-[13px] text-red-400">{fieldErrors.email}</span>
            )}
          </label>

          <label className="block text-[14px] text-platinum/84">
            Company <span className="text-platinum/45">*</span>
            <input
              type="text"
              value={formData.company}
              onChange={(event) => {
                setFormData((prev) => ({ ...prev, company: event.target.value }));
                clearFieldError("company");
              }}
              placeholder="Company name"
              className={getInputClass("company")}
            />
            {fieldErrors.company && (
              <span className="mt-1.5 block text-[13px] text-red-400">{fieldErrors.company}</span>
            )}
          </label>

          <label className="block text-[14px] text-platinum/84">
            Role <span className="text-platinum/45">*</span>
            <input
              type="text"
              value={formData.role}
              onChange={(event) => {
                setFormData((prev) => ({ ...prev, role: event.target.value }));
                clearFieldError("role");
              }}
              placeholder="Staff Engineer, EM, Architect"
              className={getInputClass("role")}
            />
            {fieldErrors.role && (
              <span className="mt-1.5 block text-[13px] text-red-400">{fieldErrors.role}</span>
            )}
          </label>
        </div>

        <label className="mt-5 block text-[14px] text-platinum/84">
          What do you want to use Krum for? <span className="text-platinum/45">*</span>
          <textarea
            rows={5}
            value={formData.useCase}
            onChange={(event) => {
              setFormData((prev) => ({ ...prev, useCase: event.target.value }));
              clearFieldError("useCase");
            }}
            placeholder="Describe your system and the change-planning or architecture challenges you want to solve."
            className={`${getInputClass("useCase")} resize-y`}
          />
          {fieldErrors.useCase && (
            <span className="mt-1.5 block text-[13px] text-red-400">{fieldErrors.useCase}</span>
          )}
        </label>

        {/* Success banner */}
        {submitStatus === "success" && (
          <div className="mt-5 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-[15px] text-green-300">
            ✓ Thank you! We&apos;ve received your request and will be in touch soon.
          </div>
        )}

        {/* Error banner */}
        {submitStatus === "error" && (
          <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-[15px] text-red-300">
            Something went wrong. Please try again or email us at{" "}
            <a href="mailto:founders@orydle.com" className="underline underline-offset-2">
              founders@orydle.com
            </a>
          </div>
        )}

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[13px] text-platinum/55">We prioritize teams with production complexity.</p>
          <button
            type="submit"
            disabled={isSubmitting || submitStatus === "success"}
            className="btn-pill-primary min-h-11 px-7 py-3 text-[15px] disabled:cursor-not-allowed disabled:opacity-65"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </section>
  );
}

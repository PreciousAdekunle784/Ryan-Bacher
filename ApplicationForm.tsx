"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";

type Field = {
    name: string;
    label: string;
    type?: "text" | "email" | "url" | "select" | "textarea" | "tel";
    required?: boolean;
    placeholder?: string;
    options?: string[];
    helper?: string;
};

const FIELDS: Field[] = [
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone (optional)", type: "tel" },
    { name: "company", label: "Company name", required: true },
    { name: "website", label: "Website", type: "url", required: true },
    {
        name: "revenue",
        label: "Trailing 12-month revenue",
        type: "select",
        required: true,
        options: ["Under $1M", "$1M–$3M", "$3M–$10M", "$10M–$20M", "$20M+"],
    },
    {
        name: "team",
        label: "Team size",
        type: "select",
        required: true,
        options: ["1–5", "6–15", "16–50", "51–150", "150+"],
    },
    {
        name: "bottleneck",
        label: "What is the single biggest bottleneck in your business right now?",
        type: "textarea",
        required: true,
        helper: "Be specific. Vague answers get vague help.",
    },
    {
        name: "systems",
        label: "Where are your operating systems weakest?",
        type: "textarea",
        required: true,
    },
    {
        name: "hiring",
        label: "What is your hardest hiring or team problem right now?",
        type: "textarea",
        required: true,
    },
    {
        name: "why_now",
        label: "Why now? What changed?",
        type: "textarea",
        required: true,
        helper: "Founders who aren't sure why now tend not to do the work.",
    },
    {
        name: "outcome",
        label: "What do you want from working with Ryan in the next 6 months?",
        type: "textarea",
        required: true,
    },
    {
        name: "budget",
        label: "Coaching engagements start at $5K/month with a 6-month minimum. Are you in a position to invest?",
        type: "select",
        required: true,
        options: [
            "Yes — ready to move",
            "Yes — within the next 30–60 days",
            "Not yet — but exploring",
            "No",
        ],
    },
    {
        name: "commitment",
        label: "If invited, will you show up coachable, do the work, and tell the truth?",
        type: "select",
        required: true,
        options: ["Yes", "I want to, but I'm honestly unsure", "No"],
    },
];

export default function ApplicationForm() {
    const router = useRouter();
    const [data, setData] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);

    function set(name: string, val: string) {
        setData((d) => ({ ...d, [name]: val }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        track("application_submit", { revenue: data.revenue, budget: data.budget });
        // TODO: POST to /api/applications, CRM webhook, or Zapier endpoint.
        await new Promise((r) => setTimeout(r, 600));
        router.push("/thank-you");
    }

    return (
        <form onSubmit={onSubmit} className="space-y-10">
            {FIELDS.map((f) => (
                <div key={f.name}>
                    <label className="label" htmlFor={f.name}>
                        {f.label}
                        {f.required && <span className="text-bronze"> *</span>}
                    </label>
                    {f.type === "textarea" ? (
                        <textarea
                            id={f.name}
                            name={f.name}
                            required={f.required}
                            rows={3}
                            value={data[f.name] ?? ""}
                            onChange={(e) => set(f.name, e.target.value)}
                            className="field resize-none"
                            placeholder={f.placeholder}
                        />
                    ) : f.type === "select" ? (
                        <select
                            id={f.name}
                            name={f.name}
                            required={f.required}
                            value={data[f.name] ?? ""}
                            onChange={(e) => set(f.name, e.target.value)}
                            className="field"
                        >
                            <option value="" className="bg-graphite">
                                Select…
                            </option>
                            {f.options?.map((o) => (
                                <option key={o} value={o} className="bg-graphite">
                                    {o}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id={f.name}
                            name={f.name}
                            type={f.type ?? "text"}
                            required={f.required}
                            value={data[f.name] ?? ""}
                            onChange={(e) => set(f.name, e.target.value)}
                            className="field"
                            placeholder={f.placeholder}
                        />
                    )}
                    {f.helper && <p className="mt-2 text-xs text-muted">{f.helper}</p>}
                </div>
            ))}
            <button type="submit" disabled={submitting} className="btn-primary w-full md:w-auto">
                {submitting ? "Sending…" : "Submit application"}
            </button>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Applications are reviewed personally. Most get a response within 3 business days. Not every
                founder is the right fit, and that is the point.
            </p>
        </form>
    );
}

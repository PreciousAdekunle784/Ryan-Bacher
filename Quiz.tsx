"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ } from "@/lib/quiz-data";
import { track } from "@/lib/analytics";

export default function Quiz() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const total = QUIZ.length;
    const isFinalContact = step === total;
    const progress = useMemo(() => Math.round((step / total) * 100), [step, total]);

    function selectAnswer(idx: number) {
        const q = QUIZ[step];
        if (!q) return;
        const next = { ...answers, [q.id]: idx };
        setAnswers(next);
        track("diagnostic_question_answered", { question: q.id, choice: idx });
        setTimeout(() => setStep((s) => s + 1), 220);
    }

    async function submit() {
        setSubmitting(true);
        track("diagnostic_complete", { answers });
        const params = new URLSearchParams();
        params.set("a", btoa(JSON.stringify(answers)));
        if (email) params.set("e", email);
        if (name) params.set("n", name);
        router.push(`/results?${params.toString()}`);
    }

    return (
        <div className="mx-auto w-full max-w-2xl">
            <div className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <span>Founder Diagnostic</span>
                <span>
                    {Math.min(step + 1, total)} / {total}
                </span>
            </div>
            <div className="mb-12 h-px w-full bg-bone/10">
                <div
                    className="h-px bg-bronze transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {!isFinalContact && (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                        <p className="eyebrow mb-4">Question {step + 1}</p>
                        <h2 className="display text-2xl leading-tight md:text-4xl">
                            {QUIZ[step].prompt}
                        </h2>
                        {QUIZ[step].helper && (
                            <p className="mt-3 text-sm text-muted">{QUIZ[step].helper}</p>
                        )}
                        <ul className="mt-10 space-y-3">
                            {QUIZ[step].options.map((opt, i) => {
                                const selected = answers[QUIZ[step].id] === i;
                                return (
                                    <li key={i}>
                                        <button
                                            onClick={() => selectAnswer(i)}
                                            className={`w-full border px-6 py-5 text-left text-base transition ${selected
                                                    ? "border-bronze bg-bronze/10 text-bone"
                                                    : "border-bone/15 text-bone/85 hover:border-bone/40 hover:bg-bone/[0.02]"
                                                }`}
                                        >
                                            <span className="mr-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">
                                                {String.fromCharCode(65 + i)}
                                            </span>
                                            {opt.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {step > 0 && (
                            <button
                                onClick={() => setStep((s) => Math.max(0, s - 1))}
                                className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-bone"
                            >
                                ← Back
                            </button>
                        )}
                    </motion.div>
                )}

                {isFinalContact && (
                    <motion.div
                        key="contact"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="eyebrow mb-4">Last step</p>
                        <h2 className="display text-2xl leading-tight md:text-4xl">
                            Where should we send your diagnosis?
                        </h2>
                        <p className="mt-4 text-bone/80">
                            You'll get the personalized read on the next page. We'll also send a short
                            follow-up — no list churn, no spam, no theatrics.
                        </p>
                        <div className="mt-10 space-y-6">
                            <div>
                                <label className="label" htmlFor="name">First name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="field"
                                    placeholder="Ryan"
                                />
                            </div>
                            <div>
                                <label className="label" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="field"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <button
                                onClick={submit}
                                disabled={submitting || !email}
                                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {submitting ? "Reading the diagnosis…" : "Show my diagnosis →"}
                            </button>
                            <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                                We respect founder time. One email. No theater.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

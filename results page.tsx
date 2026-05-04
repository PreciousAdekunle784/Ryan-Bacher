"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { scoreQuiz, ARCHETYPES, type Pillar } from "@/lib/quiz-data";

function ResultsInner() {
    const params = useSearchParams();
    const encoded = params.get("a");
    const name = params.get("n") ?? "";

    let answers: Record<string, number> = {};
    try {
        if (encoded) answers = JSON.parse(atob(encoded));
    } catch {
        answers = {};
    }
    const { archetype, scores } = scoreQuiz(answers);

    const pillarOrder: Pillar[] = ["systems", "hiring", "leadership", "strategy", "self"];
    const max = Math.max(1, ...pillarOrder.map((p) => scores[p]));

    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-24 md:py-32">
                <p className="eyebrow mb-6">Your Diagnosis{name ? `, ${name}` : ""}</p>
                <h1 className="display max-w-4xl text-4xl leading-[1.1] md:text-6xl">
                    {archetype.title}
                </h1>

                <div className="mt-16 grid gap-16 md:grid-cols-[1.4fr,1fr]">
                    <div className="space-y-10">
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">Diagnosis</p>
                            <p className="mt-4 text-lg leading-relaxed text-bone/85">{archetype.diagnosis}</p>
                        </div>
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">The Cost</p>
                            <p className="mt-4 text-lg leading-relaxed text-bone/85">{archetype.cost}</p>
                        </div>
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">The Work</p>
                            <p className="mt-4 text-lg leading-relaxed text-bone/85">{archetype.prescription}</p>
                        </div>
                    </div>

                    <aside className="border border-bone/10 bg-graphite p-10">
                        <p className="eyebrow mb-6">Your Pressure Map</p>
                        <ul className="space-y-5">
                            {pillarOrder.map((p) => (
                                <li key={p}>
                                    <div className="mb-1 flex items-baseline justify-between">
                                        <span className="font-serif text-lg capitalize text-bone">{p}</span>
                                        <span className="font-mono text-xs text-muted">{scores[p]}</span>
                                    </div>
                                    <div className="h-px w-full bg-bone/10">
                                        <div
                                            className={`h-px ${p === archetype.key ? "bg-bronze" : "bg-bone/40"}`}
                                            style={{ width: `${(scores[p] / max) * 100}%` }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-bone/70">
                            The bar that's loudest is rarely the one you'll fix on your own. That's the value
                            of an outside operator.
                        </p>
                    </aside>
                </div>

                <div className="mt-20 border-t border-bone/10 pt-16">
                    <p className="eyebrow mb-6">What now</p>
                    <h2 className="display max-w-3xl text-3xl leading-tight md:text-5xl">
                        {archetype.recommendation === "coaching"
                            ? "This is the kind of problem 1-on-1 coaching is built for."
                            : "This is what Limitless Society is built for."}
                    </h2>
                    <p className="mt-6 max-w-2xl text-bone/80">
                        {archetype.recommendation === "coaching"
                            ? "Apply below. The application is short, but it's real work — vague answers get vague help. If the fit is right, we'll get on a call."
                            : "Limitless is the operator-grade peer room and mentor access I built for exactly this stage of life and business."}
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link href={archetype.cta.href} className="btn-primary">
                            {archetype.cta.label} →
                        </Link>
                        <Link href="/" className="btn-ghost">
                            Back to home
                        </Link>
                    </div>
                </div>

                <div className="mt-20 max-w-prose">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">A note from Ryan</p>
                    <p className="mt-4 text-bone/80 leading-relaxed">
                        A diagnostic is a mirror, not a verdict. Read it honestly. If it stings a little,
                        that's signal. If it doesn't, you may not be the founder I can help — and that's
                        useful information too.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function ResultsPage() {
    return (
        <Suspense fallback={<div className="container-editorial py-32 text-muted">Loading…</div>}>
            <ResultsInner />
        </Suspense>
    );
}

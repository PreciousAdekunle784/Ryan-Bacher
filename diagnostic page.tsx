import type { Metadata } from "next";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
    title: "Founder Scaling Diagnostic",
    description:
        "11 questions. Four minutes. A direct read on your single biggest bottleneck — and what to do about it.",
};

export default function DiagnosticPage() {
    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-24 md:py-32">
                <div className="mb-16 max-w-3xl">
                    <p className="eyebrow mb-6">Founder Scaling Diagnostic</p>
                    <h1 className="display text-4xl leading-tight md:text-6xl">
                        Find the bottleneck <span className="text-bronze">before it finds you.</span>
                    </h1>
                    <p className="mt-8 text-lg text-bone/80">
                        The same instincts that got you here won't take you to the next stage. This is a
                        short, honest read on the single biggest constraint on your business right now —
                        systems, hiring, leadership, strategy, or you. No grading curve. No fluff.
                    </p>
                </div>
                <Quiz />
            </div>
        </section>
    );
}

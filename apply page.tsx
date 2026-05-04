import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
    title: "Apply for 1-on-1 Coaching",
    description:
        "Coaching is selective. Vague answers get vague help. If the fit is right, we'll get on a call.",
};

export default function ApplyPage() {
    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-24 md:py-32">
                <div className="grid gap-16 md:grid-cols-[1fr,1.4fr]">
                    <aside className="md:sticky md:top-24 md:self-start">
                        <p className="eyebrow mb-6">1-on-1 Founder Coaching</p>
                        <h1 className="display text-4xl leading-tight md:text-5xl">
                            Apply for direct access.
                        </h1>
                        <p className="mt-6 text-bone/80">
                            This isn't a contact form. It's the first piece of work. Be specific. Founders who
                            can't articulate the bottleneck on paper rarely fix it in practice.
                        </p>
                        <ul className="mt-10 space-y-5 text-sm text-bone/75">
                            <li className="border-l border-bronze/40 pl-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze block mb-1">
                                    Engagement
                                </span>
                                6-month minimum. Working sessions, async access, real accountability.
                            </li>
                            <li className="border-l border-bronze/40 pl-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze block mb-1">
                                    Investment
                                </span>
                                Starts at $5K/month. If price is the deciding factor, the timing isn't right.
                            </li>
                            <li className="border-l border-bronze/40 pl-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze block mb-1">
                                    Confidentiality
                                </span>
                                NDA on request. Default is discretion.
                            </li>
                            <li className="border-l border-bronze/40 pl-4">
                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bronze block mb-1">
                                    Selectivity
                                </span>
                                Capped roster. Most applicants get a real response within 3 business days.
                            </li>
                        </ul>
                    </aside>
                    <div>
                        <ApplicationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

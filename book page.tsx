import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Book Your Founder Call",
    description: "Direct working session with Ryan. Come prepared.",
};

export default function BookPage() {
    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-24 md:py-32">
                <p className="eyebrow mb-6">You're In — Now Let's Make This Useful</p>
                <h1 className="display max-w-4xl text-4xl leading-[1.1] md:text-6xl">
                    Pick a time. <span className="text-bronze">Show up sharp.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-bone/80">
                    This is a working session, not a sales call. We're going to look at your business
                    honestly, find the constraint, and figure out whether 1-on-1 coaching is the right
                    move. If it isn't, I'll tell you that — and point you somewhere better.
                </p>

                <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr,1fr]">
                    <div className="border border-bone/10 bg-graphite p-2">
                        {/* Calendly / Cal.com / SavvyCal embed slot. Replace src below. */}
                        <div className="flex h-[680px] w-full items-center justify-center border border-dashed border-bone/15">
                            <div className="text-center">
                                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                                    Booking Embed
                                </p>
                                <p className="mt-3 font-serif text-xl text-bone/80">
                                    Calendly / Cal.com iframe goes here
                                </p>
                                <code className="mt-4 inline-block bg-ink px-3 py-2 text-xs text-bronze">
                                    &lt;iframe src=&quot;https://calendly.com/ryanbacher/founder-call&quot; /&gt;
                                </code>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div>
                            <p className="eyebrow mb-3">Before we talk</p>
                            <ul className="space-y-3 text-bone/85">
                                <li>· Block the full hour. No half-attention calls.</li>
                                <li>· Be ready to share trailing-12 revenue, team size, and your best read on the bottleneck.</li>
                                <li>· Bring one decision you've been avoiding.</li>
                                <li>· No deck needed. No prep theater. Just truth.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="eyebrow mb-3">What this call is</p>
                            <p className="text-bone/80">
                                A 45-minute working session. Diagnosis. Real talk. Fit check. If it's a yes,
                                we'll outline next steps. If it's a no, you'll still leave with a clearer view of
                                what to fix first.
                            </p>
                        </div>
                        <div>
                            <p className="eyebrow mb-3">What this call is not</p>
                            <p className="text-bone/80">
                                A pitch. A webinar. A &quot;discovery&quot; survey. A high-pressure close. None of that
                                exists in this room.
                            </p>
                        </div>
                        <div className="pt-6">
                            <Link href="/" className="btn-ghost">
                                ← Back to home
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

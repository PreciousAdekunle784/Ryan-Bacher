import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Application Received",
};

export default function ThankYouPage() {
    return (
        <section className="border-b border-bone/10">
            <div className="container-editorial py-32 md:py-40">
                <p className="eyebrow mb-6">Application Received</p>
                <h1 className="display max-w-4xl text-4xl leading-[1.1] md:text-6xl">
                    We have your application.
                    <br />
                    <span className="text-bronze">Now we read it carefully.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-bone/80">
                    Every application gets read personally. Most founders hear back within 3 business days.
                    If we're a fit, you'll get an invite to a working call. If we're not, you'll still get
                    a real answer — not a templated rejection.
                </p>

                <div className="mt-16 grid gap-10 md:grid-cols-3">
                    {[
                        { k: "Step 1", t: "We read it.", d: "Carefully. Personally. Not a screening assistant." },
                        { k: "Step 2", t: "We respond.", d: "Within 3 business days. Yes, no, or a clarifying question." },
                        { k: "Step 3", t: "We meet.", d: "If the fit is right, you'll get a booking link to schedule a working call." },
                    ].map((c) => (
                        <div key={c.k} className="border-t border-bone/10 pt-6">
                            <p className="eyebrow mb-3">{c.k}</p>
                            <p className="font-serif text-xl text-bone">{c.t}</p>
                            <p className="mt-2 text-bone/70">{c.d}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col gap-4 sm:flex-row">
                    <Link href="/limitless" className="btn-ghost">
                        While you wait — Limitless Society
                    </Link>
                    <Link href="/" className="btn-ghost">
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    );
}

import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
    title: "Speaking & Advisory",
    description:
        "Keynotes, founder offsites, and operator-in-residence advisory. A practitioner in the room — not a personality.",
};

export default function SpeakingPage() {
    return (
        <>
            <section className="border-b border-bone/10">
                <div className="container-editorial py-28 md:py-40">
                    <p className="eyebrow mb-6">Speaking · Advisory · Operator-in-Residence</p>
                    <h1 className="display max-w-4xl text-4xl leading-[1.05] md:text-7xl">
                        A practitioner in the room.
                        <br />
                        <span className="text-bronze">Not a personality on a stage.</span>
                    </h1>
                    <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
                        Companies, founder groups, conferences, and family offices that want a real operator
                        in the room — to teach, to advise, or to sit beside the leadership team while they
                        make a hard call.
                    </p>
                    <div className="mt-12">
                        <Link href="#inquire" className="btn-primary">
                            Send an inquiry
                        </Link>
                    </div>
                </div>
            </section>

            <Section eyebrow="Engagements" title="Three formats.">
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            t: "Keynote / Talk",
                            d: "30–60 minute talks for founder events, conferences, and leadership offsites. Tightly written, no slides full of stock photos, no motivational filler.",
                        },
                        {
                            t: "Founder Offsite / Workshop",
                            d: "Half-day or full-day working sessions with leadership teams. Operating cadence, hiring, decision rights, scaling discipline.",
                        },
                        {
                            t: "Operator-in-Residence",
                            d: "Engagements with companies who want me embedded for a defined window — board adjacency, leadership coaching, strategic operating support.",
                        },
                    ].map((c) => (
                        <div key={c.t} className="border border-bone/10 bg-graphite p-8">
                            <p className="font-serif text-xl text-bone">{c.t}</p>
                            <p className="mt-3 text-bone/75">{c.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-graphite" eyebrow="Topics I'll cover" title="Operator material. No motivation theater.">
                <div className="grid gap-4 md:grid-cols-2">
                    {[
                        "The mistakes that get expensive between $1M and $20M",
                        "Hiring as the single biggest scaling variable",
                        "Installing an operating cadence that survives the founder",
                        "Customer success and employee retention as one system",
                        "Real wealth vs. performative wealth",
                        "Leadership discipline for founders who used to be the whole company",
                        "The operator's playbook for scaling from chaos to structure",
                        "Making the customer the hero — and why most companies don't",
                    ].map((t) => (
                        <div key={t} className="border-l border-bronze/40 pl-5 py-1 text-bone/85">
                            {t}
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="inquire" eyebrow="Inquire" title="Send the details.">
                <p className="max-w-prose text-bone/80">
                    The shorter and more specific the brief, the faster the answer. Include the audience,
                    format, date window, location, and outcome you're trying to create. We respond within 5
                    business days.
                </p>
                <form
                    className="mt-10 grid max-w-2xl gap-8"
                    action="mailto:speaking@ryanbacher.com"
                    method="post"
                    encType="text/plain"
                >
                    <div>
                        <label className="label" htmlFor="name">Your name</label>
                        <input id="name" name="name" required className="field" />
                    </div>
                    <div>
                        <label className="label" htmlFor="org">Organization</label>
                        <input id="org" name="org" required className="field" />
                    </div>
                    <div>
                        <label className="label" htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required className="field" />
                    </div>
                    <div>
                        <label className="label" htmlFor="format">Format</label>
                        <select id="format" name="format" required className="field">
                            <option value="" className="bg-graphite">Select…</option>
                            <option className="bg-graphite">Keynote / Talk</option>
                            <option className="bg-graphite">Founder Offsite / Workshop</option>
                            <option className="bg-graphite">Operator-in-Residence</option>
                            <option className="bg-graphite">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="label" htmlFor="brief">Brief</label>
                        <textarea id="brief" name="brief" rows={5} required className="field resize-none" />
                    </div>
                    <button type="submit" className="btn-primary self-start">Send inquiry</button>
                </form>
            </Section>
        </>
    );
}

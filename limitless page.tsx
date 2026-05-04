import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
    title: "Limitless Society",
    description:
        "A premium room for operators serious about real wealth, real health, real leadership. No theater.",
};

export default function LimitlessPage() {
    return (
        <>
            <section className="border-b border-bone/10">
                <div className="container-editorial py-28 md:py-40">
                    <p className="eyebrow mb-6">Limitless Society</p>
                    <h1 className="display max-w-4xl text-4xl leading-[1.05] md:text-7xl">
                        The room I wish <span className="text-bronze">I had at $2M.</span>
                    </h1>
                    <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
                        Limitless Society is a premium room for founders and operators who are serious about
                        building real wealth, real health, and real leadership — and tired of doing it alone
                        with internet advice. Coaching. Mentor access. Events. Operators who have actually
                        done the thing.
                    </p>
                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <Link href="/apply?ref=limitless" className="btn-primary">
                            Request membership
                        </Link>
                        <Link href="/diagnostic" className="btn-ghost">
                            Take the diagnostic first
                        </Link>
                    </div>
                </div>
            </section>

            <Section
                eyebrow="What it is"
                title="Operator peer access. Mentor presence. No content treadmill."
                intro="This isn't a course library. It isn't a Discord with 4,000 strangers. It is a curated room of operators who run real companies, train hard, manage real money, and want to keep getting sharper with people who understand the seat."
            >
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { t: "Coaching", d: "Group coaching cohorts and direct access to operator-mentors who have built and exited." },
                        { t: "Habits & Health", d: "Discipline as a system. Training, sleep, recovery, and mental clarity treated like operating metrics." },
                        { t: "Wealth", d: "Real wealth conversations — beyond the business, beyond the flex. How operators actually build durable money." },
                        { t: "Leadership", d: "Working sessions on hiring, firing, decision-making, and the founder identity work no one else will host." },
                        { t: "Events", d: "Small, in-person gatherings. Boardroom energy, not ballroom energy." },
                        { t: "Network", d: "Curated. Vetted. Operators only. The kind of room you can't buy your way into elsewhere." },
                    ].map((p) => (
                        <Reveal key={p.t}>
                            <div className="border border-bone/10 bg-graphite p-8">
                                <p className="font-serif text-xl text-bone">{p.t}</p>
                                <p className="mt-3 text-bone/75">{p.d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section
                className="bg-graphite"
                eyebrow="Who Belongs Here"
                title="Operators. Builders. Quiet professionals."
            >
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">Yes</p>
                        <ul className="mt-6 space-y-4 text-lg text-bone/85">
                            <li>· Founders and operators running serious businesses.</li>
                            <li>· Investors and execs with skin in the game.</li>
                            <li>· People who train, read, build, and tell the truth.</li>
                            <li>· Members who add to the room — not extract from it.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">No</p>
                        <ul className="mt-6 space-y-4 text-lg text-bone/55">
                            <li>· Hype merchants and personal-brand performers.</li>
                            <li>· People shopping for status without the substance.</li>
                            <li>· Anyone here to pitch the room.</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section eyebrow="Membership" title="By application. By fit. By invitation.">
                <p className="max-w-prose text-bone/80">
                    Limitless is intentionally small. We grow by fit, not funnel velocity. If the room is at
                    capacity, you'll go on a short waitlist and we'll talk when a seat opens.
                </p>
                <div className="mt-10">
                    <Link href="/apply?ref=limitless" className="btn-primary">
                        Request membership →
                    </Link>
                </div>
            </Section>
        </>
    );
}

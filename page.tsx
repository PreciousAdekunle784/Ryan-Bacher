import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-bone/10">
                <div className="container-editorial pt-24 pb-28 md:pt-36 md:pb-40">
                    <Reveal>
                        <p className="eyebrow mb-8">Ryan Bacher · Operator · Investor · Founder Mentor</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="display max-w-4xl text-4xl leading-[1.05] md:text-7xl">
                            The mistakes you ignore at $1M
                            <br />
                            <span className="text-bronze">become expensive at $10M.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">
                            I help founders avoid expensive mistakes, fix broken systems, hire better, and
                            scale with the discipline that comes from actually building, operating, investing,
                            and exiting real companies.
                        </p>
                    </Reveal>
                    <Reveal delay={0.18}>
                        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                            <Link href="/diagnostic" className="btn-primary">
                                Take the Founder Diagnostic
                            </Link>
                            <Link href="/apply" className="btn-ghost">
                                Apply for 1-on-1 Coaching
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="mt-12 max-w-xl font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                            For operators between $1M and $20M who are tired of theory, gurus, and advice from
                            people who have never built anything that lasted.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* AUTHORITY STRIP */}
            <section className="border-b border-bone/10 bg-graphite">
                <div className="container-editorial grid gap-10 py-14 md:grid-cols-4">
                    {[
                        { k: "Operator", v: "Built, scaled, and exited real companies." },
                        { k: "Investor", v: "Backing operator-led businesses, not vibes." },
                        { k: "Mentor", v: "Founder-focused. No course. No theater." },
                        { k: "Anti-guru", v: "If it sounds like a Lambo coach, it isn't me." },
                    ].map((c) => (
                        <div key={c.k}>
                            <p className="eyebrow mb-3">{c.k}</p>
                            <p className="font-serif text-lg leading-snug text-bone">{c.v}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROBLEM */}
            <Section
                eyebrow="The Problem"
                title={
                    <>
                        You've proven the business works.
                        <br />
                        <span className="text-bronze">Now everything is breaking at once.</span>
                    </>
                }
                intro="The same instincts that got you to $1M won't get you to $10M. The same team that built it can't always run it. And every weakness you put off fixing — bad systems, wrong hires, weak strategy, drift in your own discipline — gets more expensive every month you wait."
            >
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            t: "Bad systems get expensive.",
                            d: "Slack threads and memory aren't an operating system. They're a tax on every customer, every hire, every month.",
                        },
                        {
                            t: "Wrong hires kill momentum.",
                            d: "A bad senior hire at $1M is a setback. At $10M it can take a year off the company.",
                        },
                        {
                            t: "Scaling exposes every weakness.",
                            d: "The cracks were always there. Growth just turns the lights on.",
                        },
                    ].map((x) => (
                        <Reveal key={x.t}>
                            <div className="border-l border-bronze/40 pl-6">
                                <p className="font-serif text-2xl leading-tight text-bone">{x.t}</p>
                                <p className="mt-4 text-bone/75">{x.d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* COST OF INACTION */}
            <Section
                className="bg-graphite"
                eyebrow="The Cost of Doing Nothing"
                title="Founders rarely fail loudly. They drift quietly."
                intro="Most companies that should have made it didn't lose to competition. They lost to compounding small mistakes the founder kept ignoring. Drift is invisible — until it isn't."
            >
                <div className="grid gap-px overflow-hidden border border-bone/10 md:grid-cols-2">
                    {[
                        { t: "12 months from now, with no change", d: "Same bottlenecks, larger payroll, smaller margin, lower energy. The team you needed two years ago is the team you still don't have." },
                        { t: "12 months from now, with the right operator", d: "An installed operating cadence. A leadership team that owns its lanes. Cleaner numbers. A founder who actually has hours back." },
                        { t: "Mistakes you don't see yet", d: "The ones that look fine on a dashboard and cost you a year, a hire, a quarter, or an exit window." },
                        { t: "Mistakes I have already lived", d: "I've made most of them. The work is making sure you don't have to." },
                    ].map((c) => (
                        <div key={c.t} className="bg-ink p-10">
                            <p className="font-serif text-xl leading-snug text-bone">{c.t}</p>
                            <p className="mt-3 text-bone/70">{c.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* DIAGNOSIS / QUIZ TEASE */}
            <Section
                eyebrow="Founder Diagnostic"
                title="Find the bottleneck before it finds you."
                intro="11 questions. About four minutes. You get a direct read on the single biggest constraint on your business right now — and what working with me would actually look like for it."
            >
                <Link href="/diagnostic" className="btn-primary">
                    Start the Diagnostic →
                </Link>
            </Section>

            {/* OFFERS */}
            <Section
                className="bg-graphite"
                eyebrow="How To Work Together"
                title="Three doors. One standard."
            >
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            tag: "1-on-1",
                            title: "Founder Coaching",
                            body:
                                "Direct, private, no-fluff mentorship for founders running $1M–$20M companies. We rebuild your operating cadence, your leadership team, and your decision rights — and we install the discipline to keep them.",
                            cta: "Apply",
                            href: "/apply",
                        },
                        {
                            tag: "Community",
                            title: "Limitless Society",
                            body:
                                "A premium room for operators serious about real wealth, real health, and real leadership. Coaching, events, peer access, and the kind of conversations that don't happen on LinkedIn.",
                            cta: "Explore",
                            href: "/limitless",
                        },
                        {
                            tag: "Stage / Boardroom",
                            title: "Speaking & Advisory",
                            body:
                                "Keynotes, founder offsites, and operator-in-residence advisory for companies and groups that want a real practitioner in the room — not a personality.",
                            cta: "Inquire",
                            href: "/speaking",
                        },
                    ].map((o) => (
                        <Reveal key={o.title}>
                            <div className="flex h-full flex-col border border-bone/10 bg-ink p-10 transition hover:border-bronze/50">
                                <p className="eyebrow">{o.tag}</p>
                                <h3 className="display mt-4 text-2xl leading-tight md:text-3xl">{o.title}</h3>
                                <p className="mt-5 flex-1 text-bone/75">{o.body}</p>
                                <Link href={o.href} className="btn-ghost mt-8 self-start">
                                    {o.cta} →
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* WHO IS / IS NOT */}
            <Section eyebrow="Honest Filter" title="Who this is and isn't for.">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">For you if</p>
                        <ul className="mt-6 space-y-5 text-lg text-bone/85">
                            {[
                                "You're running a real business between $1M and $20M.",
                                "You've outgrown the advice you're currently getting.",
                                "You're tired of theoretical frameworks and want an operator who has done it.",
                                "You'll be coachable, do the work, and tell the truth.",
                                "You want a mentor in your corner — not another course.",
                            ].map((t) => (
                                <li key={t} className="flex gap-4">
                                    <span className="mt-2 inline-block h-px w-8 bg-bronze" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Not for you if</p>
                        <ul className="mt-6 space-y-5 text-lg text-bone/55">
                            {[
                                "You're looking for hype, hacks, or a shortcut.",
                                "You haven't proven the business yet.",
                                "You want someone to validate decisions instead of pressure-test them.",
                                "You think mentorship is something you watch on YouTube.",
                                "You can't honestly answer: \"why now?\"",
                            ].map((t) => (
                                <li key={t} className="flex gap-4">
                                    <span className="mt-2 inline-block h-px w-8 bg-bone/20" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* PHILOSOPHY */}
            <Section className="bg-graphite" eyebrow="Operating Philosophy" title="What I actually believe.">
                <div className="grid gap-10 md:grid-cols-2">
                    {[
                        ["Discipline beats motivation.", "You don't need more motivation. You need better judgment, installed as habit."],
                        ["Make the customer the hero.", "Companies that obsess over their own story lose. Companies that obsess over their customer's story compound."],
                        ["Hiring is the scaling variable.", "Strategy is downstream of who is in the room. Get that wrong and nothing else matters."],
                        ["Bad systems are expensive.", "Every undocumented decision is a tax your team and customers eventually pay."],
                        ["Real wealth doesn't need to scream.", "The loudest founders are usually the most fragile. Quiet, durable, structured — that's the goal."],
                        ["Truth, told kindly, fast.", "I will not perform politeness while your company bleeds out. That isn't kindness — it's cowardice."],
                    ].map(([t, d]) => (
                        <Reveal key={t}>
                            <div>
                                <p className="font-serif text-2xl leading-snug text-bone">{t}</p>
                                <p className="mt-3 text-bone/70">{d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* CREDIBILITY */}
            <Section eyebrow="Credibility" title="Why my opinion is worth your time.">
                <div className="grid gap-10 md:grid-cols-3">
                    {[
                        { k: "Built", v: "Founded and operated companies through every stage — chaos, growth, structure, and exit." },
                        { k: "Invested", v: "Active investor in operator-led businesses. I read your numbers like a partner, not a consultant." },
                        { k: "Lived it", v: "Hired wrong. Built bad systems. Burned out. Rebuilt. The work I do with founders is the work I had to do on myself." },
                    ].map((c) => (
                        <Reveal key={c.k}>
                            <div className="border-t border-bone/10 pt-6">
                                <p className="eyebrow mb-3">{c.k}</p>
                                <p className="font-serif text-xl leading-snug text-bone">{c.v}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-12 max-w-prose text-bone/70">
                    I'm not going to list logos to impress you. If you're the right fit, you'll get the
                    background, the references, and the case work in a real conversation — not on a marketing
                    page.
                </p>
            </Section>

            {/* APPLICATION CTA */}
            <section className="border-y border-bone/10 bg-graphite">
                <div className="container-editorial grid gap-10 py-24 md:grid-cols-[2fr,1fr] md:items-end">
                    <div>
                        <p className="eyebrow mb-6">Apply</p>
                        <h2 className="display text-3xl leading-tight md:text-5xl">
                            The right operator in your corner can save you years.
                        </h2>
                        <p className="mt-6 max-w-2xl text-bone/80">
                            Coaching is selective and capped. If the fit is right, you get direct access to the
                            judgment that took me a career to earn — and would take you another decade to learn
                            by hitting every wall yourself.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <Link href="/apply" className="btn-primary">
                            Apply for Coaching
                        </Link>
                        <Link href="/diagnostic" className="btn-ghost">
                            Or take the diagnostic first
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <Section eyebrow="FAQ" title="What founders ask before applying.">
                <FAQ
                    items={[
                        {
                            q: "Who is this actually for?",
                            a: "Founders running real, profitable, or near-profitable companies between $1M and $20M who have outgrown the advice they're getting. If you're pre-revenue or shopping for motivation, this isn't the room.",
                        },
                        {
                            q: "How is this different from a course or a mastermind?",
                            a: "It isn't a course. There's no curriculum to consume. 1-on-1 coaching is direct, private work on your specific company. Limitless Society is a peer room of operators — not a content library.",
                        },
                        {
                            q: "What does the engagement look like?",
                            a: "Coaching engagements are typically 6 months minimum, with regular working sessions, async access, and direct accountability. Most founders use the first 90 days to install systems and the next 90 to install discipline.",
                        },
                        {
                            q: "What does it cost?",
                            a: "1-on-1 coaching starts at $5K/month with a 6-month minimum. Limitless Society and speaking engagements are priced separately. If price is the deciding factor, the timing isn't right yet.",
                        },
                        {
                            q: "Will you sign an NDA?",
                            a: "Yes. Confidentiality is the default, not a negotiation.",
                        },
                        {
                            q: "Why is the application so long?",
                            a: "Because the application is the first piece of work. Vague answers get vague help. Founders who can't articulate their bottleneck on paper rarely fix it in practice.",
                        },
                    ]}
                />
            </Section>

            {/* FINAL CTA */}
            <section className="border-t border-bone/10">
                <div className="container-editorial py-28 text-center">
                    <Reveal>
                        <p className="eyebrow mb-6">Final word</p>
                        <h2 className="display mx-auto max-w-3xl text-3xl leading-[1.1] md:text-5xl">
                            You don't need more motivation.
                            <br />
                            <span className="text-bronze">You need better judgment.</span>
                        </h2>
                        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/diagnostic" className="btn-primary">
                                Take the Diagnostic
                            </Link>
                            <Link href="/apply" className="btn-ghost">
                                Apply for Coaching
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

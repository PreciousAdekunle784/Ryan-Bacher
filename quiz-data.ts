// Founder Scaling Diagnostic
// Each question maps to one or more pillars. The pillar with the highest
// "pain" score determines the result archetype.

export type Pillar = "systems" | "hiring" | "leadership" | "strategy" | "self";

export type QuizOption = {
    label: string;
    // pain score added per pillar (0-3). Higher = more friction.
    weight: Partial<Record<Pillar, number>>;
};

export type QuizQuestion = {
    id: string;
    prompt: string;
    helper?: string;
    options: QuizOption[];
};

export const QUIZ: QuizQuestion[] = [
    {
        id: "revenue",
        prompt: "Where is your business right now?",
        helper: "Trailing twelve months, all revenue.",
        options: [
            { label: "Under $1M — still proving it", weight: { strategy: 2 } },
            { label: "$1M–$3M — found product, drowning in delivery", weight: { systems: 3, hiring: 2 } },
            { label: "$3M–$10M — growing, but everything bottlenecks at me", weight: { leadership: 3, hiring: 2 } },
            { label: "$10M–$20M — it works, but the seams are showing", weight: { systems: 2, leadership: 2, strategy: 1 } },
            { label: "$20M+ — past this stage", weight: {} },
        ],
    },
    {
        id: "bottleneck",
        prompt: "If you took a 30-day silent retreat tomorrow, what breaks first?",
        options: [
            { label: "Sales — the pipeline is me", weight: { leadership: 3, hiring: 2 } },
            { label: "Delivery — the team can't ship without me", weight: { systems: 3, hiring: 2 } },
            { label: "Decisions — nothing moves until I weigh in", weight: { leadership: 3 } },
            { label: "Cash flow — finance is held together with tape", weight: { systems: 3 } },
            { label: "Honestly, most of it would hold", weight: { self: 1 } },
        ],
    },
    {
        id: "hiring",
        prompt: "Last three hires — be honest.",
        options: [
            { label: "All three were the wrong call", weight: { hiring: 3, leadership: 2 } },
            { label: "Two of three regrets", weight: { hiring: 3 } },
            { label: "One was off, two are working", weight: { hiring: 1 } },
            { label: "All three are working", weight: {} },
            { label: "I haven't hired in 12+ months", weight: { hiring: 2, strategy: 1 } },
        ],
    },
    {
        id: "systems",
        prompt: "Pick the truest statement about your operating systems.",
        options: [
            { label: "We run on Slack threads, memory, and vibes", weight: { systems: 3 } },
            { label: "We have docs, but no one reads them", weight: { systems: 2 } },
            { label: "We have a real system in some areas, gaps in others", weight: { systems: 1 } },
            { label: "Operating cadence is solid across the company", weight: {} },
        ],
    },
    {
        id: "team",
        prompt: "How does your leadership team actually behave?",
        options: [
            { label: "I don't have one — I'm the leadership team", weight: { hiring: 3, leadership: 2 } },
            { label: "I have one on paper. They wait for me to decide", weight: { leadership: 3, hiring: 1 } },
            { label: "Solid leaders, but not aligned with each other", weight: { leadership: 2, strategy: 1 } },
            { label: "Capable, aligned, owning their lanes", weight: {} },
        ],
    },
    {
        id: "hours",
        prompt: "How many hours a week are you working — and how do you feel about it?",
        options: [
            { label: "70+ and I'm cooked", weight: { self: 3, leadership: 2 } },
            { label: "60+ and it's becoming a problem", weight: { self: 2, leadership: 1 } },
            { label: "50ish and mostly sustainable", weight: { self: 1 } },
            { label: "Under 45 and the business runs without me daily", weight: {} },
        ],
    },
    {
        id: "decision",
        prompt: "What's the decision you've been avoiding the longest?",
        options: [
            { label: "Firing a senior person who isn't cutting it", weight: { hiring: 3, leadership: 2 } },
            { label: "Killing a product/line/segment", weight: { strategy: 3 } },
            { label: "Raising prices or repositioning", weight: { strategy: 2 } },
            { label: "Stepping out of the day-to-day", weight: { leadership: 3, self: 1 } },
            { label: "Nothing major", weight: {} },
        ],
    },
    {
        id: "advice",
        prompt: "Who do you currently call when something is on fire?",
        options: [
            { label: "A spouse or friend who isn't an operator", weight: { self: 2, leadership: 1 } },
            { label: "A peer group that hasn't done what I'm trying to do", weight: { strategy: 2 } },
            { label: "Random LinkedIn / podcast advice", weight: { strategy: 3, self: 1 } },
            { label: "An operator who has lived it", weight: {} },
        ],
    },
    {
        id: "money",
        prompt: "Where does your relationship with money sit?",
        options: [
            { label: "Tied up in the business and personally tight", weight: { strategy: 2, self: 2 } },
            { label: "Healthy, but I have no real wealth strategy outside the business", weight: { strategy: 1 } },
            { label: "Diversified, structured, and quiet", weight: {} },
            { label: "I'm performing wealth I haven't actually built yet", weight: { self: 3 } },
        ],
    },
    {
        id: "next12",
        prompt: "What does the next 12 months need to be?",
        options: [
            { label: "Stop the bleeding — this is unsustainable", weight: { systems: 2, self: 2 } },
            { label: "Install structure and finally scale clean", weight: { systems: 3, leadership: 2 } },
            { label: "Build the leadership team that runs it without me", weight: { hiring: 3, leadership: 2 } },
            { label: "Reposition for a real exit or next chapter", weight: { strategy: 3 } },
        ],
    },
    {
        id: "commitment",
        prompt: "If the right operator-mentor offered you a seat — honestly, are you ready?",
        options: [
            { label: "Yes. I want direct, no-fluff guidance and I'll do the work.", weight: {} },
            { label: "Probably. I want to see if it's the right fit.", weight: {} },
            { label: "Curious but not ready to invest yet.", weight: { self: 1 } },
            { label: "Just gathering info.", weight: { self: 2 } },
        ],
    },
];

export type ResultArchetype = {
    key: Pillar;
    title: string;
    diagnosis: string;
    cost: string;
    prescription: string;
    recommendation: "coaching" | "limitless";
    cta: { label: string; href: string };
};

export const ARCHETYPES: Record<Pillar, ResultArchetype> = {
    systems: {
        key: "systems",
        title: "The Bottleneck Is Your Operating System",
        diagnosis:
            "Your business works because you hold it together. Slack threads, memory, and heroics are your operating system. That model has a ceiling — and you're starting to feel it.",
        cost:
            "Bad systems get expensive. The cost shows up as missed handoffs, slipped quality, dropped customers, and a leadership team that can't act without you in the room.",
        prescription:
            "You need an installed operating cadence: how decisions get made, how work moves, how the team reports up, how you stay out of the weeds. This is a 90-day rebuild, not a workshop.",
        recommendation: "coaching",
        cta: { label: "Apply for 1-on-1 Coaching", href: "/apply" },
    },
    hiring: {
        key: "hiring",
        title: "Your Hiring Engine Is Costing You The Business",
        diagnosis:
            "Wrong hires kill momentum. You've felt it: a senior seat filled by the wrong person, a team carrying their weight, decisions delayed because the bench isn't real.",
        cost:
            "A bad senior hire at $1M is a setback. At $10M it's a strategic catastrophe. You pay in salary, severance, lost trust, and lost time you don't get back.",
        prescription:
            "You need a hiring system that filters for operators, not interviewees — scorecards, work-product trials, references that actually mean something, and the discipline to walk away.",
        recommendation: "coaching",
        cta: { label: "Apply for 1-on-1 Coaching", href: "/apply" },
    },
    leadership: {
        key: "leadership",
        title: "You Are The Bottleneck",
        diagnosis:
            "Every decision still flows through you. The team is capable, but they're trained to wait. That isn't a team problem. That's a leadership problem you're going to have to solve in the mirror.",
        cost:
            "Founders who can't get out of the work cap their company at the size of their own calendar. Your team disengages. Your judgment dulls. Growth stalls.",
        prescription:
            "Discipline, not motivation. We rebuild your operating week, your decision rights, and the rituals that force the team to step up — and force you to step out.",
        recommendation: "coaching",
        cta: { label: "Apply for 1-on-1 Coaching", href: "/apply" },
    },
    strategy: {
        key: "strategy",
        title: "Your Strategy Is Drifting",
        diagnosis:
            "The business works, but you can't articulate the next chapter in one paragraph. You're optimizing inside a strategy you haven't questioned in two years.",
        cost:
            "Drift is invisible until it isn't. You wake up at $8M with a portfolio of half-bets, a positioning that no longer fits, and a leadership team rowing in five directions.",
        prescription:
            "We sharpen the thesis. We kill what shouldn't survive. We pick the chapter — scale, reposition, or set up a real exit — and run the company against it.",
        recommendation: "coaching",
        cta: { label: "Apply for 1-on-1 Coaching", href: "/apply" },
    },
    self: {
        key: "self",
        title: "The Operator Needs Work, Not The Operation",
        diagnosis:
            "You've built something real. The numbers are fine. But your hours, your judgment, your relationships, and your relationship with money are out of alignment with the life you said you were building.",
        cost:
            "Real wealth doesn't need to scream. Founders who confuse output with identity burn out, blow up marriages, and exit companies with nothing left for what comes next.",
        prescription:
            "This is the room Limitless Society is built for. Operator peers, mentor access, and a discipline around health, wealth, leadership, and how you actually live.",
        recommendation: "limitless",
        cta: { label: "Explore Limitless Society", href: "/limitless" },
    },
};

export function scoreQuiz(answers: Record<string, number>): {
    scores: Record<Pillar, number>;
    archetype: ResultArchetype;
} {
    const scores: Record<Pillar, number> = {
        systems: 0,
        hiring: 0,
        leadership: 0,
        strategy: 0,
        self: 0,
    };
    for (const q of QUIZ) {
        const idx = answers[q.id];
        if (idx === undefined) continue;
        const opt = q.options[idx];
        if (!opt) continue;
        for (const [pillar, val] of Object.entries(opt.weight)) {
            scores[pillar as Pillar] += val ?? 0;
        }
    }
    const winner = (Object.keys(scores) as Pillar[]).reduce((a, b) =>
        scores[a] >= scores[b] ? a : b
    );
    return { scores, archetype: ARCHETYPES[winner] };
}

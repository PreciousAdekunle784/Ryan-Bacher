# Ryan Bacher — Sales Funnel

> **Real operator. Real exits. Real scars. Real systems. No guru theater.**

A complete, premium, anti-guru sales funnel for Ryan Bacher (@racefly): operator, investor, and founder mentor. This repo contains both the implementation (Next.js 14 + Tailwind + Framer Motion) and the full strategy & copy document below.

---

## Table of Contents

1. [Funnel Positioning Statement](#1-funnel-positioning-statement)
2. [Main Funnel Strategy](#2-main-funnel-strategy)
3. [Lead Magnet / Quiz Concept](#3-lead-magnet--quiz-concept)
4. [Landing Page Wireframe & Full Copy](#4-landing-page-wireframe--full-copy)
5. [Quiz Questions & Scoring Logic](#5-quiz-questions--scoring-logic)
6. [Application Form](#6-application-form)
7. [Booking Page Copy](#7-booking-page-copy)
8. [7-Email Nurture Sequence](#8-7-email-nurture-sequence)
9. [Retargeting Ad Copy](#9-retargeting-ad-copy)
10. [20 Social Posts](#10-20-social-posts)
11. [Visual Design System](#11-visual-design-system)
12. [Developer Implementation Plan](#12-developer-implementation-plan)
13. [Page-by-Page Build Checklist](#13-page-by-page-build-checklist)
14. [Final CTA Strategy](#14-final-cta-strategy)

---

## 1. Funnel Positioning Statement

**Ryan Bacher is the operator-mentor founders call when the advice they're getting has run out.**

Not a guru. Not a course-seller. Not a personal-brand performer. A practitioner who has built, scaled, invested in, and exited real companies — and who works with a small number of mid-stage founders to install the systems, hires, and discipline that get them from $1M of chaos to $20M of structure.

The funnel is built around one promise:

> *I help founders avoid expensive mistakes, fix broken systems, hire better, and scale with the discipline I learned building real companies.*

Everything in the funnel — copy, design, pacing, filtering — is tuned to attract the right founder and politely repel the wrong one.

---

## 2. Main Funnel Strategy

### Customer Journey

```
TRAFFIC SOURCE
   ↓
HOOK (anti-guru, operator wisdom)
   ↓
LANDING PAGE (/) — premium, direct, founder-focused
   ↓
LEAD MAGNET / QUALIFIER → /diagnostic (Founder Scaling Diagnostic)
   ↓
RESULT PAGE → /results — personalized diagnosis + clear next step
   ↓
TRUST SEQUENCE → 7-email nurture
   ↓
APPLICATION → /apply (selective, real qualification)
   ↓
BOOKING → /book (Calendly/Cal.com working session)
   ↓
RETARGETING runs in parallel for every drop-off
   ↓
CONVERSION → 1-on-1 Coaching · Limitless Society · Speaking & Advisory
```

### Traffic Sources
- **Organic social** — LinkedIn (primary), X (@racefly), Threads, Instagram. Operator wisdom posts. No hooks-bait, no listicles.
- **Podcast appearances** — founder-focused shows, with the diagnostic as the only CTA.
- **Founder communities** — speaking, sponsorships of operator-grade events.
- **Direct referral** — past mentees, investor network, portfolio founders.
- **Paid retargeting only** — no cold paid traffic. The brand can't afford to look like a course funnel.

### Hook
Anti-guru, operator-led. Examples:
- *"The mistakes you ignore at $1M become expensive at $10M."*
- *"You don't need more motivation. You need better judgment."*
- *"Wrong hires kill momentum. Bad systems get expensive."*

### Qualification Mechanism
Two layers:
1. **The Diagnostic** — qualifies psychology and self-awareness.
2. **The Application** — qualifies stage, fit, intent, and budget.

### Trust-Building Sequence
The 7-email nurture (see §8). Founder-grade emails. No emojis, no PS hype, no fake countdowns. Built to either deepen trust or eject low-fit leads.

### Final Conversion Mechanism
A real 45-minute working session — diagnosed live, not pitched. If fit is right, a coaching invite. If not, a clear, generous off-ramp. Either outcome protects the brand.

### Retargeting Angle
Three audiences:
- Visited but didn't apply
- Started but didn't finish the diagnostic
- Downloaded/took diagnostic but didn't book

All retargeting copy is short, premium, founder-direct (see §9).

---

## 3. Lead Magnet / Quiz Concept

**Chosen lead magnet: The Founder Scaling Diagnostic.**

Why this beats the alternatives:
- A static PDF ("7 Mistakes…") gets downloaded and forgotten. A diagnostic creates *active engagement* and a *personalized outcome* — which converts dramatically better at this price point.
- It self-segments leads into the right offer (Coaching vs. Limitless).
- It generates a personal, written diagnosis the founder feels seen by — which is the emotional pivot the funnel needs.

**Title:** *The Founder Scaling Diagnostic — Find the bottleneck before it finds you.*

**Subtitle:** *11 questions. Four minutes. A direct read on the single biggest constraint on your business right now.*

**Length:** 11 questions. Most founders finish in 4–6 minutes.

**Pillars measured:**
1. **Systems** — operating cadence, documentation, processes
2. **Hiring** — team quality, recent hires, hiring system
3. **Leadership** — founder dependency, decision rights
4. **Strategy** — clarity, focus, positioning
5. **Self** — founder energy, time, money relationship

**Outputs:**
- A primary archetype (the loudest pillar)
- A "Pressure Map" showing all five pillar scores
- Three sections: *Diagnosis · Cost · The Work*
- A single CTA — Coaching or Limitless — based on the archetype

---

## 4. Landing Page Wireframe & Full Copy

**Route:** `/` — `app/page.tsx`

### Section 1 — Hero
**Eyebrow:** Ryan Bacher · Operator · Investor · Founder Mentor
**Headline:** The mistakes you ignore at $1M *become expensive at $10M.*
**Subhead:** I help founders avoid expensive mistakes, fix broken systems, hire better, and scale with the discipline that comes from actually building, operating, investing, and exiting real companies.
**Primary CTA:** Take the Founder Diagnostic
**Secondary CTA:** Apply for 1-on-1 Coaching
**Footer line:** For operators between $1M and $20M who are tired of theory, gurus, and advice from people who have never built anything that lasted.

### Section 2 — Authority Strip
Four-column cards:
- **Operator** — Built, scaled, and exited real companies.
- **Investor** — Backing operator-led businesses, not vibes.
- **Mentor** — Founder-focused. No course. No theater.
- **Anti-guru** — If it sounds like a Lambo coach, it isn't me.

### Section 3 — Problem
**Title:** You've proven the business works. *Now everything is breaking at once.*
**Body:** The same instincts that got you to $1M won't get you to $10M. The same team that built it can't always run it. And every weakness you put off fixing — bad systems, wrong hires, weak strategy, drift in your own discipline — gets more expensive every month you wait.

Three columns:
- **Bad systems get expensive.** Slack threads and memory aren't an operating system. They're a tax on every customer, every hire, every month.
- **Wrong hires kill momentum.** A bad senior hire at $1M is a setback. At $10M it can take a year off the company.
- **Scaling exposes every weakness.** The cracks were always there. Growth just turns the lights on.

### Section 4 — Cost of Inaction
**Title:** Founders rarely fail loudly. They drift quietly.
**Body:** Most companies that should have made it didn't lose to competition. They lost to compounding small mistakes the founder kept ignoring. Drift is invisible — until it isn't.

Four-cell grid contrasting *12 months from now with no change* vs. *12 months from now with the right operator*, plus *Mistakes you don't see yet* vs. *Mistakes I have already lived*.

### Section 5 — Founder Diagnosis (Quiz Tease)
**Title:** Find the bottleneck before it finds you.
**Body:** 11 questions. About four minutes. You get a direct read on the single biggest constraint on your business right now — and what working with me would actually look like for it.
**CTA:** Start the Diagnostic →

### Section 6 — Offers
Three doors. One standard.
- **1-on-1 Founder Coaching** — Direct, private, no-fluff mentorship for $1M–$20M founders.
- **Limitless Society** — Premium room for operators serious about real wealth, real health, real leadership.
- **Speaking & Advisory** — Keynotes, founder offsites, operator-in-residence engagements.

### Section 7 — Who This Is / Is Not For
**For you if:**
- You're running a real business between $1M and $20M.
- You've outgrown the advice you're currently getting.
- You're tired of theoretical frameworks and want an operator who has done it.
- You'll be coachable, do the work, and tell the truth.
- You want a mentor in your corner — not another course.

**Not for you if:**
- You're looking for hype, hacks, or a shortcut.
- You haven't proven the business yet.
- You want someone to validate decisions instead of pressure-test them.
- You think mentorship is something you watch on YouTube.
- You can't honestly answer: *"why now?"*

### Section 8 — Operating Philosophy
Six tenets, two columns:
1. **Discipline beats motivation.** You don't need more motivation. You need better judgment, installed as habit.
2. **Make the customer the hero.** Companies that obsess over their own story lose. Companies that obsess over their customer's story compound.
3. **Hiring is the scaling variable.** Strategy is downstream of who is in the room.
4. **Bad systems are expensive.** Every undocumented decision is a tax your team eventually pays.
5. **Real wealth doesn't need to scream.** The loudest founders are usually the most fragile.
6. **Truth, told kindly, fast.** I will not perform politeness while your company bleeds out.

### Section 9 — Credibility
Three columns: **Built · Invested · Lived it.**
Closing line: *I'm not going to list logos to impress you. If you're the right fit, you'll get the background, references, and case work in a real conversation — not on a marketing page.*

### Section 10 — Application CTA
**Title:** The right operator in your corner can save you years.
**Body:** Coaching is selective and capped. If the fit is right, you get direct access to the judgment that took me a career to earn.
**CTA:** Apply for Coaching · or Take the diagnostic first.

### Section 11 — FAQ
Six questions, all answered honestly without marketing varnish (see implementation in `app/page.tsx`).

### Section 12 — Final CTA
**Title:** You don't need more motivation. *You need better judgment.*
**CTAs:** Take the Diagnostic · Apply for Coaching

---

## 5. Quiz Questions & Scoring Logic

**Source of truth:** `lib/quiz-data.ts`

### Pillars
- `systems` · `hiring` · `leadership` · `strategy` · `self`

### The 11 Questions

1. **Where is your business right now?** (revenue stage)
2. **If you took a 30-day silent retreat tomorrow, what breaks first?** (founder dependency)
3. **Last three hires — be honest.** (hiring quality)
4. **Pick the truest statement about your operating systems.** (systems maturity)
5. **How does your leadership team actually behave?** (team strength)
6. **How many hours a week are you working — and how do you feel about it?** (founder sustainability)
7. **What's the decision you've been avoiding the longest?** (decision discipline)
8. **Who do you currently call when something is on fire?** (advice quality)
9. **Where does your relationship with money sit?** (real vs. performative wealth)
10. **What does the next 12 months need to be?** (strategic clarity)
11. **If the right operator-mentor offered you a seat — honestly, are you ready?** (commitment)

### Scoring Logic
Each option carries a `weight` map adding "pain points" to one or more pillars. After all 11 questions, the pillar with the highest total is the founder's archetype.

### Result Archetypes

| Archetype | Pillar | Recommendation |
|---|---|---|
| The Bottleneck Is Your Operating System | `systems` | 1-on-1 Coaching |
| Your Hiring Engine Is Costing You The Business | `hiring` | 1-on-1 Coaching |
| You Are The Bottleneck | `leadership` | 1-on-1 Coaching |
| Your Strategy Is Drifting | `strategy` | 1-on-1 Coaching |
| The Operator Needs Work, Not The Operation | `self` | Limitless Society |

Each archetype renders a *Diagnosis · Cost · The Work* trio plus a CTA.

---

## 6. Application Form

**Route:** `/apply` — `components/ApplicationForm.tsx`

Designed to feel like a first piece of work, not a contact form.

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | ✓ | |
| Email | email | ✓ | |
| Phone | tel | — | Optional |
| Company name | text | ✓ | |
| Website | url | ✓ | |
| TTM revenue | select | ✓ | <$1M / $1–3M / $3–10M / $10–20M / $20M+ |
| Team size | select | ✓ | 1–5 / 6–15 / 16–50 / 51–150 / 150+ |
| Biggest bottleneck right now | textarea | ✓ | Helper: "Be specific. Vague answers get vague help." |
| Where systems are weakest | textarea | ✓ | |
| Hardest hiring/team problem | textarea | ✓ | |
| Why now? | textarea | ✓ | Helper: "Founders who aren't sure why now tend not to do the work." |
| What you want from Ryan in 6 months | textarea | ✓ | |
| Budget readiness ($5K/mo, 6mo min) | select | ✓ | Yes-now / Yes-30-60 days / Not yet / No |
| Coachable, will do the work, tell the truth | select | ✓ | Yes / Unsure / No |

**Closer copy:**
> Applications are reviewed personally. Most get a response within 3 business days. Not every founder is the right fit, and that is the point.

---

## 7. Booking Page Copy

**Route:** `/book`

**Headline:** Pick a time. *Show up sharp.*
**Subhead:** This is a working session, not a sales call. We're going to look at your business honestly, find the constraint, and figure out whether 1-on-1 coaching is the right move. If it isn't, I'll tell you that — and point you somewhere better.

**Before we talk (preparation list):**
- Block the full hour. No half-attention calls.
- Be ready to share trailing-12 revenue, team size, and your best read on the bottleneck.
- Bring one decision you've been avoiding.
- No deck needed. No prep theater. Just truth.

**What this call is:** A 45-minute working session. Diagnosis. Real talk. Fit check.
**What this call is not:** A pitch. A webinar. A "discovery" survey. A high-pressure close.

Calendly/Cal.com embed slot is left in place for the implementation.

---

## 8. 7-Email Nurture Sequence

Sent over 14 days to anyone who completes the diagnostic or downloads any future lead magnet.

### Email 1 — Day 0 — Diagnosis Delivered

- **Subject:** Your diagnosis is ready
- **Preview:** No grading curve. No fluff. Just the read.
- **Body:**
  > A diagnostic is a mirror, not a verdict.
  >
  > If your read stung a little, that's signal. The bar that's loudest on your pressure map is rarely the one you'll fix on your own — that's the whole point of an outside operator.
  >
  > Over the next two weeks I'll send you six more emails. Each one covers a single mistake I see founders making between $1M and $20M, and what to actually do about it.
  >
  > No motivation. No theatrics. Just the patterns.
  >
  > — Ryan
- **CTA:** Re-read your diagnosis →

### Email 2 — Day 2 — Bad Systems

- **Subject:** Bad systems get expensive
- **Preview:** What an "operating system" actually means.
- **Body:**
  > Most $1M–$10M companies don't have an operating system. They have Slack threads, founder memory, and three over-trusted senior people quietly compensating for the gaps.
  >
  > It works. Until it doesn't. Then it costs you a customer, a hire, a quarter, or a year.
  >
  > A real operating system is four things:
  >
  > 1. A clear cadence — when work happens, who reports up, how decisions are made.
  > 2. A documented core — the 20 decisions you make every week, written down once.
  > 3. A scoreboard — leading and lagging metrics every leader sees the same way.
  > 4. A founder who refuses to be the cache for institutional memory.
  >
  > If any of those are missing, you don't have a system. You have a single point of failure with a payroll.
  >
  > — Ryan
- **CTA:** Apply for 1-on-1 Coaching →

### Email 3 — Day 4 — Wrong Hires

- **Subject:** A bad senior hire at $10M
- **Preview:** Costs more than salary.
- **Body:**
  > A bad junior hire is a tuition payment. A bad senior hire at $10M can take a year off the company.
  >
  > Salary. Severance. The team they alienate. The hires they recruit who aren't good either. The trust your strongest people quietly lose. The decision velocity that drops to zero while you wait too long to act.
  >
  > Most founders I work with don't have a hiring problem. They have a *firing* problem — and a "convince myself it'll work out" problem.
  >
  > The real fix is upstream: a hiring system with scorecards, work-product trials, references that mean something, and the discipline to walk away from a candidate everyone else likes.
  >
  > Hiring is the single biggest scaling variable. Treat it like one.
  >
  > — Ryan
- **CTA:** Apply for 1-on-1 Coaching →

### Email 4 — Day 6 — You Are The Bottleneck

- **Subject:** When the founder is the constraint
- **Preview:** This part isn't about your team.
- **Body:**
  > Eventually, every founder I work with admits the same thing out loud:
  >
  > *"It's me. I'm the bottleneck."*
  >
  > Not because the team is weak. Because the team has been trained — by months or years of you stepping in — to wait for the founder to weigh in.
  >
  > You can't fix that with a Notion doc. You fix it by changing what you do on Monday morning, what meetings you sit in, what decisions you stop making, and what discomfort you accept while the team learns to step up.
  >
  > Discipline. Not motivation.
  >
  > — Ryan
- **CTA:** Take the Diagnostic if you haven't yet →

### Email 5 — Day 8 — Real Wealth vs. Performance

- **Subject:** Real wealth doesn't need to scream
- **Preview:** A note for the founders who feel this one.
- **Body:**
  > There's a generation of founders right now performing wealth they haven't actually built.
  >
  > Watches. Cars. Posts. Trips. The optics of having made it, while the business is one bad quarter away from a problem and the personal balance sheet is mostly trapped equity.
  >
  > I've watched plenty of founders mistake output for identity, and identity for security. It is the loudest path to fragility I know.
  >
  > Quiet, durable, structured. That's the move. A business that runs without you. A balance sheet that's diversified outside of it. A life that doesn't require an audience.
  >
  > That's the work. That's also what Limitless Society was built for.
  >
  > — Ryan
- **CTA:** Explore Limitless Society →

### Email 6 — Day 11 — Why Scaling Breaks Weak Companies

- **Subject:** Scaling exposes every weakness
- **Preview:** Growth doesn't fix the cracks. It widens them.
- **Body:**
  > There's a comforting lie in startup culture: *"we'll fix it once we get to scale."*
  >
  > You won't. Scale doesn't fix problems. It magnifies them. The half-broken hiring process at $2M becomes a senior leadership disaster at $10M. The undocumented sales motion that "works" at $3M becomes an unteachable mess at $8M. The founder who can't stop being CEO of everything becomes a hard ceiling at $15M.
  >
  > The companies that scale clean fixed the cracks at $1M, $3M, and $5M — quietly, deliberately, while it was still cheap to fix.
  >
  > That's the work I do with founders. We don't wait for scale to expose the weakness. We hunt it down first.
  >
  > — Ryan
- **CTA:** Apply for 1-on-1 Coaching →

### Email 7 — Day 14 — The Invitation

- **Subject:** If you've been thinking about it
- **Preview:** A direct word.
- **Body:**
  > A quick, honest note.
  >
  > If you've read these emails and the diagnosis hit something real, I want to invite you to apply for 1-on-1 coaching.
  >
  > It is selective. The roster is capped. It starts at $5K/month with a six-month minimum, because the work that actually moves a company doesn't happen in a single session.
  >
  > If price is the deciding factor, the timing isn't right. If "I'll do it later" is the deciding factor, later usually means *more expensive.*
  >
  > If you're ready, the application is below. It's longer than most. That's intentional — it's the first piece of work.
  >
  > If you're not ready, no harm done. The emails will keep coming. When the time is right, you'll know.
  >
  > — Ryan
- **CTA:** Apply for Coaching →

---

## 9. Retargeting Ad Copy

Short, premium, no exclamation marks, no fake urgency. All ads use the dark editorial creative system.

### Visited landing page, didn't apply
1. *"You don't need more motivation. You need better judgment. — Ryan Bacher"* — CTA: Apply
2. *"The mistakes you ignore at $1M become expensive at $10M."* — CTA: Take the Diagnostic
3. *"Real operator. Real exits. Real scars. Real systems. No guru theater."* — CTA: See if there's a fit

### Started the diagnostic, didn't finish
4. *"Three minutes left. Find the bottleneck before it finds you."* — CTA: Finish your diagnostic
5. *"You started it for a reason. Don't leave the read on the table."* — CTA: Resume

### Took the diagnostic, didn't book / apply
6. *"You saw the diagnosis. The work is the next step."* — CTA: Apply
7. *"The right operator in your corner can save you years."* — CTA: Apply for Coaching
8. *"Discipline beats motivation. Apply when you're ready to do the work."* — CTA: Apply

### Opened emails but didn't apply
9. *"Wrong hires kill momentum. Bad systems get expensive. Both are fixable — with the right operator in the room."* — CTA: Apply
10. *"Founders rarely fail loudly. They drift quietly. Don't drift another quarter."* — CTA: Apply

---

## 10. 20 Social Posts

Operator wisdom. No emojis. No hashtags. Punchy, memorable, anti-guru.

1. The mistakes you ignore at $1M become expensive at $10M.
2. You don't need more motivation. You need better judgment.
3. A bad senior hire at $10M can take a year off the company.
4. Bad systems get expensive. Slack threads aren't an operating system.
5. Real wealth doesn't need to scream. The loudest founders are usually the most fragile.
6. Hiring is the single biggest scaling variable. Treat it like one.
7. Most founders don't have a hiring problem. They have a firing problem.
8. Strategy is downstream of who is in the room.
9. If your team waits for you to weigh in on everything, that's not a team problem. It's a leadership problem.
10. Discipline beats motivation. Always. Forever. End of debate.
11. Companies that obsess over their own story lose. Companies that obsess over the customer's story compound.
12. Drift is invisible until it isn't. You wake up at $8M with a portfolio of half-bets.
13. "We'll fix it at scale" is a lie founders tell themselves. Scale magnifies what's broken. It does not repair it.
14. Truth, told kindly, fast. That's the standard. Anything less is cowardice with a smile.
15. The advice you can afford to ignore at $1M will run your company at $10M if you don't deal with it.
16. The right operator in your corner can save you a decade of expensive mistakes.
17. Performing wealth and building wealth are different sports. Most founders pick the wrong one.
18. The loudest founders on the internet are usually the quietest in their own P&L.
19. If you can't write your single biggest bottleneck on a notecard, you don't know what it is.
20. The real coaches don't sell courses. They sit beside you when the call is hard.

Each post links — when appropriate — to `/diagnostic` (top of funnel) or `/apply` (warm).

---

## 11. Visual Design System

### Aesthetic
**Quiet luxury. Founder boardroom. Editorial dark.**

The page should feel like a private members' room, not a webinar. Think *The Economist* meets a private bank meets a serious operator's notebook.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0B0B0C` | Primary background |
| `graphite` | `#141416` | Section background contrast |
| `slate` | `#1C1C1F` | Cards / containers |
| `bone` | `#EDE7DA` | Primary text |
| `paper` | `#F5F1E8` | Highlights |
| `bronze` | `#B8895A` | Accent / CTA / eyebrows |
| `bronzeDeep` | `#8C6235` | Hover state |
| `muted` | `#8B8780` | Secondary text |

### Typography
- **Display / Editorial:** EB Garamond (serif). Set tight (`tracking-editorial: -0.02em`). Used for hero, section titles, archetype titles.
- **Body / UI:** Inter (sans). 16–18px body. Generous leading.
- **Eyebrows / Mono:** JetBrains Mono. 11px, uppercase, `0.18em` letter spacing.

### Layout
- Editorial grid, max-width `1180px`.
- Generous whitespace — section padding `py-24` to `py-40`.
- Long form sections that breathe. No "card walls".
- Asymmetric, magazine-feeling section pairings (1.4fr / 1fr columns).

### Buttons
- **Primary:** Solid bronze, ink text, sharp corners (no rounded), `tracking-[0.14em] uppercase`. Hover: bronzeDeep.
- **Ghost:** Transparent, bone/30 border. Hover: bone/70.
- No gradients. No shadows. No glow. No emojis. No icons inside CTAs unless meaningful.

### Imagery Direction
- Black-and-white or desaturated portraiture of Ryan. Considered, low-saturation.
- Negative space respected — never fill the whole frame.
- No stock photos. No "businessman handshake". No skylines. No Lambos.
- Texture cues: paper grain, leather, brass, dim ambient lighting.

### Animation
- Subtle. `framer-motion` only.
- Reveal on scroll: 14px translate, 0.7s ease, viewport once.
- Quiz transitions: 220ms cross-fade between questions.
- No parallax theatrics. No scroll-jacking. No marquee. No counters.
- Honors `prefers-reduced-motion`.

### Mobile-First Rules
- 16px minimum body type. Hero scales to 4xl on mobile, 7xl on desktop.
- Single-column flow. Sticky aside elements collapse cleanly.
- Touch targets min 44px. Buttons full-width on `< sm`.
- Quiz one-question-per-screen, large tap targets.

### Moodboard
*Cordovan leather notebook on a dark walnut desk. Single brass lamp. Linen shirt cuff. The black-and-white portrait section of an FT Weekend issue. The Ritz-Carlton lobby at 11pm. Patek Philippe Calatrava on a worn band. The interior of a Steinway. The smell of bourbon and a freshly opened pen.*

### Avoid Visually
- Lambos, watches stacks, jets, mansions, "lifestyle" reels.
- Neon gradients, glowing buttons, animated backgrounds.
- Cartoon icons, cheap illustration sets.
- "As seen on Forbes" press strips of unverifiable badges.
- Stock images of laptops with coffee cups.
- Countdown timers, fake urgency, "X people viewing this page".
- Live chat popups, exit-intent popups, scroll-triggered modals.

---

## 12. Developer Implementation Plan

### Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for the design system
- **Framer Motion** for subtle animation
- **React Server Components** by default; `"use client"` only where state is needed (quiz, form, FAQ)
- Form / CRM: webhook-ready (HubSpot, Pipedrive, Notion, or Zapier)
- Calendar: Calendly / Cal.com / SavvyCal embed
- Email: ConvertKit / Customer.io / Loops
- Analytics: GA4 + Meta Pixel + LinkedIn Insight; vendor-neutral via `lib/analytics.ts`

### Folder Structure
```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Landing
│   ├── globals.css
│   ├── diagnostic/page.tsx
│   ├── results/page.tsx
│   ├── apply/page.tsx
│   ├── book/page.tsx
│   ├── limitless/page.tsx
│   ├── speaking/page.tsx
│   ├── thank-you/page.tsx
│   └── privacy/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── Reveal.tsx
│   ├── Quiz.tsx
│   ├── ApplicationForm.tsx
│   └── FAQ.tsx
├── lib/
│   ├── quiz-data.ts            # Questions, scoring, archetypes
│   └── analytics.ts            # Vendor-neutral event tracking
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── tsconfig.json
```

### Component Inventory
- `Nav`, `Footer`, `Section`, `Reveal`, `FAQ` — layout primitives
- `Quiz` — stateful, animated, posts to `/results`
- `ApplicationForm` — schema-driven, submits to a placeholder endpoint, redirects to `/thank-you`

### Data Structures

```ts
// lib/quiz-data.ts
type Pillar = "systems" | "hiring" | "leadership" | "strategy" | "self";

type QuizOption = {
  label: string;
  weight: Partial<Record<Pillar, number>>;
};

type QuizQuestion = {
  id: string;
  prompt: string;
  helper?: string;
  options: QuizOption[];
};

type ResultArchetype = {
  key: Pillar;
  title: string;
  diagnosis: string;
  cost: string;
  prescription: string;
  recommendation: "coaching" | "limitless";
  cta: { label: string; href: string };
};
```

### Conversion Tracking Events
Defined in `lib/analytics.ts`. Wire to GA4, Segment, Meta, LinkedIn — whatever the marketing stack uses.

```
lead_magnet_view
lead_magnet_download
diagnostic_start
diagnostic_question_answered
diagnostic_complete
result_view
application_start
application_submit
booking_view
booking_scheduled
limitless_view
limitless_signup
speaking_view
speaking_inquiry
email_capture
```

### SEO Metadata
- Per-page `metadata` exports.
- `metadataBase`, OpenGraph, Twitter card on root layout.
- Robots indexable on all pages except `/results`, `/book`, `/thank-you` (consider `noindex`).
- Add `app/sitemap.ts` and `app/robots.ts` before launch.

### Performance Requirements
- Lighthouse ≥ 95 across performance / accessibility / best practices / SEO.
- Largest contentful paint under 1.8s on 4G.
- Fonts loaded via `next/font` (recommended upgrade from CDN link in launch hardening).
- No layout shift (CLS = 0). Images use `next/image` with explicit dimensions.
- Preload hero font and primary CTA above the fold.

### Accessibility Requirements
- WCAG 2.1 AA minimum.
- Color contrast verified for `bone-on-ink` and `bronze-on-ink`.
- All interactive elements have visible focus styles.
- Quiz fully keyboard navigable; current question announced via `aria-live`.
- Forms: every input has a `<label>`; errors are announced.
- Honors `prefers-reduced-motion`.

### Mobile Responsiveness
- Mobile-first Tailwind utility ordering (`base → md: → lg:`).
- Hero, sections, grid, footer all collapse to single column under 768px.
- Sticky asides become normal flow.
- Buttons go full-width on mobile.

### Deployment
- Vercel recommended (zero-config Next.js).
- Environment variables for: CRM webhook URL, email provider API key, calendar URL, analytics IDs.
- Branch deploys for marketing review before promotion to prod.

---

## 13. Page-by-Page Build Checklist

### `/` — Landing
- [x] Hero with primary + secondary CTA
- [x] Authority strip
- [x] Problem section (3 columns)
- [x] Cost-of-inaction grid
- [x] Diagnostic tease + CTA
- [x] Three-offer block (Coaching · Limitless · Speaking)
- [x] Who-this-is / isn't-for
- [x] Operating philosophy (6 tenets)
- [x] Credibility section
- [x] Application CTA band
- [x] FAQ (6 questions)
- [x] Final CTA
- [ ] Replace `metadataBase` URL with production domain
- [ ] Wire CTAs to analytics events

### `/diagnostic`
- [x] Title, subtitle, intro copy
- [x] 11-question Quiz component with progress bar
- [x] Email capture as final step
- [x] Submits to `/results` with encoded answers
- [ ] Persist answers to CRM/email tool via webhook

### `/results`
- [x] Personalized archetype + diagnosis/cost/work
- [x] Pressure Map visualization across all 5 pillars
- [x] Recommendation routes to Coaching or Limitless
- [ ] Trigger nurture sequence enrollment
- [ ] `noindex`

### `/apply`
- [x] Sticky aside with engagement details
- [x] 14-field application form
- [x] Submit redirects to `/thank-you`
- [ ] Wire submit to CRM (HubSpot/Pipedrive/Notion/Zapier)
- [ ] Add inbound notification (email/Slack to Ryan)

### `/book`
- [x] Working-session framing
- [x] Preparation list
- [x] Calendar embed slot (Calendly/Cal.com)
- [ ] Insert real Calendly iframe `src`
- [ ] `noindex`

### `/thank-you`
- [x] Application-received messaging
- [x] Three-step "what happens next"
- [x] Cross-link to Limitless
- [ ] Trigger Slack/email notification to Ryan

### `/limitless`
- [x] Hero, what-it-is, who-belongs
- [x] Membership note + apply CTA
- [ ] Add waitlist form variant if at capacity

### `/speaking`
- [x] Hero, three engagement formats
- [x] Topic list
- [x] Inquiry form (mailto fallback)
- [ ] Replace mailto with proper inbound webhook

### `/privacy`
- [x] Plain-English placeholder
- [ ] Replace with counsel-reviewed final policy

---

## 14. Final CTA Strategy

The funnel optimizes against five conversion goals, in priority order:

1. **Qualified coaching applications** — primary money objective
2. **Booked founder calls** — proxy for revenue
3. **Limitless Society signups** — recurring revenue + brand defense
4. **Speaking & advisory inquiries** — premium one-off revenue
5. **Email list growth from serious founders** — pipeline insurance

### CTA Hierarchy by Page

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| `/` | Take the Diagnostic | Apply for Coaching |
| `/diagnostic` | Submit answers | — |
| `/results` (coaching archetypes) | Apply for Coaching | Back to home |
| `/results` (self archetype) | Explore Limitless Society | Back to home |
| `/apply` | Submit Application | — |
| `/book` | Schedule (calendar embed) | — |
| `/thank-you` | Limitless Society | Back to home |
| `/limitless` | Request Membership | Take the Diagnostic |
| `/speaking` | Send Inquiry | — |

### Rules of the Road
- **One primary CTA per section.** Never ask for two things at once.
- **No fake urgency. Ever.** No countdowns, no "spots filling fast", no "last chance".
- **No popups.** No exit-intent. No chat-bait. The room is quiet on purpose.
- **The off-ramp is part of the brand.** "Not ready" is a respected answer.
- **The application is the close.** If a founder fills out the application honestly, the booking and conversion are downstream consequences. Engineer for application quality, not application volume.

> *Real wealth doesn't need to scream. Neither should the funnel.*

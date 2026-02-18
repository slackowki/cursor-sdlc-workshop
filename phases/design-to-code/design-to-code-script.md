# Design-to-Code: Video Script

**Total runtime target: ~8 minutes**
Open `design-to-code-coaching.html` in your browser and advance slides as indicated.

---

## Intro — Before Slide 1 *(~75 seconds)*

*Camera on or talking head. Slide 1 (title) visible in the background or not yet shown — your call.*

> All right, what's going on everyone? I'm back with a quick video.
>
> Before we jump in — I wanted to do this as the first in a series of follow-up videos to the SDLC workshop. We got a lot of feedback, and yeah, it was more chaotic than I'd expected. It was the first one — we learned, as we do here at Cursor. I promise next time will run much smoother.
>
> But honestly? That's not necessarily a bad thing. It was actually a pretty solid empathy-building exercise — because customers, no matter how technical, have to go through that same journey. What you experienced is really not that far from what our customers deal with on a day-to-day basis. And more importantly, it's a big reason *why* they love Cursor so much — because as chaotic as it was, it would've been ten times worse without it.
>
> And remember — you were only on teams of five. You were already running into code sync issues, merge conflicts, waiting on PR reviews. Now imagine that at enterprise scale, where not being aligned with the team or waiting too long on a review could mean millions of dollars lost in an incident. The stakes are way higher.
>
> So the chaos wasn't bad — but it did mean we didn't get to some of the most important pieces. Specifically, how Cursor actually plays into all of this, where it solves real problems, and how it makes life much easier.
>
> So over the next couple weeks I'm going to do a short series of videos that breaks down what you should have taken away from each section. And this format might actually be better — I can pull in real customer calls, give concrete examples from conversations you've been on, and connect it back to your day-to-day.
>
> Today's topic: **planning and design-to-code**. How teams plan the work, how designs become production code, how to run discovery around it, and how Cursor helps at each step. Let's get into it.

**[SHOW SLIDE 1]**

---

## Slide 1 — Title *(~30 seconds)*

*Talking points — don't read verbatim, just hit each bullet:*

- **Everyone has their own workflows** — designers have their design systems, PMs have their PRD templates, engineers have their codebases
- **The problem:** each workflow is its own language — and eventually it all needs to get translated into code. That process is like trying to communicate with someone who speaks a different language. A lot gets lost in translation.
- **The opportunity:** Cursor lets them keep their way of working, but translates it not just into code, but code that's actually compatible with the rest of the codebase.

 Design systems, PRDs, specs all feed in directly in a way engineers can use efficiently.

- **What we'll cover:** how all of that feeds into each other, where it breaks down, and how Cursor makes it seamless

**[ADVANCE]**

---

## Slide 2 — Where Design-to-Code Lives *(~25 seconds)*

- **Full SDLC** — Plan, Design, Develop, Test, Review, Deploy. Every company does some version of this.
- **Plan + Design happen in parallel** — they feed into each other and both inform what gets built.
- **Our focus:** the handoff from Design into Develop. When this breaks, everything downstream breaks too.

**[ADVANCE]**

---

## Slide 3a — What Design-to-Code Looks Like Today — Without Cursor *(~30 seconds)*

*"Without Cursor" branch is highlighted. "With Cursor" is visible but dimmed.*

> Here's the workflow at most companies. Designer creates a mockup in Figma using the design system — buttons, dropdowns, cards. The mockup looks pixel-perfect. And then it hits the gap.
>
> Without Cursor, the engineer has to rebuild everything from scratch — or work from a screenshot. The designer says "it should look like this," the engineer says "that's not how our components work." Nobody's wrong, the tools just don't talk to each other. Weeks of back-and-forth.
>
> Caroline at Sigma told us: "We started by uploading screen captures to Cursor, asking it to recreate them. The output is not always design system compliant and tends to add extra CSS code. And this is an issue for us."

**[ADVANCE — focus shifts to "With Cursor" branch]**

---

## Slide 3b — What Design-to-Code Looks Like Today — With Cursor *(~20 seconds)*

*"With Cursor" branch is now highlighted. "Without Cursor" dims.*

> Now look at the other path. With Cursor, the design system and mockups get translated directly into code that's compatible with the actual codebase. Not generic code — *your* components, *your* framework.
>
> And here's the unlock: the designer can actually iterate on that code before the engineer even touches it. The engineer's job becomes the final tweaks — connecting to the database, wiring up APIs — not rebuilding the UI from scratch.

**[ADVANCE — moves to next slide]**

---

## Slide 4 — The Cursor Workflow *(~45 seconds)*

- **Start from the same codebase** — designer and engineer both work from the same source of truth, not separate silos
- **Designer iterates on UI** — pulls design via Figma MCP, refines interactions and styling in real code. Merges a PR.
- **Engineer connects backend in parallel** — works from the same codebase the designer committed to. Wires up database, APIs, auth. Doesn't touch the design.
- **The key shift:** before Cursor, the designer was in a silo handing off mockups. Now they work in parallel on the same codebase.
- **Final result:** the PR is a *working version* with collaborative work — not a mockup that gets handed back and forth between designer and engineer many times.

**[ADVANCE]**

---

## Slide 5a — Why "Looks Right" Isn't Enough — Without Cursor *(~25 seconds)*

*The left panel ("Without Cursor") is highlighted. The right panel is visible but dimmed.*

> This is the most important concept in the whole deck.
>
> Think of it like IKEA furniture. You have the perfect picture of what to build — a beautiful bookshelf on the box. But the instruction manual is in a language you don't speak. You can *see* the end result. But you can't follow the steps. The Allen wrench it references? Not in your box. The parts don't match.
>
> That's exactly what happens when generic AI generates code from a design. ChatGPT gives you something that *looks* right — but it's React when you need Vue, custom CSS when you need Zen components. The pictures match, but the instructions are useless.

**[ADVANCE — focus shifts to right panel]**

---

## Slide 5b — Why "Looks Right" Isn't Enough — With Cursor *(~25 seconds)*

*The arrow activates. The right panel ("With Cursor") is now highlighted. Left panel dims slightly.*

> Now imagine the same instruction manual, translated into *your* language, referencing the specific tools and parts you already have. Step 3 says "use the Allen wrench from bag B" — and bag B is actually in your box. Everything fits.
>
> That's Cursor with Figma MCP. It knows your codebase, your components, your framework. The code it generates *actually fits*. For Sigma, their language is Vue plus the Zen design system. Cursor generates Vue code using actual Zen components — not custom CSS.

**[ADVANCE — moves to next slide]**

---

## Slide 6 — Three Ways Design Becomes Code *(~45 seconds)*

> Let's make this concrete. Same mockup, three very different outcomes.
>
> Approach one: traditional handoff. Designer delivers a Figma file, engineer rebuilds from scratch. Weeks of "that's not how I designed it" versus "that's not how our components work." Slow, expensive, frustrating.
>
> Approach two: AI without context. Designer pastes a screenshot into ChatGPT. Gets code that looks right — but it's the wrong framework, wrong components, can't be merged. This is the IKEA problem. Fast, but incompatible.
>
> Approach three: Cursor with Figma MCP. The MCP pulls the design directly — not as pixels, but as structured metadata. Cursor reads your actual codebase. It generates code in your framework, using your design system components. The output is mergeable, reviewable, real. Fast AND compatible. That's the unlock.

**[ADVANCE]**

---

## Slide 7 — How Cursor Solves This *(~45 seconds)*

> So what gives Cursor the edge? Three things that generic AI simply doesn't have.
>
> First: codebase awareness. Cursor indexes your entire project — framework, components, folder structure, patterns. When it generates code, it follows *your* conventions, not generic ones.
>
> Second: the Figma MCP connection. It reads design metadata — not just pixels. It understands layers, component names, spacing, variables. The design carries intent, not just appearance.
>
> Third: design system compliance. Because Cursor sees both the Figma design and the code, it maps Figma components to their code equivalents. Zen button in Figma becomes a Zen button in code. Not custom CSS.
>
> Intuit told us: "You can specify cursor rules to make sure it adheres to your design system. But it's that configuration part that doesn't come pre-packaged — that's hard to convince designers to do." The opportunity is making that setup frictionless. Cursor rules plus repo-level component libraries are the mechanism.

**[ADVANCE]**

---

## Slide 8 — Discovery Questions *(~30 seconds)*

> Here are the questions you should be asking in every conversation where design-to-code comes up. Understand their stack — what design tools, what framework, do they have a design system. Understand their pain — how does handoff work today, how much rework happens, have designers tried AI, what broke.
>
> And here's the coaching point: when a customer says "do you have examples of companies who succeeded?" — that's your opening. Don't just offer a demo. Lead with: "Let me tell you what the companies who've solved this did differently. They stopped treating design-to-code as a handoff and started treating it as a collaboration — in the same tool, on the same codebase."

**[ADVANCE]**

---

## Slide 9 — The Story to Tell *(~25 seconds)*

> Three things to remember.
>
> One: "looks right" does not equal "works right." The IKEA analogy. Beautiful pictures, wrong language.
>
> Two: Cursor translates your design system into your codebase's language. Figma MCP plus codebase awareness means the code is real — it's not a prototype, it's a PR.
>
> Three: parallel, not sequential. Designers push UI code, engineers wire it up, they merge. The handoff gap disappears.
>
> The one-liner: "Cursor doesn't just generate code from designs — it generates code that actually fits into your codebase."

**[ADVANCE]**

---

## Slide 10 — The Pitch *(~45 seconds)*

*Three columns: value prop, differentiator, outcome. Hit each fast.*

- **Keep your design system, get more from it** — Cursor connects to their design system through Figma MCP and converts it directly into codebase-compatible code. They don't change how they work — they just get way more value from the system they already built.
- **How we do it better** — Hooks, Skills, and Agents fine-tune everything to their codebase. And the built-in browser editor gives designers a Figma-like experience where they're writing code without it feeling like code.
- **Why it matters — the handoff shrinks** — What used to be many rounds of back-and-forth becomes one or two. Designers push a near production-ready PR. Engineers approve and do final touches instead of rebuilding from scratch.
- **10-second version:** "Cursor lets your designers keep their design system and workflow, but now their work translates directly into production code. The handoff that used to take weeks becomes one PR."

---

**END — Total: ~8.5 minutes**

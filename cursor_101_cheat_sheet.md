# Cursor 101 Presentation Cheat Sheet

## Opening (5 min)
- **Reassure the audience**: You don't need to write code to use Cursor effectively
- **Field Engineering support**: FEs are here to help—bring us into meetings anytime, Slack channel: `#team-field-eng`
- **POC structure reminder**: 4-week trial → Cursor 101 (week 1) → Cursor 201 (week 2) → Office hours/reverse demos (weeks 3-4)

---

## The Cursor Ecosystem (3 min)
| Product | What it is |
|---------|------------|
| **IDE** | Main product—where we're focusing today |
| **CLI** | Command line interface (competes with Claude Code, Codex) |
| **Cloud Agents** | Run prompts on VMs in the cloud |
| **BugBot** | Auto-review PRs for bugs |

**Key point**: IDE is still the best place to build software—it's our core focus

---

## IDE Orientation (5 min)
**Four quadrants:**
1. **Left**: File Explorer (your project files)
2. **Center**: File Editor (view/edit code)
3. **Right**: Chat Pane (talk to AI models)
4. **Bottom**: Utilities (terminal, errors, etc.)

**Demo**: Open an empty folder, create `index.html`

---

## The Three Core Features (20-25 min)

### 1. Tab (Autocomplete on Steroids)
- **Powered by**: Fusion (Cursor's own model)—**huge differentiator**
- **What it does**: Predicts your next action as you type
- **Why it's special**:
  - Analyzes your codebase
  - Learns from accepted/rejected suggestions
  - Writes code "in your voice"
  - Top 3 models globally for lines of code generated/day
- **Great entry point** for engineers new to AI coding
- **Demo**: Type `<html>` tag → Tab suggests skeleton → accept with Tab key

### 2. Inline Edit (Quick Edits)
- **How to use**: Highlight code → Click "Quick Edit" → Enter prompt
- **Model agnostic**: Choose from any frontier model (Claude, GPT, Gemini, etc.)
- **Diff interface**: See old code (red) vs new code (green) → Accept/Reject
- **Demo**: Highlight H1 tag → "make this more colorful"

### 3. Chat Pane (The Power Tool)
- **This is where most Cursor engineers live** (95% of code generation)
- **Key capabilities**:
  - Natural language prompts
  - Create/update **multiple files** at once
  - Streaming responses (see it work in real-time)
  - Build up context over multiple prompts
- **Demo**: "Build a multi-page website that is a restaurant directory for Germany"

---

## Critical Concept: Context Window (5 min)

**What it is**: The model's "short-term memory"—managed by Cursor

**Why it matters**: 
- Models have NO native short-term memory
- Cursor sends relevant history with each prompt
- As context grows → accuracy degrades (show the graph mental model)

**Best practice**: 
> **Start a new chat session (+ button) every time you shift focus**

**Check your usage**: Hover over the wheel icon in the input box

---

## Model Agnosticism (3 min)
- **We support ALL leading models**: Anthropic, OpenAI, Google, xAI, open-source
- **Why this matters**:
  - We tune system prompts per model for best output
  - We roll out new models same-day (often within minutes)
  - Enterprise admins can restrict which models are available
- **Composer 1**: Our own model—purpose-built for code, incredibly fast
  - "It's like crack—once you use it, other models feel slow"
  - Composer 2 coming soon (targeting Claude 4.5 Opus level)

---

## Adding Context with @ Symbol (3 min)
- `@file` / `@folder` — attach specific code
- `@docs` — attach indexed documentation (Settings → Indexing & Docs → Add Doc)
- `@browser` — control the integrated browser

**Pro tip**: Attaching specific files feels more precise and saves search time

---

## Codebase Indexing (Differentiator!) (3 min)
- Cursor indexes your **entire codebase** automatically
- All tools (Tab, Inline Edit, Chat) are connected to the index
- **Stored as vector embeddings** (just 1s and 0s—we can't read your code)
- **Extremely fast** search even in massive codebases (100k+ files)

**Talk track**: "This is one of our biggest differentiators vs competitors"

---

## Browser Integration (3 min)
- **Two ways to use**:
  1. **Run button** (triangle icon): Just opens the page
  2. **`@browser` in chat**: Agent controls the browser (click, scroll, fill forms, read console)
- **Settings**: Tools & MCP → Browser Tab vs Google Chrome
- **Demo**: "Test the contact us form using @browser"

---

## Plan Mode (5 min)
**For longer-horizon tasks** (multi-step, 15-20 min of work)

**How it works**:
1. Switch from Agent → Plan mode
2. Describe what you want built
3. Model creates a checklist of tasks
4. Refine the plan together
5. Hit "Start" → watch it check off tasks as it works

**Why it exists**: Models lose quality on long tasks without a checklist to follow

**Demo**: "Update the restaurants page to have advanced search with cost, noise level, casual vs formal, cuisine, romantic, good for kids"

---

## Troubleshooting Tips (Keep in Back Pocket)

| Issue | Fix |
|-------|-----|
| Browser won't load | Check Settings → Network → Disable proxy |
| Indexer not active | Usually a proxy issue—same fix |
| Need to bypass local restrictions | Try Cloud Agent (Agent Type dropdown) |
| Chrome vs Browser Tab | Settings → Tools & MCP → Browser Automation |

---

## Wrap-Up Talking Points
- **Non-deterministic nature**: Same prompt can give different results—be on your toes in demos, but it's also a teaching opportunity
- **Start simple**: Tab → Inline Edit → Chat Pane is the typical adoption journey
- **Lean on Field Engineering**: We're here to help—don't hesitate to bring us in

---

## Key Differentiators to Remember
1. **Tab/Fusion model** — fastest, smartest autocomplete in the space
2. **Codebase indexing** — best-in-class understanding of large codebases
3. **Model agnostic** — all leading models, tuned system prompts, same-day releases
4. **Composer 1** — our own model, purpose-built for code, blazing fast
5. **IDE-first approach** — full control over UX, not just a plugin

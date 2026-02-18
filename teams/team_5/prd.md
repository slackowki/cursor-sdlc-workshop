# Product Requirements Document (PRD)

> **Instructions:** This is your team's project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** Cursor Type Rush

**One-line Description:** A word typing speed game that measures WPM and accuracy, styled with Cursor’s dark theme and purple/blue branding.

**Type:** Web App (React, frontend-only)

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes** by one person
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!** You need a project that has at least 5 features so everyone on your team can pick one and add it
- Feel free to take one of the ideas below — this exercise is about learning the git flow, collaborating as a team, and understanding where Cursor's features fit into the SDLC

### Cursor-Themed Design
- **Colors:** Dark background (`#1e1e1e` or similar), light text (`#e4e4e7`), purple/violet accent (`#8b5cf6` / `#a78bfa`) for buttons and highlights, optional blue accent (`#3b82f6`) for secondary actions
- **Vibe:** Clean, minimal, “IDE-like” — code or terminal feel without being cluttered
- **Name:** “Cursor” in the product name is fine; keep the game feel (e.g. “Cursor Type Rush”)

### Good Project Ideas

**Pong** — classic paddle-and-ball game
- _Example features:_ scoreboard, sound effects, difficulty/speed settings

**Memory Card Match** — flip cards to find matching pairs
- _Example features:_ move counter, timer, win animation/confetti

**Drawing Pad** — simple canvas you can sketch on
- _Example features:_ color picker, brush size slider, eraser tool

**Typing Speed Game** — type a passage and measure your words per minute
- _Example features:_ WPM display, accuracy tracker, difficulty levels

**Trivia Quiz** — multiple choice questions with score tracking
- _Example features:_ timer per question, category selector, results summary screen

### Bad Project Ideas (Too Big!)
- Anything with a database -- tell cursor to avoid this
- Anything requiring authentication
- Anything with multiple pages/screens
- Anything that "needs" an API

---

## Team Members & Tasks

> **Important:** Each team member MUST have their own task. Tasks should be independent features that can be built in parallel without stepping on each other's toes.

| Name  | Task           | Description                                                    |
|-------|----------------|----------------------------------------------------------------|
| Simon | WPM display    | Show live words-per-minute during and after the test          |
| Simon | Accuracy tracker | Show % of correct characters and highlight mistakes         |
| Simon | Cursor theme UI | Apply dark background, purple accent, clean typography        |
| Simon | Difficulty levels | Easy/Medium/Hard word lists or passage length               |
| Simon | Results summary | End screen with final WPM, accuracy, and “Type again” CTA   |

### Task Guidelines
- Each task should add something **visible** to the project
- Tasks should be **independent** — no dependencies on other tasks
- Think: new button, new section, new color scheme, new text, etc.
- Everyone should be able to work at the same time without conflicts

---

## Base MVP (Phase 2)

> **One person** creates the foundation that everyone else builds on.

**What the MVP includes:**
- Single passage of text (hardcoded) for the user to type
- Input area (e.g. textarea) that compares typed text to the passage character-by-character
- Basic visual feedback: current character or word highlighted (e.g. green = correct, red = wrong)
- Start state: show passage + input; no timer or scoring yet is OK for the bare MVP
- Minimal Cursor-style styling: dark background, light text, one accent color so the base is on-theme

**What it does NOT include:**
- WPM calculation or display
- Accuracy percentage or mistake breakdown
- Full Cursor theme (colors, typography, polish)
- Difficulty selection or different word lists
- End screen or results summary

---

## Feature Slots (Phase 3)

> These are the features team members will add. Design them to be **independent** so people can work in parallel.

### Feature 1: WPM display
- **Assigned to:** Simon
- **Description:** Show live words-per-minute as the user types, and/or display final WPM when the passage is complete. Formula: (correct words / time in minutes) or standard (total words typed / time in minutes).
- **Files to modify/create:** Component that shows the passage + timer; add state for start time and compute WPM; render WPM in the UI (e.g. `App.jsx` or a `WPMDisplay.jsx`).

### Feature 2: Accuracy tracker
- **Assigned to:** Simon
- **Description:** Compute and display accuracy (e.g. correct characters / total characters). Optionally highlight incorrect characters in the passage or in a summary (e.g. “X errors”).
- **Files to modify/create:** Logic to compare typed vs target character-by-character; component or section that displays accuracy % and/or error count (e.g. `AccuracyDisplay.jsx` or inside main game component).

### Feature 3: Cursor theme UI
- **Assigned to:** Simon
- **Description:** Apply Cursor-style design: dark background (`#1e1e1e`), light text (`#e4e4e7`), purple accent (`#8b5cf6`/`#a78bfa`) for buttons and key UI elements, clean typography. Optional: subtle borders or focus states that match the accent.
- **Files to modify/create:** `index.css` and/or component-level styles; ensure inputs, buttons, and headings use the palette.

### Feature 4: Difficulty levels
- **Assigned to:** Simon
- **Description:** Let the user choose Easy / Medium / Hard. Each level uses a different passage or word list (e.g. shorter/simpler for Easy, longer or trickier for Hard). Stored as a few constants or arrays in the app—no API.
- **Files to modify/create:** A small set of passages or word lists (e.g. in `passages.js` or inline); UI to select difficulty before starting (e.g. buttons or dropdown in `App.jsx`).

### Feature 5: Results summary screen
- **Assigned to:** Simon
- **Description:** When the user finishes the passage, show an end screen with final WPM, accuracy, and a clear “Type again” (or “Try again”) button that resets the game to the initial state.
- **Files to modify/create:** Conditional render for “results” vs “game” view; component or section for results (e.g. `ResultsScreen.jsx`); reset handler that clears input and restarts timer.

---

## Success Criteria

- [ ] MVP runs locally
- [ ] Each team member has merged at least one PR
- [ ] All features work together without breaking the app

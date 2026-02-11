# Product Requirements Document (PRD)

> **Instructions:** This is your team's project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** Memory Match

**One-line Description:** A web-based card flip game where players find matching pairs.

**Type:** Web App

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes** by one person
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!** You need a project that has at least 5 features so everyone on your team can pick one and add it
- Feel free to take one of the ideas below — this exercise is about learning the git flow, collaborating as a team, and understanding where Cursor's features fit into the SDLC

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

| Name | Task | Description |
|------|------|-------------|
| Kristin Z | Move counter | Displays number of card flips/attempts |
| TBD | Timer | Shows elapsed time since game start |
| TBD | Win animation | Confetti or celebration when all pairs are found |
| TBD | Difficulty levels | Toggle between grid sizes (e.g., 4×4 vs 6×6) |
| TBD | Restart button | Button to reset the game and shuffle cards |

### Task Guidelines
- Each task should add something **visible** to the project
- Tasks should be **independent** — no dependencies on other tasks
- Think: new button, new section, new color scheme, new text, etc.
- Everyone should be able to work at the same time without conflicts

---

## Base MVP (Phase 2)

> **One person** creates the foundation that everyone else builds on.

**What the MVP includes:**
- Grid of face-down cards (e.g., 4×4 or 4×3)
- Click to flip a card, click another to try to match
- Basic match logic (flip back if no match, stay face-up if match)
- Simple win state when all pairs are found
- Plain HTML/CSS/JS or React single-page app

**What it does NOT include:**
- Move counter, timer, win animation, difficulty levels, restart button (these are the feature slots)

---

## Feature Slots (Phase 3)

> These are the features team members will add. Design them to be **independent** so people can work in parallel.

### Feature 1: Move Counter
- **Assigned to:** Kristin Z
- **Description:** Displays the number of card flip attempts. Increments each time the player selects a second card (one "move" = one pair attempt).
- **Files to modify/create:** Add to main game component/script; update HTML or React component for the display area.

### Feature 2: Timer
- **Assigned to:** TBD
- **Description:** Shows elapsed time since the game started. Starts on first card flip, stops when the player wins.
- **Files to modify/create:** Add timer state and display to main game component/script.

### Feature 3: Win Animation
- **Assigned to:** TBD
- **Description:** Plays a celebration (e.g., confetti, modal, or animation) when all pairs are matched.
- **Files to modify/create:** Add win-state handler and animation component or CSS; optionally add a lightweight confetti library.

### Feature 4: Difficulty Levels
- **Assigned to:** TBD
- **Description:** Lets the player choose grid size (e.g., 4×4 easy, 6×6 hard) before starting. Restarts game with new layout.
- **Files to modify/create:** Add difficulty selector UI and logic to generate grids of different sizes.

### Feature 5: Restart Button
- **Assigned to:** TBD
- **Description:** A button to reset the game—reshuffle cards, clear state, and start over.
- **Files to modify/create:** Add button to UI and reset function to game logic.

---

## Success Criteria

- [ ] MVP runs locally
- [ ] Each team member has merged at least one PR
- [ ] All features work together without breaking the app

# PRD: Rohan Koka — Portfolio Website v2

---

## 1. Vision

A portfolio that feels like stepping into Rohan's world. Not a sterile resume-in-browser, but a space that lives at the intersection of **the basketball court**, **a terminal**, and **a game UI**. It should feel human, playful, and unmistakably *his* — built for a cybersecurity student who hoops, grinds, and builds.

Every pixel should communicate: *curious, competitive, builder, tinkerer, night-owl.*

---

## 2. Brand Identity

### Concept: "COURT DASHBOARD"

The site is styled as a hybrid between:
- An **NBA 2K player profile screen** (stats bars, cards, scoreboard energy)
- A **terminal / cyberdeck interface** (scanlines, glitch effects, mono typography)
- A **scouting report** (his GitHub as game tape, his resume as career stats)

The result: a portfolio that feels like a custom loading screen for Rohan Koka — the playable character.

### Voice & Tone

| Context | Tone |
|---------|------|
| Hero / Tagline | Confident, direct, slightly playful |
| About | Reflective, warm, human |
| Skills | Matter-of-fact, no fluff |
| Projects | Excited, "look what I built" |
| Contact | Open, approachable |

No corporate speak. No "leveraging synergies." Write like a smart guy talking to another smart guy.

---

## 3. Design System

### Color Palette

```
--bg:          #0b0b12       (deep pit — near-black with a blue tilt)
--bg-alt:      #111122       (slightly lifted)
--surface:     #16162a       (card surface)
--surface-2:   #1e1e3a       (elevated surface)

--accent:      #ff6b35       (neon orange — court line / cyberpunk pop)
--accent-2:    #f7c948       (warm yellow — highlight / star rating)
--accent-3:    #00f5d4       (teal — terminal glow / data stream)

--text:        #eeecf5       (off-white)
--text-muted:  #9d97b5       (muted lavender-gray)
--text-dim:    #6b6590       (dim)

--danger:      #ff3b5c       (for security/vuln badges)
--success:     #00e676       (for strong signals)
```

**Rationale:** Deep midnight blue base prevents a pure black wasteland. Orange is the primary accent — basketball court lines, warning lights, energy. Teal is the "terminal" accent for code/tech moments. Yellow for star ratings (2K-style).

### Typography

| Role | Font | Weight Range | Source |
|------|------|-------------|--------|
| Display / Hero | **"Syne"** | 400–800 | Google Fonts |
| Headings | **"Space Grotesk"** | 500–700 | Google Fonts |
| Body | **"Inter"** | 300–600 | Google Fonts |
| Mono / Code | **"JetBrains Mono"** | 400–600 | Google Fonts |

- **Syne** is the secret weapon — it's an artistic variable font that feels like a statement. Used sparingly for hero, section titles, big numbers.
- **Space Grotesk** for section headings and labels — sharp, slightly technical.
- **Inter** for body — highly readable at any size.
- **JetBrains Mono** for code snippets, stats, terminal-style text, timestamps.

**Size scale:**
- Hero name: `clamp(3.5rem, 10vw, 7rem)`
- Section titles: `clamp(2rem, 5vw, 3.5rem)`
- Body: `1rem`
- Small / meta: `0.8rem`
- Mono stats: `0.9rem`

### Spacing & Layout

- Asymmetric grid — not everything needs to align perfectly.
- Generous negative space to let content breathe.
- Sections feel like distinct "panels" or "cards" rather than a uniform scroll.
- Horizontal scroll on desktop for certain sections (projects as "game tapes").
- Vertical scroll on mobile with swipe-like feel.

### Iconography

- **Lucide icons** (already using) for UI elements
- Custom SVG illustrations for the hero (e.g., abstract basketball + circuit trace fusion)
- Emoji sparingly, intentionally

---

## 4. Page Structure & Sections

### 4.1 Entry / Loader (NEW)
- A brief, 2-second **scanline boot sequence**
- Text types out: `"LOADING PLAYER PROFILE... ROHAN KOKA // TEAM: PITT // POSITION: CS | CYBERSECURITY"`
- Transitions into the hero

### 4.2 Hero — "Player Intro"
- Large "Syne" name with a subtle **glitch effect** on hover
- Subtitle styled like a basketball card: **"Computer Science · Cybersecurity · Pitt `27"`
- A **2K-style rating card** floats beside his name:
  - Overall: 83
  - Coding: 78
  - Security: 82
  - Basketball IQ: 92
  - Grind: 99
- Two CTAs: "View Projects" / "Scouting Report" (about)
- **Animated background**: slow-rotating basketball wireframe + floating geometric particles (WebGL or pure CSS)
- Scroll indicator: pulsing "↓" in mono

### 4.3 About — "Scouting Report" (REDESIGN)
- No "Hi, I'm Rohan" — instead, a **"Player Bio" card** layout
- Left side: headshot/avatar (use the DiceBear or actual photo) with a neon ring
- Right side: a scouting-style writeup
  - "Strengths: Curious, competitive, adapts fast. Known for tinkering until things break, then fixing them."
  - "Weaknesses: None detected." — playful
- **Quick facts as stat lines**:
  - `SCHOOL: University of Pittsburgh`
  - `MAJOR: Cybersecurity Analytics & Operations`
  - `CLASS: 2029`
  - `HOME: Oakdale, PA`
  - `HOBBIES: Basketball, lifting, gaming, breaking things`
- **Personality chips** with unique labels: `#tinkerer` `#hooper` `#night-owl` `#builder` `#curious`

### 4.4 Skills — "Attribute Bars" (REDESIGN)
- Replaces the grid of logos with **2K-style rating bars**
- Each skill is a horizontal bar with a label and a numeric rating
- Animated: bars fill from 0 to rating on scroll
- Grouped into: `Offense (Languages)`, `Defense (Security)`, `Athleticism (Tools)`

```
Python          ████████████░░ 82
JavaScript      ████████░░░░░░ 65
Security        █████████████░ 88
Networking      ██████████░░░░ 75
Cryptography    █████████░░░░░ 72
Git             ██████████░░░░ 70
Streamlit       ████████░░░░░░ 60
```

- Each bar has a short "scout note" tooltip:
  - Python: "Primary weapon. Comfortable across CLI and web."
  - Security: "Deep curiosity. Knows enough to be dangerous."
  - etc.

### 4.5 Projects — "Highlight Reel" (REDESIGN)
- Horizontal scroll on desktop, vertical on mobile
- Each project is a **"game tape" card** — screenshot as hero image with a play-button overlay
- Card content:
  - Project name (bold, Space Grotesk)
  - One-line "highlight" summary
  - **Stats line**: `LANG: Python · STREAMLIT · 2026 · ⭐ 0`
  - Tags as "badges" (like NBA 2K player badges)
  - Link to GitHub repo
- Maybe a **difficulty / fun meter** for each project:
  - Password Checker: `FUN: ████████░░  FUN/10` `DIFFICULTY: ██████░░░░`

### 4.6 Experience — "Career Stats" (NEW — from resume)
- Timeline format but styled like a **season-by-season stat line**
- Each job is a row with:
  - `SEASON: 2024–2025`  
  - `TEAM: Sonic Drive-In`  
  - `ROLE: Carhop`  
  - `MIN/GP: ~20 hrs/wk`  
  - Key stats (bullet points as stats)
- The STEM-E internship gets a special "Leadership Badge"

### 4.7 Education — "Draft Profile"
- School as team, degree as position
- "Drafted: Fall 2024 · University of Pittsburgh"
- Coursework as "training camps"
- GPA / Dean's List if applicable (ask Rohan)
- Activities as "preseason games"

### 4.8 GitHub Activity — "Game Log" (NEW)
- Pull recent commit activity from GitHub API
- Display as a **mini feed / scoreboard**: last 5 commits with repo name, message, timestamp
- Visual contribution graph (small, tasteful)
- Links to repos

### 4.9 Contact — "Free Agency"
- Email, GitHub, LinkedIn as team contact cards
- A direct "Sign Me" CTA button (just opens email)
- Optional: a terminal-style command list:
  ```
  > EMAIL    → rohandkoka2020@gmail.com
  > GITHUB   → github.com/rohan-koka
  > LINKEDIN → linkedin.com/in/rohan-koka-b689b7413
  ```

### 4.10 Footer
- "Designed & built by Rohan Koka · © 2026"
- Subtle scanline bar at the very bottom
- Easter egg: a tiny "vulnerability found: 0" counter

---

## 5. Animation & Interaction Design

This is where the portfolio becomes **non-generic**. Every animation should feel intentional, not gratuitous.

### 5.1 Page Load
- **Boot sequence**: Terminal-style text appears character by character, then fades into the hero
- Duration: ~1.5–2 seconds (skipable)
- After boot, hero elements stagger in (name → tagline → CTA)

### 5.2 Scroll Animations
- Sections enter with slight **perspective / tilt** (like a basketball highlight intro)
- Skill bars fill from left with a **progress bar animation** triggered by Intersection Observer
- Number counters for ratings — count up from 0 on appear

### 5.3 Hover / Micro-interactions
- Project cards: subtle **parallax tilt** on mouse move (like a trading card)
- Skill bars: tooltip appears with scout note, bar glows
- All links: underline that **grows from center**, not left-to-right
- CTA buttons: **bounce + glow** pulse on hover
- Avatar: subtle **breathing ring** animation (pulsing border)

### 5.4 Background & Atmosphere
- Animated **floating geometric shapes** (low-poly basketball, hexagons, circuit traces)
- Speed controlled by scroll position
- **Cursor trail** (optional): small glowing orb that follows the mouse, leaves a faint trail
- On mobile: reduce animation complexity

### 5.5 Special Effects
- **Glitch text** on the hero name when hovered (CSS keyframes: skew, color shift, clip)
- **Scanline overlay** is subtle — barely visible, adds texture
- **Screen burn-in effect** on the terminal boot sequence

---

## 6. Technical Requirements

### Stack
- **Vanilla HTML + CSS + JS** (no framework — keeps it lightweight and more impressive)
- Optionally: **GSAP** for scroll animations (smooth, performant)
- Or: **CSS-only** animations where possible (better performance, no dependencies)

### Performance
- Lighthouse score: 90+ all categories
- Lazy-load images
- Preload critical fonts
- Reduce animation on `prefers-reduced-motion`

### Responsiveness
- Desktop: asymmetric, horizontal scroll for projects
- Tablet: collapses to stacked layout
- Mobile: full vertical, simplified animations, hamburger nav (existing)

### Accessibility
- Semantic HTML (`<section>`, `<nav>`, `<article>`, `<h1>`–`<h3>`)
- ARIA labels on interactive elements
- Keyboard-navigable
- `prefers-reduced-motion` support
- Color contrast ratios meet WCAG AA

### GitHub Integration
- Fetch latest repos via **GitHub API** (client-side fetch)
- Show star count, language, last updated
- Cache in localStorage to avoid rate limits

### Future-Proofing
- Content driven from a single JSON config file: `content.json` — makes updates trivially easy
- Rohan can edit projects, skills, experience without touching HTML

---

## 7. Copy & Content Strategy

### Hero
> **ROHAN KOKA**  
> *Cybersecurity · CS · Pitt `29*  
> "Building things. Breaking things. Learning the whole time."

### Tagline (optional rotation, cycle on click)
1. "Cybersecurity student by day, hooper by night."
2. "I break things so I can learn how to fix them."
3. "Grind mode: always on."

### About Blurb
> A rising college student at the University of Pittsburgh, studying Cybersecurity Analytics & Operations. I grew up on basketball courts and computer labs — equally comfortable running a playbook and running a terminal. I love the puzzle of security, the creativity of building, and the discipline of showing up every day. Currently looking for SWE and security internships where I can contribute, learn, and prove myself.

### Project Descriptions
(Use active, punchy language — not bullet-point diarrhea)

**Password Strength Checker**  
> Built a web app that scores passwords across 6 security criteria. Visual progress bars, real-time feedback, and a very clear "your password is weak" button. Because we all need that reminder.

**Caesar Cipher Encoder/Decoder**  
> Interactive cryptography tool with a retro terminal feel. Shift letters 1–25, toggle encode/decode, watch the transformation happen in real-time. Cryptography made visual.

---

## 8. Inspiration References

| Vibe Element | Reference |
|-------------|-----------|
| 2K stat bars | NBA 2K player attribute screens |
| Court color palette | Miami Vice / NBA City Edition jerseys |
| Terminal aesthetic | Fallout terminal, Blade Runner UI |
| Scanline texture | CRT monitor overlays |
| Card tilt effect | Trading card hover on Three.js examples |
| Glitch text | Awwwards / hover CSS effects |
| Grid + particles | Three.js website backgrounds |
| Typography-forward | brutalist web design |

---

## 9. Implementation Roadmap

| Phase | Deliverable | Est. Time |
|-------|-------------|-----------|
| **Phase 1** | HTML structure + content.json | 1 day |
| **Phase 2** | CSS design system + layout | 1 day |
| **Phase 3** | Animations (scroll, hover, boot) | 1 day |
| **Phase 4** | GitHub API integration + dynamic content | 1 day |
| **Phase 5** | Responsive polish + accessibility | 0.5 day |
| **Phase 6** | Deploy (GitHub Pages / Vercel) | 0.5 day |

---

## 10. Questions for Rohan

Pending answers:
- Photo? (headshot or dicebear avatar)
- GPA / any Dean's List or honors?
- Any clubs at Pitt specifically?
- Preferred pronouns / any personal details?
- Do you want a blog / writing section later?
- Deploy target? (GitHub Pages, Vercel, custom domain?)

---

*PRD v1.0 — Built from GitHub + resume + LinkedIn + conversation.*

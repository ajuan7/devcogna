# DevCogna – Product Requirements Document (PRD)

**Product:** DevCogna  
**Version:** MVP v0.1  
**Owner:** Angelo Juanico  
**Date:** 2026-02-28  

---

## 1. One-line Summary

DevCogna trains **algorithmic pattern recognition speed** for technical interviews using a **drill → diagnose → reinforce → measure** loop.

---

## 2. Problem Statement

Most candidates don’t fail interviews because they can’t code.  
They fail because they cannot map a prompt to the correct algorithmic pattern fast enough under time pressure.

### Current prep methods over-index on:

- Memorizing solutions  
- Grinding random problems  
- Vague “study lists”  

### They under-train:

- Recognition latency (time-to-pattern)  
- Trigger identification (signals in the prompt)  
- Avoiding common traps  

---

## 3. Target Users

### Primary

Final-year CS / Software Engineering students and graduates preparing for technical interviews (LeetCode-style).

### Secondary

Bootcamp graduates pivoting into software engineering.

### User Context

- Limited time  
- Anxious + time-boxed preparation  
- Wants measurable progress and structure  

---

## 4. Job To Be Done (JTBD)

> “When I read a coding prompt, help me identify the most likely algorithmic pattern quickly, so I can spend my interview time implementing instead of guessing.”

---

## 5. Value Proposition

DevCogna measures and improves **recognition speed** by:

- Presenting prompts  
- Forcing rapid pattern selection  
- Explaining triggers + traps  
- Converting mistakes into reinforcement flashcards  
- Tracking weakest patterns and response time  

---

## 6. MVP Goals (What Success Looks Like)

The MVP succeeds if users can:

- Complete timed drills and select patterns  
- See immediate feedback (correct pattern, why, triggers, trap)  
- Get flashcards generated from mistakes  
- See analytics showing weakest patterns + response time trends  
- Feel a tight feedback loop (structured training)  

---

## 7. Non-Goals (Out of Scope for MVP)

- Full code editor + solution execution  
- Community / leaderboards  
- Spaced repetition scheduler v2+  
- AI-generated solutions  
- Mobile app  
- Multi-user teams / organizations  

---

## 8. Core User Flows (MVP)

### Flow A: Drill → Attempt

1. User starts drill session  
2. Prompt displayed + timer starts  
3. User selects pattern and submits  
4. Attempt recorded (response time + correctness)  

### Flow B: Diagnose

1. Show correct pattern  
2. Show 3–5 trigger signals  
3. Show 1 common trap  
4. If wrong, generate reinforcement flashcard  

### Flow C: Reinforce

1. User opens flashcards  
2. Reviews: “When you see X → Think pattern Y”  
3. Marks as understood  

### Flow D: Measure

Dashboard shows:

- Weakest patterns (lowest accuracy)  
- Average response time per pattern  
- Trend line (last 7 / 14 days)  

---

## 9. MVP Feature List (Must Ship)

### Auth + Onboarding

- Clerk sign in  
- Basic user profile auto-created  

### Drill

- Timed prompt  
- Pattern selection buttons  
- Submit  

### Telemetry

Attempt recording including:

- `responseTimeMs`  
- `isCorrect`  
- `patternSelectedId`  
- `correctPatternId`  
- `questionId`  
- `userId`  

### Diagnose

- Result screen with triggers + trap  

### Flashcards

- Auto-generated on incorrect attempt  
- List + view  

### Analytics

- Weakest patterns  
- Average response time  
- Accuracy percentage  

### Marketing

- Landing page  
- Early access waitlist  

---

## 10. Success Metrics (Track From Day 1)

### Activation

- % of new users who complete 1 drill session within 10 minutes  
- Target: **40%+**

### Engagement

- Drills per active user per week  
- Target: **10+ attempts/week**

### Learning Signal

- Average `responseTimeMs` improves over time (7-day delta)  
- Accuracy per pattern improves over time  

### Retention (Early)

- Week-1 retention target: **20%+**

### North Star Metric

**Average Recognition Time (ART):**  
Median time-to-pattern selection per user (lower is better).

---

## 11. MVP Constraints / Assumptions

- Question database starts small (50–150 prompts)  
- Pattern list fixed (12–15 canonical patterns)  
- Diagnostic explanations curated manually initially  

---

## 12. Risks & Mitigations

**Risk:** Users feel it’s too simple  
→ Mitigation: Make analytics + progression highly visible  

**Risk:** Prompt quality low  
→ Mitigation: Carefully curate prompts + triggers  

**Risk:** Looks like another LeetCode clone  
→ Mitigation: Emphasize recognition speed, timing, and telemetry  

---

## 13. Launch Plan (MVP)

- Launch waitlist immediately  
- Post 3–5 educational carousels weekly  
- Early access cohort: 20–50 users  

Iterate based on:

- Pattern confusion rates  
- Drop-off points  
- Time-to-first-drill  
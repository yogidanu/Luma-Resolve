# Legacy docs moved out of `src/app/` — Redesign Step 5 (24 Nov 2026)

These 15 Markdown files used to live inside the application source tree
(13 in `src/app/`, plus 2 in `src/app/docs/`). They are the prototype's
own generation-era documentation and are kept here for reference only.

**Do not build from these.** In particular, the five colour-system
documents (AI_COLOR_TRANSFORMATION, COLOR_SYSTEM_APPLIED,
COLOR_UPDATE_SUMMARY, FINAL_COLOR_SYSTEM, DESIGN_SYSTEM) contradict
each other — blue `#4C84FF` in some, a violet system in others — and
**all of them are superseded** by the redesign:

- Design tokens: `src/styles/tokens.css` (Luma Blue `#1464CC`, OKLCH)
- Typed data model: `src/app/data/types.ts`
- Redesign blueprint: `Luma_Resolve_Redesign_Blueprint_2026-11-23.md`
  (kept with the project records, not in this repo)

Screen and feature descriptions in FEATURES / SCREENS_GUIDE /
NEW_FEATURES describe the pre-redesign UI and are historical.

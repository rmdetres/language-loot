
## Slim Down the Daily Goals Cards

### What's clunky

1. **Oversized CTA button** — Full-width `py-2.5` button with uppercase bold text is too dominant for a compact goal card. It's as tall as a primary action button on a form.
2. **Too much vertical space** — `py-3` padding on both the header row and the button section makes each card unnecessarily tall. Two cards stack to a large block.
3. **Bottom padding gap** — There's visible empty space between the progress bar and the button due to `py-3` padding around each section.
4. **The radio circle + label row feels wide/sparse** — The check circle and label are left-aligned but the coin badge pushes the layout taller than needed.

### The fix

Tighten the card layout in `src/components/DailyGoals.tsx`:

- **Header row**: reduce vertical padding from `py-3` to `py-2.5`
- **Progress bar wrapper**: reduce horizontal margin from `mx-4` to `mx-4` (keep) but reduce the gap around it by removing the bottom section's top padding
- **CTA button**: reduce from `py-2.5` to `py-1.5`, reduce font size from `text-sm` to `text-xs`, make it feel like a compact action chip rather than a full form button
- **CTA section padding**: reduce from `py-3` to `py-2`
- **Completed badge**: similarly reduce padding to `py-1.5`
- **Coin badge**: reduce `mt-1` spacing, make it slightly more compact (`py-0.5` stays but `px-1.5` instead of `px-2`)
- **Progress bar**: add `mb-0` / reduce gap between bar and button section

### Result

Each card shrinks by roughly 20–25px in height. The two-card stack will feel like a compact info widget rather than a prominent action section, which is appropriate since these are daily reminders, not the main CTA of the page.

### Files to change
- `src/components/DailyGoals.tsx` — padding/sizing tweaks only, no structural changes

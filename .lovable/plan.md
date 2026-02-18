
## Improve DailyGoals Component

### Issues to fix

**1. Empty progress bar is invisible**
At 0% progress the bar renders at 0px width with no visual cue. Fix: give the track a more visible background (`bg-muted/60`) and add a subtle striped or dashed "empty" style.

**2. Awkward layout hierarchy**
The coins note floats between the progress bar and button, which is visually disconnected. Move the coins note to sit right below the task label (inline with the header row), and collapse it into a badge-style chip.

**3. Button label is too generic**
Both buttons say "Earn Coins" with no goal context. Improve to use goal-specific labels: "Start Review" and "Start Lesson".

**4. No completed state**
When `current >= total`, the goal should show a ✅ checkmark, green border, strikethrough label, and hide the CTA button (replaced by a "Completed!" badge).

**5. Progress counter readability**
Make the `0/10` counter slightly larger and use the primary color when in progress, gold when complete.

### What will change

**`src/components/DailyGoals.tsx`** — full redesign of the goal card layout:

- Move coins note into the header row as a small pill badge (e.g. `🪙 +3 coins/answer`)
- Thicken the progress bar from `h-1` to `h-2` and give the track a more visible background
- Show a subtle min-width glow dot on the track to indicate position even at 0%
- Add a completed state: green border, ✅ circle, "Completed!" badge, hide CTA
- Change button labels to goal-specific: "Start Review" / "Start Lesson"
- Make the `current/total` counter use `text-primary` when in-progress and `text-progress-green` when done

### Files to change
- `src/components/DailyGoals.tsx`

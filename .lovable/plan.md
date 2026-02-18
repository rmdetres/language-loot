
## Remove Redundant Stats Row from Hero Section

### What's redundant
The hero section in `src/pages/Index.tsx` (lines 158–176) contains a 3-column stats grid showing:
- Words Learned: 243
- Your Coins: 1,240
- Day Streak: 12🔥

All three of these are already displayed in the Right Panel (`src/components/RightPanel.tsx`):
- "Your Coins" section with animated gold display
- "Daily Streak" with progress bar and streak saves
- "Current Level" covers progression context

### The fix
Remove the stats row `div` block (lines 158–177) from `src/pages/Index.tsx`. This will tighten up the hero section, removing visual clutter and making the countdown timer flow directly into the prizes section below.

### Files to change
- `src/pages/Index.tsx` — delete the stats grid block inside the hero section

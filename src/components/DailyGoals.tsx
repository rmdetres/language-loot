import { Coins } from "lucide-react";

interface Goal {
  label: string;
  coinsNote: string;
  current: number;
  total: number;
}

const GOALS: Goal[] = [
  { label: "Review 10 Words", coinsNote: "+3 coins per correct answer", current: 0, total: 10 },
  { label: "Complete a Culture Lesson", coinsNote: "+15 coins per lesson", current: 0, total: 2 },
];

export const DailyGoals = () => {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border flex items-center gap-2">
        <span className="text-lg">🎯</span>
        <h2 className="font-display text-xl text-foreground">Daily Goal</h2>
      </div>

      <div className="p-4 space-y-3">
        {GOALS.map((goal) => {
          const pct = Math.round((goal.current / goal.total) * 100);
          return (
            <div key={goal.label} className="rounded-xl border border-border bg-muted/20 overflow-hidden">
              {/* Header row */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/40 flex-shrink-0" />
                  <span className="font-bold text-sm text-foreground">{goal.label}</span>
                </div>
                <span className="text-xs font-black text-muted-foreground">
                  {goal.current}/{goal.total}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-muted mx-4">
                <div
                  className="h-full bg-gradient-gold rounded-full transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Coins note */}
              <div className="px-4 py-2">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-sm">🪙</span>
                  {goal.coinsNote}
                </p>
              </div>

              {/* CTA button */}
              <div className="px-4 pb-4">
                <button className="w-full py-2.5 rounded-xl bg-gradient-gold text-primary-foreground font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-coin">
                  <Coins className="w-4 h-4" />
                  Earn Coins
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

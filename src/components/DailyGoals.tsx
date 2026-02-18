import { Coins, CheckCircle2 } from "lucide-react";

interface Goal {
  label: string;
  coinsNote: string;
  current: number;
  total: number;
  ctaLabel: string;
}

const GOALS: Goal[] = [
  { label: "Review 10 Words", coinsNote: "+3 coins/answer", current: 0, total: 10, ctaLabel: "Start Review" },
  { label: "Complete a Culture Lesson", coinsNote: "+15 coins/lesson", current: 0, total: 2, ctaLabel: "Start Lesson" },
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
          const isDone = goal.current >= goal.total;

          return (
            <div
              key={goal.label}
              className={`rounded-xl border overflow-hidden transition-colors ${
                isDone
                  ? "border-progress-green/50 bg-progress-green/5"
                  : "border-border bg-muted/20"
              }`}
            >
              {/* Header row */}
              <div className="flex items-start justify-between px-4 py-3 gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  {/* Check circle */}
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-progress-green flex-shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/40 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <span className={`font-bold text-sm block ${isDone ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {goal.label}
                    </span>
                    {/* Coins note as pill badge */}
                    <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      🪙 {goal.coinsNote}
                    </span>
                  </div>
                </div>

                {/* Progress counter */}
                <span className={`text-sm font-black flex-shrink-0 tabular-nums ${
                  isDone ? "text-progress-green" : "text-primary"
                }`}>
                  {goal.current}/{goal.total}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-muted/60 mx-4 rounded-full overflow-visible relative">
                {isDone ? (
                  <div className="h-full w-full bg-gradient-green rounded-full" />
                ) : pct > 0 ? (
                  <div
                    className="h-full bg-gradient-gold rounded-full transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                ) : (
                  /* 0% glow dot to show empty state */
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                )}
              </div>

              {/* CTA or Completed badge */}
              <div className="px-4 py-3">
                {isDone ? (
                  <div className="w-full py-2 rounded-xl bg-progress-green/10 border border-progress-green/30 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-progress-green" />
                    <span className="text-progress-green font-black text-sm uppercase tracking-wider">Completed!</span>
                  </div>
                ) : (
                  <button className="w-full py-2.5 rounded-xl bg-gradient-gold text-primary-foreground font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-coin">
                    <Coins className="w-4 h-4" />
                    {goal.ctaLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

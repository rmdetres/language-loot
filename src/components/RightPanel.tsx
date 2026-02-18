interface LeagueRow {
  tier: string;
  winPercent: string;
  prize: string;
  color: string;
  active?: boolean;
}

const LEAGUE_ROWS: LeagueRow[] = [
  { tier: "🎯 Lucky Draw", winPercent: "—", prize: "$5", color: "text-blue-400", active: true },
  { tier: "🥉 Bronze", winPercent: "5%", prize: "$10", color: "text-prize-bronze" },
  { tier: "🥈 Silver", winPercent: "10%", prize: "$25", color: "text-prize-silver" },
  { tier: "🥇 Gold", winPercent: "20%", prize: "$100", color: "text-prize-gold" },
  { tier: "💎 Diamond", winPercent: "50%", prize: "MacBook", color: "text-neon-cyan" },
];

export const RightPanel = () => {
  const wordsToday = 3;
  const wordsGoal = 10;
  const progressPct = (wordsToday / wordsGoal) * 100;

  return (
    <aside className="flex flex-col h-full bg-card border-l border-border overflow-y-auto">
      {/* Subscription badge */}
      <div className="px-4 py-5 border-b border-border">
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Subscription
        </p>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-coin flex-shrink-0">
            <span className="text-xl">🍀</span>
          </div>
          <div>
            <p className="font-display text-lg text-gradient-gold leading-tight">The Country Club</p>
            <p className="text-xs text-muted-foreground">Premium tier active</p>
          </div>
        </div>
      </div>

      {/* Current Level */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🎓</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold">Current Level</p>
            <p className="font-display text-2xl text-foreground">A1</p>
          </div>
        </div>
      </div>

      {/* Daily Streak */}
      <div className="px-4 py-4 border-b border-border space-y-3">
        {/* Green = habit/streak psychology */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-progress-green/15 border border-progress-green/30 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🔥</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold">Daily Streak</p>
            <p className="font-display text-2xl text-progress-green">12 Days</p>
          </div>
        </div>

        {/* Words today progress — green bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">{wordsToday}/{wordsGoal} words today</span>
            <span className="text-progress-green font-bold">{Math.round(progressPct)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-green transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Streak saves */}
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-progress-green mb-2">
            Streak Saves
          </p>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border
                  ${i === 0
                    ? "bg-progress-green/15 border-progress-green/40 text-progress-green"
                    : "bg-muted/30 border-border text-muted-foreground/30"
                  }`}
              >
                🛡️
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coins — Gold = dopamine reward */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-coin flex-shrink-0 animate-pulse-glow">
            <span className="text-lg">🪙</span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold">Your Coins</p>
            <p className="font-display text-2xl text-gradient-gold text-glow-gold">1,240</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/25 rounded-lg px-2.5 py-1.5">
          <span className="text-sm">⚡</span>
          <span className="text-xs font-black text-primary">2x coin bonus active!</span>
        </div>
      </div>

      {/* League table */}
      <div className="px-4 py-4 flex-1">
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-3">
          League → Win % → Prize
        </p>
        <div className="space-y-1.5">
          {LEAGUE_ROWS.map((row) => (
            <div
              key={row.tier}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors
                ${row.active
                  ? "bg-primary/10 border border-primary/30"
                  : "hover:bg-muted/30"
                }`}
            >
              <span className={`font-bold flex-1 ${row.color}`}>{row.tier}</span>
              <span className="text-muted-foreground w-8 text-center">{row.winPercent}</span>
              <span className="font-black text-foreground w-12 text-right">{row.prize}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 px-2.5 py-2 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-[10px] text-accent font-bold">
            🎯 You're in Lucky Draw tier — study more to level up!
          </p>
        </div>
      </div>
    </aside>
  );
};

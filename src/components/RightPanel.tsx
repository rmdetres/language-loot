interface LeagueRow {
  tier: string;
  coins: string;
  color: string;
  icon: string;
  active?: boolean;
}

const LEAGUE_ROWS: LeagueRow[] = [
  { tier: "Lucky Draw", coins: "106 coins", color: "text-trust-blue", icon: "🎯", active: true },
  { tier: "Bronze", coins: "356 coins", color: "text-prize-bronze", icon: "🥉" },
  { tier: "Silver", coins: "706 coins", color: "text-prize-silver", icon: "🥈" },
  { tier: "Gold", coins: "1,206 coins", color: "text-prize-gold", icon: "🥇" },
];

const LAST_WEEK_WINNERS = [
  { tier: "Lucky Draw", icon: "🎯", color: "text-trust-blue", winner: "Test U.", prize: "$1 Gift Card" },
  { tier: "Bronze", icon: "🥉", color: "text-prize-bronze", winner: "Test E.", prize: "$11 Gift Card" },
  { tier: "Silver", icon: "🥈", color: "text-prize-silver", winner: "Art T.", prize: "$22 Gift Card" },
  { tier: "Gold", icon: "🥇", color: "text-prize-gold", winner: "Pract.", prize: "AirPods Pro 2" },
];

const CULTURE_CATEGORIES = [
  "Proverbs", "Jokes", "Wisdom", "Self-Help",
  "Actual Meaning", "Softeners", "Astrology", "Slang",
  "Insults", "Jesus", "Translate Vibe", "Sarcasm",
  "Fortunes", "Love",
];

export const RightPanel = () => {
  return (
    <aside className="flex flex-col h-full bg-card border-l border-border overflow-y-auto">

      {/* League table */}
      <div className="px-4 py-4 border-b border-border">
        <div className="grid grid-cols-3 text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground mb-2 px-1">
          <span>League</span>
          <span className="text-center">Win %</span>
          <span className="text-right">Prize</span>
        </div>
        <div className="space-y-1">
          {LEAGUE_ROWS.map((row) => (
            <div
              key={row.tier}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors
                ${row.active
                  ? "bg-primary/10 border border-primary/25"
                  : "hover:bg-muted/30"
                }`}
            >
              <span className="text-sm">{row.icon}</span>
              <span className={`font-bold flex-1 ${row.color}`}>{row.tier}</span>
              <span className="text-muted-foreground text-center w-6">—</span>
              <span className="font-black text-foreground text-right w-20 text-[11px]">{row.coins}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Last Week's Winners */}
      <div className="px-4 py-4 border-b border-border">
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Last Week's Winners
        </p>
        <div className="grid grid-cols-3 text-[9px] font-black uppercase tracking-wider text-muted-foreground mb-2 px-1">
          <span>League</span>
          <span className="text-center">Winner</span>
          <span className="text-right">Prize</span>
        </div>
        <div className="space-y-1.5">
          {LAST_WEEK_WINNERS.map((row) => (
            <div key={row.tier} className="grid grid-cols-3 items-center px-1 py-1 rounded-lg hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{row.icon}</span>
                <span className={`text-xs font-bold ${row.color}`}>{row.tier}</span>
              </div>
              <span className="text-xs text-trust-blue font-bold text-center truncate">{row.winner}</span>
              <span className="text-xs text-muted-foreground text-right truncate">{row.prize}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Culture Mastered */}
      <div className="px-4 py-4 flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl border border-border bg-muted/30 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">✅</span>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Culture Mastered</p>
            <p className="font-display text-3xl text-foreground leading-none">0</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          {CULTURE_CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground truncate">{cat}</span>
              <span className="font-bold text-foreground ml-1">0</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

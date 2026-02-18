interface LeaderboardEntry {
  rank: number;
  name: string;
  flag: string;
  coins: number;
  streak: number;
  isYou?: boolean;
}

export const Leaderboard = ({ entries }: { entries: LeaderboardEntry[] }) => {
  const rankStyle = (rank: number) => {
    if (rank === 1) return "text-primary text-glow-gold font-display text-xl";
    if (rank === 2) return "text-prize-silver font-display text-xl";
    if (rank === 3) return "text-prize-bronze font-display text-xl";
    return "text-muted-foreground text-sm font-bold";
  };

  const rankEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <div className="card-glass rounded-2xl overflow-hidden">
      <div className="px-5 pt-5 pb-3 border-b border-border flex items-center gap-2">
        <span className="text-xl">🏆</span>
        <h2 className="font-display text-2xl text-gradient-gold">This Week's Leaders</h2>
      </div>

      <div className="divide-y divide-border">
        {entries.map((entry, i) => (
          <div
            key={entry.name}
            className={`
              flex items-center gap-3 px-5 py-3.5 transition-colors
              ${entry.isYou
                ? "bg-primary/5 border-l-2 border-primary"
                : "hover:bg-muted/30"
              }
              animate-slide-up-fade
            `}
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", opacity: 0 }}
          >
            {/* Rank */}
            <div className={`w-8 text-center ${rankStyle(entry.rank)}`}>
              {rankEmoji(entry.rank)}
            </div>

            {/* Flag + name */}
            <span className="text-lg">{entry.flag}</span>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-bold truncate ${entry.isYou ? "text-primary" : "text-foreground"}`}>
                {entry.name} {entry.isYou && <span className="text-xs font-normal text-muted-foreground">(you)</span>}
              </p>
              <p className="text-xs text-muted-foreground">🔥 {entry.streak} day streak</p>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-full">
              <span className="text-xs">🪙</span>
              <span className="text-xs font-black text-primary">{entry.coins.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

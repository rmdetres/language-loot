import { useState } from "react";

type Tier = "lucky" | "bronze" | "silver" | "gold" | "diamond";

interface PrizeCardProps {
  tier: Tier;
  prize: string;
  subtitle: string;
  ticketsRequired: number;
  userTickets: number;
  emoji: string;
  delay?: number;
}

const TIER_CONFIG = {
  lucky: {
    label: "🎯 Lucky Draw",
    gradient: "from-blue-900/60 to-blue-950/80",
    border: "border-blue-500/30",
    glow: "hover:shadow-[0_0_25px_hsl(220_80%_60%/0.3)]",
    badge: "bg-blue-600 text-blue-50",
    ticket: "text-blue-400",
  },
  bronze: {
    label: "🥉 Bronze",
    gradient: "from-amber-900/40 to-orange-950/60",
    border: "border-prize-bronze/40",
    glow: "hover:border-glow-bronze",
    badge: "bg-amber-700 text-amber-100",
    ticket: "text-amber-400",
  },
  silver: {
    label: "🥈 Silver",
    gradient: "from-slate-700/40 to-slate-900/60",
    border: "border-prize-silver/40",
    glow: "hover:border-glow-silver",
    badge: "bg-slate-500 text-slate-100",
    ticket: "text-slate-300",
  },
  gold: {
    label: "🥇 Gold",
    gradient: "from-yellow-800/40 to-amber-950/80",
    border: "border-prize-gold/50",
    glow: "hover:border-glow-gold",
    badge: "bg-gradient-gold text-primary-foreground",
    ticket: "text-coin-gold",
  },
  diamond: {
    label: "💎 Diamond",
    gradient: "from-cyan-900/40 to-blue-950/80",
    border: "border-prize-diamond/50",
    glow: "hover:border-glow-diamond",
    badge: "bg-gradient-cyan text-accent-foreground",
    ticket: "text-neon-cyan",
  },
};

export const PrizeCard = ({
  tier,
  prize,
  subtitle,
  ticketsRequired,
  userTickets,
  emoji,
  delay = 0,
}: PrizeCardProps) => {
  const [hovered, setHovered] = useState(false);
  const config = TIER_CONFIG[tier];
  const progress = Math.min((userTickets / ticketsRequired) * 100, 100);
  const canEnter = userTickets >= ticketsRequired;

  return (
    <div
      className={`
        relative flex-shrink-0 w-52 sm:w-60 rounded-2xl overflow-hidden cursor-pointer
        bg-gradient-to-b ${config.gradient}
        border ${config.border} ${config.glow}
        transition-all duration-300 ease-out
        ${hovered ? "scale-105 -translate-y-1" : "scale-100"}
        animate-slide-up-fade
      `}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both", opacity: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer overlay */}
      {hovered && <div className="shimmer absolute inset-0 z-0 pointer-events-none" />}

      {/* Hot badge for top tier */}
      {tier === "diamond" && (
        <div className="absolute top-2 right-2 badge-hot text-[9px] px-2 py-0.5 rounded-full z-10 flex items-center gap-1">
          🔥 HOT
        </div>
      )}

      <div className="relative z-10 p-4 flex flex-col gap-3">
        {/* Tier badge */}
        <span className={`self-start text-xs font-black px-2.5 py-1 rounded-full ${config.badge}`}>
          {config.label}
        </span>

        {/* Prize emoji */}
        <div
          className={`text-5xl text-center py-2 transition-transform duration-300 ${
            hovered ? "scale-110 animate-coin-float" : ""
          }`}
        >
          {emoji}
        </div>

        {/* Prize name */}
        <div>
          <p className="font-display text-2xl text-gradient-gold leading-tight">{prize}</p>
          <p className="text-muted-foreground text-xs mt-0.5">{subtitle}</p>
        </div>

        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">
              {userTickets}/{ticketsRequired} tickets
            </span>
            {canEnter && (
              <span className="text-neon-green font-bold text-[10px] uppercase tracking-wider">
                ✓ Entered!
              </span>
            )}
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                canEnter
                  ? "bg-neon-green shadow-[0_0_8px_hsl(142_76%_50%/0.6)]"
                  : `bg-gradient-to-r from-primary/60 to-primary`
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <button
          className={`
            w-full py-2 rounded-xl text-xs font-black uppercase tracking-wider
            transition-all duration-200
            ${canEnter
              ? "bg-neon-green/20 text-neon-green border border-neon-green/40 hover:bg-neon-green/30"
              : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 shimmer"
            }
          `}
        >
          {canEnter ? "🎟️ You're In!" : `Need ${ticketsRequired - userTickets} more`}
        </button>
      </div>
    </div>
  );
};

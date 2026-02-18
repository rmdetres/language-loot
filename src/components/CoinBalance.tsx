import { useState } from "react";

interface CoinBalanceProps {
  coins: number;
}

export const CoinBalance = ({ coins }: CoinBalanceProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [floatingCoins, setFloatingCoins] = useState<number[]>([]);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newCoin = Date.now();
    setFloatingCoins((prev) => [...prev, newCoin]);
    setTimeout(() => {
      setFloatingCoins((prev) => prev.filter((c) => c !== newCoin));
    }, 1000);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className="relative flex items-center gap-2 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Floating +1 coins */}
      {floatingCoins.map((id) => (
        <span
          key={id}
          className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-black text-primary pointer-events-none z-50"
          style={{ animation: "float-up 1s ease-out forwards" }}
        >
          +🪙
        </span>
      ))}

      {/* Coin icon */}
      <div
        className={`
          relative w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center
          shadow-coin animate-pulse-glow
          ${isAnimating ? "animate-coin-spin" : "animate-coin-float"}
        `}
      >
        <span className="text-base font-black text-primary-foreground leading-none">₿</span>
      </div>

      {/* Balance */}
      <div className="flex flex-col leading-none">
        <span className="text-[10px] text-muted-foreground font-semibold tracking-widest uppercase">
          Coins
        </span>
        <span className="font-display text-xl text-gradient-gold text-glow-gold">
          {coins.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

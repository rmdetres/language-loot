import { useState } from "react";

interface WordStudyProps {
  word: string;
  translation: string;
  language: string;
  flag: string;
  coinsPerWord: number;
  streak: number;
}

export const WordStudyCard = ({
  word,
  translation,
  language,
  flag,
  coinsPerWord,
  streak,
}: WordStudyProps) => {
  const [revealed, setReveal] = useState(false);
  const [answered, setAnswered] = useState<"correct" | "wrong" | null>(null);
  const [floatCoins, setFloatCoins] = useState(false);

  const handleReveal = () => setReveal(true);

  const handleAnswer = (correct: boolean) => {
    setAnswered(correct ? "correct" : "wrong");
    if (correct) {
      setFloatCoins(true);
      setTimeout(() => setFloatCoins(false), 1000);
    }
    setTimeout(() => {
      setReveal(false);
      setAnswered(null);
    }, 1500);
  };

  return (
    <div className="relative card-glass rounded-2xl overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-gold w-full" />

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{flag}</span>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                Study Word
              </p>
              <p className="text-sm font-bold text-foreground">{language}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Streak */}
            <div className="flex items-center gap-1 bg-secondary/10 border border-secondary/20 px-2.5 py-1 rounded-full">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-black text-secondary">{streak} streak</span>
            </div>
            {/* Coin reward */}
            <div className="flex items-center gap-1 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full animate-pulse-glow">
              <span className="text-xs">🪙</span>
              <span className="text-xs font-black text-primary">+{coinsPerWord}</span>
            </div>
          </div>
        </div>

        {/* Word display */}
        <div
          className={`
            relative rounded-xl p-6 text-center mb-4 overflow-hidden
            transition-all duration-300
            ${answered === "correct" ? "bg-neon-green/10 border border-neon-green/30" : ""}
            ${answered === "wrong" ? "bg-destructive/10 border border-destructive/30" : ""}
            ${!answered ? "bg-muted/30 border border-border" : ""}
          `}
        >
          {/* Floating coins animation */}
          {floatCoins && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-lg"
                  style={{
                    animation: "coin-float 1s ease-out forwards",
                    animationDelay: `${i * 100}ms`,
                    left: `${20 + i * 15}%`,
                    top: "30%",
                  }}
                >
                  🪙
                </span>
              ))}
            </div>
          )}

          <p className="font-display text-5xl sm:text-6xl text-gradient-gold text-glow-gold mb-2">
            {word}
          </p>

          {revealed ? (
            <p className="text-xl text-foreground font-semibold animate-slide-up-fade">
              {translation}
            </p>
          ) : (
            <button
              onClick={handleReveal}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline decoration-dotted"
            >
              Tap to reveal meaning
            </button>
          )}
        </div>

        {/* Answer buttons */}
        {revealed && !answered && (
          <div className="grid grid-cols-2 gap-3 animate-slide-up-fade">
            <button
              onClick={() => handleAnswer(false)}
              className="py-3 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive font-black text-sm uppercase tracking-wide hover:bg-destructive/20 transition-all"
            >
              😅 Missed It
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="py-3 rounded-xl bg-gradient-to-r from-neon-green/20 to-neon-green/10 border border-neon-green/50 text-neon-green font-black text-sm uppercase tracking-wide hover:from-neon-green/30 hover:to-neon-green/20 transition-all shimmer"
            >
              ✅ Got It! +🪙
            </button>
          </div>
        )}

        {answered && (
          <div
            className={`text-center py-3 rounded-xl font-display text-2xl animate-number-pop
              ${answered === "correct" ? "text-neon-green" : "text-destructive"}
            `}
          >
            {answered === "correct" ? `+${coinsPerWord} COINS EARNED! 🎉` : "Keep Practicing! 💪"}
          </div>
        )}
      </div>
    </div>
  );
};

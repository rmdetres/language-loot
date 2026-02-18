interface ProgressBarProps {
  level: string;
  wordsLearned: number;
  totalWords: number;
  milestones: Array<{ label: string; words: number }>;
}

export const LevelProgressBar = ({
  level,
  wordsLearned,
  totalWords,
  milestones,
}: ProgressBarProps) => {
  const progressPercent = (wordsLearned / totalWords) * 100;

  return (
    <div className="card-glass rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">📚</span>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
              Language Level
            </p>
            <p className="font-display text-2xl text-gradient-gold">{level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl text-foreground">{wordsLearned.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">/ {totalWords.toLocaleString()} words</p>
        </div>
      </div>

      {/* Progress track */}
      <div className="relative mt-4 mb-2">
        {/* Track — GREEN for progress/habit psychology */}
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-green transition-all duration-1000 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Milestone dots */}
        <div className="relative mt-2">
          {milestones.map((milestone) => {
            const pos = (milestone.words / totalWords) * 100;
            const reached = wordsLearned >= milestone.words;
            return (
              <div
                key={milestone.label}
                className="absolute flex flex-col items-center -translate-x-1/2"
                style={{ left: `${pos}%` }}
              >
                <div
                  className={`w-2 h-2 rounded-full -mt-5 border-2
                    ${reached
                      ? "bg-progress-green border-progress-green shadow-glow-green"
                      : "bg-muted border-muted-foreground/40"
                    }`}
                />
                <span className={`text-[10px] font-bold mt-1 ${reached ? "text-progress-green" : "text-muted-foreground"}`}>
                  {milestone.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next milestone */}
      <div className="mt-6 pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-xs">🎯</span>
          <span className="text-xs text-muted-foreground">
            Next milestone: <span className="text-foreground font-semibold">A2 — 500 words</span>
          </span>
        </div>
        <span className="text-xs font-black text-primary">+250 🪙</span>
      </div>
    </div>
  );
};

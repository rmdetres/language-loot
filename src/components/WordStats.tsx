import { CheckCircle, BookOpen, Sparkles, Clock } from "lucide-react";

interface WordStatsProps {
  mastered?: number;
  learning?: number;
  newWords?: number;
  dueForReview?: number;
}

const STATS = [
  { key: "mastered", label: "Mastered", icon: CheckCircle, color: "text-progress-green", bg: "bg-progress-green/10 border-progress-green/20" },
  { key: "learning", label: "Learning", icon: BookOpen, color: "text-trust-blue", bg: "bg-trust-blue/10 border-trust-blue/20" },
  { key: "newWords", label: "New", icon: Sparkles, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
  { key: "dueForReview", label: "Due for Review", icon: Clock, color: "text-urgency-red", bg: "bg-urgency-red/10 border-urgency-red/20" },
] as const;

export const WordStats = ({
  mastered = 1,
  learning = 10,
  newWords = 0,
  dueForReview = 0,
}: WordStatsProps) => {
  const values = { mastered, learning, newWords, dueForReview };

  return (
    <div className="grid grid-cols-4 gap-2.5">
      {STATS.map(({ key, label, icon: Icon, color, bg }) => (
        <div
          key={key}
          className={`rounded-xl border p-3 flex flex-col items-center gap-1.5 ${bg} transition-all hover:scale-105`}
        >
          <Icon className={`w-4 h-4 ${color}`} />
          <p className={`font-display text-2xl leading-none ${color}`}>{values[key]}</p>
          <p className="text-[10px] font-semibold text-muted-foreground text-center leading-tight">{label}</p>
        </div>
      ))}
    </div>
  );
};

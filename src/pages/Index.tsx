import { useRef } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CoinBalance } from "@/components/CoinBalance";
import { PrizeCard } from "@/components/PrizeCard";
import { WordStudyCard } from "@/components/WordStudyCard";
import { LevelProgressBar } from "@/components/LevelProgressBar";
import { Leaderboard } from "@/components/Leaderboard";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightPanel } from "@/components/RightPanel";
import { CharacterCards } from "@/components/CharacterCards";
import { WordStats } from "@/components/WordStats";
import { DailyGoals } from "@/components/DailyGoals";

const PRIZES = [
  {
    tier: "lucky" as const,
    prize: "$5 Gift Card",
    subtitle: "Lucky Draw league reward",
    ticketsRequired: 10,
    userTickets: 12,
    emoji: "🎁",
    delay: 0,
  },
  {
    tier: "bronze" as const,
    prize: "$10 Gift Card",
    subtitle: "Bronze league reward",
    ticketsRequired: 50,
    userTickets: 12,
    emoji: "🥉",
    delay: 100,
  },
  {
    tier: "silver" as const,
    prize: "$25 Gift Card",
    subtitle: "Silver league reward",
    ticketsRequired: 150,
    userTickets: 12,
    emoji: "🥈",
    delay: 200,
  },
  {
    tier: "gold" as const,
    prize: "$100 Gift Card",
    subtitle: "Gold league reward",
    ticketsRequired: 500,
    userTickets: 12,
    emoji: "🥇",
    delay: 300,
  },
  {
    tier: "diamond" as const,
    prize: "MacBook Air",
    subtitle: "Diamond league reward",
    ticketsRequired: 2000,
    userTickets: 12,
    emoji: "💎",
    delay: 400,
  },
];

const LEADERBOARD = [
  { rank: 1, name: "LinguaKing", flag: "🇯🇵", coins: 12540, streak: 87 },
  { rank: 2, name: "PollyGlot99", flag: "🇫🇷", coins: 9870, streak: 62 },
  { rank: 3, name: "WordWizard", flag: "🇩🇪", coins: 7230, streak: 45 },
  { rank: 4, name: "Alex R.", flag: "🇪🇸", coins: 1240, streak: 12, isYou: true },
  { rank: 5, name: "NomadNative", flag: "🇰🇷", coins: 890, streak: 7 },
];

const MILESTONES = [
  { label: "A1", words: 0 },
  { label: "A2", words: 500 },
  { label: "B1", words: 2000 },
  { label: "B2", words: 5000 },
  { label: "C1", words: 10000 },
];

const Index = () => {
  const prizeScrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-screen overflow-hidden bg-background">

      {/* ===== LEFT SIDEBAR ===== */}
      <div className="hidden lg:flex w-64 xl:w-72 flex-shrink-0 flex-col h-full overflow-y-auto">
        <LeftSidebar />
      </div>

      {/* ===== MAIN CENTER SCROLL ===== */}
      <main className="flex-1 overflow-y-auto">
        {/* Top mobile nav bar (visible on small screens) */}
        <div className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍀</span>
            <span className="font-display text-xl text-gradient-gold">Lucky Lingo</span>
          </div>
          <CoinBalance coins={1240} />
        </div>

        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden">
          {/* Hero BG */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
            style={{ backgroundImage: `url(${heroBanner})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />

          {/* Floating particles */}
          {["🪙", "✨", "🎯", "🏆", "💫"].map((emoji, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20 pointer-events-none select-none animate-coin-float"
              style={{
                left: `${10 + i * 18}%`,
                top: `${10 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              {emoji}
            </span>
          ))}

          <div className="relative px-5 xl:px-8 pt-8 pb-6">
            {/* Welcome */}
            <div className="animate-slide-up-fade" style={{ animationFillMode: "both", opacity: 0 }}>
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
                Welcome back, Alex! 👋
              </p>
              <h1 className="font-display text-4xl sm:text-6xl leading-none mb-1.5">
                <span className="text-gradient-gold text-glow-gold">STUDY.</span>{" "}
                <span className="text-foreground">EARN.</span>{" "}
                <span className="text-gradient-gold text-glow-gold">WIN.</span>
              </h1>
              <p className="text-muted-foreground text-sm">
              Study words → earn{" "}
                <span className="text-primary font-bold">coins</span> →{" "}
                <span className="text-secondary font-bold">win prizes!</span> 🔥
              </p>
            </div>

            {/* Countdown */}
            <div
              className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 animate-slide-up-fade delay-200"
              style={{ animationFillMode: "both", opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <span className="animate-pulse-glow text-base">⏰</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Weekly Drawing In
                </span>
              </div>
              <CountdownTimer />
            </div>

            {/* Stats row */}
            <div
              className="mt-6 grid grid-cols-3 gap-2.5 animate-slide-up-fade delay-300"
              style={{ animationFillMode: "both", opacity: 0 }}
            >
              {[
                { label: "Words Learned", value: "243", icon: "📖", color: "text-trust-blue" },
                { label: "Your Coins", value: "1,240", icon: "🪙", color: "text-gradient-gold" },
                { label: "Day Streak", value: "12🔥", icon: "🔥", color: "text-progress-green" },
              ].map((stat) => (
                <div key={stat.label} className="card-glass rounded-xl p-3 text-center">
                  <p className="text-base">{stat.icon}</p>
                  <p className={`font-display text-2xl mt-0.5 ${stat.color}`}>{stat.value}</p>
                  <p className="text-muted-foreground text-[10px] font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="px-5 xl:px-8 pb-16 space-y-8">

          {/* ===== PRIZES ===== */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎁</span>
                <h2 className="font-display text-2xl text-gradient-gold">This Week's Prizes</h2>
              </div>
              {/* RED = urgency only */}
              <div className="text-[10px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider bg-urgency-red text-white flex items-center gap-1 shadow-glow-red">🔴 LIVE</div>
            </div>

            {/* Prize cards horizontal scroll */}
            <div
              ref={prizeScrollRef}
              className="flex gap-3 overflow-x-auto pb-3"
              style={{ scrollbarWidth: "none" }}
            >
              {PRIZES.map((prize) => (
                <PrizeCard key={prize.tier} {...prize} />
              ))}
            </div>



          </section>



          {/* ===== PROGRESS ===== */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">📈</span>
              <h2 className="font-display text-2xl text-gradient-gold">Your Progress</h2>
            </div>
            <LevelProgressBar
              level="A1 — Beginner"
              wordsLearned={243}
              totalWords={10000}
              milestones={MILESTONES}
            />
            <button className="mt-3 w-full py-3.5 rounded-xl border-2 border-primary/30 bg-primary/5 text-primary font-black uppercase tracking-wider text-sm hover:bg-primary/10 hover:border-primary/50 transition-all flex items-center justify-center gap-2">
              🧠 Take Placement Test
              <span className="text-xs font-normal text-muted-foreground normal-case tracking-normal">
                (earn 100 🪙)
              </span>
            </button>
          </section>

          {/* ===== CHARACTERS ===== */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🎭</span>
              <h2 className="font-display text-2xl text-gradient-gold">Your Characters</h2>
            </div>
            <CharacterCards />
          </section>

          {/* ===== WORD STATS ===== */}
          <section>
            <WordStats mastered={1} learning={10} newWords={0} dueForReview={0} />
          </section>

          {/* ===== DAILY GOALS ===== */}
          <section>
            <DailyGoals />
          </section>


          {/* ===== LEADERBOARD ===== */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🏆</span>
              <h2 className="font-display text-2xl text-gradient-gold">Leaderboard</h2>
            </div>
            <Leaderboard entries={LEADERBOARD} />
          </section>

          {/* ===== HOW IT WORKS ===== */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💡</span>
              <h2 className="font-display text-2xl text-gradient-gold">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  step: "01",
                  icon: "📖",
                  title: "Study Words",
                  desc: "Learn words in your target language. Each correct answer builds your habit streak.",
                  color: "border-trust-blue/25 bg-trust-blue/5",   // BLUE = trust, clarity
                  accent: "text-trust-blue",
                },
                {
                  step: "02",
                  icon: "🪙",
                  title: "Earn Coins",
                  desc: "More coins = better prize odds. Keep your streak alive to earn faster.",
                  color: "border-primary/25 bg-primary/5",          // GOLD = reward, dopamine
                  accent: "text-primary",
                },
                {
                  step: "03",
                  icon: "🎟️",
                  title: "Win Prizes",
                  desc: "Weekly drawings with real prizes. More tickets = better odds to WIN.",
                  color: "border-progress-green/25 bg-progress-green/5",  // GREEN = achievement
                  accent: "text-progress-green",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`rounded-2xl border p-4 ${item.color} animate-slide-up-fade`}
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both", opacity: 0 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`font-display text-3xl ${item.accent}`}>{item.step}</span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h3 className={`font-display text-lg mb-1 ${item.accent}`}>{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ===== RIGHT PANEL ===== */}
      <div className="hidden xl:flex w-64 2xl:w-72 flex-shrink-0 flex-col h-full overflow-y-auto">
        <RightPanel />
      </div>
    </div>
  );
};

export default Index;

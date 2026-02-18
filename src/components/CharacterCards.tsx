const CHARACTERS = [
  {
    name: 'Enzo "Il Sorriso" Moretti',
    description: "The charming Italian businessman",
    emoji: "🎩",
    color: "from-amber-800 to-amber-950",
  },
  {
    name: "Mephistopheles",
    description: "The cunning trickster",
    emoji: "🎭",
    color: "from-orange-700 to-red-900",
  },
  {
    name: "Charon",
    description: "The mysterious ferryman",
    emoji: "⛵",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "La Bruja Celeste",
    description: "The celestial sorceress",
    emoji: "🔮",
    color: "from-violet-700 to-indigo-900",
  },
];

export const CharacterCards = () => {
  return (
    <div
      className="flex gap-4 overflow-x-auto pb-2"
      style={{ scrollbarWidth: "none" }}
    >
      {CHARACTERS.map((char) => (
        <div
          key={char.name}
          className="flex-shrink-0 w-44 rounded-2xl overflow-hidden border border-border cursor-pointer group transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-glow-gold"
        >
          {/* Art panel */}
          <div
            className={`h-44 bg-gradient-to-b ${char.color} flex items-end justify-center pb-3 relative overflow-hidden`}
          >
            <span
              className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}
            >
              {char.emoji}
            </span>
            {/* subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Label */}
          <div className="px-3 py-2.5 bg-card">
            <p className="text-xs font-bold text-foreground leading-tight truncate">{char.name}</p>
            <div className="flex items-center gap-0.5 mt-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="text-muted-foreground/30 text-xs">★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

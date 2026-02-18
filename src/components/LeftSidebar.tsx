import { useState } from "react";
import { LayoutDashboard, BookOpen, Bookmark, ChevronDown, Globe, Languages, User, Library, Gift, LogOut, BarChart2 } from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Collections" },
  { icon: Bookmark, label: "My Words" },
  { icon: User, label: "Profile" },
  { icon: Library, label: "Saved Library" },
  { icon: Gift, label: "Rewards" },
];

const LANGUAGES = [
  { label: "English", flag: "🇺🇸" },
  { label: "Spanish", flag: "🇪🇸" },
  { label: "French", flag: "🇫🇷" },
  { label: "Japanese", flag: "🇯🇵" },
  { label: "German", flag: "🇩🇪" },
  { label: "Korean", flag: "🇰🇷" },
];

interface LanguageSelectProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  flag: string;
  options: typeof LANGUAGES;
  onChange: (lang: string, flag: string) => void;
}

const LanguageSelect = ({ label, icon, value, flag, options, onChange }: LanguageSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5 px-1">
        <span className="text-muted-foreground">{icon}</span>
        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-primary/30 transition-all text-sm font-semibold text-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="text-base">{flag}</span>
            {value}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-border bg-card shadow-glow-card z-50 overflow-hidden">
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => { onChange(opt.label, opt.flag); setOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted/50 transition-colors text-left"
              >
                <span>{opt.flag}</span>
                <span className={opt.label === value ? "text-primary font-bold" : "text-foreground"}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const LeftSidebar = () => {
  const [nativeLang, setNativeLang] = useState({ label: "English", flag: "🇺🇸" });
  const [learningLang, setLearningLang] = useState({ label: "Spanish", flag: "🇪🇸" });
  const [dashLang, setDashLang] = useState({ label: "English", flag: "🇺🇸" });
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <aside className="flex flex-col h-full bg-card border-r border-border">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl animate-coin-float">🍀</span>
          <div>
            <p className="font-display text-xl text-gradient-gold leading-tight">Lucky Lingo</p>
            <p className="text-[10px] text-muted-foreground font-semibold tracking-wider">
              The Country Club
            </p>
          </div>
        </div>
      </div>

      {/* Language selectors */}
      <div className="px-4 py-5 space-y-4 border-b border-border">
        <LanguageSelect
          label="My Native Language"
          icon={<Languages className="w-3 h-3" />}
          value={nativeLang.label}
          flag={nativeLang.flag}
          options={LANGUAGES}
          onChange={(l, f) => setNativeLang({ label: l, flag: f })}
        />
        <LanguageSelect
          label="I Am Learning"
          icon={<Languages className="w-3 h-3" />}
          value={learningLang.label}
          flag={learningLang.flag}
          options={LANGUAGES}
          onChange={(l, f) => setLearningLang({ label: l, flag: f })}
        />
        <LanguageSelect
          label="Dashboard Language"
          icon={<Globe className="w-3 h-3" />}
          value={dashLang.label}
          flag={dashLang.flag}
          options={LANGUAGES}
          onChange={(l, f) => setDashLang({ label: l, flag: f })}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveNav(label)}
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold transition-all
              ${activeNav === label
                ? "bg-gradient-gold text-primary-foreground shadow-glow-gold"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }
            `}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </button>
        ))}
      </nav>

      {/* User profile + Log out */}
      <div className="px-4 py-4 border-t border-border space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-black text-sm shadow-coin flex-shrink-0">
            R
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground truncate">R</p>
            <p className="text-xs text-muted-foreground truncate">rmdetres@gmail.com</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-xs font-bold text-urgency-red hover:opacity-80 transition-opacity px-1">
          <LogOut className="w-3.5 h-3.5" />
          Log out
        </button>
      </div>
    </aside>
  );
};

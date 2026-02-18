import { useState, useEffect, useRef } from "react";

interface TimeUnit {
  value: number;
  label: string;
}

export const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 4, hours: 9, minutes: 44, seconds: 24 });
  const [tick, setTick] = useState(false);
  const prevSeconds = useRef(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 6; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
      setTick(true);
      setTimeout(() => setTick(false), 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units: TimeUnit[] = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HRS" },
    { value: time.minutes, label: "MIN" },
    { value: time.seconds, label: "SEC" },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div
            className={`
              relative w-14 sm:w-16 h-14 sm:h-16 rounded-xl card-glass flex items-center justify-center
              border border-primary/20 overflow-hidden
              ${unit.label === "SEC" ? "border-primary/40" : ""}
            `}
          >
            {/* Shimmer effect */}
            <div className="shimmer absolute inset-0" />
            {/* Number */}
            <span
              key={`${unit.label}-${unit.value}`}
              className={`
                font-display text-2xl sm:text-3xl text-gradient-gold relative z-10
                ${unit.label === "SEC" && tick ? "animate-countdown-tick" : ""}
              `}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-muted-foreground text-[10px] font-bold tracking-widest mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

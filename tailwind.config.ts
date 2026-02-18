import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        coin: {
          gold: "hsl(var(--coin-gold))",
          dark: "hsl(var(--coin-gold-dark))",
          glow: "hsl(var(--coin-glow))",
        },
        prize: {
          bronze: "hsl(var(--prize-bronze))",
          silver: "hsl(var(--prize-silver))",
          gold: "hsl(var(--prize-gold))",
          diamond: "hsl(var(--prize-diamond))",
        },
        neon: {
          green: "hsl(var(--neon-green))",
          orange: "hsl(var(--hot-orange))",
        },
        trust: {
          blue: "hsl(var(--trust-blue))",
          soft: "hsl(var(--trust-blue-soft))",
        },
        progress: {
          green: "hsl(var(--progress-green))",
        },
        urgency: {
          red: "hsl(var(--urgency-red))",
          soft: "hsl(var(--urgency-red-soft))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-gold": "var(--gradient-gold)",
        "gradient-green": "var(--gradient-green)",
        "gradient-blue": "var(--gradient-blue)",
        "gradient-card": "var(--gradient-card)",
        "gradient-prize": "var(--gradient-prize)",
        "gradient-orange": "var(--gradient-orange)",
        "gradient-red": "var(--gradient-red)",
        "gradient-cyan": "var(--gradient-cyan)",
        "gradient-hero": "var(--gradient-hero)",
      },
      boxShadow: {
        "glow-gold": "var(--glow-gold)",
        "glow-green": "var(--glow-green)",
        "glow-orange": "var(--glow-orange)",
        "glow-blue": "var(--glow-blue)",
        "glow-red": "var(--glow-red)",
        "glow-cyan": "var(--glow-cyan)",
        "glow-card": "var(--glow-card)",
        "coin": "0 2px 10px hsl(38 88% 44% / 0.35), inset 0 1px 0 hsl(43 100% 78% / 0.4), 0 0 0 1px hsl(38 88% 44% / 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

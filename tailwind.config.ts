import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#FFB703",
          600: "#D97706",
          DEFAULT: "#FFB703",
        },
        ocean: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0284C7",
          600: "#0369A1",
          DEFAULT: "#0284C7",
        },
        coral: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#FF6B6B",
          600: "#E11D48",
          DEFAULT: "#FF6B6B",
        },
        mint: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#06D6A0",
          600: "#059669",
          DEFAULT: "#06D6A0",
        },
        purple: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#8338EC",
          600: "#7E22CE",
          DEFAULT: "#8338EC",
        },
        bubblegum: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#FF70A6",
          600: "#DB2777",
          DEFAULT: "#FF70A6",
        },
        cream: "#FFFDF8",
        sky: {
          light: "#E0F4FF",
          bright: "#38B6FF",
        }
      },
      fontFamily: {
        heading: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      boxShadow: {
        'playful': '0 8px 0 rgba(0, 0, 0, 0.08)',
        'playful-lg': '0 12px 0 rgba(0, 0, 0, 0.09)',
        'playful-hover': '0 4px 0 rgba(0, 0, 0, 0.08)',
        'glow-sunshine': '0 0 25px rgba(255, 183, 3, 0.4)',
        'glow-coral': '0 0 25px rgba(255, 107, 107, 0.4)',
        'glow-ocean': '0 0 25px rgba(2, 132, 199, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;

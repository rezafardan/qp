/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 100%": { transform: "translateY(0)" }, // Posisi awal dan akhir
          "50%": { transform: "translateY(-10px)" }, // Lompat ke atas
        },
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "100%" }, // Posisi awal (atas) dengan opacity 100%
          "50%": { transform: "translateY(16px)", opacity: "25%" }, // Setengah jalan dengan opacity 50%
          "100%": { transform: "translateY(0)", opacity: "0%" }, // Posisi akhir (bawah) dengan opacity 0%
        },
        pulse: {
          "0%, 100%": { transform: "translateX(0)" }, // Posisi awal dan akhir
          "50%": { transform: "translateX(-4px)" }, // Lompat ke atas
        },
      },
      animation: {
        jump: "jump 1.2s ease-in-out infinite", // Animasi lompat selama 0.5 detik
        pulse: "pulse 3s ease-in-out infinite",
        scroll: "scroll 2s infinite",
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
        BebasNeue: ["Bebas Neue", "serif"],
      },
    },
  },
  plugins: [],
};

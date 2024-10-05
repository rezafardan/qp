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
      },
      animation: {
        jump: "jump 1.2s ease-in-out infinite", // Animasi lompat selama 0.5 detik
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

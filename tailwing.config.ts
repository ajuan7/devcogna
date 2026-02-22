const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050B10",
          900: "#07121A",
          800: "#0A1B26",
          700: "#0E2532",
        },
        aura: {
          500: "#2BB6FF",
          400: "#6FD6FF",
          300: "#A5E7FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
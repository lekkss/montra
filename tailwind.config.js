/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: "#0D0E0F",
        violet: "#7F3DFF",
        red: "#FD3C4A",
        green: "#00A86B",
        yellow: "#FCAC12",
        blue: "#0077FF",
        light20: "#91919F",
        dark50: "#212325",
      },
      fontFamily: {
        inter400: "Inter_400Regular",
        inter500: "Inter_500Medium",
        inter600: "Inter_600SemiBold",
        inter700: "Inter_700Bold",
      },
    },
  },
  plugins: [],
};

const config = {
  content: [
    "./app/*/.{js,ts,jsx,tsx,mdx}",
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",
    "./app/component/*/.{js,ts,jsx,tsx,mdx}", // Tune folder 'component' rakha hai toh ye sahi hai
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
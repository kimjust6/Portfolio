/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class", // or "media"
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

        },
    },
    plugins: [plugin(function ({ addVariant }) {
        addVariant("dark-custom", "&:where(.dark, .dark *)");
    }),],
};

export default config;

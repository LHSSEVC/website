/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dimmed: "#878593",
                purple: "rgba(116,93,197,1)",
                blue: "#6A98CE",
                bg: "#12101C",
                green: "rgb(48, 242, 149)",
            },
        },
    },
    plugins: [],
};

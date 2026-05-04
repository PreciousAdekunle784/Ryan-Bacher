import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0B0B0C",
                graphite: "#141416",
                slate: "#1C1C1F",
                bone: "#EDE7DA",
                paper: "#F5F1E8",
                bronze: "#B8895A",
                bronzeDeep: "#8C6235",
                muted: "#8B8780",
            },
            fontFamily: {
                serif: ['"EB Garamond"', "Georgia", "serif"],
                sans: ['"Inter"', "system-ui", "sans-serif"],
                mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
            },
            letterSpacing: {
                editorial: "-0.02em",
            },
            maxWidth: {
                prose: "68ch",
                editorial: "1180px",
            },
            keyframes: {
                rise: {
                    "0%": { opacity: "0", transform: "translateY(12px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                rise: "rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
            },
        },
    },
    plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffd519",
                sub: "#c4d3a7",
                text: "#333",
                border: "#d9d9d9",
                surface: "#f5f5f5",
                textGray: "#969696",
            },
            backgroundImage: {
                "gradient-yellowred": "linear-gradient(90deg, #000 0%, #FFC837 100%)",
                "mobile-home": "url('./assets/(파일명).png')",
            },
            animation: {
                expand: "opacity 0.1s ease-in-out forwards",
                scale: "scale 0.2s ease-in-out forwards",
            },
            keyframes: {
                opacity: {
                    "0%": {
                        opacity: "0", // 숫자값 사용
                    },
                    "100%": {
                        opacity: "1", // 숫자값 사용
                    },
                },
                scale: {
                    "0%": {
                        width: "15rem",
                        height: "15rem",
                    },
                    "100%": {
                        width: "26vw",
                        height: "50vh",
                    },
                },
            },
            screens: {
                sm: { raw: "(max-width: 1020px)" },
                xl: { raw: "(min-width: 1021px)" },
            },
        },
    },
    plugins: [],
};
export default config;

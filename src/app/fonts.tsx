import { Prompt, Roboto, IBM_Plex_Sans_KR } from "next/font/google";

export const prompt = Prompt({
    weight: ["400", "600", "900"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

export const roboto = Roboto({
    weight: ["300", "400", "500", "900"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

export const IBMPlexSansKR = IBM_Plex_Sans_KR({
    weight: ["300", "400", "500", "700"],
    style: "normal",
    subsets: ["latin"],
    display: "swap",
});

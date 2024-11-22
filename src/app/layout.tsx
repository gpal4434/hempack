import type { Metadata, Viewport } from "next";
import { IBMPlexSansKR, roboto } from "./fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "HEMPACK ::: 웹 퍼블리셔 김혜미",
    description: "웹 퍼블리셔(경력) 지원자 김혜미 포트폴리오입니다.",
    keywords: [
        "웹 퍼블리셔 포트폴리오",
        "퍼블리셔 포트폴리오",
        "경력 퍼블리셔",
        "프론트엔드 개발자 포트폴리오",
        "프론트엔드 개발자",
        "UI 개발자",
        "UI UX 개발자 포트폴리오",
    ],
    url: "https://hempack.vercel.app/",
    ogImage: "/public/images/ogImage.png",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${IBMPlexSansKR.className} ${roboto.className}`}>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}

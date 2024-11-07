import type { Metadata, Viewport } from "next";
import { IBMPlexSansKR, roboto } from "./fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "HEMPACK ::: 웹 퍼블리셔 김혜미",
    description: "웹 퍼블리셔 지원자 김혜미 포트폴리오",
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
            <body>{children}</body>
        </html>
    );
}

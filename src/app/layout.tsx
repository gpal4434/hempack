import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "웹 퍼블리셔 지원자 김혜미 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

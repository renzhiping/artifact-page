import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "AI学习资源中心",
    description: "探索人工智能核心概念，掌握机器学习关键技术 - 神经网络、聚类分析等",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

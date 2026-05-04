import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://ryanbacher.com"),
    title: {
        default: "Ryan Bacher — Operator. Investor. Founder Mentor.",
        template: "%s — Ryan Bacher",
    },
    description:
        "Real operator. Real exits. Real scars. Real systems. Founder coaching for $1M–$20M operators tired of theoretical advice.",
    openGraph: {
        title: "Ryan Bacher — Operator. Investor. Founder Mentor.",
        description:
            "I help founders avoid expensive mistakes, fix broken systems, hire better, and scale with discipline.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@racefly",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans">
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

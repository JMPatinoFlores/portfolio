import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/_components/navbar";
import { Particles } from "@/components/ui/particles";
import { Footer } from "@/_components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations("Metadata");

    return {
        metadataBase: new URL("https://jessiowe-dev.vercel.app"),
        title: t("title"),
        description: t("description"),
        keywords: [
            "Jessica Patiño",
            "Frontend Developer",
            "Next.js",
            "React",
            "TypeScript",
            "Portfolio",
            "Web Developer",
        ],
        authors: [{ name: "Jessica Patiño" }],
        openGraph: {
            title: t("title"),
            description: t("ogDescription"),
            url: "https://jessiowe-dev.vercel.app",
            siteName: t("siteName"),
            locale: locale === "es" ? "es_MX" : "en_US",
            type: "website",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <body className={`${poppins.className} antialiased`}>
                <NextIntlClientProvider>
                    <div className="relative flex flex-col bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-950 via-blue-950 to-purple-900">
                        <Particles
                            className="absolute inset-0 -z-10"
                            quantity={150}
                            ease={80}
                            color="#ffffff"
                        />
                        <Navbar />
                        <main className="flex-1 min-h-screen container mx-auto">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

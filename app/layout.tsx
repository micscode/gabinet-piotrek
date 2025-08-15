import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWatcher from "./components/ThemeWatcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabinet Ortopedyczny Piotr Socha",
  description:
    "Specjalista ortopedii i traumatologii narządu ruchu. Konsultacje, USG, iniekcje dostawowe, leczenie urazów i zmian przeciążeniowych.",
  metadataBase: new URL("https://gabinet-piotrek.vercel.app"),
  openGraph: {
    title: "Gabinet Ortopedyczny Piotr Socha",
    description:
      "Konsultacje ortopedyczne, USG narządu ruchu, iniekcje dostawowe. Kowary • Jelenia Góra",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWatcher />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
const PlusJakartaSans = Plus_Jakarta_Sans({
   weight: ['400', '500', '600', '700'],
  variable: "--font-Plus_Jakarta_Sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Théophile Lumbala - Développeur Web et Créatif du Numérique",
  description: "Portfolio de Théophile Lumbala, Développeur Web et Créatif du Numérique",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${PlusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="page-background flex-1">
          <Navbar/>
        {children}
      </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500","600","700"],
  variable: "--font-montserrat",
  display: "optional",  // ← Changed from "swap"
  fallback: ["system-ui", "arial"],  // ← Added
  adjustFontFallback: true,  // ← Added
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-open-sans",
  display: "optional",  // ← Changed from "swap"
  fallback: ["system-ui", "arial"],  // ← Added
  adjustFontFallback: true,  // ← Added
});

export const metadata = {
  title: "FEAL Electrical Automotive Ltd",
  description: "Supply & fit auto-electrical specialists for fleets and commercial vehicles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

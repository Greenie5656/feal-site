import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500","600","700"],
  variable: "--font-montserrat",
  display: "optional",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-open-sans",
  display: "optional",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL('http://www.fealelectricalautomotiveltd.co.uk'),
  // Home Page Meta (Default)
  title: "FEAL Electrical Automotive Ltd | Fleet, Off-Grid & Vehicle Tracking Specialists",
  description: "FEAL Electrical Automotive Ltd provides professional electrical, tracking, and off-grid solutions for fleets, commercial vehicles, and leisure builds across the UK.",
  
  // Keywords
  keywords: [
    "fleet electrical installations",
    "vehicle tracking UK",
    "off-grid power systems",
    "motorhome electrical",
    "commercial vehicle electrics",
    "Haslingden auto electrician",
    "telematics systems",
    "campervan electrical installation"
  ],

  // Author & Publisher
  authors: [{ name: "FEAL Electrical Automotive Ltd" }],
  creator: "FEAL Electrical Automotive Ltd",
  publisher: "FEAL Electrical Automotive Ltd",

  // Favicon & Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Web App Manifest
  manifest: '/site.webmanifest',

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.fealelectrical.co.uk',
    siteName: 'FEAL Electrical Automotive Ltd',
    title: 'FEAL Electrical Automotive Ltd | Fleet, Off-Grid & Vehicle Tracking Specialists',
    description: 'FEAL Electrical Automotive Ltd provides professional electrical, tracking, and off-grid solutions for fleets, commercial vehicles, and leisure builds across the UK.',
    images: [
      {
        url: '/FEAL_SOCIAL_SHARE.png',
        width: 1200,
        height: 630,
        alt: 'FEAL Electrical Automotive Ltd - Professional Auto-Electrical Services',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'FEAL Electrical Automotive Ltd | Fleet, Off-Grid & Vehicle Tracking Specialists',
    description: 'FEAL Electrical Automotive Ltd provides professional electrical, tracking, and off-grid solutions for fleets, commercial vehicles, and leisure builds across the UK.',
    images: ['/FEAL_SOCIAL_SHARE.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add later if needed)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2d94cf" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forcabuilders.com"),
  title: {
    default: "Força Builders | Premier Construction Company in New Jersey",
    template: "%s | Força Builders"
  },
  description: "Força Builders specializes in residential, commercial, and mixed-use construction in New Jersey. Transforming houses into homes with quality craftsmanship.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forcabuilders.com",
    siteName: "Força Builders",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Força Builders Logo",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Força Builders",
  "image": "https://forcabuilders.com/img/logo.png",
  "url": "https://forcabuilders.com",
  "telephone": "973-449-5343",
  "email": "jean@forcabuilders.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "114 Essex St, Unit 114",
    "addressLocality": "Rochelle Park",
    "addressRegion": "NJ",
    "postalCode": "07662",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.9098",
    "longitude": "-74.0735"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "sameAs": [
    "https://www.instagram.com/forcabuilders/",
    "https://www.youtube.com/@forcabuilders"
  ],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-sans antialiased`}
      > 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <Navbar />
        <main className="mt-32">
              {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

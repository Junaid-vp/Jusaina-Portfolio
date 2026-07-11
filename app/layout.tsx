import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, Sacramento } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { InitialLoader } from "@/components/shared/initial-loader";
import { Toaster } from "sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sacramento = Sacramento({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Jusaina Nargees VP | DHA Eligible Speech-Language Pathologist in Dubai",
    template: "%s | Jusaina Nargees VP — Speech-Language Pathologist",
  },
  description:
    "Professional portfolio of Jusaina Nargees VP, a DHA Eligible Speech-Language Pathologist with clinical experience across the UAE and India.",
  keywords: [
    "Speech-Language Pathologist Dubai",
    "DHA Eligible Speech Therapist",
    "Speech Therapy UAE",
    "Paediatric Speech-Language Pathologist",
    "Speech and Language Therapy Dubai",
    "AAC Therapy",
    "Special Needs Rehabilitation",
    "Child Speech Therapy Dubai",
    "Autism Speech Therapy Dubai",
    "Early Intervention Speech Therapy",
    "Language Delay Treatment UAE",
  ],
  authors: [{ name: "Jusaina Nargees VP" }],
  metadataBase: new URL("https://jusaina-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jusaina-portfolio.vercel.app",
    siteName: "Jusaina Nargees VP — Speech-Language Pathologist",
    title:
      "Jusaina Nargees VP | DHA Eligible Speech-Language Pathologist in Dubai",
    description:
      "Professional portfolio of Jusaina Nargees VP, a DHA Eligible Speech-Language Pathologist with clinical experience across the UAE and India.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jusaina Nargees VP | DHA Eligible Speech-Language Pathologist in Dubai",
    description:
      "Professional portfolio of Jusaina Nargees VP, a DHA Eligible Speech-Language Pathologist with clinical experience across the UAE and India.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${sacramento.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jusaina Nargees VP",
              "alternateName": ["Jusaina Nargees", "Jusaina Portfolio"],
              "url": "https://jusaina-portfolio.vercel.app"
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jusaina Nargees VP",
              jobTitle: "Speech-Language Pathologist",
              description:
                "DHA Eligible Speech-Language Pathologist with clinical experience across the UAE and India.",
              url: "https://jusaina-portfolio.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              telephone: "+971542261753",
              email: "Jusainavp2017@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/jusaina-vp-84468222a/"
              ],
              knowsLanguage: ["English", "Malayalam", "Hindi"],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional License",
                  name: "DHA Eligibility — Speech-Language Pathologist",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Dubai Health Authority",
                  },
                },
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Kerala University of Health Sciences",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <InitialLoader />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              background: 'var(--blush)',
              border: '1px solid var(--primary)',
              color: 'var(--rose-dark)',
              borderRadius: '99px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              fontFamily: 'var(--font-sans)',
              padding: '8px 16px',
              width: 'auto',
              minWidth: '0',
            },
            className: 'text-xs font-semibold',
          }} 
        />
      </body>
    </html>
  );
}

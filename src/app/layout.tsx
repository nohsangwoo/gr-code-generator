import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free QR Code Generator | Create Custom QR Codes Online",
  description: "Generate custom QR codes for URLs and Wi-Fi networks instantly. Free, easy-to-use online tool with no sign-up required. Create QR codes in various sizes and colors.",
  keywords: [
    "QR code generator, create QR code, custom QR code, free QR code maker, URL to QR code, Wi-Fi QR code, QR code creator, online QR code tool, QR code design, colorful QR codes, QR code for website, QR code for business, mobile-friendly QR codes, dynamic QR codes, QR code scanner, QR code for marketing, QR code for events, QR code size customization, QR code color options, secure QR codes, quick response codes, 2D barcodes, QR code for digital marketing, QR code for product packaging, QR code for business cards, QR code for menus, contactless QR codes, QR code tracking, QR code analytics, QR code for social media, QR code for app downloads, QR code for contactless payments"
  ].join(", "),
  openGraph: {
    title: "Free QR Code Generator - Create Custom QR Codes for URLs and Wi-Fi",
    description: "Generate custom QR codes instantly with our free online tool. Create QR codes for URLs and Wi-Fi networks. No sign-up required, easy to use, and mobile-friendly.",
    images: [
      {
        url: "https://qrgen.ludgi.ai/logo.webp",
        width: 1200,
        height: 630,
        alt: "QR Code Generator Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "QR Code Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator - Create Custom QR Codes Instantly",
    description: "Generate custom QR codes for URLs and Wi-Fi networks with our free online tool. No sign-up required, easy to use, and mobile-friendly.",
    images: ["https://qrgen.ludgi.ai/logo.webp"],
    creator: "@ludgi_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qrgen.ludgi.ai",
    languages: {
      "en-US": "https://qrgen.ludgi.ai",
    },
  },
  // verification: {
  //   google: "your_google_verification_code",
  //   yandex: "your_yandex_verification_code",
  // },
  category: "Technology",
  classification: "QR Code Generator",
};

const pubId = "ca-pub-5823741955283998"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content={pubId} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Funding Choices 스크립트 */}
        <Script
          id="google-funding-choices"
          strategy="afterInteractive"
          src={`https://fundingchoicesmessages.google.com/i/${pubId}?ers=1`}
        />
        {/* Google FC Present 스크립트 */}
        <Script
          id="google-fc-present"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
          }}
        />
      </body>
    </html>
  );
}

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
  title: "무료 QR 코드 생성기 | LUDGI AI - URL/Wi-Fi QR코드 즉시 생성",
  description: "럿지 AI의 무료 QR 코드 생성기로 URL, Wi-Fi 네트워크용 맞춤형 QR 코드를 즉시 생성하세요. 회원가입 없이 무료로 사용 가능한 온라인 도구. 다양한 크기와 색상으로 QR 코드를 디자인하세요.",
  keywords: [
    "QR 코드 생성기", "무료 QR 코드", "QR코드 만들기", "URL QR 코드", "Wi-Fi QR 코드", 
    "럿지 QR", "LUDGI QR", "온라인 QR 생성", "QR 코드 디자인", "맞춤형 QR 코드",
    "비즈니스 QR 코드", "마케팅 QR 코드", "이벤트 QR 코드", "메뉴판 QR 코드",
    "명함 QR 코드", "제품 포장 QR 코드", "소셜미디어 QR 코드", "비접촉 QR 코드",
    "QR 코드 다운로드", "컬러 QR 코드", "QR 코드 크기 조절", "모바일 친화적 QR",
    "동적 QR 코드", "정적 QR 코드", "QR 코드 스캐너", "빠른 응답 코드", "2D 바코드",
    "주식회사 럿지", "LUDGI Inc", "럿지 AI 솔루션", "qrgen ludgi", "qr generator ludgi"
  ].join(", "),
  metadataBase: new URL('https://qrgen.ludgi.ai'),
  openGraph: {
    title: "무료 QR 코드 생성기 - LUDGI AI | URL & Wi-Fi QR 즉시 생성",
    description: "럿지 AI가 제공하는 무료 온라인 QR 코드 생성 도구. URL과 Wi-Fi 네트워크용 맞춤형 QR 코드를 즉시 생성하세요. 회원가입 불필요, 모바일 최적화, 다양한 커스터마이징 옵션 제공.",
    url: 'https://qrgen.ludgi.ai',
    siteName: "LUDGI QR Generator",
    images: [
      {
        url: "https://qrgen.ludgi.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "LUDGI QR Code Generator - 무료 온라인 QR 코드 생성 도구",
      },
      {
        url: "https://qrgen.ludgi.ai/og-image-square.png",
        width: 800,
        height: 800,
        alt: "LUDGI QR Generator 로고",
      }
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ludgi_inc",
    creator: "@ludgi_inc",
    title: "무료 QR 코드 생성기 - LUDGI AI | 즉시 생성 가능",
    description: "럿지 AI의 무료 QR 코드 생성기로 URL과 Wi-Fi용 맞춤형 QR 코드를 즉시 생성하세요. 회원가입 불필요.",
    images: {
      url: "https://qrgen.ludgi.ai/twitter-card.png",
      alt: "LUDGI QR Code Generator",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qrgen.ludgi.ai",
    languages: {
      "ko-KR": "https://qrgen.ludgi.ai",
      "en-US": "https://qrgen.ludgi.ai/en",
    },
  },
  verification: {
    google: "google-verification-code-here",
    other: {
      "naver-site-verification": "naver-verification-code-here",
    },
  },
  authors: [{ name: "LUDGI Inc.", url: "https://ludgi.ai" }],
  creator: "LUDGI Inc.",
  publisher: "LUDGI Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "QR Code Generator",
  other: {
    "company": "주식회사 럿지",
    "company-en": "LUDGI Inc.",
    "business-registration": "307-88-03283",
    "duns-number": "963415644",
    "contact-email": "milli@molluhub.com",
    "contact-phone": "02-931-9310",
  },
};

const pubId = "ca-pub-5823741955283998"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://qrgen.ludgi.ai/#website",
      "url": "https://qrgen.ludgi.ai/",
      "name": "LUDGI QR Generator",
      "alternateName": "럿지 QR 코드 생성기",
      "description": "무료 온라인 QR 코드 생성 도구 - URL과 Wi-Fi 네트워크용 맞춤형 QR 코드 즉시 생성",
      "publisher": {
        "@id": "https://ludgi.ai/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://qrgen.ludgi.ai/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": ["ko-KR", "en-US"]
    },
    {
      "@type": "Organization",
      "@id": "https://ludgi.ai/#organization",
      "name": "주식회사 럿지",
      "alternateName": "LUDGI Inc.",
      "url": "https://ludgi.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ludgi.ai/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://ludgi.ai/company-image.jpg",
      "description": "혁신적인 기술 솔루션으로 비즈니스의 미래를 만들어가는 IT 기업",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "인천 송도 센트로드",
        "addressLocality": "인천",
        "addressRegion": "인천광역시",
        "postalCode": "21984",
        "addressCountry": "KR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+82-2-931-9310",
        "contactType": "customer service",
        "areaServed": "KR",
        "availableLanguage": ["Korean", "English"]
      },
      "sameAs": [
        "https://github.com/ludgi",
        "https://www.linkedin.com/company/ludgi",
        "https://twitter.com/ludgi_inc"
      ],
      "founder": {
        "@type": "Person",
        "name": "노상우",
        "jobTitle": "CEO"
      },
      "foundingDate": "2024",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 15
      },
      "taxID": "307-88-03283",
      "duns": "963415644",
      "email": "milli@molluhub.com",
      "telephone": "+82-2-931-9310"
    },
    {
      "@type": "WebApplication",
      "@id": "https://qrgen.ludgi.ai/#webapp",
      "name": "LUDGI QR Code Generator",
      "url": "https://qrgen.ludgi.ai",
      "description": "무료 온라인 QR 코드 생성 웹 애플리케이션",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KRW"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      },
      "creator": {
        "@id": "https://ludgi.ai/#organization"
      },
      "screenshot": [
        "https://qrgen.ludgi.ai/screenshot-1.png",
        "https://qrgen.ludgi.ai/screenshot-2.png"
      ],
      "featureList": [
        "URL to QR Code conversion",
        "Wi-Fi QR Code generation",
        "Customizable QR code colors",
        "Adjustable QR code sizes",
        "Instant download as PNG",
        "No registration required",
        "Mobile responsive design"
      ],
      "softwareVersion": "1.0.0"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "LUDGI",
          "item": "https://ludgi.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": "https://ludgi.ai/tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "QR Generator",
          "item": "https://qrgen.ludgi.ai"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "LUDGI QR 코드 생성기는 무료인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네, LUDGI QR 코드 생성기는 완전 무료입니다. 회원가입이나 로그인 없이 무제한으로 QR 코드를 생성할 수 있습니다."
          }
        },
        {
          "@type": "Question",
          "name": "어떤 종류의 QR 코드를 만들 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "URL QR 코드와 Wi-Fi 네트워크 QR 코드를 생성할 수 있습니다. 각 QR 코드는 크기와 색상을 자유롭게 커스터마이징할 수 있습니다."
          }
        },
        {
          "@type": "Question",
          "name": "생성한 QR 코드를 어떻게 다운로드하나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "QR 코드 생성 후 'Download QR Code' 버튼을 클릭하면 PNG 형식으로 즉시 다운로드됩니다."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content={pubId} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#764ba2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LUDGI QR" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.placename" content="인천" />
        <meta name="geo.position" content="37.3891;126.6470" />
        <meta name="ICBM" content="37.3891, 126.6470" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#764ba2" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

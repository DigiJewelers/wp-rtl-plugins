/*
|--------------------------------------------------------------------------
| LUMISE — Server Page (SEO)
|--------------------------------------------------------------------------
| Metadata و داده‌های ساختاریافته (JSON-LD) فقط در Server Component قابل
| تعریف هستند؛ به همین دلیل UI در LumiseLanding.tsx (Client) قرار دارد.
|
| ساختار پوشه:
|   src/app/lumise/page.tsx          ← همین فایل
|   src/app/lumise/LumiseLanding.tsx ← رابط کاربری و انیمیشن‌ها
|   src/app/lumise/content.ts        ← داده‌های مشترک (دموها، FAQ، لینک‌ها)
|
| نکته: metadataBase را در app/layout.tsx با دامنه سایت تنظیم کنید تا
| لینک‌های canonical و Open Graph به آدرس کامل تبدیل شوند. همچنین
| <html lang="fa" dir="rtl"> و فونت Vazirmatn را در layout قرار دهید.
|--------------------------------------------------------------------------
*/

import type {Metadata} from "next";

import LumiseLanding from "./LumiseLanding";
import {DEMOS, FAQS, RATING, URLS} from "./content";

const TITLE =
  "افزونه Lumise فارسی | طراحی آنلاین محصول و شخصی‌سازی در ووکامرس";

const DESCRIPTION =
  "Lumise افزونه طراحی آنلاین محصول برای وردپرس و ووکامرس است؛ طراحی تیشرت، ماگ، قاب موبایل و محصولات چاپی با پیش‌نمایش زنده و خروجی آماده چاپ PDF، SVG و PNG. نسخه کاملاً فارسی و راست‌چین.";

export const metadata: Metadata = {
  title: {absolute: TITLE},
  description: DESCRIPTION,
  keywords: [
    "Lumise",
    "افزونه Lumise",
    "لومیس فارسی",
    "طراحی آنلاین محصول",
    "شخصی سازی محصول ووکامرس",
    "افزونه طراحی تیشرت",
    "Product Designer ووکامرس",
    "افزونه چاپ روی محصول",
    "Print on Demand وردپرس",
  ],
  alternates: {
    canonical: "/lumise",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/lumise",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        // تصویر 1200×630 را در این مسیر قرار دهید
        url: "/images/lumise/og.jpg",
        width: 1200,
        height: 630,
        alt: "افزونه Lumise — طراحی آنلاین محصول در ووکامرس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/lumise/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Lumise Product Designer",
      alternateName: "افزونه Lumise فارسی",
      description: DESCRIPTION,
      applicationCategory: "DesignApplication",
      operatingSystem: "WordPress, WooCommerce",
      inLanguage: "fa-IR",
      url: URLS.official,
      sameAs: [URLS.purchase, URLS.official],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING.value,
        ratingCount: RATING.count,
        bestRating: 5,
        worstRating: 1,
      },
      featureList: [
        "ویرایشگر آنلاین طراحی محصول",
        "پیش‌نمایش زنده",
        "قالب‌های آماده طراحی",
        "افکت‌های متن و ویرایش تصویر",
        "محاسبه قیمت چاپ",
        "خروجی PDF، SVG، JSON و PNG",
        "پشتیبانی از موبایل و تبلت",
      ],
      subjectOf: DEMOS.map((demo) => ({
        "@type": "WebPage",
        name: `${demo.title} (${demo.label})`,
        url: demo.href,
        inLanguage: "en",
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <LumiseLanding/>
    </>
  );
}

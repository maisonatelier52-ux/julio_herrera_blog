
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* ============================
   SITE CONFIG
============================ */
const SITE_URL = "https://www.hvelutini.com";
const PAGE_URL = `${SITE_URL}/vision-philosophy-future-outlook`;

/* ============================
   METADATA (SEO / OG / TWITTER)
============================ */
export const metadata = {
  title: "Vision, Philosophy & Future Outlook | Julio Herrera Velutni",
  description:
    "Discover Julio Herrera Velutni’s vision and financial philosophy focused on ethical finance, innovation, long-term asset protection, and institutional strength.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Vision, Philosophy & Future Outlook",
    description:
      "An in-depth look at Julio Herrera Velutni’s financial philosophy, long-term vision, and outlook for the future of global finance.",
    url: PAGE_URL,
    siteName: "JMHV",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/jmhv-image-bg-black.webp`,
        width: 1200,
        height: 630,
        alt: "Vision, Philosophy and Future Outlook of Julio Herrera Velutni",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision, Philosophy & Future Outlook",
    description:
      "Julio Herrera Velutni’s philosophy on ethical finance, innovation, and long-term institutional strength.",
    images: [`${SITE_URL}/images/jmhv-image-bg-black.webp`],
  },
};

export default function VisionPhilosophy() {

  /* ============================
     JSON-LD
  ============================ */

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${PAGE_URL}#blogpost`,
    headline: "Vision, Philosophy & Future Outlook",
    description: metadata.description,
    image: `${SITE_URL}/images/jmhv-image.webp`,
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "JMHV",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "JMHV",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/jmhv-main-logo.webp`,
      },
    },
    about: {
      "@type": "Person",
      name: "Julio Herrera Velutni",
      description:
        "Julio Herrera Velutni is a financial leader whose vision combines traditional banking principles with ethical finance, innovation, and long-term institutional resilience.",
      image: `${SITE_URL}/images/jmhv-image.webp`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vision, Philosophy & Future Outlook",
        item: PAGE_URL,
      },
    ],
  };
  return (
    <>
    {/* ============================
          JSON-LD
      ============================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

     <main className="min-h-screen w-full bg-black text-white overflow-hidden">
       {/* ===== Hidden SEO Copy ===== */}
        <section className="sr-only">
          <h2>Vision, Philosophy & Future Outlook</h2>
           <p>
            Vision, philosophy, and future outlook define the financial approach of
            Julio Herrera Velutni. This article explores Julio Herrera Velutni’s vision,
            ethical finance philosophy, and long-term outlook for global finance.
          </p>
        </section>
          {/* Header */}
        <header className="px-8 sm:px-12 lg:px-14 py-8">
          <div>
            <Link
              href="/"
              title="Home page"
              className="flex items-center gap-1"
            >
              <Image
                src="/images/jmhv-main-logo.webp"
                alt="JMHV emblem"
                width={32}
                height={28}
                className="rounded-full"
                priority
              />
              <p className="text-md font-medium tracking-wide font-macondo">
                JMHV
              </p>
            </Link>
          </div>
        </header>

          {/* Main Content Container */}
          <div className="px-8 sm:px-12 lg:px-16">
            {/* Desktop Layout: Row with 2 Columns */}
            <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16 min-h-full">
              {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
              <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
                <h1 className="text-6xl xl:text-7xl font-black tracking-tight leading-none font-libre-baskerville">
                  Vision, Philosophy & Future Outlook
                    </h1>

                    <div className="mt-8 space-y-6 max-w-xl">
                      <p className="text-xs leading-relaxed font-libre-baskerville">
                      Julio Herrera Velutini's ideas about money mix old-fashioned banking ideas with plans for the future. His point of view is based on protecting assets over the long term, ethical finance, innovation, and making institutions stronger.
                      </p>
                      
                    </div>

                

              </div>

              {/* Column 2: Image */}
              <div className="lg:flex-1">
                <div className="w-full min-h-[240px] sm:h-[500px] lg:h-[630px] relative">
                  <Image
                    src="/images/jmhv-image.webp"
                    alt="Julio Herrera Velutni"
                    fill
                    priority
                    className="object-cover rounded-lg lg:rounded-none"
                  />
                </div>
              </div>

              {/* Mobile Layout: Text Content Below Image */}
              <div className="lg:hidden mt-0 space-y-4 pb-12 flex flex-col items-center justify-center text-center">
                  <p className="text-lg sm:text-3xl font-black tracking-tight leading-none font-libre-baskerville">
                      Vision, Philosophy & Future Outlook
                    </p>

                    <div className="mt-0 space-y-2 text-left px-4">
                      <p className="text-xs leading-relaxed font-libre-baskerville">
                        Julio Herrera Velutini's ideas about money mix old-fashioned banking ideas with plans for the future. His point of view is based on protecting assets over the long term, ethical finance, innovation, and making institutions stronger.
                      </p>
                    
                    </div>

              
              </div>
            </div>
          </div>
        </main>
    </>
  

  );
}




import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* ============================
   SITE CONFIG
============================ */
const SITE_URL = "https://www.hvelutini.com";
const PAGE_URL = `${SITE_URL}/international-presence-strategy`;

/* ============================
   METADATA (SEO / OG / TWITTER)
============================ */
export const metadata = {
  title: "International Presence & Strategy | Julio Herrera Velutni",
  description:
    "Discover how Julio Herrera Velutni built international presence through cross-border strategy, global investment, and jurisdictional diversification.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "International Presence & Strategy",
    description:
      "An in-depth look at Julio Herrera Velutni’s international presence and strategic approach to global finance.",
    url: PAGE_URL,
    siteName: "JMHV",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/jmhv-image-bg-black.webp`,
        width: 1200,
        height: 630,
        alt: "International Presence and Strategy of Julio Herrera Velutni",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "International Presence & Strategy",
    description:
      "How Julio Herrera Velutni navigates global finance through cross-border strategy and regulatory expertise.",
    images: [`${SITE_URL}/images/jmhv-image-bg-black.webp`],
  },
};

export default function InternationalPresence() {
  /* ============================
     JSON-LD
  ============================ */

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${PAGE_URL}#blogpost`,
    headline: "International Presence & Strategy",
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
        url: `${SITE_URL}/images/jmhv-logo-image.webp`,
      },
    },
    about: {
      "@type": "Person",
      name: "Julio Herrera Velutni",
      description:
        "Julio Herrera Velutni is an international financial strategist known for cross-border investment planning, jurisdictional diversification, and regulatory alignment.",
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
        name: "International Presence & Strategy",
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
          <h2>International Presence & Strategy</h2>
          <p>
            This article examines the international presence and strategic
            approach of Julio Herrera Velutni, emphasizing cross-border finance,
            regulatory compliance, and global investment diversification.
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
              src="/images/jmhv-logo-image.webp"
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
                International Presence & Strategy
                  </h1>

                  <div className="mt-8 space-y-6 max-w-xl">
                    <p className="text-xs leading-relaxed font-libre-baskerville">
                    Julio Herrera Velutini works in a lot of different countries, which means he knows a lot about how global financial systems work. His method is based on cross-border investment strategy, jurisdictional diversity, and following the rules of global finance.
                    </p>
                    
                  </div>

              <Link
                href="/vision-philosophy-future-outlook"
                className="mt-0 flex flex-col items-end gap-4 group"
                title='vision philosophy future outlook page'
              >
                {/* Arrow */}
                <div className="w-80 flex justify-end">
                <svg
                  className="h-6 transition-transform duration-300 group-hover:translate-x-2"
                  viewBox="0 0 160 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
                  <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

                {/* Text */}
                <span className="block w-100 text-right text-sm tracking-widest uppercase font-libre-baskerville">
                Vision, Philosophy & Future Outlook 
                </span>

                {/* Underline */}
                <span className="block h-px w-100 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
              </Link>

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
                    International Presence & Strategy
                  </p>

                  <div className="mt-0 space-y-2 text-left px-4">
                    <p className="text-xs leading-relaxed font-libre-baskerville">
                  Julio Herrera Velutini works in a lot of different countries, which means he knows a lot about how global financial systems work. His method is based on cross-border investment strategy, jurisdictional diversity, and following the rules of global finance.
                    </p>
                  
                  </div>

                <Link
                href="/vision-philosophy-future-outlook"
                className="mt-0 flex flex-col items-end gap-2 group"
                title='vision philosophy future outlook page'
              >
                {/* Arrow */}
                <div className="w-80 flex justify-end">
                <svg
                  className="h-6 transition-transform duration-300 group-hover:translate-x-2"
                  viewBox="0 0 160 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
                  <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

                {/* Text */}
                <span className="block w-80 text-right text-xs tracking-widest uppercase font-libre-baskerville">
                  Vision, Philosophy & Future Outlook 
                </span>

                {/* Underline */}
                <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
   

  );
}



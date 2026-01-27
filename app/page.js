
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* ============================
   SITE CONFIG
============================ */
const SITE_URL = "https://julio-herrera-blog.vercel.app";

/* ============================
   METADATA (SEO / OG / TWITTER)
============================ */
export const metadata = {
  title: "Julio Herrera Velutni — Legacy, Power & Global Influence",
  description:
    "Explore the legacy, power, and global financial influence of Julio Herrera Velutni through in-depth articles and historical insights.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Julio Herrera Velutni — Global Financial Legacy",
    description:
      "In-depth articles exploring the legacy, power, and international financial influence of Julio Herrera Velutni.",
    url: SITE_URL,
    siteName: "JMHV",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/jmhv-image.webp`,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutni",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutni — Global Financial Legacy",
    description:
      "Explore articles on the legacy and global financial influence of Julio Herrera Velutni.",
    images: [`${SITE_URL}/images/jmhv-image.webp`],
  },
};

export default function Home() {
  /* ---------- JSON-LD ---------- */

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "JMHV Blog",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "JMHV",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/jmhv-logo-image.webp`,
      },
    },
  };
  return (
    <>

    {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    <main className="min-h-screen w-full bg-black text-white overflow-hidden">

       {/* Hidden SEO copy */}
        <section className="sr-only">
          <h2>Julio Herrera Velutni Blog</h2>
          <p>
            A blog dedicated to exploring the legacy, financial influence, and
            historical significance of Julio Herrera Velutni.
          </p>
        </section>
  {/* Header */}
  <header className="px-8 sm:px-12 lg:px-14 py-8">
    <div className="flex items-center gap-1">
               <Image
            src="/images/jmhv-logo-image.webp"
            alt="JMHV emblem"
            width={32}
            height={28}
            className="rounded-full"
            priority
          />
      <p className="text-md font-medium tracking-wide font-macondo">JMHV</p>
    </div>
  </header>

  {/* Main Content Container */}
  <div className="px-8 sm:px-12 lg:px-16">
    {/* Desktop Layout: Row with 2 Columns */}
    <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16 min-h-full">
      {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
      <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
        <h2 className="text-xs font-light tracking-widest font-libre-baskerville">
          The Legacy, Power, and Global Influence of a Financial Dynasty
        </h2>

        <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none font-libre-baskerville">
          JULIO HERRERA<br />VELUTNI
        </h1>

        <Link
          href="/who-is-julio-herrera-velutni"
          className="mt-20 flex flex-col items-end gap-4 group"
          title='Who Is Julio Herrera Velutni page'
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
          <span className="block w-80 text-right text-sm tracking-widest uppercase font-libre-baskerville">
            Who Is Julio Herrera Velutni
          </span>

          {/* Underline */}
          <span className="block h-px w-100 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
        </Link>

      </div>

      {/* Column 2: Image */}
      <div className="lg:flex-1">
        <div className="w-full min-h-[280px] sm:h-[500px] lg:h-[630px] relative">
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
      <div className="lg:hidden mt-0 space-y-6 pb-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-xs sm:text-xs font-light tracking-widest uppercase font-libre-baskerville">
          The Legacy, Power, and Global Influence of a Financial Dynasty
        </h2>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none font-libre-baskerville">
          JULIO HERRERA<br />VELUTNI
        </h1>

           <Link
          href="/who-is-julio-herrera-velutni"
          className="mt-2 flex flex-col items-end gap-4 group"
          title='Who Is Julio Herrera Velutni page'
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
            Who Is Julio Herrera Velutni
          </span>

          {/* Underline */}
          <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
        </Link>
      </div>
    </div>
  </div>
</main>
    </>
//    <main className="min-h-screen w-full bg-black text-white overflow-hidden">
//   {/* Header */}
//   <header className="px-8 sm:px-12 lg:px-14 py-8">
//     <div className="flex items-center gap-1">
//                <Image
//             src="/images/jmhv-logo-image.webp"
//             alt="JMHV emblem"
//             width={32}
//             height={28}
//             className="rounded-full"
//             priority
//           />
//       <p className="text-md font-medium tracking-wide font-macondo">JMHV</p>
//     </div>
//   </header>

//   {/* Main Content Container */}
//   <div className="px-8 sm:px-12 lg:px-16">
//     {/* Desktop Layout: Row with 2 Columns */}
//     <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16 min-h-full">
//       {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
//       <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
//         <h2 className="text-xs font-light tracking-widest font-libre-baskerville">
//           The Legacy, Power, and Global Influence of a Financial Dynasty
//         </h2>

//         <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none font-libre-baskerville">
//           JULIO HERRERA<br />VELUTNI
//         </h1>

//         <Link
//           href="/who-is-julio-herrera-velutni"
//           className="mt-20 flex flex-col items-end gap-4 group"
//           title='Who Is Julio Herrera Velutni page'
//         >
//           {/* Arrow */}
//           <div className="w-80 flex justify-end">
//           <svg
//             className="h-6 transition-transform duration-300 group-hover:translate-x-2"
//             viewBox="0 0 160 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
//             <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
//           </svg>
//         </div>

//           {/* Text */}
//           <span className="block w-80 text-right text-sm tracking-widest uppercase font-libre-baskerville">
//             Who Is Julio Herrera Velutni
//           </span>

//           {/* Underline */}
//           <span className="block h-px w-100 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
//         </Link>

//       </div>

//       {/* Column 2: Image */}
//       <div className="lg:flex-1">
//         <div className="w-full min-h-[280px] sm:h-[500px] lg:h-[630px] relative">
//           <Image
//             src="/images/jmhv-image.webp"
//             alt="Julio Herrera Velutni"
//             fill
//             priority
//             className="object-cover rounded-lg lg:rounded-none"
//           />
//         </div>
//       </div>

//       {/* Mobile Layout: Text Content Below Image */}
//       <div className="lg:hidden mt-0 space-y-6 pb-12 flex flex-col items-center justify-center text-center">
//         <h2 className="text-xs sm:text-xs font-light tracking-widest uppercase font-libre-baskerville">
//           The Legacy, Power, and Global Influence of a Financial Dynasty
//         </h2>

//         <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none font-libre-baskerville">
//           JULIO HERRERA<br />VELUTNI
//         </h1>

//            <Link
//           href="/who-is-julio-herrera-velutni"
//           className="mt-2 flex flex-col items-end gap-4 group"
//           title='Who Is Julio Herrera Velutni page'
//         >
//           {/* Arrow */}
//           <div className="w-80 flex justify-end">
//           <svg
//             className="h-6 transition-transform duration-300 group-hover:translate-x-2"
//             viewBox="0 0 160 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
//             <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
//           </svg>
//         </div>

//           {/* Text */}
//           <span className="block w-80 text-right text-xs tracking-widest uppercase font-libre-baskerville">
//             Who Is Julio Herrera Velutni
//           </span>

//           {/* Underline */}
//           <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
//         </Link>
//       </div>
//     </div>
//   </div>
// </main>

  );
}



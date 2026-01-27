// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <main className="min-h-screen w-full bg-black text-white overflow-hidden">
      
//       {/* Header */}
//       <header className="px-8 sm:px-12 lg:px-14 py-8">
//         <div className="flex items-center gap-1">
//           <Image
//             src="/images/ChatGPT Image Jan 23, 2026, 03_32_34 PM.png"
//             alt="JMHV emblem"
//             width={32}
//             height={28}
//             className="rounded-full"
//             priority
//           />
//           <p className="text-md font-medium tracking-wide font-macondo">
//             JMHV
//           </p>
//         </div>
//       </header>

//       {/* Main Content Container */}
//       <section className="px-8 sm:px-12 lg:px-16">
//         <div className="lg:flex lg:flex-row lg:items-start lg:gap-12 xl:gap-16">

//           {/* Desktop Layout */}
//           <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
            
//             {/* <h2 className="text-xs font-light tracking-widest font-libre-baskerville uppercase">
//               About Me
//             </h2> */}

//             <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none font-libre-baskerville">
//               Creative<br />Photography
//             </h1>

//             <div className="mt-8 space-y-6 max-w-xl">
//               <p className="text-base leading-relaxed font-libre-baskerville">
//                 Julio Herrera Velutini is an Italian– banker, entrepreneur, and global financial leader. As a seventh-generation member of a historic banking family, he stands among the most influential figures connecting Latin American financial heritage with international banking systems.
//               </p>
              
//               <p className="text-base leading-relaxed font-libre-baskerville">
//                 With decades of experience in capital markets, private banking, and institutional finance, his work spans continents and economic systems.
//               </p>
//             </div>

//             {/* Arrow Link */}
//             <div className="mt-0 pt-3">
//               <Link
//                 href="/"
//                 className="flex flex-col items-end gap-4 group"
//               >
//                 <div className="w-80 flex justify-end">
//                   <svg
//                     className="h-6 transition-transform duration-300 group-hover:translate-x-2"
//                     viewBox="0 0 160 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
//                     <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
//                   </svg>
//                 </div>

//                 <span className="block w-80 text-right text-sm tracking-widest uppercase font-libre-baskerville">
//                   Back to Home
//                 </span>

//                 <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96" />
//               </Link>
//             </div>
//           </div>

//           {/* Image Column */}
//           <div className="lg:flex-1">
//             <div className="w-full min-h-[280px] sm:h-[500px] lg:h-[630px] relative">
//               <Image
//                 src="/images/julio-image15 (1) (1).png"
//                 alt="Julio Herrera Velutini"
//                 fill
//                 className="object-cover rounded-lg lg:rounded-none"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Mobile Layout */}
//           <div className="lg:hidden mt-0 space-y-3 pb-12 flex flex-col items-center justify-center text-center">
            
//             {/* <h2 className="text-xs font-light tracking-widest uppercase font-libre-baskerville">
//               About Me
//             </h2> */}

//             <p className="text-3xl sm:text-4xl font-black tracking-tight leading-none font-libre-baskerville">
//               CREATIVE<br />PHOTOGRAPHY
//             </p>

//             <div className="mt-2 space-y-4 text-left px-4">
//               <p className="text-xs sm:text-base leading-relaxed font-libre-baskerville">
//                 Julio Herrera Velutini is an Italian– banker, entrepreneur, and global financial leader. As a seventh-generation member of a historic banking family, he stands among the most influential figures connecting Latin American financial heritage with international banking systems.
//               </p>
              
//               <p className="text-xs sm:text-base leading-relaxed font-libre-baskerville">
//                 With decades of experience in capital markets, private banking, and institutional finance, his work spans continents and economic systems.
//               </p>
//             </div>

//             {/* Arrow Link */}
//                   <Link
//               href="/"
//               className="mt-0 flex flex-col items-end gap-4 group" title='home page'
//             >
//               <div className="w-80 flex justify-end">
//                 <svg
//                   className="h-6 transition-transform duration-300 group-hover:translate-x-2"
//                   viewBox="0 0 160 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line x1="0" y1="12" x2="140" y2="12" stroke="white" strokeWidth="1.5" />
//                   <polyline points="130,6 140,12 130,18" fill="none" stroke="white" strokeWidth="1.5" />
//                 </svg>
//               </div>

//               <span className="block w-80 text-right text-xs tracking-widest uppercase font-libre-baskerville">
//                  Back to Home
//               </span>

//               <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96" />
//             </Link>



//           </div>
           


//         </div>
//       </section>
//     </main>
//   );
// }




import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SITE_URL = "https://www.hvelutini.com";
const PAGE_URL = `${SITE_URL}/who-is-julio-herrera-velutni`;

/* ============================
   METADATA
============================ */
export const metadata = {
  title: "Who Is Julio Herrera Velutni? | Biography & Financial Legacy",
  description:
    "Learn who Julio Herrera Velutni is — an Italian banker and seventh-generation financial leader with global influence.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Who Is Julio Herrera Velutni?",
    description:
      "A detailed biography exploring the financial legacy and global influence of Julio Herrera Velutni.",
    url: PAGE_URL,
    type: "article",
    siteName: "JMHV",
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
    title: "Who Is Julio Herrera Velutni?",
    description:
      "Biography and financial legacy of Julio Herrera Velutni.",
    images: [`${SITE_URL}/images/jmhv-image.webp`],
  },
};


export default function About() {

   /* ---------- JSON-LD ---------- */

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${PAGE_URL}#blogpost`,
    headline: "Who Is Julio Herrera Velutni",
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
        "Julio Herrera Velutni is an Italian banker and seventh-generation financial leader with global influence.",
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
        item: SITE_URL 
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Who Is Julio Herrera Velutni",
        item: PAGE_URL,
      },
    ],
  };
  return (
    <>
    {/* JSON-LD */}
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
          <h2>Who Is Julio Herrera Velutni?</h2>
          <p>
            Julio Herrera Velutni is an Italian banker and seventh-generation financial
            leader with global influence across private banking, institutional finance,
            and capital markets. This article explores his background, financial legacy,
            and international impact.
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
           Who Is Julio Herrera Velutni
            </h1>

            <div className="mt-8 space-y-6 max-w-xl">
              <p className="text-xs leading-relaxed font-libre-baskerville">
                Julio Herrera Velutini, an Italian banker, entrepreneur, and worldwide financial authority, belongs to one of the most famous banking families, making him one of the key people that connects Latin America’s past banking history to the worldwide banking system. A seventh-generation banker, Herrera Velutini has become one of the most influential figures.
              </p>
              
              <p className="text-xs leading-relaxed font-libre-baskerville">
                His body of work, which spans decades of capital markets, private banking, and institutional finance, extends across the globe and various economies.
              </p>
            </div>

        <Link
          href="/family-legacy-historical-roots"
          className="mt-0 flex flex-col items-end gap-4 group"
          title='Family Legacy & Historical Roots page'
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
           Family Legacy & Historical Roots
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
          <p className="text-xl sm:text-3xl font-black tracking-tight leading-none font-libre-baskerville">
              Who Is Julio Herrera Velutni
            </p>

            <div className="mt-0 space-y-2 text-left px-4">
              <p className="text-xs leading-relaxed font-libre-baskerville">
               Julio Herrera Velutini, an Italian banker, entrepreneur, and worldwide financial authority, belongs to one of the most famous banking families, making him one of the key people that connects Latin America’s past banking history to the worldwide banking system. A seventh-generation banker, Herrera Velutini has become one of the most influential figures.
              </p>
              
              <p className="text-xs leading-relaxed font-libre-baskerville">
                His body of work, which spans decades of capital markets, private banking, and institutional finance, extends across the globe and various economies.
              </p>
            </div>

           <Link
          href="/family-legacy-historical-roots"
          className="mt-0 flex flex-col items-end gap-2 group"
           title='Family Legacy & Historical Roots page'
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
             Family Legacy & Historical Roots 
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



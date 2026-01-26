
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function GlobalBanking() {
  return (
   <main className="min-h-screen w-full bg-black text-white overflow-hidden">
  {/* Header */}
 <header className="px-8 sm:px-12 lg:px-14 py-8">
  <div>
    <Link
      href="/"
      title="Home page"
      className="flex items-center gap-1"
    >
      <Image
        src="/images/ChatGPT Image Jan 23, 2026, 03_32_34 PM.png"
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
           Global Banking & Financial Influence
            </h1>

            <div className="mt-8 space-y-6 max-w-xl">
              <p className="text-xs leading-relaxed font-libre-baskerville">
                Julio Herrera Velutini is best known as an architect of innovative private banking businesses. Julio, being at the helm of international finance organizations, contributed significantly towards the development of wealth management, investment structuring, and international banking solutions across countries like Europe, United States, United Kingdom, UAEL, Latin America, etc.
              </p>
              
            </div>

        <a
          href="/"
          className="mt-0 flex flex-col items-end gap-4 group"
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
           Back to home
          </span>

          {/* Underline */}
          <span className="block h-px w-100 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
        </a>

      </div>

      {/* Column 2: Image */}
      <div className="lg:flex-1">
        <div className="w-full min-h-[240px] sm:h-[500px] lg:h-[630px] relative">
          <Image
            src="/images/julio-image15 (1) (1).png"
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
              Global Banking & Financial Influence
            </p>

            <div className="mt-0 space-y-2 text-left px-4">
              <p className="text-xs leading-relaxed font-libre-baskerville">
               Julio Herrera Velutini is best known as an architect of innovative private banking businesses. Julio, being at the helm of international finance organizations, contributed significantly towards the development of wealth management, investment structuring, and international banking solutions across countries like Europe, United States, United Kingdom, UAEL, Latin America, etc.
              </p>
             
            </div>

           <Link
          href="/"
          className="mt-0 flex flex-col items-end gap-2 group"
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
           Back to home
          </span>

          {/* Underline */}
          <span className="block h-px w-80 bg-white opacity-80 transition-all duration-300 group-hover:w-96"></span>
        </Link>
      </div>
    </div>
  </div>
</main>

  );
}



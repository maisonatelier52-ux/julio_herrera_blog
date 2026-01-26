
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function InternationalPresence() {
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

  );
}



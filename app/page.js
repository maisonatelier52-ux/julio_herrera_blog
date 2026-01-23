

// import React from 'react';

// export default function Home() {
//   return (
//     <main className="h-screen w-full bg-black text-white overflow-hidden">
//       {/* Header */}
//       <header className="px-8 sm:px-12 lg:px-14 py-8">
//         <div className="flex items-center gap-1">
//           <img src={'/images/ChatGPT Image Jan 23, 2026, 03_32_34 PM.png'} alt="Icon" className="w-8 h-7 rounded-full" />
//           {/* <div className="w-3 h-3 bg-yellow-400 rounded-full" /> */}
//           <p className="text-md font-medium tracking-wide font-macondo">JMHV</p>
//         </div>
//       </header>

//       {/* Main Content Container */}
//       <div className="px-8 sm:px-12 lg:px-16">
//         {/* Desktop Layout: Row with 2 Columns */}
//         <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          
//           {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
//           <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
//             <h2 className="text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>

//             <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none">
//               JULIO HERRERA<br />VELUTNI
//             </h1>

//             <a href="/about" title="about page" className='mt-20'>
//               <button className="group flex items-center gap-4 px-8 py-4 border-2 border-white rounded-full cursor-pointer transition-all duration-300">
//                 <span className="text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </a>
//           </div>

//           {/* Column 2: Image */}
//           <div className="lg:flex-1">
//             <div className="w-full h-[300px] sm:h-[500px] lg:h-[500px]">
//               <img
//                 src="/images/julio-image15 (1) (1).png"
//                 alt="Julio Herrera Velutni"
//                 className="w-full h-full object-cover rounded-lg lg:rounded-none"
                
//               />
//             </div>
//           </div>

//           {/* Mobile Layout: Text Content Below Image */}
//           <div className="lg:hidden mt-8 space-y-6 pb-12 flex flex-col items-center justify-center text-center">
//             <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>

//             <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
//               JULIO HERRERA<br />VELUTNI
//             </h1>

//             <a href="/about" title="about page">
//               <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                 <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </a>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }




import React from 'react';

export default function Home() {
  return (
   <main className="min-h-screen w-full bg-black text-white overflow-hidden">
  {/* Header */}
  <header className="px-8 sm:px-12 lg:px-14 py-8">
    <div className="flex items-center gap-1">
      <img src={'/images/ChatGPT Image Jan 23, 2026, 03_32_34 PM.png'} alt="Icon" className="w-8 h-7 rounded-full" />
      <p className="text-md font-medium tracking-wide font-macondo">JMHV</p>
    </div>
  </header>

  {/* Main Content Container */}
  <div className="px-8 sm:px-12 lg:px-16">
    {/* Desktop Layout: Row with 2 Columns */}
    <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16 min-h-full">
      {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
      <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
        <h2 className="text-xl font-light tracking-widest uppercase">
          Prince Of Latam
        </h2>

        <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none">
          JULIO HERRERA<br />VELUTNI
        </h1>

        <a href="/about" title="about page" className='mt-20'>
          <button className="group flex items-center gap-4 px-8 py-4 border-2 border-white rounded-full cursor-pointer transition-all duration-300">
            <span className="text-xl font-medium">Start Slide Now</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </a>
      </div>

      {/* Column 2: Image */}
      <div className="lg:flex-1">
        <div className="w-full min-h-[330px] sm:h-[500px] lg:h-[500px]">
          <img
            src="/images/julio-image15 (1) (1).png"
            alt="Julio Herrera Velutni"
            className="w-full h-full object-cover rounded-lg lg:rounded-none"
          />
        </div>
      </div>

      {/* Mobile Layout: Text Content Below Image */}
      <div className="lg:hidden mt-8 space-y-6 pb-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
          Prince Of Latam
        </h2>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
          JULIO HERRERA<br />VELUTNI
        </h1>

        <a href="/about" title="about page">
          <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
            <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </a>
      </div>
    </div>
  </div>
</main>

  );
}

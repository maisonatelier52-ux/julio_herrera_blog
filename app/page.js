// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row h-full">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 flex flex-col justify-between px-8 sm:p-12 lg:p-16">
//           {/* Top Section */}
//           <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10">
//             <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//             <p className="text-sm font-medium tracking-wide">By : Harper Russo</p>
//           </div>

//           {/* Middle Section - Main Title */}
//           <div className="space-y-6 sm:space-y-8">
//             <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>
            
//             <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-8xl font-black tracking-tight leading-none">
//               JULIO HERRERA VELUTNI
//             </h1>

//             {/* CTA Button */}
//             <Link href={'/about'} title="about page">
//             <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//               <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//               <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//             </button>
//             </Link>
//           </div>

//           {/* Bottom spacer */}
//           <div />
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 relative">
//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Replace with your actual image */}
//             <div className="w-full h-full overflow-hidden">
//               <img
//                 src="/images/julio-image13.png"
//                 alt="Portfolio"
//                 className="w-full h-full object-cover sm:w-full sm:h-[120%] lg:w-full lg:h-full md:h-[100vh] md:w-full"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row h-full">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 flex flex-col justify-between px-8 sm:p-12 lg:p-16">
//           {/* Top Section */}
//           <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10 absolute top-0 left-0 w-full ml-15">
//              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//             <p className="text-sm font-medium tracking-wide">JHV</p>
//           </div>

//           {/* Middle Section - Main Title */}
//           <div className="space-y-6 sm:space-y-8 mt-16 sm:mt-20">
//             <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>

//             <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-8xl font-black tracking-tight leading-none">
//               JULIO HERRERA VELUTNI
//             </h1>

//             {/* CTA Button */}
//             <Link href={'/about'} title="about page">
//               <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                 <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </Link>
//           </div>

//           {/* Bottom spacer */}
//           <div />
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 relative">
//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Replace with your actual image */}
//             <div className="w-full h-full overflow-hidden">
//               <img
//                 src="/images/julio-image13.png"
//                 alt="Portfolio"
//                 className="w-full h-full object-cover sm:w-full sm:h-[120%] lg:w-full lg:h-full md:h-[100vh] md:w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import React from 'react';

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="px-8 sm:px-12 lg:px-16 py-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <p className="text-sm font-medium tracking-wide">JHV</p>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="px-8 sm:px-12 lg:px-16">
        {/* Desktop Layout: Row with 2 Columns */}
        <div className="lg:flex lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          
          {/* Column 1: Text Content (Hidden on Mobile, Shown on Desktop) */}
          <div className="hidden lg:flex lg:flex-col lg:flex-1 lg:space-y-8">
            <h2 className="text-xl font-light tracking-widest uppercase">
              Prince Of Latam
            </h2>

            <h1 className="text-6xl xl:text-8xl font-black tracking-tight leading-none">
              JULIO HERRERA<br />VELUTNI
            </h1>

            <a href="/about" title="about page">
              <button className="group flex items-center gap-4 px-8 py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
                <span className="text-xl font-medium">Start Slide Now</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </a>
          </div>

          {/* Column 2: Image */}
          <div className="lg:flex-1">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[500px]">
              <img
                src="/images/julio-image14.webp"
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


// import React from 'react';

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full bg-black text-white overflow-hidden">
//       {/* Header */}
//       <header className="px-8 sm:px-12 lg:px-16 py-8">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//           <p className="text-sm font-medium tracking-wide">JHV</p>
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

//             <a href="/about" title="about page">
//               <button className="group flex items-center gap-4 px-8 py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                 <span className="text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </a>
//           </div>

//           {/* Column 2: Image */}
       
//           <div className="lg:flex-1">
//             <div className="w-full h-[400px] sm:h-[500px] lg:h-auto">
//               <img
//                 src="/images/julio-image13.png"
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

// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row h-full">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 flex flex-col justify-between px-8 sm:p-12 lg:p-16">
//           {/* Top Section */}
//           <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10 absolute top-0 left-0 w-full ml-15">
//             <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//             <p className="text-sm font-medium tracking-wide">JHV</p>
//           </div>

//           {/* Middle Section - Main Title */}
//           <div className="space-y-6 sm:space-y-8 mt-40 sm:mt-20">
//             <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>

//             <h1 className="text-7xl sm:text-6xl lg:text-8xl xl:text-8xl font-black tracking-tight leading-none">
//               JULIO HERRERA VELUTNI
//             </h1>

//             {/* CTA Button for larger devices (laptops, desktops) */}
//             <Link href={'/about'} title="about page" className="hidden lg:block">
//               <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                 <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </Link>
//           </div>

//           {/* Bottom spacer */}
//           <div />
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 relative">
//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Replace with your actual image */}
//             <div className="w-full h-full overflow-hidden">
//               <img
//                 src="/images/julio-image13.png"
//                 alt="Portfolio"
//                 className="w-full h-full object-cover sm:w-full sm:h-[120%] lg:w-full lg:h-full md:h-[100vh] md:w-full"
//               />
//             </div>

//             {/* CTA Button for Mobile */}
//             <div className="absolute bottom-30 left-4 sm:left-8 lg:hidden">
//               <Link href={'/about'} title="about page">
//                 <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                   <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                   <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row h-full">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 flex flex-col justify-between px-8 sm:p-12 lg:p-16">
//           {/* Top Section */}
//           <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10 absolute top-0 left-0 w-full ml-15">
//             <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//             <p className="text-sm font-medium tracking-wide">JHV</p>
//           </div>

//           {/* Middle Section - Main Title */}
//           <div className="space-y-6 sm:space-y-8 mt-70 sm:mt-20">
//             <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//               Prince Of Latam
//             </h2>

//             <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-8xl font-black tracking-tight leading-none">
//               JULIO HERRERA VELUTNI
//             </h1>

//             {/* CTA Button for larger devices (laptops, desktops) */}
//             <Link href={'/about'} title="about page" className="sm:hidden">
//               <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300 lg:block sm:hidden">
//                 <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                 <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//               </button>
//             </Link>
//           </div>

//           {/* Bottom spacer */}
//           <div />
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 relative">
//           <div className="relative h-full w-full flex items-center justify-center">
//             {/* Replace with your actual image */}
//             <div className="w-full h-full overflow-hidden">
//               <img
//                 src="/images/julio-image13.png"
//                 alt="Portfolio"
//                 className="w-full h-full object-cover sm:w-full sm:h-[120%] lg:w-full lg:h-full md:h-[100vh] md:w-full"
//               />
//             </div>

//             {/* CTA Button for Mobile */}
//             <div className="absolute bottom-20 left-4 sm:left-8 sm:hidden lg:hidden">
//               <Link href={'/about'} title="about page">
//                 <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//                   <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//                   <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
//       {/* Background Image - Right Side */}
//       <div
//         className="absolute inset-0 bg-no-repeat bg-contain opacity-90"
//         style={{
//           backgroundImage: "url('/images/julio-image13.png')",
//           backgroundPosition: "calc(100% - 60px) center",
//         }}
//       />

//       {/* Gradient Overlay for better text readability */}
      

//       {/* Content */}
//       <section className="relative z-10 flex h-full flex-col justify-between px-8 sm:px-12 lg:px-16 pb-20 sm:pb-24">
//         {/* Top - Author Badge */}
//         <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10">
//           <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//           <p className="text-sm font-medium tracking-wide">By : Harper Russo</p>
//         </div>

//         {/* Middle Section - Main Title */}
//         <div className="space-y-6 sm:space-y-8 max-w-3xl">
//           <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
//             Creative Photography
//           </h2>
          
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none uppercase">
//             PORTFOLIO
//           </h1>

//           {/* CTA Button */}
//           <Link href={'/about'} title="about page">
//             <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
//               <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
//               <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//             </button>
//           </Link>
//         </div>

//         {/* Bottom spacer */}
//         <div />
//       </section>

     
//     </main>
//   );
// }

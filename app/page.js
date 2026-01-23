
export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col justify-between px-8 sm:p-12 lg:p-16">
          {/* Top Section */}
          <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10">
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <p className="text-sm font-medium tracking-wide">By : Harper Russo</p>
          </div>

          {/* Middle Section - Main Title */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
              Creative Photography
            </h2>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
              PORTFOLIO
            </h1>

            {/* CTA Button */}
            <button className="group flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300">
              <span className="text-lg sm:text-xl font-medium">Start Slide Now</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Bottom spacer */}
          <div />
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative">
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Replace with your actual image */}
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/julio-image13.png"
                alt="Portfolio"
                className="w-full h-full object-cover sm:w-full sm:h-[120%] lg:w-full lg:h-full md:h-[100vh] md:w-full"
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

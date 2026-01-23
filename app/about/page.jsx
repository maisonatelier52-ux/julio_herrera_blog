export default function About() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background Image - Right Side */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain opacity-90"
        style={{
          backgroundImage: "url('/images/julio-image13.png')",
          backgroundPosition: "calc(100% - 60px) center",
        }}
      />

      {/* Gradient Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}

      {/* Content */}
      <section className="relative z-10 flex h-full flex-col justify-between px-8 sm:px-12 lg:px-16 pb-20 sm:pb-24">
        {/* Top - Author Badge */}
        <div className="flex items-center gap-3 pt-8 md:pt-0 mt-10">
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <p className="text-sm font-medium tracking-wide">By : Harper Russo</p>
        </div>

        {/* Large Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none uppercase max-w-3xl">
          Creative<br />Photography
        </h1>

        {/* Bottom Left Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-lg sm:text-xl font-light tracking-widest uppercase">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Photography is more than capturing moments—it's about telling stories that resonate. 
            With a passion for creative expression and an eye for detail, I blend artistic vision 
            with technical expertise to create compelling visual narratives. My work spans portrait, 
            landscape, and conceptual photography, each piece crafted to evoke emotion and inspire wonder.
          </p>
        </div>
      </section>

      {/* Bottom Decorative Line with Circle */}
        <footer className="absolute bottom-0 left-0 w-full px-8 sm:px-12 lg:px-16 pb-12 sm:pb-16">
        <div className="flex items-center gap-4">
          {/* Circle */}
          <span className="w-2 h-2 border-2 border-white rounded-full flex-shrink-0"></span>
          {/* Line */}
          <div className="h-px flex-1 max-w-3xl bg-white opacity-80"></div>
          {/* Initials */}
          <span className="text-sm font-bold tracking-widest flex-shrink-0">HR</span>
        </div>
      </footer>
    </main>
  );
}
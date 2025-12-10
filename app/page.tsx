export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Navigation */}
      <header className="fixed top-0 right-0 z-50 flex items-center gap-4 p-6">
        {/* Navigation Links */}
        <nav className="bg-white rounded-full px-6 py-3 flex items-center gap-6 border border-black">
          <a href="#about" className="text-black font-medium hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#cases" className="text-black font-medium hover:opacity-70 transition-opacity">
            Cases
          </a>
          <a href="#services" className="text-black font-medium hover:opacity-70 transition-opacity">
            Services
          </a>
        </nav>
        
        {/* Contact Button */}
        <button className="bg-[#BAF038] text-black font-medium px-8 py-3 rounded-full hover:bg-[#a8d832] transition-colors">
          Contact
        </button>
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen flex items-start">
        {/* Left Side - Branding */}
        <div className="flex-1 p-16 pt-32 flex flex-col justify-between min-h-screen">
          {/* Main Logo/Branding */}
          <div className="mt-16">
            <h1 className="text-[180px] font-bold text-black leading-none tracking-tight">
              nuba
            </h1>
            <h2 className="text-[180px] font-bold text-black leading-none tracking-tight">
              studio
            </h2>
          </div>

          {/* Tagline */}
          <div className="mt-auto pb-16 max-w-2xl">
            <p className="text-base text-black leading-relaxed">
              WE CREATE WEBSITES AND BRANDS PEOPLE REMEMBER. NOT JUST SCROLL PAST.
            </p>
          </div>
        </div>

        {/* Right Side - Collage Area (placeholder for now) */}
        <div className="flex-1 relative min-h-screen">
          {/* This area will contain the collage images */}
        </div>
      </main>
    </div>
  );
}

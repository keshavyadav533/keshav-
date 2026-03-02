export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0614] via-[#120a22] to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Hi, I’m <span className="text-purple-400">Keshav</span>.
            <br />
            Full-Stack Web
            <br />
            Developer
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            I build modern, secure, and scalable web applications with clean UI,
            smooth animations, and real-world performance in mind.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition text-white font-medium"
            >
              Let’s Talk
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            
            {/* glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-40"></div>

            <img
              src="/profile.png"
              alt="Keshav Yadav"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border border-white/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

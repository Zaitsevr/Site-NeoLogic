export default function NeoLogicLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_35%)]" />

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Neo<span className="text-violet-400">Logic</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6">
            Full Stack Development & ERP Solutions
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Building modern systems for businesses.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
            NeoLogic develops scalable web applications, ERP systems, APIs and management solutions using modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all font-semibold shadow-lg shadow-violet-600/30">
              Start a Project
            </button>

            <button className="px-7 py-3 rounded-2xl border border-white/10 hover:border-violet-500 transition-all text-zinc-300 hover:text-white">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-zinc-400 text-sm">Current Project</p>
                <h3 className="text-2xl font-bold mt-1">NeoLogic ERP</h3>
              </div>

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm mb-1">Backend Stack</p>
                <p className="font-medium">Node.js • Express • Prisma • PostgreSQL</p>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm mb-1">Modules</p>
                <p className="font-medium">Sales • Finance • Inventory • Fiscal</p>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-2xl p-4">
                <p className="text-zinc-400 text-sm mb-1">Status</p>
                <p className="font-medium text-violet-300">In Active Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h3 className="text-4xl font-bold mb-4">Services</h3>
          <p className="text-zinc-400 max-w-2xl">
            Modern software solutions focused on performance, scalability and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Web Development',
            'ERP Systems',
            'REST APIs',
            'Business Automation'
          ].map((service) => (
            <div
              key={service}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-violet-500/50 transition-all"
            >
              <h4 className="text-xl font-semibold mb-3">{service}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Professional solutions using modern technologies and scalable architectures.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 NeoLogic. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row gap-4 text-sm text-zinc-400 text-center md:text-left">
            <a href="mailto:ryan.rdjesus@gmail.com" className="hover:text-white transition-colors">
              ryan.rdjesus@gmail.com
            </a>

            <span className="hidden md:block">•</span>

            <a href="https://wa.me/5554991192111" className="hover:text-white transition-colors">
              +55 54 99119-2111
            </a>

            <span className="hidden md:block">•</span>

            <a href="https://github.com/Zaitsevr" className="hover:text-white transition-colors">
              GitHub
            </a>

            <span className="hidden md:block">•</span>

            <a href="https://www.linkedin.com/in/ryan-ribeiro-b4b7721ba/" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

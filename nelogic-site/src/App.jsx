export default function NeoLogicLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_35%)]" />

      {/* Navbar */}
      <header className="relative z-10 border-b border-violet-500/20 backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-violet-300 to-violet-400 bg-clip-text text-transparent">
              Neo<span className="text-transparent bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text">Logic</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#services" className="relative group hover:text-white transition-colors">Serviços<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-full transition-all duration-300" /></a>
            <a href="#cases" className="relative group hover:text-white transition-colors">Cases<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-full transition-all duration-300" /></a>
            <a href="#founder" className="relative group hover:text-white transition-colors">Fundador<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-full transition-all duration-300" /></a>
            <a href="#contact-form" className="relative group hover:text-white transition-colors">Contato<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-full transition-all duration-300" /></a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6">
            Soluções Empresariais & Transformação Digital
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Software que impulsiona o crescimento do seu negócio.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
            Desenvolvemos aplicações web de alto desempenho, sistemas ERP robustos, integrações estratégicas e soluções personalizadas que transformam processos empresariais em vantagem competitiva.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5554991192111"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300 font-bold shadow-2xl shadow-violet-600/50 inline-flex items-center justify-center transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Iniciar Projeto →</span>
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-purple-600/30 blur-3xl rounded-full" />

          <div className="relative bg-gradient-to-br from-white/8 to-white/5 border border-violet-500/30 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl shadow-violet-600/20 hover:border-violet-400 hover:shadow-3xl hover:shadow-violet-600/30 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-zinc-400 text-sm font-semibold">🚀 Projeto Atual</p>
                <h3 className="text-3xl font-black mt-1 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">NeoLogic ERP</h3>
              </div>

              <div className="relative w-3 h-3">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-gradient-to-r from-violet-600/20 to-violet-600/10 border border-violet-500/20 rounded-2xl p-4 hover:border-violet-400/50 transition-all">
                <p className="text-violet-400 text-xs font-bold mb-1 uppercase tracking-wider">💻 Backend</p>
                <p className="font-semibold text-white">Node.js • Express • Prisma • PostgreSQL</p>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-500/20 rounded-2xl p-4 hover:border-blue-400/50 transition-all">
                <p className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wider">🧩 Módulos</p>
                <p className="font-semibold text-white">Vendas • Financeiro • Estoque • Fiscal</p>
              </div>

              <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-400/50 transition-all">
                <p className="text-emerald-400 text-xs font-bold mb-1 uppercase tracking-wider">⚡ Status</p>
                <p className="font-semibold text-emerald-300">Em desenvolvimento ativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h3 className="text-4xl font-bold mb-4">Serviços</h3>
          <p className="text-zinc-400 max-w-2xl">
            Oferecemos soluções completas e integradas, com foco em escalabilidade, segurança e retorno sobre investimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Development */}
          <div className="group relative bg-gradient-to-br from-violet-900/20 to-black border border-violet-500/30 rounded-3xl p-8 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-violet-600/30 to-violet-600/10 mb-4">
                <span className="text-4xl block">💻</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-white">Desenvolvimento Web</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Aplicações web de alto desempenho, responsivas e seguras. Landing pages estratégicas, dashboards empresariais e plataformas escaláveis desenvolvidas com as tecnologias mais modernas e melhores práticas de arquitetura.
              </p>
            </div>
          </div>

          {/* ERP Systems */}
          <div className="group relative bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-600/10 mb-4">
                <span className="text-4xl block">🧩</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-white">Sistemas ERP</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Plataformas ERP personalizadas que integram vendas, financeiro, estoque e processos operacionais. Automação inteligente, relatórios em tempo real e centralização de dados para máxima eficiência e controle empresarial.
              </p>
            </div>
          </div>

          {/* REST APIs */}
          <div className="group relative bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-600/10 mb-4">
                <span className="text-4xl block">🔗</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-white">APIs REST</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                APIs robustas, escaláveis e documentadas que facilitam integrações entre sistemas. Segurança em primeiro plano, performance otimizada e padrões RESTful para garantir máxima compatibilidade e manutenibilidade.
              </p>
            </div>
          </div>

          {/* Business Automation */}
          <div className="group relative bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/30 rounded-3xl p-8 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-emerald-600/30 to-emerald-600/10 mb-4">
                <span className="text-4xl block">⚙️</span>
              </div>
              <h5 className="text-xl font-bold mb-3 text-white">Automação de Negócios</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Automação inteligente de processos que reduz custos, elimina erros manuais e aumenta produtividade. Workflows personalizados, integrações entre sistemas e ferramentas que transformam operações manuais em processos otimizados e previsíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Journey */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h3 className="text-4xl font-bold mb-4">Sobre a NeoLogic</h3>
          <p className="text-zinc-400 max-w-3xl leading-relaxed">
            Somos um estúdio de desenvolvimento especializado em criar soluções tecnológicas que geram impacto real nos negócios. Com foco em qualidade, inovação e parceria, transformamos desafios empresariais em oportunidades de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative bg-gradient-to-br from-violet-900/25 to-black border border-violet-500/30 rounded-3xl p-6 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-600/30 border border-violet-500/50 mb-4">
                <span className="text-violet-300 text-xs font-bold">📅 2024</span>
              </div>
              <h4 className="text-2xl font-bold mt-2 mb-3 text-white">Fundação & Especialização</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Início do desenvolvimento de soluções tecnológicas em JavaScript, backend moderno e arquitetura web escalável. Estabelecimento de fundamentos sólidos em engenharia de software.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-900/25 to-black border border-blue-500/30 rounded-3xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/50 mb-4">
                <span className="text-blue-300 text-xs font-bold">📅 2025</span>
              </div>
              <h4 className="text-2xl font-bold mt-2 mb-3 text-white">Sistemas Empresariais</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Desenvolvimento de plataformas ERP complexas com Node.js, Express, Prisma e PostgreSQL. Experiência em gestão de dados, processamento escalável e integração de sistemas empresariais.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-emerald-900/25 to-black border border-emerald-500/30 rounded-3xl p-6 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-600/30 border border-emerald-500/50 mb-4">
                <span className="text-emerald-300 text-xs font-bold">⭐ Hoje</span>
              </div>
              <h4 className="text-2xl font-bold mt-2 mb-3 text-white">Visão para o Futuro</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Consolidação da NeoLogic como referência em desenvolvimento de soluções empresariais escaláveis, inovadoras e que realmente transformam negócios através da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h3 className="text-4xl font-bold mb-4">Cases de Sucesso</h3>
          <p className="text-zinc-400 max-w-2xl">
            Resultados reais de projetos que transformaram negócios e geraram impacto mensurável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Case 1 */}
          <div className="group relative bg-gradient-to-br from-violet-900/25 to-black border border-violet-500/30 rounded-3xl p-6 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-600/30 border border-violet-500/50 mb-4">
                <span className="text-violet-300 text-xs font-bold">E-commerce</span>
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">Plataforma de Vendas</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Desenvolvimento de e-commerce escalável que aumentou conversão em 340% e reduziu taxa de abandono de carrinho em 45%.
              </p>
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>📊 +340% conversão</span>
                <span>⚡ 2.8s load time</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="group relative bg-gradient-to-br from-blue-900/25 to-black border border-blue-500/30 rounded-3xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/50 mb-4">
                <span className="text-blue-300 text-xs font-bold">ERP</span>
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">Sistema de Gestão</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                ERP customizado que integrou 5 sistemas diferentes, reduzindo tempo de processamento em 65% e custos operacionais em 28%.
              </p>
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>⏱️ -65% processamento</span>
                <span>💰 -28% custos</span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="group relative bg-gradient-to-br from-emerald-900/25 to-black border border-emerald-500/30 rounded-3xl p-6 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-600/30 border border-emerald-500/50 mb-4">
                <span className="text-emerald-300 text-xs font-bold">Automação</span>
              </span>
              <h4 className="text-xl font-bold mb-3 text-white">Workflow Automático</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Automação de processos que eliminou 1200 horas/ano de trabalho manual e aumentou acurácia de dados em 99.8%.
              </p>
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>📈 1200h/ano economizadas</span>
                <span>✓ 99.8% acurácia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section id="testimonials" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h3 className="text-4xl font-bold mb-4">O que Nossos Clientes Dizem</h3>
          <p className="text-zinc-400 max-w-2xl">
            Experiências reais de empresas que transformaram seus negócios com nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="group relative bg-gradient-to-br from-white/8 to-white/5 border border-violet-500/30 rounded-3xl p-6 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                "A NeoLogic transformou completamente nossos processos de vendas. O sistema implementado é robusto, fácil de usar e o suporte foi excelente. Recomendo fortemente!"
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white text-sm">Carlos Mendes</p>
                <p className="text-zinc-500 text-xs">CEO, TechRetail Solutions</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group relative bg-gradient-to-br from-white/8 to-white/5 border border-blue-500/30 rounded-3xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                "Profissionais extremamente competentes e comprometidos. Entregaram o projeto no prazo e com qualidade excepcional. Parceria que recomendo para qualquer empresa."
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white text-sm">Fernanda Silva</p>
                <p className="text-zinc-500 text-xs">Gerente de Operações, Logística Plus</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group relative bg-gradient-to-br from-white/8 to-white/5 border border-emerald-500/30 rounded-3xl p-6 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                "O retorno sobre investimento foi imediato. Conseguimos automatizar processos que antes consumiam horas e horas. Excelente decisão contratar a NeoLogic."
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white text-sm">Roberto Alves</p>
                <p className="text-zinc-500 text-xs">Diretor Financeiro, Manufatura X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Fundador */}
      <section id="founder" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6">
                Conheça o Fundador
              </span>
              <h3 className="text-4xl font-bold mb-6">Ryan Ribeiro</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas que geram impacto real. Com mais de 2 anos de experiência em desenvolvimento de sistemas complexos, transformo desafios empresariais em oportunidades de inovação.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-violet-600/30 border border-violet-500/50">
                    <span className="text-lg">💻</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Especialista em Backend</h4>
                  <p className="text-zinc-400 text-sm">Node.js, Express, Prisma, PostgreSQL e arquiteturas escaláveis</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-600/30 border border-blue-500/50">
                    <span className="text-lg">🏢</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sistemas Empresariais</h4>
                  <p className="text-zinc-400 text-sm">Experiência em desenvolvimento de ERP, APIs e integrações complexas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-emerald-600/30 border border-emerald-500/50">
                    <span className="text-lg">⚡</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Foco em Performance</h4>
                  <p className="text-zinc-400 text-sm">Otimização de processos, segurança e escalabilidade</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-cyan-600/30 border border-cyan-500/50">
                    <span className="text-lg">🎓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Em Formação</h4>
                  <p className="text-zinc-400 text-sm">Estudante de Ciência da Computação, aprendizado contínuo</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/Zaitsevr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-zinc-400/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                🔗 GitHub
              </a>
              <a href="https://www.linkedin.com/in/ryan-ribeiro-b4b7721ba/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                💼 LinkedIn
              </a>
              <a href="mailto:ryan.rdjesus@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
                📧 Email
              </a>
            </div>
          </div>

          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-purple-600/30 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-white/8 to-white/5 border border-violet-500/30 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl shadow-violet-600/20">
              <div className="mb-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Ryan Ribeiro</h4>
                <p className="text-violet-300 text-sm font-semibold">Founder & Lead Developer</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-violet-400">✓</span>
                  <p className="text-zinc-300 text-sm">+2 anos desenvolvendo soluções</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <p className="text-zinc-300 text-sm">+20 projetos entregues</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <p className="text-zinc-300 text-sm">100% comprometimento com qualidade</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <p className="text-zinc-300 text-sm">Resposta rápida e suporte ativo</p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm italic">
                "Acredito que tecnologia deve resolver problemas reais e gerar valor. Cada projeto é uma oportunidade de fazer diferença no negócio do cliente."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contact-form" className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-white/8 to-white/5 border border-violet-500/30 rounded-3xl p-12 shadow-2xl shadow-violet-600/20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-3xl" />
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-3">Pronto para Transformar Seu Negócio?</h3>
              <p className="text-zinc-400 text-lg">
                Deixe seus dados e nós entraremos em contato em até 24 horas com uma proposta personalizada.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const message = `Novo contato:\n\nNome: ${formData.get('name')}\nEmpresa: ${formData.get('company')}\nEmail: ${formData.get('email')}\nTelefone: ${formData.get('phone')}\nProjeto: ${formData.get('project')}\nMensagem: ${formData.get('message')}`;
              window.location.href = `https://wa.me/5554991192111?text=${encodeURIComponent(message)}`;
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  required
                  className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Sua Empresa"
                  required
                  className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  required
                  className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu Telefone"
                  required
                  className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all"
                />
              </div>

              <select
                name="project"
                required
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white focus:border-violet-500 focus:outline-none transition-all"
              >
                <option value="" disabled selected className="bg-black">Tipo de Projeto</option>
                <option value="web" className="bg-black">Desenvolvimento Web</option>
                <option value="erp" className="bg-black">Sistema ERP</option>
                <option value="api" className="bg-black">API REST</option>
                <option value="automation" className="bg-black">Automação de Negócios</option>
                <option value="other" className="bg-black">Outro</option>
              </select>

              <textarea
                name="message"
                placeholder="Conte-nos sobre seu projeto..."
                rows="5"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full px-7 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300 font-bold shadow-2xl shadow-violet-600/50 transform hover:scale-105 text-white"
              >
                💬 Enviar Proposta via WhatsApp
              </button>

              <p className="text-zinc-500 text-xs text-center mt-4">
                Responderemos rapidamente. Garantimos privacidade de seus dados.
              </p>
            </form>
          </div>
        </div>
      </section>
      <footer id="contact" className="relative z-10 border-t border-violet-500/20 mt-20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-zinc-400 text-sm mb-2">
              © 2026 NeoLogic. Todos os direitos reservados.
            </p>
            <p className="text-zinc-600 text-xs">Desenvolvido com excelência técnica | Ryan Ribeiro</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
            <a href="mailto:ryan.rdjesus@gmail.com" className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-violet-500/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
              📧 Email
            </a>

            <a href="https://wa.me/5554991192111" className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-green-500/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
              💬 WhatsApp
            </a>

            <a href="https://github.com/Zaitsevr" className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-zinc-400/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
              🔗 GitHub
            </a>

            <a href="https://www.linkedin.com/in/ryan-ribeiro-b4b7721ba/" className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-110">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
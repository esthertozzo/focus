function Hero({ subtitle, title, highlight, description }) {
  return (
    <section id="inicio" className="grid min-h-screen grid-cols-1 items-center gap-12 px-5 py-20 md:px-12 lg:grid-cols-2 lg:py-12">
      <div className="max-w-2xl">
        <span className="mb-4 inline-block text-lg font-semibold uppercase tracking-wider text-slate-500">
          {subtitle}
        </span>

        <h1 className="mb-8 mt-0 text-[3rem] font-bold tracking-tight text-slate-900 md:text-[3rem] leading-tight">
          {title}
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="mb-12 mt-0 text-xl text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a 
            href="#solucao" 
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-700 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
          >
            Conhecer a solução
          </a>

          <a 
            href="#contato" 
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-center text-lg font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 sm:w-auto"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

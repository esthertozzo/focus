import SectionHeading from "./SectionHeading";

function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Acúmulo invisível",
      description:
        "Downloads, prints e áudios se acumulam sem que você perceba o volume real.",
    },
    {
      number: "02",
      title: "Duplicatas silenciosas",
      description:
        "A mesma foto salva em três lugares diferentes ocupa três vezes o espaço.",
    },
    {
      number: "03",
      title: "Decisão travada",
      description:
        "Na dúvida entre apagar ou guardar, a escolha mais fácil é não fazer nada.",
    },
    {
      number: "04",
      title: "Impacto no dia a dia",
      description:
        "Aparelho lento, backup falhando e a foto do momento que não pôde ser tirada.",
    },
  ];

  const statistics = [
    { label: "Arquivos analisados", value: "2.438" },
    { label: "Itens para revisar", value: "347" },
    { label: "Espaço liberável", value: "8,4 GB" },
  ];

  return (
    <section id="problema" className="border-t border-slate-100 px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        subtitle="O problema"
        title="Quanto do seu armazenamento realmente importa?"
        description="A maior parte do espaço ocupado é composta por arquivos que você nunca mais abriu. O problema não é falta de memória — é falta de clareza."
      />

      {/* Cards de Problemas */}
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((problem) => (
          <article className="rounded-2xl border border-slate-100 bg-white p-8" key={problem.number}>
            <span className="text-xl font-bold text-blue-600">{problem.number}</span>
            <h3 className="mb-4 mt-2 text-2xl font-semibold text-slate-900">{problem.title}</h3>
            <p className="text-lg text-slate-600 leading-relaxed">{problem.description}</p>
          </article>
        ))}
      </div>

      {/* Seção de Estatísticas */}
      <div className="grid grid-cols-1 gap-8 rounded-2xl bg-slate-900 p-8 text-white md:grid-cols-3 md:p-12">
        {statistics.map((statistic) => (
          <article className="flex flex-col gap-2" key={statistic.label}>
            <span className="text-sm font-medium uppercase tracking-wider text-slate-400">{statistic.label}</span>
            <strong className="text-4xl font-bold text-white">{statistic.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProblemSection;

import SectionHeading from "./SectionHeading";

function SolutionSection() {
  const solutions = [
    {
      number: "01",
      title: "Detecte",
      description:
        "Mapeia arquivos duplicados, esquecidos e de baixo valor de uso.",
    },
    {
      number: "02",
      title: "Entenda",
      description:
        "Traduz números em contexto: o que é, de quando é e por que ocupa espaço.",
    },
    {
      number: "03",
      title: "Organize",
      description:
        "Agrupa por categoria, projeto, matéria ou período automaticamente.",
    },
    {
      number: "04",
      title: "Revise",
      description:
        "Apresenta uma fila curta de revisão em vez de milhares de itens.",
    },
    {
      number: "05",
      title: "Decida",
      description: "Nada é excluído sem sua confirmação explícita.",
      featured: true,
    },
  ];

  return (
    <section id="solucao" className="bg-white px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="A solução"
        title="A Focus organiza. Você decide."
        description="A IA faz a leitura pesada do seu armazenamento e devolve escolhas simples. O controle final é sempre seu."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
        {solutions.map((solution) => (
          <article
            className={`rounded-2xl border border-[#e8e9f0] bg-[#fafaff] p-8 md:col-span-1 lg:col-span-2 ${solution.number === "04" || solution.number === "05" ? "lg:col-span-3" : ""} ${solution.featured ? "border-transparent bg-gradient-to-br from-[#0059ff] to-[#021133] text-white" : ""}`}
            key={solution.number}
          >
            <span className={`font-extrabold ${solution.featured ? "text-white/70" : "text-[#0059ff]"}`}>{solution.number}</span>
            <h3 className="my-4 text-2xl">{solution.title}</h3>
            <p className={`m-0 text-xl ${solution.featured ? "text-white" : "text-[#55576b]"}`}>{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SolutionSection;
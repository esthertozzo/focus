import SectionHeading from "./SectionHeading";

function AudienceSection() {
  const audiences = [
    {
      number: "01",
      category: "Foco principal",
      title: "Estudantes",
      description:
        "Materiais de aula, PDFs e gravações organizados por matéria, sem perder nada na véspera da prova.",
    },
    {
      number: "02",
      category: "Produtividade",
      title: "Profissionais",
      description:
        "Documentos de projetos e versões duplicadas separados por cliente, entrega e período.",
    },
    {
      number: "03",
      category: "Memórias",
      title: "Quem fotografa tudo",
      description:
        "Rajadas, prints e vídeos parecidos agrupados para escolher a melhor imagem em segundos.",
    },
    {
      number: "04",
      category: "Urgência",
      title: "Quem está sem espaço",
      description:
        "Um caminho rápido e seguro para liberar gigabytes agora, sem excluir o que importa.",
    },
  ];

  return (
    <section id="publico" className="bg-white px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="Público-alvo"
        title="Feita para quem convive com o aviso de memória cheia."
        description="A Focus adapta as recomendações ao perfil de uso de cada pessoa."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {audiences.map((audience) => (
          <article
            className={`rounded-2xl border border-[#e8e9f0] bg-[#f8f9fc] p-8`}
            key={audience.number}
          >
            <span className="font-bold text-[#0041b3]">{audience.number}</span>
            <small className={`mt-4 block text-base uppercase`}>{audience.category}</small>
            <h3 className="my-4 text-2xl">{audience.title}</h3>
            <p className={`m-0 text-xl `}>{audience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AudienceSection;
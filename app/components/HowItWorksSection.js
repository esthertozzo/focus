import SectionHeading from "./SectionHeading";

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Personalize",
      description:
        "Você define prioridades: estudos, trabalho, memórias ou espaço livre imediato.",
    },
    {
      number: "02",
      title: "A IA analisa",
      description: "O sistema classifica tudo por tipo, uso e repetição.",
    },
    {
      number: "03",
      title: "Receba recomendações",
      description:
        "Você recebe sugestões objetivas com o ganho de espaço estimado.",
    },
    {
      number: "04",
      title: "Tenha o controle",
      description:
        "Aprove, adie ou ignore. A Focus aprende com suas decisões.",
    },
  ];

  return (
    <section id="como-funciona" className="px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="Como funciona"
        title="Quatro passos, do primeiro toque à decisão final."
        description="Um ciclo simples que se repete sempre que o espaço aperta."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <article className="border-l-2 border-[#0041b3] p-4" key={step.number}>
            <span className="text-xl font-bold text-[#0041b3]">{step.number}</span>
            <h3 className="my-4">{step.title}</h3>
            <p className="m-0 text-xl text-[#55576b]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
import SectionHeading from "./SectionHeading";

function TeamSection() {
    const members = [
        {
            name: "Esther dos Santos de Almeida Tozzo",
            rm: "570860",
        },
        {
            name: "Felipe de Oliveira Zimmermann",
            rm: "570863",
        },
        {
            name: "Izabela Pordeus de Almeida",
            rm: "570316",
        },
        {
            name: "João Victor Santos Souza",
            rm: "569949",
        },
        {
            name: "Matheus Lopes Lima",
            rm: "571458",
        },
    ];

  return (
    <section id="equipe" className="border-t border-[#e8e9f0] bg-[#f8f9fc] px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="Nossa equipe"
        title="Quem está construindo a Focus."
        description="Projeto desenvolvido por estudantes com foco em organização, tecnologia e experiência do usuário."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {members.map((member) => (
          <article className="rounded-2xl border border-[#e8e9f0] bg-white p-8" key={member.rm}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0059ff] to-[#021133] text-xl font-bold text-white" aria-hidden="true">
              {member.name.charAt(0)}
            </span>

            <h3 className="mb-2 mt-4 text-lg">{member.name}</h3>
            <p className="m-0 text-[#55576b]">RM {member.rm}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
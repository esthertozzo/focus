import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";


export default function Home() {

  const navItems = [
    { label: "Solução", href: "#solucao" },
    { label: "Público-Alvo", href: "#publico" },
    { label: "Galeria", href: "#galeria" },
    { label: "Nossa Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  const heroContent = {
    eyebrow: "Organização inteligente de armazenamento",
    title: "Seu armazenamento ",
    highlight: "mais inteligente.",
    description:
      "A Focus usa Inteligência Artificial para entender o que ocupa espaço no seu dispositivo, revelar o que não importa mais e recomendar o que liberar — sem apagar nada por você.",
  };

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text]">
      <Header brandName="Focus" navItems={navItems} />
      <main>
        <Hero
          subtitle={heroContent.eyebrow}
          title={heroContent.title}
          highlight={heroContent.highlight}
          description={heroContent.description}
        />
        <ProblemSection />
      </main>
    </div>
  );
}

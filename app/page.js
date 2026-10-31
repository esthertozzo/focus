import Image from "next/image";
import Header from "./components/Header";

export default function Home() {

  const navItems = [
    { label: "Solução", href: "#solucao" },
    { label: "Público-Alvo", href: "#publico" },
    { label: "Galeria", href: "#galeria" },
    { label: "Nossa Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text]">
      <Header brandName="Focus" navItems={navItems} />
    </div>
  );
}

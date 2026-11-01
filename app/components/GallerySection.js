import SectionHeading from "./SectionHeading";
import GalleryItem from "./GalleryItem";

function GallerySection() {
  const galleryItems = [
    {
      image: "/configuracao-modo-temporario.png",
      alt: "Tela de configuração do modo temporário da Focus",
      caption: "Configuração personalizada",
    },
    {
      image: "/documentos-scans.png",
      alt: "Tela de documentos e scans da Focus",
      caption: "Organização de documentos",
    },
    {
      image: "/galeria-notificacao.png",
      alt: "Tela de notificação da galeria da Focus",
      caption: "Notificações inteligentes",
    },
    {
      image: "/smart-gallery-notificacoes.png",
      alt: "Tela de notificações do Smart Gallery",
      caption: "Sugestões da Focus IA",
    },
  ];

  return (
    <section id="galeria" className="border-t border-[#e8e9f0] px-5 py-12 md:px-12 md:py-16">
      <SectionHeading
        eyebrow="Galeria"
        title="Por dentro da Focus."
        description="Conheça algumas das telas que fazem parte da experiência de organização inteligente da Focus."
      />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:px-12">
        {galleryItems.map((item) => (
          <GalleryItem
            key={item.caption}
            image={item.image}
            alt={item.alt}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
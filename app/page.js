"use client";
import { useCallback, useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import StorageSection from "./components/StorageCalculator";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AudienceSection from "./components/AudienceSection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput";
import api from "./utils/api";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadContacts = async () => {
      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }

        try {
          const response = await api.get("/contacts");
          if (isMounted) {
            const data = Array.isArray(response.data) ? response.data : [];
            setContacts(data);
            if (typeof window !== "undefined") {
              localStorage.setItem("contatos", JSON.stringify(data));
            }
            setIsOffline(false);
          }
        } catch (apiError) {
          if (isMounted) {
            console.log("API offline ou endpoint indisponível, buscando do cache local...", apiError);
            if (typeof window !== "undefined") {
              const localData = localStorage.getItem("contatos");
              if (localData) {
                try {
                  const parsed = JSON.parse(localData);
                  setContacts(Array.isArray(parsed) ? parsed : []);
                } catch {
                  setContacts([]);
                }
              } else {
                setContacts([]);
              }
            }
            setIsOffline(true);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Erro ao carregar contatos: " + err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadContacts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredContacts = useMemo(() => {
    if (!Array.isArray(contacts)) return [];
    if (!filter.trim()) {
      return contacts;
    }
    const search = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact?.name?.toLowerCase().includes(search) ||
      contact?.email?.toLowerCase().includes(search)
    );
  }, [contacts, filter]);

  const handleSubmit = useCallback((newContact) => {
    setContacts((prev) => {
      const updated = [newContact, ...prev];
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("contatos", JSON.stringify(updated));
        } catch (err) {
          console.error("Erro ao salvar no localStorage:", err);
        }
      }
      return updated;
    });
  }, []);

  const handleRemove = useCallback(async (id) => {
    try {
      try {
        await api.delete(`/contacts/${id}`);
        console.log("Contato excluído da API");
      } catch (apiError) {
        console.log("API offline ou não encontrado na API, removendo localmente:", apiError);
      }

      setContacts((prev) => {
        const updated = prev.filter((c) => String(c.id) !== String(id));
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("contatos", JSON.stringify(updated));
          } catch (err) {
            console.error("Erro ao atualizar localStorage:", err);
          }
        }
        return updated;
      });
    } catch (err) {
      console.error("Erro ao remover contato:", err);
    }
  }, []);

  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

  const navItems = [
    { label: "Solução", href: "#solucao" },
    { label: "Público-Alvo", href: "#publico" },
    { label: "Galeria", href: "#galeria" },
    { label: "Nossa Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
    { label: "Mensagens", href: "#mensagens" },
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
        <StorageSection />
        <SolutionSection />
        <HowItWorksSection />
        <AudienceSection />
        <GallerySection />
        <TeamSection />

        <ContactSection onAdd={handleSubmit} />

        <section id="mensagens" className="border-t border-[#e8e9f0] bg-[#f8f9fc] px-5 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#0059ff]">
                Mensagens & Contatos
              </span>
              <h2 className="text-3xl font-bold text-[#17182b]">
                Mensagens Recebidas
              </h2>
              <p className="mt-2 text-[#55576b]">
                Visualize as mensagens publicadas e filtre pelo nome. Clique em uma mensagem para ver os detalhes completos.
              </p>
            </div>

            <FilterInput
              filter={filter}
              value={filter}
              onChange={handleFilterChange}
              onFilterChange={handleFilterChange}
            />

            {isOffline && (
              <div className="mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                <span className="font-semibold">Modo Local / Offline:</span> Os dados estão sendo sincronizados no seu navegador. Quando a rota <code className="bg-yellow-200/60 px-1 py-0.5 rounded text-xs">/contacts</code> estiver ativa no MockAPI, a sincronização remota ocorrerá automaticamente.
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {error}
              </div>
            )}

            {loading ? (
              <div className="rounded-2xl border border-[#e8e9f0] bg-white p-8 text-center text-[#55576b]">
                Carregando contatos...
              </div>
            ) : (
              <ContactList
                contacts={filteredContacts}
                items={filteredContacts}
                onRemove={handleRemove}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

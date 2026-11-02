"use client";
import { useState, useEffect } from "react";
import api from "../utils/api";


export function useContactDetail(id, searchParams) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const fetchContact = async () => {
      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }

        // 1. Tentar buscar da API MockAPI
        try {
          const response = await api.get(`/contacts/${id}`);
          if (response.data && isMounted) {
            setContact(response.data);
            return;
          }
        } catch (apiErr) {
          console.log(
            "API offline ou contato não encontrado no MockAPI. Buscando localmente...",
            apiErr
          );
        }

        // 2. Buscar no cache do localStorage
        if (typeof window !== "undefined") {
          const cached = localStorage.getItem("contatos");
          if (cached) {
            try {
              const list = JSON.parse(cached);
              if (Array.isArray(list)) {
                const found = list.find((c) => String(c.id) === String(id));
                if (found && isMounted) {
                  setContact(found);
                  return;
                }
              }
            } catch (err) {
              console.error("Erro ao ler cache local:", err);
            }
          }
        }

        // 3. Fallback para dados passados na URL / query params
        if (searchParams) {
          const qName =
            typeof searchParams.get === "function"
              ? searchParams.get("name") || searchParams.get("nome")
              : searchParams.name || searchParams.nome;

          if (qName && isMounted) {
            const getParam = (k) =>
              typeof searchParams.get === "function"
                ? searchParams.get(k)
                : searchParams[k];

            setContact({
              id,
              name: qName,
              email: getParam("email") || "",
              profile: getParam("profile") || "",
              message: getParam("message") || getParam("mensagem") || "",
            });
            return;
          }
        }

        if (isMounted) {
          setError("Contato não encontrado.");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Erro desconhecido ao carregar contato.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContact();

    return () => {
      isMounted = false;
    };
  }, [id, searchParams]);

  return { contact, loading, error };
}

export default useContactDetail;

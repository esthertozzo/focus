"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import api from "../utils/api";

export function useContacts() {
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
            console.log(
              "API offline ou endpoint indisponível, buscando do cache local...",
              apiError
            );
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
    return contacts.filter(
      (contact) =>
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

  return {
    contacts,
    setContacts,
    filter,
    setFilter,
    loading,
    error,
    isOffline,
    filteredContacts,
    handleSubmit,
    handleRemove,
    handleFilterChange,
  };
}

export default useContacts;

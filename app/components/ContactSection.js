"use client";
import { useEffect, useState, useRef } from "react";
import api from "../utils/api";
import SectionHeading from "./SectionHeading";

const ContactSection = ({ onAdd }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        profile: "",
        message: ""
    });
    const nomeInputRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nomeInputRef.current?.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
        setError(null);
        setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim()) return;

        try {
            setLoading(true);
            setError(null);
            setSuccess(false);

            let newContact = {
                name: form.name.trim(),
                email: form.email.trim(),
                profile: form.profile.trim(),
                message: form.message.trim()
            };

            try {
                const response = await api.post("/contacts", newContact);
                if (response.data && response.data.id) {
                    newContact = response.data;
                } else {
                    newContact.id = String(Date.now());
                }
            } catch (apiError) {
                console.log("API offline ou endpoint indisponível. Salvando localmente:", apiError);
                newContact.id = String(Date.now());
            }

            if (onAdd) {
                onAdd(newContact);
            }

            setForm({
                name: "",
                email: "",
                profile: "",
                message: ""
            });
            setSuccess("Mensagem enviada e registrada com sucesso!");
            nomeInputRef.current?.focus();
        } catch (err) {
            setError("Erro ao enviar o formulário. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contato" className="bg-white px-5 py-12 md:px-12 md:py-16">
            <SectionHeading
                subtitle="Contato"
                title="Quer conhecer melhor a Focus?"
                description="Preencha seus dados para enviar uma mensagem ou registrar interesse."
            />

            <form className="max-w-[760px] rounded-2xl border border-[#e8e9f0] bg-[#f8f9fc] p-8 md:p-12" onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    <label className="grid gap-2 font-semibold text-[#17182b]">
                        <span>Nome *</span>
                        <input
                            ref={nomeInputRef}
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none transition focus:border-[#0059ff] focus:ring-2 focus:ring-blue-100"
                            placeholder="Seu nome"
                        />
                    </label>

                    <label className="grid gap-2 font-semibold text-[#17182b]">
                        <span>E-mail</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none transition focus:border-[#0059ff] focus:ring-2 focus:ring-blue-100"
                            placeholder="seuemail@exemplo.com"
                        />
                    </label>

                    <label className="grid gap-2 font-semibold text-[#17182b]">
                        <span>Perfil</span>
                        <input
                            type="text"
                            name="profile"
                            value={form.profile}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none transition focus:border-[#0059ff] focus:ring-2 focus:ring-blue-100"
                            placeholder="Ex: Estudante, Profissional, Fotógrafo..."
                        />
                    </label>

                    <label className="grid gap-2 font-semibold text-[#17182b]">
                        <span>Mensagem</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full resize-y rounded-xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] outline-none transition focus:border-[#0059ff] focus:ring-2 focus:ring-blue-100"
                            placeholder="Conte como a Focus poderia ajudar você."
                        />
                    </label>
                </div>

                {error && (
                    <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                        {success}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-2xl border border-[#0059ff] px-8 py-4 text-center text-xl font-semibold leading-tight text-white shadow-[0_20px_50px_rgba(40,35,90,0.1)] transition hover:-translate-y-0.5 sm:w-auto ${
                        loading ? "cursor-not-allowed border-gray-400 bg-gray-400" : "bg-[#0059ff] hover:border-[#004fe0] hover:bg-[#004fe0]"
                    }`}
                >
                    {loading ? "Enviando..." : "Publicar mensagem"}
                </button>
            </form>
        </section>
    );
};

export default ContactSection;

"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { useContactDetail } from "../../hooks/useContactDetail";

function ContactDetailContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { contact, loading, error } = useContactDetail(params?.id, searchParams);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-6">
                <div className="rounded-2xl border border-[#e8e9f0] bg-white p-8 text-center shadow-lg">
                    <p className="text-lg font-semibold text-[#17182b]">Carregando detalhes da mensagem...</p>
                </div>
            </div>
        );
    }

    if (error || !contact) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-6">
                <div className="w-full max-w-md rounded-2xl border border-[#e8e9f0] bg-white p-8 text-center shadow-lg">
                    <p className="text-lg font-semibold text-red-500">{error || "Contato não encontrado"}</p>
                    <button
                        onClick={() => router.back()}
                        className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#0059ff] px-6 py-3 font-semibold text-white transition hover:bg-[#004fe0]"
                    >
                        Voltar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-6">
            <div className="w-full max-w-lg rounded-2xl border border-[#e8e9f0] bg-white p-8 shadow-[0_20px_50px_rgba(40,35,90,0.1)]">
                <div className="mb-6 flex items-center justify-between border-b border-[#e8e9f0] pb-4">
                    <h1 className="text-2xl font-bold text-[#17182b]">Detalhes da Mensagem</h1>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0059ff] border border-blue-100">
                        ID: {contact.id}
                    </span>
                </div>

                <div className="space-y-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Nome</span>
                        <p className="text-lg font-semibold text-[#17182b]">{contact.name || "Não informado"}</p>
                    </div>

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">E-mail</span>
                        <p className="text-base text-[#17182b]">{contact.email || "Não informado"}</p>
                    </div>

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Perfil</span>
                        <p className="text-base text-[#17182b]">
                            {contact.profile ? (
                                <span className="inline-block rounded-lg bg-[#f0f4ff] px-3 py-1 font-medium text-[#0059ff]">
                                    {contact.profile}
                                </span>
                            ) : (
                                "Não informado"
                            )}
                        </p>
                    </div>

                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">Mensagem</span>
                        <div className="mt-1 rounded-xl border border-[#e8e9f0] bg-[#f8f9fc] p-4 text-[#17182b] whitespace-pre-wrap">
                            {contact.message || "Nenhuma mensagem inserida."}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#0059ff] px-6 py-3 font-semibold text-white transition hover:bg-[#004fe0]"
                    >
                        Voltar
                    </button>
                    <Link
                        href="/"
                        className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[#e8e9f0] bg-white px-6 py-3 font-semibold text-[#17182b] transition hover:bg-gray-50"
                    >
                        Início
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ContactDetailPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-6">
                    <p className="text-lg font-semibold text-[#17182b]">Carregando...</p>
                </div>
            }
        >
            <ContactDetailContent />
        </Suspense>
    );
}

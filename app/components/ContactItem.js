"use client";
import { memo } from "react";
import Link from "next/link";

const ContactItem = memo(({ contact, onRemove }) => {
    const detailUrl = `/contact/${contact.id}?name=${encodeURIComponent(contact.name || '')}&email=${encodeURIComponent(contact.email || '')}&profile=${encodeURIComponent(contact.profile || '')}&message=${encodeURIComponent(contact.message || '')}`;

    return (
        <div className="flex flex-col justify-between rounded-2xl border border-[#e8e9f0] bg-white p-6 shadow-[0_4px_20px_rgba(40,35,90,0.05)] transition hover:shadow-[0_10px_30px_rgba(40,35,90,0.1)]">
            <div>
                <div className="flex items-start justify-between gap-3">
                    <Link
                        href={detailUrl}
                        className="text-lg font-bold text-[#17182b] transition hover:text-[#0059ff]"
                    >
                        {contact.name}
                    </Link>
                    {contact.profile && (
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#0059ff] border border-blue-100">
                            {contact.profile}
                        </span>
                    )}
                </div>

                <p className="mt-1 text-sm text-[#55576b]">{contact.email}</p>

                {contact.message && (
                    <p className="mt-3 text-sm text-[#17182b] line-clamp-3 bg-[#f8f9fc] p-3 rounded-xl border border-[#e8e9f0]">
                        &ldquo;{contact.message}&rdquo;
                    </p>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#f0f1f5] pt-4">
                <Link
                    href={detailUrl}
                    className="text-sm font-semibold text-[#0059ff] hover:underline"
                >
                    Ver detalhes →
                </Link>

                <button
                    onClick={() => onRemove(contact.id)}
                    className="cursor-pointer text-sm font-semibold text-red-500 transition hover:text-red-700"
                >
                    Remover
                </button>
            </div>
        </div>
    );
});

ContactItem.displayName = "ContactItem";

export default ContactItem;

import ContactItem from "./ContactItem";

const ContactList = ({ items, contacts, onRemove }) => {
    const list = items || contacts || [];

    if (!Array.isArray(list) || list.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-[#d1d5db] bg-white p-8 text-center text-[#55576b]">
                <p className="text-base font-medium">Nenhum contato encontrado.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((contact) => (
                <ContactItem key={contact.id} contact={contact} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default ContactList;

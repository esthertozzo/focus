"use client";

const FilterInput = ({ value, filter, onChange, onFilterChange }) => {
    const currentValue = value !== undefined ? value : (filter ?? "");

    const handleChange = (e) => {
        const val = e.target.value;
        if (onChange) onChange(val);
        if (onFilterChange) onFilterChange(val);
    };

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Filtrar contatos pelo nome..."
                value={currentValue}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#e8e9f0] bg-white p-4 text-[#17182b] shadow-sm outline-none transition focus:border-[#0059ff] focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
};

export default FilterInput;

import React, { useState } from 'react';

const FilterComponent = ({ items = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-400 dark:bg-gray-900 rounded shadow-md">
            <div className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Sök..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label='Sök efter objekt'
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    aria-label='Filtrera objekt'
                    tabIndex='0'
                >
                    Filtrera
                </button>
            </div>
            <ul className="space-y-2">
                {filteredItems.map((item) => (
                    <li
                        key={item.id}
                        className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded shadow-sm"
                        role='listitem'
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterComponent;
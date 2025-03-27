import React, { useState } from 'react';

const FilterComponent = ({ items }) => {
    const [query, setQuery] = useState('');

    const filterItems = items.filter(item => item.toLowerCase().inludes(query.toLowerCase())
);

    return (
        <div>
            <input
                type="text"
                placeholder="Sök..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filterItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterComponent;
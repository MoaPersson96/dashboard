import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccessibleMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        { name: 'Hem', path: '/' },
        { name: 'Om oss', path: '/about' },
        { name: 'Kontakt', path: '/contact' },
    ];

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
        } else if (e.key === 'ArrowUp') {
            setActiveIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
        } else if (e.key === 'Enter' || e.key === ' ') {
            // Navigate to the selected menu item
            const selectedItem = menuItems[activeIndex];
            if (selectedItem && selectedItem.path) {
                window.location.href = selectedItem.path; // Navigate to the selected path
            }
        }
    };

    return (
        <ul role="menu"
            aria-label='Navigeringsmeny'
            onKeyDown={handleKeyDown}
            className='space-y-2'
        >
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    role="menuitem"
                    tabIndex={activeIndex === index ? 0 : -1}
                    aria-selected={activeIndex === index}
                    className={`p-2 rounded ${
                        activeIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                    <Link to={item.path} className="block w-full">
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default AccessibleMenu;
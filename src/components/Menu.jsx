import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccessibleMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = ['Hem', 'Om oss', 'Kontakt'];

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
        } else if (e.key === 'ArrowUp') {
            setActiveIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
        }
    };

    return (
        <ul role="menu" onKeyDown={handleKeyDown}>
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    role="menuitem"
                    tabIndex={activeIndex === index ? 0 : -1}
                    aria-selected={activeIndex === index}
                    >
                        {item}
                </li>
            ))}
        </ul>
    );
};

export default AccessibleMenu;
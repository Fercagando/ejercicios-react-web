import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check initial theme from local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand">
          WebReact
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Inicio
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Servicios
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contacto
          </NavLink>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

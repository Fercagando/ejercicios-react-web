import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

/**
 * Navbar Component
 * Gestiona la navegación principal de la aplicación y el cambio de tema (Modo Oscuro/Claro).
 * Cumple con los requisitos del Ejercicio 1 (Navegación) y Ejercicio 5 (Variables CSS).
 */
const Navbar = () => {
  const [theme, setTheme] = useState('light');

  // Efecto secundario que se ejecuta al montar el componente para inicializar el tema
  useEffect(() => {
    // Comprobamos si hay un tema guardado previamente en el localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Si no hay tema guardado, detectamos la preferencia del sistema operativo del usuario
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  /**
   * Alterna dinámicamente entre el modo claro y oscuro.
   * Modifica el atributo 'data-theme' del elemento HTML raíz para que las variables CSS surtan efecto.
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Guardamos la preferencia
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

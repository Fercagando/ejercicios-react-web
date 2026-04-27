import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1>Bienvenido a WebReact</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Esta es una aplicación desarrollada como parte de los ejercicios prácticos de desarrollo web. 
          Aquí exploraremos React Router, validación de formularios, galerías interactivas y un sistema CMS dinámico.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/servicios" className="btn btn-primary">Ver Servicios</a>
          <a href="/contacto" className="btn" style={{ border: '1px solid var(--border-color)', color: 'var(--text-color)' }}>Contáctanos</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

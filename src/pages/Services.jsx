import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

const Services = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestros Servicios</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <section className="card">
          <h2>Galería Interactiva</h2>
          <p style={{ opacity: 0.8 }}>Explora algunos de nuestros proyectos destacados a través de esta galería dinámica.</p>
          <Gallery />
        </section>

        <section className="card">
          <h2>Blog Dinámico</h2>
          <p style={{ opacity: 0.8 }}>Gestor de contenido en tiempo real. Añade, elimina y destaca publicaciones.</p>
          <Blog />
        </section>
      </div>
    </motion.div>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';

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
          <p>Próximamente: Ejercicio 3</p>
        </section>

        <section className="card">
          <h2>Blog Dinámico</h2>
          <p>Próximamente: Ejercicio 4</p>
        </section>
      </div>
    </motion.div>
  );
};

export default Services;

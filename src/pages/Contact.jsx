import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Contacto</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Próximamente: Ejercicio 2 (Formulario con Validación)
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;

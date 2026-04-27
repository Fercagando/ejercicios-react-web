import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', alt: 'Desarrollo Web' },
  { id: 2, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', alt: 'Código React' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', alt: 'Laptop de Trabajo' },
  { id: 4, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', alt: 'Análisis de Datos' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <div 
        style={{ 
          width: '100%', 
          height: '400px', 
          borderRadius: '12px', 
          overflow: 'hidden',
          marginBottom: '1rem',
          position: 'relative',
          backgroundColor: 'var(--bg-color)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage.id}
            src={selectedImage.src}
            alt={selectedImage.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {images.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(img)}
            style={{
              width: '100px',
              height: '75px',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: selectedImage.id === img.id ? '3px solid var(--primary-color)' : '3px solid transparent',
              opacity: selectedImage.id === img.id ? 1 : 0.6,
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <img 
              src={img.src} 
              alt={`Miniatura de ${img.alt}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        ))}
      </div>
      
      <p style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-color)', opacity: 0.8 }}>
        {selectedImage.alt}
      </p>
    </div>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Vista de Contacto
 * Implementa un formulario interactivo con estado local y validaciones en tiempo real.
 * Cumple con los requisitos del Ejercicio 2 (Formulario con validación en React).
 */
const Contact = () => {
  // Estado para los valores de los inputs
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Estado para rastrear los errores de validación de cada campo
  const [errors, setErrors] = useState({});
  // Estado para saber si el usuario ha interactuado (tocado) un campo
  const [touched, setTouched] = useState({});
  // Estado general de envío
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Valida un campo específico según las reglas de negocio.
   * @param {string} name - Nombre del campo a validar.
   * @param {string} value - Valor actual del campo.
   * @returns {string} Mensaje de error (vacío si es válido).
   */
  const validateField = (name, value) => {
    let error = '';
    if (name === 'nombre') {
      if (!value.trim()) error = 'El nombre es obligatorio';
    }
    if (name === 'email') {
      if (!value.trim()) {
        error = 'El email es obligatorio';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Formato de email no válido';
      }
    }
    if (name === 'mensaje') {
      if (!value.trim()) {
        error = 'El mensaje es obligatorio';
      } else if (value.length < 10) {
        error = 'El mensaje debe tener al menos 10 caracteres';
      }
    }
    return error;
  };

  /**
   * Manejador que se dispara cuando el valor de un input cambia.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Si el campo ya fue "tocado" (ha perdido el foco antes), validamos en tiempo real mientras escribe
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  /**
   * Manejador que se dispara cuando un input pierde el foco (onBlur).
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true })); // Marcamos el campo como tocado
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) })); // Validamos
  };

  /**
   * Manejador del evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      nombre: validateField('nombre', formData.nombre),
      email: validateField('email', formData.email),
      mensaje: validateField('mensaje', formData.mensaje)
    };

    setErrors(newErrors);
    setTouched({ nombre: true, email: true, mensaje: true });

    const isValid = !Object.values(newErrors).some(err => err !== '');

    if (isValid) {
      setIsSubmitted(true);
      // Here you would typically send data to a backend
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nombre: '', email: '', mensaje: '' });
        setTouched({});
      }, 3000);
    }
  };

  const getValidationIcon = (fieldName) => {
    if (!touched[fieldName]) return null;
    if (errors[fieldName]) return <AlertCircle size={18} className="text-error" style={{ color: 'var(--error-color)' }} />;
    return <CheckCircle size={18} className="text-success" style={{ color: 'var(--success-color)' }} />;
  };

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
          Envíanos un mensaje y te responderemos lo antes posible.
        </p>

        {isSubmitted ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              padding: '1.5rem', 
              backgroundColor: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid var(--success-color)',
              borderRadius: '8px',
              textAlign: 'center',
              color: 'var(--success-color)'
            }}
          >
            <CheckCircle size={48} style={{ margin: '0 auto 1rem' }} />
            <h3>¡Mensaje enviado con éxito!</h3>
            <p style={{ color: 'inherit', margin: 0 }}>Gracias por contactarnos.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-input"
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: touched.nombre ? (errors.nombre ? 'var(--error-color)' : 'var(--success-color)') : '' }}
                />
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                  {getValidationIcon('nombre')}
                </div>
              </div>
              {errors.nombre && touched.nombre && <span className="form-error">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: touched.email ? (errors.email ? 'var(--error-color)' : 'var(--success-color)') : '' }}
                />
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                  {getValidationIcon('email')}
                </div>
              </div>
              {errors.email && touched.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <div style={{ position: 'relative' }}>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="form-textarea"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: touched.mensaje ? (errors.mensaje ? 'var(--error-color)' : 'var(--success-color)') : '' }}
                />
                <div style={{ position: 'absolute', right: '10px', top: '20px' }}>
                  {getValidationIcon('mensaje')}
                </div>
              </div>
              {errors.mensaje && touched.mensaje && <span className="form-error">{errors.mensaje}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;

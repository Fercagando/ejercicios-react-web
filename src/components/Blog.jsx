import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Star } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Introducción a React', description: 'React es una biblioteca de JavaScript para construir interfaces de usuario.', destacado: true },
    { id: 2, title: 'Estado y Props', description: 'Entendiendo cómo fluye la información en las aplicaciones React.', destacado: false }
  ]);

  const [newPost, setNewPost] = useState({ title: '', description: '' });

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.description.trim()) return;

    const post = {
      id: Date.now(),
      title: newPost.title,
      description: newPost.description,
      destacado: false
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', description: '' });
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const toggleDestacado = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, destacado: !post.destacado } : post
    ));
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      
      {/* Formulario de Creación */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--bg-color)' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Crear Nueva Publicación</h3>
        <form onSubmit={handleCreatePost}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Título</label>
            <input
              type="text"
              id="title"
              className="form-input"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              placeholder="Ej. Novedades en React 19"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Descripción</label>
            <textarea
              id="description"
              className="form-textarea"
              rows="3"
              value={newPost.description}
              onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              placeholder="Escribe el contenido de tu post aquí..."
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!newPost.title.trim() || !newPost.description.trim()}>
            Publicar
          </button>
        </form>
      </div>

      {/* Lista de Posts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="card"
              style={{ 
                border: post.destacado ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, paddingRight: '2rem', color: post.destacado ? 'var(--primary-color)' : 'inherit' }}>
                  {post.title}
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                  <button 
                    onClick={() => toggleDestacado(post.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: post.destacado ? '#eab308' : 'var(--text-color)', opacity: post.destacado ? 1 : 0.5 }}
                    title={post.destacado ? "Quitar destacado" : "Destacar"}
                  >
                    <Star size={20} fill={post.destacado ? "#eab308" : "none"} />
                  </button>
                  <button 
                    onClick={() => handleDeletePost(post.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error-color)', opacity: 0.8 }}
                    title="Eliminar post"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <p style={{ flex: 1 }}>{post.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {posts.length === 0 && (
        <p style={{ textAlign: 'center', opacity: 0.7, padding: '2rem' }}>
          No hay publicaciones aún. ¡Crea la primera!
        </p>
      )}
    </div>
  );
};

export default Blog;

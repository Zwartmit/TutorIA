import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
interface PostFormProps {
  onPostCreated?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    setLoading(true);
    const { error } = await supabase.from('posts').insert([
      {
        title,
        content,
      },
    ]);
    setLoading(false);
    if (!error) {
      setTitle('');
      setContent('');
      if (onPostCreated) {
        onPostCreated();
      }
    } else {
      alert('Error al crear la publicación');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-100 rounded-3xl shadow">
      <h2 className="text-lg font-semibold mb-2">Crear nueva publicación</h2>
      <input
        className="w-full border rounded px-3 py-2 mb-2"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded px-3 py-2 mb-2"
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-primary-600 text-white px-4 py-2 rounded-3xl disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Publicando...' : 'Publicar'}
      </button>
    </form>
  );
};

export default PostForm;

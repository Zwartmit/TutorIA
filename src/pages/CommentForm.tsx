import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useUser } from '@clerk/clerk-react';

interface CommentFormProps {
  postId: string;
  parentId?: string | null;
  onCommentCreated?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, parentId = null, onCommentCreated }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !user) return;
    setLoading(true);
    const { error } = await supabase.from('comments').insert([
      {
        post_id: postId,
        parent_id: parentId,
        content,
        user_id: user.id,
      },
    ]);
    setLoading(false);
    if (!error) {
      setContent('');
      if (onCommentCreated) onCommentCreated();
    } else {
      alert('Error al comentar');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 bg-gray-100 rounded-3xl">
      <textarea
        className="w-full border rounded px-3 py-2 mb-2"
        placeholder="Agregar un comentario..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-primary-600 text-white px-4 py-2 rounded-3xl disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Comentando...' : 'Comentar'}
      </button>
    </form>
  );
};

export default CommentForm;

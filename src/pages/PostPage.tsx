import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

import CommentForm from './CommentForm';
import { useUser } from '@clerk/clerk-react';

interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  created_at: string;
  deleted_at?: string | null;
}

interface Comment {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
  parent_id: string | null;
  deleted_at?: string | null;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  useEffect(() => {
    const fetchPostAndComments = async () => {
      const { data: postData } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (postData) {
        setPost(postData);
      }
      
      const { data: commentData } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });
      
      setComments(commentData || []);
    };
    
    fetchPostAndComments();
  }, [id]);

  if (!post) return <p>Publicación no encontrada</p>;

  return (
    <div className="w-full bg-gradient-to-b min-h-screen mt-14 from-gray-300 via-gray to-gray-300">
      <section className="min-h-full py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link to="/foro" className="text-primary-600 hover:underline">← Volver al foro</Link>
            <div className="rounded-3xl bg-[#EFF3F8] shadow-lg border border-gray-200 p-8 mt-4 mb-8">

              <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                <span>Publicado el {new Date(post.created_at).toLocaleString()}</span>
              </div>
              <h1 className="text-3xl font-bold text-primary-600 mb-2">{post.title}</h1>
              <p className="text-gray-700 mt-2 mb-2 whitespace-pre-line">{post.content}</p>
            </div>
            <h2 className="text-lg font-semibold mb-4">Comentarios</h2>
            {isSignedIn ? (
              <CommentForm postId={post.id} onCommentCreated={() => window.location.reload()} />
            ) : (
              <div className="flex justify-center mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 px-6 py-4 rounded-3xl text-center mb-4">
                  <p className="text-blue-700">
                    Inicia sesión para comentar
                  </p>
                </div>
              </div>
            )}
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="border rounded-3xl p-3 bg-[#EFF3F8]">
                  <p>{comment.content}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                    <span>{new Date(comment.created_at).toLocaleString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;

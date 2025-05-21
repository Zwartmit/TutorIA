import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useUser } from '@clerk/clerk-react';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';
import { LiaUsersSolid } from 'react-icons/lia';
import { motion } from 'framer-motion';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
    
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setPosts(data);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b mt-14 from-gray-300 via-gray to-gray-300">
      <section className="min-h-full py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-center">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center mb-4"
                >
                  <LiaUsersSolid size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                  <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Foro de la comunidad</h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                 >
                  Comparte tus dudas, ideas e interactúa con la comunidad
                </motion.p>
              </div>
            </div>
            {isSignedIn ? (
              <PostForm onPostCreated={() => window.location.reload()} />
            ) : (
              <div className="flex justify-center mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 px-6 py-4 rounded-3xl text-center">
                  <p className="text-blue-700">
                    Inicia sesión para participar en el foro
                  </p>
                </div>
              </div>
            )}
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.id} className="rounded-3xl bg-white shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">
                  <div className="flex flex-col h-full">
                    <span className="text-sm text-gray-500 mb-4">Publicado el {new Date(post.created_at).toLocaleString()}</span>
                    <Link to={`/foro/${post.id}`} className="text-2xl font-bold text-primary-600 hover:underline">
                      {post.title}
                    </Link>
                    <p className="mt-2 text-gray-600 line-clamp-3 mb-4">{post.content}</p>
                    <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <Link 
                        to={`/foro/${post.id}`}
                        className="w-full sm:w-auto px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors text-sm font-medium transition-transform duration-300 hover:translate-x-2 text-center sm:ml-auto"
                      >
                        Ver detalles →
                      </Link>
                    </div>
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

export default ForumPage;

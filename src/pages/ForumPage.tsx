import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useUser } from '@clerk/clerk-react';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';
import { LiaUsersSolid } from 'react-icons/lia';

interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  created_at: string;
}

interface UserProfile {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  imageUrl?: string;
}

const ForumPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [userProfiles, setUserProfiles] = useState<Record<string, UserProfile>>({});
  const { isSignedIn } = useUser();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        setPosts(data);
        // Buscar perfiles de usuario únicos
        const userIds = Array.from(new Set(data.map((p: Post) => p.user_id)));
        // Clerk API pública para obtener perfiles
        const fetchProfiles = async () => {
          const profiles: Record<string, UserProfile> = {};
          for (const id of userIds) {
            try {
              const res = await fetch(`/.netlify/functions/clerk-profile?id=${id}`);
              if (res.ok) {
                const user = await res.json();
                profiles[id] = {
                  id,
                  firstName: user.first_name,
                  lastName: user.last_name,
                  username: user.username,
                  imageUrl: user.image_url,
                };
              }
            } catch (error) {
              console.error(error);
            }
          }
          setUserProfiles(profiles);
        };
        fetchProfiles();
      }
      setLoading(false);
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
                <LiaUsersSolid size={42} className="text-primary-600 mb-2 transition animate-bounce" />
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Foro</h1>
                <p className="text-lg text-gray-600 mb-2 font-medium">
                  Comparte tus dudas, ideas e interactúa con la comunidad.
                </p>
                <div className="w-20 h-1 mx-auto bg-primary-600 rounded-full mb-6" />
              </div>
            </div>
            {isSignedIn && <PostForm onPostCreated={() => window.location.reload()} />}
            {loading ? (
              <p className="text-center text-gray-500">Cargando discusiones...</p>
            ) : (
              <ul className="space-y-6">
                {posts.map((post) => {
                  const user = userProfiles[post.user_id];
                  return (
                    <li key={post.id} className="rounded-3xl bg-white shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">
                      <div className="flex items-center mb-2">
                        {user?.imageUrl ? (
                          <img src={user.imageUrl} alt="avatar" className="w-10 h-10 rounded-full mr-3 border" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-600 font-bold">?
                          </div>
                        )}
                        <div>
                          <span className="font-semibold text-gray-900">
                            {user?.firstName || 'Usuario'} {user?.lastName || ''}
                          </span>
                          <span className="text-gray-500 text-sm ml-2">
                            ({user?.username || post.user_id.slice(0, 6)})
                          </span>
                        </div>
                      </div>
                      <Link to={`/foro/${post.id}`} className="text-2xl font-bold text-primary-600 hover:underline">
                        {post.title}
                      </Link>
                      <p className="text-gray-700 mt-2 mb-2 line-clamp-3">{post.content}</p>
                      <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                        <span>Publicado el {new Date(post.created_at).toLocaleString()}</span>
                        <span className="italic">Ver discusión →</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/clerk-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { MessageSquare, Heart, Send, Plus, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { LiaUsersSolid } from 'react-icons/lia';

interface Post {
  id: string;
  title: string;
  content: string;
  user_id: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
  user?: {
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
  isLiked?: boolean;
}

interface Comment {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
  user?: {
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
}

const ForumPage: React.FC = () => {
  const { user, isSignedIn } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [supabaseUserId, setSupabaseUserId] = useState<string | null>(null);

  useEffect(() => {
    if (isSignedIn && user) {
      getOrCreateSupabaseUserId();
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedPost) {
      fetchComments(selectedPost.id);
    }
  }, [selectedPost]);

  const getOrCreateSupabaseUserId = async () => {
    try {
      // First, try to get existing mapping
      const { data: existingMapping, error: fetchError } = await supabase
        .from('clerk_user_mapping')
        .select('id')
        .eq('clerk_id', user!.id)
        .single();

      if (existingMapping) {
        setSupabaseUserId(existingMapping.id);
        return;
      }

      // If no mapping exists, create one
      const { data: newMapping, error: insertError } = await supabase
        .from('clerk_user_mapping')
        .insert([{ clerk_id: user!.id }])
        .select('id')
        .single();

      if (insertError) throw insertError;

      setSupabaseUserId(newMapping.id);
    } catch (error) {
      console.error('Error getting/creating Supabase user ID:', error);
      setError('Error al inicializar el usuario');
    }
  };

  const fetchPosts = async () => {
    try {
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      // Fetch user information for each post
      const postsWithUsers = await Promise.all(
        postsData.map(async (post) => {
          const { data: mappingData } = await supabase
            .from('clerk_user_mapping')
            .select('clerk_id')
            .eq('id', post.user_id)
            .single();

          // If user is signed in, check if they liked the post
          let isLiked = false;
          if (isSignedIn && supabaseUserId) {
            const { data: likeData } = await supabase
              .from('likes')
              .select('id')
              .eq('post_id', post.id)
              .eq('user_id', supabaseUserId)
              .single();
            isLiked = !!likeData;
          }

          return {
            ...post,
            user: mappingData ? {
              firstName: user?.firstName || '',
              lastName: user?.lastName || '',
              imageUrl: user?.imageUrl || '',
            } : undefined,
            isLiked,
          };
        })
      );

      setPosts(postsWithUsers);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Error al cargar las publicaciones');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async (postId: string) => {
    try {
      const { data: commentsData, error: commentsError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (commentsError) throw commentsError;

      // Fetch user information for each comment
      const commentsWithUsers = await Promise.all(
        commentsData.map(async (comment) => {
          const { data: mappingData } = await supabase
            .from('clerk_user_mapping')
            .select('clerk_id')
            .eq('id', comment.user_id)
            .single();

          return {
            ...comment,
            user: mappingData ? {
              firstName: user?.firstName || '',
              lastName: user?.lastName || '',
              imageUrl: user?.imageUrl || '',
            } : undefined,
          };
        })
      );

      setComments(commentsWithUsers);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Error al cargar los comentarios');
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !supabaseUserId) return;

    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([
          {
            title: newPost.title,
            content: newPost.content,
            user_id: supabaseUserId,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Add the new post to the list with user information
      setPosts([
        {
          ...data,
          user: {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            imageUrl: user.imageUrl || '',
          },
          isLiked: false,
        },
        ...posts,
      ]);

      setNewPost({ title: '', content: '' });
      setIsCreatingPost(false);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Error al crear la publicación');
    }
  };

  const handleCreateComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !selectedPost || !supabaseUserId) return;

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            content: newComment,
            post_id: selectedPost.id,
            user_id: supabaseUserId,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Add the new comment to the list with user information
      setComments([
        ...comments,
        {
          ...data,
          user: {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            imageUrl: user.imageUrl || '',
          },
        },
      ]);

      setNewComment('');

      // Update the comments count in the posts list
      setPosts(posts.map(post => 
        post.id === selectedPost.id 
          ? { ...post, comments_count: post.comments_count + 1 }
          : post
      ));

      // Update the selected post if it exists
      if (selectedPost) {
        setSelectedPost({
          ...selectedPost,
          comments_count: selectedPost.comments_count + 1,
        });
      }
    } catch (error) {
      console.error('Error creating comment:', error);
      setError('Error al crear el comentario');
    }
  };

  const handleLikePost = async (postId: string) => {
    if (!isSignedIn || !supabaseUserId) return;

    try {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      if (post.isLiked) {
        // Unlike the post
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', supabaseUserId);

        if (error) throw error;

        // Update posts state
        setPosts(posts.map(p => 
          p.id === postId 
            ? { ...p, likes_count: p.likes_count - 1, isLiked: false }
            : p
        ));

        // Update selected post if it exists
        if (selectedPost?.id === postId) {
          setSelectedPost({
            ...selectedPost,
            likes_count: selectedPost.likes_count - 1,
            isLiked: false,
          });
        }
      } else {
        // Like the post
        const { error } = await supabase
          .from('likes')
          .insert([
            {
              post_id: postId,
              user_id: supabaseUserId,
            },
          ]);

        if (error) throw error;

        // Update posts state
        setPosts(posts.map(p => 
          p.id === postId 
            ? { ...p, likes_count: p.likes_count + 1, isLiked: true }
            : p
        ));

        // Update selected post if it exists
        if (selectedPost?.id === postId) {
          setSelectedPost({
            ...selectedPost,
            likes_count: selectedPost.likes_count + 1,
            isLiked: true,
          });
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      setError('Error al actualizar el me gusta');
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!isSignedIn || !supabaseUserId) return;

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId)
        .eq('user_id', supabaseUserId);

      if (error) throw error;

      setPosts(posts.filter(p => p.id !== postId));
      if (selectedPost?.id === postId) {
        setSelectedPost(null);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('Error al eliminar la publicación');
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!isSignedIn || !selectedPost || !supabaseUserId) return;

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', supabaseUserId);

      if (error) throw error;

      setComments(comments.filter(c => c.id !== commentId));

      // Update the comments count in the posts list
      setPosts(posts.map(post => 
        post.id === selectedPost.id 
          ? { ...post, comments_count: post.comments_count - 1 }
          : post
      ));

      // Update the selected post
      setSelectedPost({
        ...selectedPost,
        comments_count: selectedPost.comments_count - 1,
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      setError('Error al eliminar el comentario');
    }
  };

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
      
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b mt-16 from-[#F9FAFB] via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="flex flex-col items-center">
              <LiaUsersSolid size={42} className="text-primary-600 mb-2 transition animate-bounce" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Foro de la comunidad</h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comparte tus experiencias, proyectos y opiniones sobre inteligencia artificial con otros miembros de la comunidad
            </motion.p>
            {isSignedIn && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setIsCreatingPost(true)}
                className="btn-primary flex items-center mx-auto mt-6"
              >
                <Plus size={20} className="mr-2" />
                Crear nueva publicación
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Forum Content */}
      <section className="py-12 bg-gradient-to-t from-[#F9FAFB] via-gray to-gray-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-3xl mb-6">
                {error}
              </div>
            )}

            {/* Create Post Modal */}
            {isCreatingPost && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl shadow-xl w-full max-w-lg m-4"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Crear nueva publicación</h2>
                    <form onSubmit={handleCreatePost}>
                      <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Título
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                          Contenido
                        </label>
                        <textarea
                          id="content"
                          value={newPost.content}
                          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500 h-32"
                          required
                        />
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsCreatingPost(false)}
                          className="btn-outline"
                        >
                          Cancelar
                        </button>
                        <button type="submit" className="btn-primary">
                          Publicar
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Posts List */}
            <div className="space-y-6">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Cargando publicaciones...</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">No hay publicaciones aún.</p>
                  {isSignedIn && (
                    <button
                      onClick={() => setIsCreatingPost(true)}
                      className="mt-4 text-primary-600 font-medium hover:text-primary-700"
                    >
                      ¡Sé el primero en publicar!
                    </button>
                  )}
                </div>
              ) : (
                posts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Post Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {post.user?.imageUrl ? (
                            <img
                              src={post.user.imageUrl}
                              alt={`${post.user.firstName} ${post.user.lastName}`}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">
                                {post.user?.firstName?.[0]}
                                {post.user?.lastName?.[0]}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {post.user?.firstName} {post.user?.lastName}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {formatDistanceToNow(new Date(post.created_at), {
                                addSuffix: true,
                                locale: es,
                              })}
                            </p>
                          </div>
                        </div>
                        {isSignedIn && supabaseUserId === post.user_id && (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="text-gray-400 hover:text-red-600 transition-colors"
                              title="Eliminar publicación"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Post Content */}
                      <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                      <p className="text-gray-700 mb-4">{post.content}</p>

                      {/* Post Actions */}
                      <div className="flex items-center space-x-4 text-gray-500">
                        <button
                          onClick={() => handleLikePost(post.id)}
                          className={`flex items-center space-x-1 transition-colors ${
                            post.isLiked
                              ? 'text-red-600 hover:text-red-700'
                              : 'hover:text-gray-700'
                          }`}
                          disabled={!isSignedIn}
                        >
                          <Heart
                            size={18}
                            className={post.isLiked ? 'fill-current' : ''}
                          />
                          <span>{post.likes_count}</span>
                        </button>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
                        >
                          <MessageSquare size={18} />
                          <span>{post.comments_count}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Comments Modal */}
            {selectedPost && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl shadow-xl w-full max-w-2xl m-4 max-h-[90vh] flex flex-col"
                >
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Comentarios</h2>
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      {selectedPost.user?.imageUrl ? (
                        <img
                          src={selectedPost.user.imageUrl}
                          alt={`${selectedPost.user.firstName} ${selectedPost.user.lastName}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            {selectedPost.user?.firstName?.[0]}
                            {selectedPost.user?.lastName?.[0]}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {selectedPost.user?.firstName} {selectedPost.user?.lastName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(selectedPost.created_at), {
                            addSuffix: true,
                            locale: es,
                          })}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{selectedPost.title}</h4>
                    <p className="text-gray-700">{selectedPost.content}</p>
                  </div>

                  <div className="flex-grow overflow-y-auto p-6">
                    {comments.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-500">No hay comentarios aún.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {comments.map((comment) => (
                          <div key={comment.id} className="flex space-x-3">
                            {comment.user?.imageUrl ? (
                              <img
                                src={comment.user.imageUrl}
                                alt={`${comment.user.firstName} ${comment.user.lastName}`}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-8  h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500 text-xs">
                                  {comment.user?.firstName?.[0]}
                                  {comment.user?.lastName?.[0]}
                                </span>
                              </div>
                            )}
                            <div className="flex-grow">
                              <div className="bg-gray-50 rounded-3xl p-3">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-medium text-gray-900">
                                    {comment.user?.firstName} {comment.user?.lastName}
                                  </h4>
                                  {isSignedIn && supabaseUserId === comment.user_id && (
                                    <button
                                      onClick={() => handleDeleteComment(comment.id)}
                                      className="text-gray-400 hover:text-red-600 transition-colors"
                                      title="Eliminar comentario"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  )}
                                </div>
                                <p className="text-gray-700">{comment.content}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDistanceToNow(new Date(comment.created_at), {
                                  addSuffix: true,
                                  locale: es,
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {isSignedIn ? (
                    <div className="p-6 border-t">
                      <form onSubmit={handleCreateComment} className="flex space-x-3">
                        <input
                          type="text"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Escribe un comentario..."
                          className="flex-grow px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                        <button
                          type="submit"
                          className="btn-primary px-4"
                          disabled={!newComment.trim()}
                        >
                          <Send size={18} />
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="p-6 border-t text-center">
                      <p className="text-gray-600 mb-2">
                        Inicia sesión para comentar
                      </p>
                      <a
                        href="/sign-in"
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        Iniciar sesión
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { confirmDelete } from './sweetalert';
import { useUser } from '@clerk/clerk-react';
import CommentForm from './CommentForm';

interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  created_at: string;
  deleted_at?: string | null;
}

interface UserProfile {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  imageUrl?: string;
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
  const { user } = useUser();
  const [editingPost, setEditingPost] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editCommentContent, setEditCommentContent] = useState('');
  const { id } = useParams<{ id: string }>();
  const { isSignedIn } = useUser();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [commentUserProfiles, setCommentUserProfiles] = useState<Record<string, UserProfile>>({});

  useEffect(() => {
    const fetchPostAndComments = async () => {
      setLoading(true);
      const { data: postData } = await supabase.from('posts').select('*').eq('id', id).single();
      const { data: commentData } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });
      setPost(postData);
      setComments(commentData || []);
      // Obtener perfil del usuario del post
      if (postData?.user_id) {
        try {
          const res = await fetch(`/api/clerk-profile/${postData.user_id}`);
          if (res.ok) {
            const user = await res.json();
            setUserProfile({
              id: postData.user_id,
              firstName: user.first_name,
              lastName: user.last_name,
              username: user.username,
              imageUrl: user.image_url,
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
      // Obtener perfiles de usuario de los comentarios
      if (commentData && commentData.length > 0) {
        const userIds = Array.from(new Set(commentData.map((c: Comment) => c.user_id)));
        const fetchProfiles = async () => {
          const profiles: Record<string, UserProfile> = {};
          for (const id of userIds) {
            try {
              const res = await fetch(`/api/clerk-profile/${id}`);
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
          setCommentUserProfiles(profiles);
        };
        fetchProfiles();
      }
      setLoading(false);
    };
    fetchPostAndComments();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!post) return <p>Discusión no encontrada</p>;

  // Funciones para editar, borrar y restaurar post
  const handleEditPost = async () => {
    await supabase.from('posts').update({ title: editTitle, content: editContent, updated_at: new Date().toISOString() }).eq('id', post.id);
    setEditingPost(false);
    window.location.reload();
  };
  const handleDeletePost = async () => {
    const result = await confirmDelete('¿Deseas eliminar este post?');
    if (result.isConfirmed) {
      await supabase.from('posts').update({ deleted_at: new Date().toISOString() }).eq('id', post.id);
      window.location.reload();
    }
  };
  const handleRestorePost = async () => {
    await supabase.from('posts').update({ deleted_at: null }).eq('id', post.id);
    window.location.reload();
  };

  // Funciones para editar, borrar y restaurar comentarios
  const handleEditComment = async (commentId: string) => {
    await supabase.from('comments').update({ content: editCommentContent, updated_at: new Date().toISOString() }).eq('id', commentId);
    setEditingCommentId(null);
    window.location.reload();
  };
  const handleDeleteComment = async (commentId: string) => {
    const result = await confirmDelete('¿Deseas eliminar este comentario?');
    if (result.isConfirmed) {
      await supabase.from('comments').update({ deleted_at: new Date().toISOString() }).eq('id', commentId);
      window.location.reload();
    }
  };
  const handleRestoreComment = async (commentId: string) => {
    await supabase.from('comments').update({ deleted_at: null }).eq('id', commentId);
    window.location.reload();
  };

  return (
    <div className="w-full bg-gradient-to-b min-h-screen mt-14 from-gray-300 via-gray to-gray-300">
      <section className="min-h-full py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link to="/foro" className="text-primary-600 hover:underline">← Volver al foro</Link>
            <div className="rounded-3xl bg-white shadow-lg border border-gray-200 p-8 mt-4 mb-8">
              <div className="flex items-center mb-2">
                {userProfile?.imageUrl ? (
                  <img src={userProfile.imageUrl} alt="avatar" className="w-10 h-10 rounded-full mr-3 border" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-600 font-bold">?</div>
                )}
                <div>
                  <span className="font-semibold text-gray-900">
                    {userProfile?.firstName || 'Usuario'} {userProfile?.lastName || ''}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    ({userProfile?.username || post.user_id?.slice(0, 6)})
                  </span>
                </div>
              </div>
              {post.deleted_at ? (
                <div className="text-red-500 font-semibold">Este post ha sido eliminado.</div>
              ) : editingPost ? (
                <div className="my-4">
                  <input
                    className="w-full border rounded-3xl px-3 py-2 mb-2"
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                  />
                  <textarea
                    className="w-full border rounded-3xl px-3 py-2 mb-2"
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-3xl" onClick={handleEditPost}>Guardar</button>
                    <button className="bg-gray-300 px-4 py-2 rounded-3xl" onClick={() => setEditingPost(false)}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-primary-600 mb-2">{post.title}</h1>
                  <p className="text-gray-700 mt-2 mb-2 whitespace-pre-line">{post.content}</p>
                </>
              )}
              <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                <span>Publicado el {new Date(post.created_at).toLocaleString()}</span>
                {/* Botones de editar/borrar/restaurar solo para el autor */}
                {user?.id === post.user_id && (
                  <div className="flex gap-2">
                    {!post.deleted_at ? (
                      <>
                        <button className="text-blue-600 hover:underline" onClick={() => {
                          setEditingPost(true);
                          setEditTitle(post.title);
                          setEditContent(post.content);
                        }}>Editar</button>
                        <button className="text-red-600 hover:underline" onClick={handleDeletePost}>Borrar</button>
                      </>
                    ) : (
                      <button className="text-green-600 hover:underline" onClick={handleRestorePost}>Restaurar</button>
                    )}
                  </div>
                )}
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-4">Comentarios</h2>
            {isSignedIn && <CommentForm postId={post.id} onCommentCreated={() => window.location.reload()} />}
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="border rounded-3xl p-3 bg-gray-50">
                  <div className="flex items-center mb-2">
                    {commentUserProfiles[comment.user_id]?.imageUrl ? (
                      <img src={commentUserProfiles[comment.user_id].imageUrl} alt="avatar" className="w-8 h-8 rounded-full mr-2 border" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center text-gray-600 font-bold">?</div>
                    )}
                    <span className="font-semibold text-gray-900">
                      {commentUserProfiles[comment.user_id]?.firstName || 'Usuario'} {commentUserProfiles[comment.user_id]?.lastName || ''}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({commentUserProfiles[comment.user_id]?.username || comment.user_id.slice(0, 6)})
                    </span>
                  </div>
                  {comment.deleted_at ? (
                    <div className="text-red-500 font-semibold">Este comentario ha sido eliminado.</div>
                  ) : editingCommentId === comment.id ? (
                    <div className="my-2">
                      <textarea
                        className="w-full border rounded-3xl px-3 py-2 mb-2"
                        value={editCommentContent}
                        onChange={e => setEditCommentContent(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-3xl" onClick={() => handleEditComment(comment.id)}>Guardar</button>
                        <button className="bg-gray-300 px-4 py-2 rounded-3xl" onClick={() => setEditingCommentId(null)}>Cancelar</button>
                      </div>
                    </div>
                  ) : (
                    <p>{comment.content}</p>
                  )}
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                    <span>{new Date(comment.created_at).toLocaleString()}</span>
                    {user?.id === comment.user_id && (
                      <div className="flex gap-2">
                        {!comment.deleted_at ? (
                          <>
                            <button className="text-blue-600 hover:underline" onClick={() => {
                              setEditingCommentId(comment.id);
                              setEditCommentContent(comment.content);
                            }}>Editar</button>
                            <button className="text-red-600 hover:underline" onClick={() => handleDeleteComment(comment.id)}>Borrar</button>
                          </>
                        ) : (
                          <button className="text-green-600 hover:underline" onClick={() => handleRestoreComment(comment.id)}>Restaurar</button>
                        )}
                      </div>
                    )}
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

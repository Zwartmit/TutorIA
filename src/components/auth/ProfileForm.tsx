import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Upload, Loader2 } from 'lucide-react';

interface ProfileFormData {
  firstName: string;
  lastName: string;
}

const NAME_MAX_LENGTH = 64;

const ProfileForm: React.FC = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(user?.imageUrl || null);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const trimmedFirstName = formData.firstName.trim();
    const trimmedLastName = formData.lastName.trim();

    if (!trimmedFirstName) {
      setError('El nombre es obligatorio');
      return false;
    }

    if (!trimmedLastName) {
      setError('El apellido es obligatorio');
      return false;
    }

    if (trimmedFirstName.length > NAME_MAX_LENGTH) {
      setError(`El nombre no puede exceder ${NAME_MAX_LENGTH} caracteres`);
      return false;
    }

    if (trimmedLastName.length > NAME_MAX_LENGTH) {
      setError(`El apellido no puede exceder ${NAME_MAX_LENGTH} caracteres`);
      return false;
    }

    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (!nameRegex.test(trimmedFirstName)) {
      setError('El nombre solo puede contener letras, espacios, guiones y apóstrofes');
      return false;
    }

    if (!nameRegex.test(trimmedLastName)) {
      setError('El apellido solo puede contener letras, espacios, guiones y apóstrofes');
      return false;
    }

    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('La imagen no debe superar los 10MB');
        return;
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setError('El archivo debe ser una imagen (JPEG, PNG o GIF)');
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      try {
        await user?.update({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
        });
      } catch (error: any) {
        console.error('Error updating name:', error);
        throw new Error(error.errors?.[0]?.message || 'Error al actualizar el nombre');
      }

      if (imageFile) {
        try {
          await user?.setProfileImage({ file: imageFile });
        } catch (error: any) {
          console.error('Error updating profile image:', error);
          throw new Error(error.errors?.[0]?.message || 'Error al actualizar la imagen de perfil');
        }
      }

      window.location.href = '/';
    } catch (error: any) {
      console.error('Error updating profile:', error);
      
      let errorMessage = 'Hubo un error al actualizar el perfil.';
      
      if (error.errors && Array.isArray(error.errors)) {
        errorMessage = error.errors.map((e: any) => e.message).join('\n');
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete tu perfil</h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-600 whitespace-pre-line">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Upload size={32} />
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full cursor-pointer hover:bg-primary-700 transition-colors"
                >
                  <Upload size={16} />
                </label>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/jpeg,image/png,image/gif"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                maxLength={NAME_MAX_LENGTH}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.firstName.length}/{NAME_MAX_LENGTH}
              </p>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                maxLength={NAME_MAX_LENGTH}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.lastName.length}/{NAME_MAX_LENGTH}
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Guardando...
                </>
              ) : (
                'Guardar perfil'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
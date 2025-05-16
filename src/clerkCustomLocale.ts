import { esMX } from '@clerk/localizations';

export const customEsMX = {
  ...esMX,
  signIn: {
    ...esMX.signIn,
    start: {
      ...esMX.signIn?.start,
      title: "¡Hola!",
      subtitle: "Inicia sesión para acceder a todos los recursos que tenemos para ti",
      actionText: "¿Aún no tienes una cuenta?",
      actionLink: "Regístrate",
      emailPlaceholder: "Tu correo electrónico personalizado",
      passwordPlaceholder: "Tu contraseña personalizada"
    },
  },
  signUp: {
    ...esMX.signUp,
    start: {
      ...esMX.signUp?.start,
      title: "¡Hola!",
      subtitle: "Regístrate para acceder a todos los recursos que tenemos para ti",
      actionText: "¿Ya tienes una cuenta?",
      actionLink: "Inicia sesión",
    },
  },
  userProfile: {
    ...esMX.userProfile,
    start: {
      ...esMX.userProfile?.start,
      headerTitle: "Perfil de usuario personalizado",
      headerSubtitle: "Gestiona tu información personal y preferencias.",
    },
  },
  // Puedes agregar más personalizaciones siguiendo la estructura de esES
};

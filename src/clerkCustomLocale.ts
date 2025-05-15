import { esES } from '@clerk/localizations';

export const customEsES = {
  ...esES,
  signIn: {
    ...esES.signIn,
    start: {
      ...esES.signIn?.start,
      title: "¡Hola!",
      subtitle: "Inicia sesión para acceder a todos los recursos que tenemos para ti",
      actionText: "¿Aún no tienes una cuenta?",
      actionLink: "Regístrate",
    },
  },
  signUp: {
    ...esES.signUp,
    start: {
      ...esES.signUp?.start,
      title: "Crea tu cuenta en TutorIA",
      subtitle: "Regístrate para acceder a todos los recursos que tenemos para ti",
      actionText: "¿Ya tienes una cuenta?",
      actionLink: "Inicia sesión",
    },
  },
  userProfile: {
    ...esES.userProfile,
    start: {
      ...esES.userProfile?.start,
      headerTitle: "Perfil de usuario personalizado",
      headerSubtitle: "Gestiona tu información personal y preferencias.",
    },
  },
  // Puedes agregar más personalizaciones siguiendo la estructura de esES
};

# TutorIA - Plataforma Educativa de IA

TutorIA es una plataforma educativa moderna diseñada para ayudar a las personas a comprender y utilizar la inteligencia artificial. La plataforma ofrece contenido educativo, guías prácticas, herramientas de IA y una comunidad activa.

## Características

- 📚 **Contenido Educativo**: Explicaciones detalladas sobre conceptos de IA
- 🛠️ **Herramientas de IA**: Directorio curado de herramientas populares de IA
- 📝 **Guías Paso a Paso**: Tutoriales prácticos para usar herramientas de IA
- 📊 **Evaluaciones**: Tests interactivos para medir el progreso
- 💬 **Foro Comunitario**: Espacio para compartir experiencias y proyectos
- 👤 **Perfiles de Usuario**: Sistema de autenticación y perfiles personalizados

## Tecnologías

- **Frontend**: React, TypeScript, Vite
- **Estilos**: Tailwind CSS
- **Autenticación**: Clerk
- **Base de Datos**: Supabase
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formateo de Fechas**: date-fns

## Requisitos Previos

- Node.js 18.0 o superior
- npm 9.0 o superior
- Cuenta en Clerk (autenticación)
- Cuenta en Supabase (base de datos)

## Configuración del Proyecto

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd tutoria-ai
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
   VITE_SUPABASE_URL=tu_supabase_url
   VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
tutoria-ai/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/       # Layouts de la aplicación
│   ├── lib/           # Utilidades y configuraciones
│   ├── pages/         # Páginas de la aplicación
│   └── main.tsx       # Punto de entrada
├── public/           # Archivos estáticos
├── supabase/         # Migraciones de base de datos
└── package.json      # Dependencias y scripts
```

## Base de Datos

El proyecto utiliza Supabase como base de datos y incluye las siguientes tablas:

- `posts`: Publicaciones del foro
- `comments`: Comentarios en las publicaciones
- `likes`: Me gusta en las publicaciones
- `clerk_user_mapping`: Mapeo entre usuarios de Clerk y Supabase

## Características de Seguridad

- Autenticación segura con Clerk
- Row Level Security (RLS) en Supabase
- Validación de datos en frontend y backend
- Protección contra XSS y CSRF

## Contribuir

1. Haz fork del repositorio
2. Crea una rama para tu feature: `git checkout -b feature/nueva-caracteristica`
3. Haz commit de tus cambios: `git commit -m 'Añade nueva característica'`
4. Haz push a la rama: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
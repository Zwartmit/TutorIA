
export const guides: Guide[] = [
    {
      id: 'consulta-chatgpt',
      title: 'Cómo hacer una consulta en ChatGPT',
      description: 'Aprende a realizar preguntas efectivas y aprovechar al máximo ChatGPT para obtener respuestas útiles y precisas, con ejemplos y consejos para cada situación.',
      category: 'IA Conversacional',
          tool: 'ChatGPT',
      imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Accede a ChatGPT',
          content: 'Visita https://chat.openai.com/ desde tu navegador preferido. Puedes explorar la plataforma sin cuenta, pero para guardar tus conversaciones y acceder a funciones avanzadas, regístrate gratuitamente.',
          imageUrl: 'https://i.imgur.com/7y0dJ4W.png', // Pantalla de inicio de ChatGPT
        },
        {
          title: 'Crea y protege tu cuenta',
          content: 'Haz clic en “Iniciar Sesión” o “Registrarse”. Ingresa tu correo electrónico y crea una contraseña segura. Verifica tu email y, si es posible, activa la verificación en dos pasos para mayor seguridad.',
          imageUrl: 'https://i.imgur.com/4kY8d5e.png', // Registro seguro
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Al ingresar, verás un cuadro de texto en la parte inferior para tus preguntas, un historial de conversaciones a la izquierda y botones para ajustes y ayuda. Explora los menús para conocer las opciones.',
          imageUrl: 'https://i.imgur.com/6i2V4kQ.png', // Interfaz ChatGPT
        },
        {
          title: 'Escribe una consulta clara y específica',
          content: 'Redacta tu pregunta de forma precisa. Ejemplo básico: “¿Cómo hacer una tabla dinámica en Excel?” Ejemplo avanzado: “¿Cómo puedo crear una tabla dinámica en Excel 2021 para analizar ventas por mes y producto?”',
          imageUrl: 'https://i.imgur.com/2X2nYyT.png', // Ejemplo de consulta
        },
        {
          title: 'Utiliza prompts y contexto',
          content: 'Agrega contexto si buscas respuestas más personalizadas. Por ejemplo: “Soy profesor de secundaria, ¿cómo explico una tabla dinámica a mis alumnos?”',
          imageUrl: 'https://i.imgur.com/8n2Q7Xr.png', // Prompt contextual
        },
        {
          title: 'Aprovecha ejemplos y formatos',
          content: 'Pide ejemplos de código, listas, tablas o pasos. Ejemplo: “Dame un ejemplo de código Python para leer un archivo CSV.”',
          imageUrl: 'https://i.imgur.com/1P0y3dK.png', // Ejemplo de código
        },
        {
          title: 'Refina y repregunta',
          content: 'Si la respuesta no es suficiente, pide aclaraciones o más detalles. Puedes decir: “¿Puedes explicarlo paso a paso?” o “¿Tienes otra alternativa?”',
          imageUrl: 'https://i.imgur.com/3t3Jg8T.png', // Refinar consulta
        },
        {
          title: 'Guarda, comparte y reutiliza',
          content: 'Copia la respuesta útil, marca la conversación como favorita o comparte el enlace. Puedes volver a tus chats desde el historial.',
          imageUrl: 'https://i.imgur.com/5Q9bYj9.png', // Guardar o compartir respuesta
        },
        {
          title: 'Consejos y advertencias',
          content: 'No compartas información personal o confidencial. Verifica siempre datos críticos, ya que ChatGPT puede cometer errores. Usa fuentes oficiales para información sensible.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Explora funciones avanzadas',
          content: 'Prueba los plugins, la generación de imágenes o la integración con otras herramientas si tienes una suscripción Plus.',
          imageUrl: 'https://i.imgur.com/D3w8b7K.png', // Funciones avanzadas
        },
      ],
    },
    {
      id: 'consulta-perplexity',
      title: 'Cómo hacer una consulta en Perplexity',
      description: 'Descubre cómo usar Perplexity AI para obtener respuestas con fuentes verificadas en tiempo real, con consejos, ejemplos y buenas prácticas para búsquedas efectivas.',
      category: 'IA Conversacional',
          tool: 'Perplexity',
      imageUrl: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Accede a Perplexity',
          content: 'Visita https://www.perplexity.ai/ desde tu navegador. No es necesario registrarse, pero si creas una cuenta puedes guardar tu historial y preferencias.',
          imageUrl: 'https://i.imgur.com/0w1y1uF.png', // Pantalla de inicio Perplexity
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'La pantalla principal muestra un cuadro de búsqueda, historial a la izquierda y opciones de configuración. Explora los menús para conocer funciones como “Copilot” y filtros de búsqueda.',
          imageUrl: 'https://i.imgur.com/8Xw6tF3.png', // Interfaz Perplexity
        },
        {
          title: 'Escribe tu pregunta de forma clara',
          content: 'Redacta tu consulta de manera específica. Ejemplo: “¿Cuáles son los beneficios del ayuno intermitente según estudios recientes?” Añade contexto si buscas respuestas más precisas.',
          imageUrl: 'https://i.imgur.com/6yJv3aM.png', // Ejemplo de consulta Perplexity
        },
        {
          title: 'Revisa la respuesta y las fuentes',
          content: 'Perplexity te mostrará una respuesta resumida y un listado de fuentes. Haz clic en los enlaces para verificar la información y ampliar detalles. Usa el botón de “más detalles” para expandir la explicación.',
          imageUrl: 'https://i.imgur.com/2l1g3qL.png', // Fuentes y respuesta Perplexity
        },
        {
          title: 'Utiliza el modo Copilot',
          content: 'Activa Copilot para recibir sugerencias automáticas y recomendaciones de preguntas relacionadas. Esto es útil para investigaciones profundas o temas complejos.',
          imageUrl: 'https://i.imgur.com/5e1v5tN.png', // Copilot Perplexity
        },
        {
          title: 'Ajusta y repregunta',
          content: 'Si la respuesta no es lo que esperabas, reformula tu pregunta o pide ejemplos adicionales. Ejemplo: “¿Puedes darme un resumen más técnico?”',
          imageUrl: 'https://i.imgur.com/7g3f2kP.png', // Ajustar consulta Perplexity
        },
        {
          title: 'Guarda y comparte resultados',
          content: 'Puedes copiar la respuesta, guardar el enlace o exportar los resultados en diferentes formatos. Ideal para trabajos académicos o colaboraciones.',
          imageUrl: 'https://i.imgur.com/3t4b6kD.png', // Compartir resultados Perplexity
        },
        {
          title: 'Consejos y advertencias',
          content: 'No compartas datos personales. Verifica siempre la información en fuentes oficiales, especialmente en temas de salud, finanzas o legales. Perplexity puede citar fuentes, pero revisa la fecha y confiabilidad de cada una.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Explora funciones adicionales',
          content: 'Prueba la extensión de Chrome para búsquedas rápidas y la integración con otras herramientas como Google Docs o Slack.',
          imageUrl: 'https://i.imgur.com/4W8y5kQ.png', // Funciones adicionales
        },
      ],
    },
    {
      id: 'imagefx-google',
      title: 'Cómo generar una imagen en ImageFX (Google Labs)',
      description: 'Guía profesional y detallada para crear imágenes con IA usando ImageFX de Google, con ejemplos, consejos y advertencias.',
      category: 'Generación de Imágenes',
          tool: 'ImageFX',
      imageUrl: 'https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Accede a ImageFX',
          content: 'Visita https://aitestkitchen.withgoogle.com/tools/image-fx e inicia sesión con tu cuenta de Google personal (no empresarial). Si no tienes cuenta, créala gratuitamente.',
          imageUrl: 'https://i.imgur.com/5p6ZyQm.png', // Inicio ImageFX
        },
        {
          title: 'Explora la interfaz',
          content: 'Familiarízate con el área de generación, galería de imágenes y opciones de configuración. Puedes ver ejemplos y explorar imágenes públicas para inspirarte.',
          imageUrl: 'https://i.imgur.com/1n7Q2lQ.png', // Interfaz ImageFX
        },
        {
          title: 'Describe tu imagen de forma detallada',
          content: 'En el cuadro de texto, escribe una descripción lo más precisa posible. Ejemplo: “Un paisaje futurista al atardecer, estilo acuarela, con rascacielos y árboles luminosos”. Agrega detalles de estilo, colores y composición.',
          imageUrl: 'https://i.imgur.com/2g5t8mN.png', // Ejemplo prompt ImageFX
        },
        {
          title: 'Utiliza palabras clave y estilos',
          content: 'Puedes especificar estilos artísticos, emociones o técnicas. Ejemplo: “Estilo cyberpunk, colores neón, perspectiva aérea”.',
          imageUrl: 'https://i.imgur.com/4v9R7mO.png', // Palabras clave y estilos
        },
        {
          title: 'Genera la imagen',
          content: 'Haz clic en “Generar”. ImageFX procesará tu descripción y mostrará varias opciones. Espera unos segundos mientras se crean las imágenes.',
          imageUrl: 'https://i.imgur.com/7c1l2tE.png', // Proceso de generación
        },
        {
          title: 'Revisa y selecciona la mejor opción',
          content: 'Analiza las imágenes generadas, haz clic para ampliar y examina los detalles. Si ninguna te convence, ajusta la descripción y vuelve a intentarlo.',
          imageUrl: 'https://i.imgur.com/3a7f5hQ.png', // Selección de imagen
        },
        {
          title: 'Descarga o comparte tu imagen',
          content: 'Selecciona la imagen que más te guste y usa las opciones para descargarla en alta resolución o compartir el enlace directo.',
          imageUrl: 'https://i.imgur.com/6d2k8pN.png', // Descargar o compartir
        },
        {
          title: 'Consejos y advertencias',
          content: 'Evita descripciones ambiguas. No generes imágenes con contenido sensible o que infrinja derechos de autor. Revisa los términos de uso de Google Labs.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Experimenta y aprende',
          content: 'Prueba diferentes estilos, temas y combinaciones. Consulta la galería de la comunidad para inspiración y aprende de los prompts más exitosos.',
          imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Galería de comunidad
        },
      ],
    },
    {
      id: 'reve-ai',
      title: 'Cómo generar una imagen en REVE',
      description: 'Aprende a crear imágenes personalizadas con REVE, una IA avanzada para generación visual. Incluye consejos, advertencias y buenas prácticas.',
      category: 'Generación de Imágenes',
          tool: 'REVE',
      imageUrl: 'https://images.pexels.com/photos/7713192/pexels-photo-7713192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Crea tu cuenta en REVE',
          content: 'Entra en https://reve.ai/ y regístrate con tu correo electrónico. Confirma tu email y accede al panel principal.',
          imageUrl: 'https://i.imgur.com/3i6QzF3.png', // Registro REVE
        },
        {
          title: 'Conoce la interfaz',
          content: 'Explora el área de generación de imágenes, historial de creaciones y configuraciones de usuario. Observa ejemplos y tutoriales que ofrece la plataforma.',
          imageUrl: 'https://i.imgur.com/2e7XyZ1.png', // Interfaz REVE
        },
        {
          title: 'Describe tu imagen detalladamente',
          content: 'Introduce una descripción precisa en el cuadro de texto. Ejemplo: “Retrato de una persona sonriente, fondo azul, estilo realista, iluminación suave”. Puedes especificar técnica, colores, composición y más.',
          imageUrl: 'https://i.imgur.com/6d5TgYp.png', // Prompt REVE
        },
        {
          title: 'Ajusta parámetros avanzados',
          content: 'REVE permite seleccionar cantidad de imágenes, estilos predefinidos, relación de aspecto y nivel de detalle. Experimenta con estas opciones para mejores resultados.',
          imageUrl: 'https://i.imgur.com/0n8V3aB.png', // Parámetros avanzados
        },
        {
          title: 'Haz clic en “Generar”',
          content: 'La IA procesará tu descripción y mostrará varias versiones. Puedes seleccionar una para refinarla o modificar el prompt para intentarlo de nuevo.',
          imageUrl: 'https://i.imgur.com/9m4K8qR.png', // Proceso de generación
        },
        {
          title: 'Refina y mejora tu imagen',
          content: 'Usa la opción de “mejorar” para optimizar imágenes vagas o poco detalladas. Puedes modificar partes específicas o combinar estilos.',
          imageUrl: 'https://i.imgur.com/5z6YdQe.png', // Refinar imagen
        },
        {
          title: 'Descarga o comparte tu creación',
          content: 'Cuando estés satisfecho, descarga la imagen en alta resolución o compártela desde la plataforma. Consulta los términos de uso para proyectos comerciales.',
          imageUrl: 'https://i.imgur.com/1a7g3zK.png', // Descargar o compartir
        },
        {
          title: 'Consejos y advertencias',
          content: 'Evita prompts ambiguos o demasiado cortos. No generes imágenes ofensivas o que infrinjan derechos de autor. Revisa la política de privacidad y uso de datos de REVE.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Aprende y experimenta',
          content: 'Explora la galería de la comunidad, participa en retos y aprende de los prompts más populares para mejorar tus resultados.',
          imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Galería comunidad
        },
      ],
    },
    // {
    //   id: 'web-bolt-new',
    //   title: 'Cómo crear una web en Bolt new',
    //   description: 'Crea una página web profesional en minutos usando la IA de Bolt.new, sin necesidad de programar. Incluye ejemplos, advertencias y buenas prácticas.',
    //   category: 'Programación',
    //       tool: 'Bolt.new',
    //   imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //   steps: [
    //     {
    //       title: 'Accede a Bolt.new',
    //       content: 'Visita https://bolt.new/ y haz clic en “Comenzar” para iniciar un nuevo proyecto. No necesitas experiencia previa en programación.',
    //       imageUrl: 'https://i.imgur.com/9m3Yy9W.png', // Inicio Bolt.new
    //     },
    //     {
    //       title: 'Describe tu web a la IA',
    //       content: 'Explica claramente el propósito de tu web y los elementos que deseas incluir (ejemplo: “Quiero una web para mi portafolio de diseño con una galería y formulario de contacto”). Sé específico para mejores resultados.',
    //       imageUrl: 'https://i.imgur.com/2y4Xj4K.png', // Prompt Bolt.new
    //     },
    //     {
    //       title: 'Revisa la propuesta inicial',
    //       content: 'La IA generará una estructura y diseño básico. Examina las secciones sugeridas y elige las que se adapten a tus necesidades.',
    //       imageUrl: 'https://i.imgur.com/6k3Tg4Q.png', // Propuesta inicial
    //     },
    //     {
    //       title: 'Personaliza el diseño y contenido',
    //       content: 'Modifica textos, imágenes, colores y disposición de las secciones desde el editor visual. Puedes agregar, eliminar o reorganizar bloques fácilmente.',
    //       imageUrl: 'https://i.imgur.com/7h6Pj9L.png', // Editor visual
    //     },
    //     {
    //       title: 'Configura la navegación y opciones avanzadas',
    //       content: 'Ajusta el menú de navegación, enlaces, estilos de botones y opciones de accesibilidad. Prueba el modo oscuro o claro según prefieras.',
    //       imageUrl: 'https://i.imgur.com/5q8Yk2R.png', // Opciones avanzadas
    //     },
    //     {
    //       title: 'Previsualiza tu sitio',
    //       content: 'Utiliza la opción de previsualización para ver cómo se verá tu web en computadoras y móviles antes de publicarla.',
    //       imageUrl: 'https://i.imgur.com/1p7Yl7Q.png', // Previsualización
    //     },
    //     {
    //       title: 'Publica tu web',
    //       content: 'Cuando estés satisfecho, haz clic en “Publicar”. Bolt.new se encarga del hosting y te proporciona un enlace para compartir.',
    //       imageUrl: 'https://i.imgur.com/3k8Yp5N.png', // Publicar web
    //     },
    //     {
    //       title: 'Consejos y advertencias',
    //       content: 'Revisa ortografía y enlaces antes de publicar. No incluyas información sensible. Consulta los términos de uso si tu web será comercial.',
    //       imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
    //     },
    //     {
    //       title: 'Mejora y actualiza tu web',
    //       content: 'Puedes volver a editar tu sitio en cualquier momento para agregar nuevas secciones, actualizar información o cambiar el diseño.',
    //       imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Actualizar web
    //     },
    //   ],
    // },
    {
      id: 'copilot-vscode',
      title: 'Cómo usar Copilot en VSCode',
      description: 'Descubre cómo instalar y aprovechar GitHub Copilot en Visual Studio Code para programar más rápido, con ejemplos, advertencias y buenas prácticas.',
      category: 'Programación',
          tool: 'Copilot',
      imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Instala la extensión Copilot',
          content: 'Abre VSCode, ve a la sección de Extensiones (Ctrl+Shift+X), busca “GitHub Copilot”, haz clic en “Instalar” y reinicia el editor para activar la extensión.',
          imageUrl: 'https://i.imgur.com/7XkR2yT.png', // Instalar extensión Copilot
        },
        {
          title: 'Conecta tu cuenta GitHub',
          content: 'Sigue las instrucciones para iniciar sesión con tu cuenta de GitHub y autorizar Copilot. Si es la primera vez, puede que necesites aceptar términos y condiciones.',
          imageUrl: 'https://i.imgur.com/4e7V8nQ.png', // Login GitHub Copilot
        },
        {
          title: 'Configura Copilot según tus preferencias',
          content: 'Accede a la configuración de Copilot (desde el icono en la barra lateral o el menú de extensiones). Ajusta opciones como frecuencia de sugerencias, atajos de teclado y comportamiento de autocompletado.',
          imageUrl: 'https://i.imgur.com/1n4W5kO.png', // Configuración Copilot
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Las sugerencias de Copilot aparecerán en gris mientras escribes código. Usa Tab para aceptar, Esc para descartar o las flechas para explorar sugerencias alternativas.',
          imageUrl: 'https://i.imgur.com/8k3P7hL.png', // Interfaz Copilot
        },
        {
          title: 'Empieza a programar con IA',
          content: 'Escribe comentarios descriptivos o nombres de funciones para obtener sugerencias relevantes. Ejemplo: escribe “// función para calcular promedio” y Copilot generará el código automáticamente.',
          imageUrl: 'https://i.imgur.com/2y6J4pQ.png', // Sugerencia de código
        },
        {
          title: 'Revisa y edita las sugerencias',
          content: 'Siempre revisa el código sugerido antes de usarlo. Copilot puede cometer errores o no seguir las mejores prácticas de tu proyecto.',
          imageUrl: 'https://i.imgur.com/3k7Yt8N.png', // Revisión de sugerencias
        },
        {
          title: 'Solicita ejemplos y explicaciones',
          content: 'Puedes pedir ejemplos específicos en comentarios, como “// ejemplo de llamada a API REST en JavaScript”. Copilot generará el bloque de código correspondiente.',
          imageUrl: 'https://i.imgur.com/5p8Tg2R.png', // Ejemplo en comentario
        },
        {
          title: 'Consejos y advertencias',
          content: 'No aceptes sugerencias sin revisarlas. No incluyas información confidencial en tus prompts. Usa Copilot como apoyo, no como reemplazo total de la revisión humana.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Explora funciones avanzadas',
          content: 'Prueba Copilot Chat (si está disponible) para consultas en lenguaje natural, generación de documentación y explicación de código.',
          imageUrl: 'https://i.imgur.com/6t2Yk4Q.png', // Copilot Chat
        },
      ],
    },
    {
      id: 'copyai',
      title: 'Cómo generar un texto en Copy.ai',
      description: 'Genera textos creativos, publicitarios o descriptivos con la ayuda de Copy.ai en pocos pasos. Incluye ejemplos, advertencias y buenas prácticas.',
      category: 'Generación de Texto',
          tool: 'Copy.ai',
      imageUrl: 'https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Regístrate en Copy.ai',
          content: 'Crea una cuenta en https://www.copy.ai/. La prueba gratuita no requiere tarjeta de crédito. Completa el registro y accede al panel principal.',
          imageUrl: 'https://i.imgur.com/1a7g3zK.png', // Registro Copy.ai
        },
        {
          title: 'Selecciona idioma y plantilla',
          content: 'Elige el idioma de entrada y salida, y selecciona la plantilla adecuada (blog, anuncio, producto, email, etc.). Cada plantilla está optimizada para un tipo de contenido.',
          imageUrl: 'https://i.imgur.com/2y4Xj4K.png', // Selección plantilla
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Explora las opciones de edición, historial, y herramientas adicionales como reescritura, resumen o generación de ideas.',
          imageUrl: 'https://i.imgur.com/6k3Tg4Q.png', // Interfaz Copy.ai
        },
        {
          title: 'Escribe tu prompt o idea',
          content: 'Introduce tu tema o idea en el área de trabajo. Sé claro y específico. Ejemplo: “Texto publicitario para una tienda de ropa ecológica en primavera”.',
          imageUrl: 'https://i.imgur.com/2g5t8mN.png', // Prompt Copy.ai
        },
        {
          title: 'Ajusta el tono y la extensión',
          content: 'Configura el tono (formal, informal, persuasivo, etc.) y la longitud del texto según tus necesidades.',
          imageUrl: 'https://i.imgur.com/4v9R7mO.png', // Ajuste de tono
        },
        {
          title: 'Genera y revisa el texto',
          content: 'Haz clic en “Generar” y revisa el texto propuesto. Puedes pedir más alternativas si no te convence el primer resultado.',
          imageUrl: 'https://i.imgur.com/7c1l2tE.png', // Generar texto
        },
        {
          title: 'Edita y personaliza tu contenido',
          content: 'Modifica el texto generado para adaptarlo a tu estilo o necesidades específicas. Añade información relevante o elimina partes innecesarias.',
          imageUrl: 'https://i.imgur.com/3a7f5hQ.png', // Edición de texto
        },
        {
          title: 'Descarga o copia el texto final',
          content: 'Cuando estés satisfecho, descarga el texto o cópialo para usarlo en tu web, redes sociales o campañas publicitarias.',
          imageUrl: 'https://i.imgur.com/6d2k8pN.png', // Descargar texto
        },
        {
          title: 'Consejos y advertencias',
          content: 'Revisa la ortografía y coherencia antes de publicar. No uses textos generados para temas sensibles sin revisión profesional. Respeta derechos de autor y evita contenido engañoso.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Experimenta con diferentes prompts',
          content: 'Prueba diferentes enfoques y plantillas para obtener los mejores resultados. Analiza qué tipo de prompts generan textos más efectivos para tu audiencia.',
          imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Experimentar prompts
        },
      ],
    },
    {
      id: 'writesonic',
      title: 'Cómo generar contenido en Writesonic',
      description: 'Aprende a crear artículos, posts y otros contenidos de alta calidad usando la IA de Writesonic. Incluye ejemplos, advertencias y buenas prácticas.',
      category: 'Generación de Texto',
          tool: 'Writesonic',
      imageUrl: 'https://images.pexels.com/photos/7713192/pexels-photo-7713192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Crea una cuenta en Writesonic',
          content: 'Regístrate en https://writesonic.com/ con tu correo electrónico. Accede al panel principal y explora las opciones disponibles.',
          imageUrl: 'https://i.imgur.com/1a7g3zK.png', // Registro Writesonic
        },
        {
          title: 'Elige el tipo de contenido adecuado',
          content: 'Selecciona entre plantillas como blog, post para redes sociales, anuncios, emails, landing pages, etc. Cada plantilla está optimizada para un fin específico.',
          imageUrl: 'https://i.imgur.com/2y4Xj4K.png', // Selección plantilla
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Explora las herramientas de edición, historial, y opciones de personalización como tono, idioma y longitud del texto.',
          imageUrl: 'https://i.imgur.com/6k3Tg4Q.png', // Interfaz Writesonic
        },
        {
          title: 'Introduce palabras clave o instrucciones precisas',
          content: 'Escribe las palabras clave, resumen del tema o instrucciones específicas para personalizar el contenido. Ejemplo: “Artículo sobre los beneficios del teletrabajo para empresas tecnológicas en 2025”.',
          imageUrl: 'https://i.imgur.com/2g5t8mN.png', // Prompt Writesonic
        },
        {
          title: 'Configura el tono y la extensión',
          content: 'Ajusta el tono (profesional, amigable, persuasivo, etc.) y la longitud del contenido según tus necesidades.',
          imageUrl: 'https://i.imgur.com/4v9R7mO.png', // Ajuste de tono
        },
        {
          title: 'Genera y revisa el contenido',
          content: 'Haz clic en “Generar”, revisa el resultado y pide más opciones si lo deseas. Compara diferentes versiones antes de elegir la mejor.',
          imageUrl: 'https://i.imgur.com/7c1l2tE.png', // Generar contenido
        },
        {
          title: 'Edita y personaliza el texto final',
          content: 'Modifica el contenido generado para adaptarlo a tu estilo, agrega datos, ejemplos o llamadas a la acción relevantes.',
          imageUrl: 'https://i.imgur.com/3a7f5hQ.png', // Edición de contenido
        },
        {
          title: 'Descarga o copia el contenido',
          content: 'Cuando estés satisfecho, descarga el texto o cópialo para publicarlo en tu web, blog o redes sociales.',
          imageUrl: 'https://i.imgur.com/6d2k8pN.png', // Descargar contenido
        },
        {
          title: 'Consejos y advertencias',
          content: 'Revisa ortografía, datos y coherencia antes de publicar. No uses contenido generado para temas sensibles sin revisión profesional. Respeta derechos de autor y evita plagio.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Experimenta y aprende',
          content: 'Prueba diferentes plantillas y prompts para descubrir qué combinaciones generan los mejores resultados para tu audiencia.',
          imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Experimentar plantillas
        },
      ],
    },
    {
      id: 'elevenlabs',
      title: 'Cómo generar una voz en ElevenLabs',
      description: 'Convierte texto en voz realista y profesional usando ElevenLabs para tus proyectos de audio. Incluye ejemplos, advertencias y buenas prácticas.',
      category: 'Generación de Voz',
          tool: 'ElevenLabs',
      imageUrl: 'https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Crea tu cuenta en ElevenLabs',
          content: 'Regístrate en https://elevenlabs.io/ y accede con tu correo electrónico. Recibirás créditos gratuitos para probar la plataforma.',
          imageUrl: 'https://i.imgur.com/1a7g3zK.png', // Registro ElevenLabs
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Explora el panel principal, las opciones de configuración, la biblioteca de voces y las herramientas de edición.',
          imageUrl: 'https://i.imgur.com/6k3Tg4Q.png', // Interfaz ElevenLabs
        },
        {
          title: 'Accede a la función de texto a voz',
          content: 'Selecciona “Text to Speech”, elige la voz y el idioma que prefieras. Puedes probar voces profesionales o personalizarlas según tu proyecto.',
          imageUrl: 'https://i.imgur.com/4v9R7mO.png', // Text to Speech
        },
        {
          title: 'Introduce tu texto de manera clara',
          content: 'Escribe o pega el texto que deseas convertir en audio. Ejemplo: “Bienvenidos al podcast de innovación tecnológica, episodio 1”. Puedes ajustar la entonación y velocidad.',
          imageUrl: 'https://i.imgur.com/2g5t8mN.png', // Ingresar texto
        },
        {
          title: 'Genera, escucha y ajusta el audio',
          content: 'Haz clic en “Generar”, escucha el resultado y realiza ajustes si es necesario (entonación, pausas, velocidad). Prueba diferentes voces para comparar resultados.',
          imageUrl: 'https://i.imgur.com/7c1l2tE.png', // Generar audio
        },
        {
          title: 'Descarga o comparte el audio',
          content: 'Cuando estés satisfecho, descarga el archivo de audio en formato MP3 o compártelo directamente desde la plataforma.',
          imageUrl: 'https://i.imgur.com/6d2k8pN.png', // Descargar audio
        },
        {
          title: 'Consejos y advertencias',
          content: 'No uses voces generadas para suplantar identidades o fines ilegales. Revisa la pronunciación de nombres propios y términos técnicos antes de publicar. Consulta la política de uso de ElevenLabs.',
          imageUrl: 'https://i.imgur.com/9s8Qh5W.png', // Advertencia
        },
        {
          title: 'Explora funciones avanzadas',
          content: 'Prueba la clonación de voz, efectos de sonido y doblaje de videos para proyectos más complejos.',
          imageUrl: 'https://i.imgur.com/8t3y2dK.png', // Funciones avanzadas
        },
      ],
    },
    {
      id: 'suno',
      title: 'Cómo generar una canción en Suno',
      description: 'Crea canciones originales con inteligencia artificial usando Suno, ideal para músicos y creadores. Incluye ejemplos, advertencias y buenas prácticas.',
      category: 'Generación de Audio',
          tool: 'Suno',
      imageUrl: 'https://images.pexels.com/photos/7713192/pexels-photo-7713192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Accede a Suno',
          content: 'Entra en https://suno.ai/ y crea una cuenta gratuita. Accede al panel principal para explorar las opciones de generación musical.',
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Explora las opciones de estilos musicales, historial de canciones generadas y herramientas de edición.',
        },
        {
          title: 'Elige el tipo de canción o estilo musical',
          content: 'Selecciona el género, ritmo o ambiente que deseas generar (pop, rock, instrumental, etc.). Esto influye en el resultado final.',
        },
        {
          title: 'Describe tu canción o tema',
          content: 'Introduce una descripción, tema o letra en el cuadro de texto. Ejemplo: “Canción alegre sobre la amistad para niños, estilo pop, con estribillo pegadizo”.',
        },
        {
          title: 'Personaliza parámetros avanzados',
          content: 'Ajusta tempo, duración, instrumentos y otros parámetros si la plataforma lo permite. Prueba diferentes combinaciones para resultados variados.',
        },
        {
          title: 'Genera la canción y revisa las opciones',
          content: 'Haz clic en “Crear”, espera unos segundos y escucha las opciones generadas. Puedes comparar varias versiones antes de elegir la mejor.',
        },
        {
          title: 'Descarga o comparte tu canción',
          content: 'Cuando estés satisfecho, descarga la canción en formato MP3 o compártela desde la plataforma. Consulta derechos de uso si la canción será publicada.',
        },
        {
          title: 'Consejos y advertencias',
          content: 'No generes canciones con contenido ofensivo o que infrinja derechos de autor. Verifica la originalidad antes de publicar y cita la herramienta si es necesario.',
        },
        {
          title: 'Experimenta y aprende',
          content: 'Prueba diferentes estilos y temáticas para descubrir el potencial creativo de la IA musical. Escucha ejemplos de la comunidad para inspirarte.',
        },
      ],
    },
    {
      id: 'suno',
      title: 'Cómo generar videos realistas con calidad cinematográfica',
      description: 'Crea videos realistas a partir de texto integrando sonidos, efectos, música e incluso diálogos en espanol.',
      category: 'Generación de Video',
          tool: 'Veo 3',
      imageUrl: 'https://images.pexels.com/photos/7713192/pexels-photo-7713192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      steps: [
        {
          title: 'Instala la extensión SetupVPN',
          content: 'Para Chrome; https://chromewebstore.google.com/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp?utm.',
        },
        {
          title: 'Familiarízate con la interfaz',
          content: 'Explora las opciones de estilos musicales, historial de canciones generadas y herramientas de edición.',
        },
        {
          title: 'Elige el tipo de canción o estilo musical',
          content: 'Selecciona el género, ritmo o ambiente que deseas generar (pop, rock, instrumental, etc.). Esto influye en el resultado final.',
        },
        {
          title: 'Describe tu canción o tema',
          content: 'Introduce una descripción, tema o letra en el cuadro de texto. Ejemplo: “Canción alegre sobre la amistad para niños, estilo pop, con estribillo pegadizo”.',
        },
        {
          title: 'Personaliza parámetros avanzados',
          content: 'Ajusta tempo, duración, instrumentos y otros parámetros si la plataforma lo permite. Prueba diferentes combinaciones para resultados variados.',
        },
        {
          title: 'Genera la canción y revisa las opciones',
          content: 'Haz clic en “Crear”, espera unos segundos y escucha las opciones generadas. Puedes comparar varias versiones antes de elegir la mejor.',
        },
        {
          title: 'Descarga o comparte tu canción',
          content: 'Cuando estés satisfecho, descarga la canción en formato MP3 o compártela desde la plataforma. Consulta derechos de uso si la canción será publicada.',
        },
        {
          title: 'Consejos y advertencias',
          content: 'No generes canciones con contenido ofensivo o que infrinja derechos de autor. Verifica la originalidad antes de publicar y cita la herramienta si es necesario.',
        },
        {
          title: 'Experimenta y aprende',
          content: 'Prueba diferentes estilos y temáticas para descubrir el potencial creativo de la IA musical. Escucha ejemplos de la comunidad para inspirarte.',
        },
      ],
    },
  ];
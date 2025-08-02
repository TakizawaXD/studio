# Elite Interview Prep: El Arquitecto de Entrevistas Técnicas

"Elite Interview Prep" es una plataforma de aprendizaje integral diseñada para dominar la preparación de entrevistas técnicas de alto nivel. Basada en los principios del documento 'El Arquitecto de Entrevistas Técnicas', la aplicación se centra en el **reconocimiento de patrones sobre la memorización**, proporcionando un camino estructurado y eficiente para el éxito.

Además del contenido curado, la plataforma incluye herramientas impulsadas por IA, como un analizador de respuestas de comportamiento (método STAR), para ofrecer retroalimentación personalizada y mejorar las habilidades de comunicación de los candidatos.

---

## 🎯 Perfil del Proyecto

### ¿Para Quién es Este Proyecto?

Este proyecto está diseñado para ingenieros de software, desarrolladores y estudiantes de ciencias de la computación que se preparan para entrevistas técnicas, especialmente para roles en empresas de tecnología de primer nivel (como FAANG y startups de rápido crecimiento).

### Usuario Dirigido

El usuario ideal de esta plataforma es alguien que:

-   **Busca eficiencia:** Prefiere un plan de estudios estructurado y basado en patrones en lugar de la práctica aleatoria y masiva de problemas.
-   **Valora la profundidad:** Entiende que las entrevistas modernas evalúan el proceso de pensamiento y la comunicación, no solo la corrección del código.
-   **Apunta alto:** Se está preparando para roles de nivel medio (Mid), senior o superiores, donde el diseño de sistemas y las habilidades de comportamiento son tan cruciales como los algoritmos.
-   **Busca una ventaja competitiva:** Quiere utilizar herramientas de IA para obtener retroalimentación objetiva y perfeccionar sus habilidades blandas (soft skills).

---

## ✨ Características Principales

-   **Currículo Estructurado:** Contenido organizado en partes, secciones y lecciones, siguiendo un plan de estudios lógico que va desde los fundamentos hasta los sistemas complejos.
-   **Navegación Intuitiva:** Una interfaz de usuario clara con una barra de navegación lateral que permite un fácil acceso a cualquier tema del currículo.
-   **Visualización de Código Clara:** Bloques de código con resaltado de sintaxis y una función de "copiar" para una fácil experimentación.
-   **Autenticación de Usuarios:** Registro e inicio de sesión seguros mediante correo electrónico/contraseña y Google Sign-In, gestionado a través de Firebase.
-   **Herramienta de Feedback con IA:** Una herramienta que utiliza Genkit y los modelos de IA de Google para analizar las respuestas de entrevistas de comportamiento (método STAR) y proporcionar una puntuación y retroalimentación detallada.

---

## 🏗️ Diagrama de Arquitectura

El siguiente diagrama ilustra la arquitectura de alto nivel de la aplicación, mostrando cómo interactúan los componentes principales.

```
+--------------------------------+      +--------------------------+      +---------------------------+
|          USUARIO               |      |      Firebase            |      |      Google AI Platform   |
| (Navegador Web)                |      | (Backend como Servicio)  |      |      (Modelos GenAI)      |
+--------------------------------+      +--------------------------+      +---------------------------+
         |                                      ^       ^                           ^
         | 1. HTTP/S Request                    |       |                           |
         v                                      |       |                           |
+--------------------------------+              |       |                           |
|      Frontend (Next.js)        |  2. Auth     |       |                           |
|  (Renderizado en Servidor/Cliente) | <------------+       |                           |
|                                |              |  5. AI Flow Call (API)            |
|  - Componentes React (ShadCN)  |  3. User     |       |                           |
|  - Lógica de UI                |  <------------+       |                           |
|  - Llamadas a Server Actions   |-------------------------------------------------> |
+--------------------------------+              |                                   |
         |                                      |                                   |
         | 4. Server Actions                    |                                   |
         v                                      |                                   |
+--------------------------------+      +-------+------------------+      +---------------------------+
|      Backend (Next.js / Genkit)  |      |   - Authentication       |      |    - Gemini (para texto)    |
|      (Server-Side)             |      |   - (Firestore futuro)   |      |                           |
+--------------------------------+      +--------------------------+      +---------------------------+

```

### Flujo de la Arquitectura:

1.  **Solicitud del Usuario:** El usuario interactúa con la aplicación a través de su navegador. Next.js gestiona las solicitudes, renderizando páginas en el servidor (`SSR`) o en el cliente (`CSR`) según sea necesario.
2.  **Autenticación:** Cuando un usuario se registra o inicia sesión, el frontend se comunica directamente con **Firebase Authentication**.
3.  **Sesión de Usuario:** Firebase devuelve un token de sesión al cliente, que `useAuth` utiliza para gestionar el estado del usuario en toda la aplicación.
4.  **Acciones del Servidor:** Para la funcionalidad de la IA (como el análisis STAR), el frontend no llama directamente a la IA. En su lugar, invoca una **Server Action** de Next.js.
5.  **Flujo de Genkit:** La Server Action ejecuta un flujo de **Genkit** en el backend. Este flujo procesa la entrada y realiza una llamada segura a la **Plataforma de IA de Google**, utilizando la `GEMINI_API_KEY` almacenada de forma segura en las variables de entorno del servidor.
6.  **Respuesta:** La IA devuelve la respuesta al flujo de Genkit, que a su vez la devuelve a la Server Action y, finalmente, al componente de frontend para ser mostrada al usuario.

---

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

## 📁 Estructura del Proyecto

El proyecto sigue una estructura organizada y modular, típica de una aplicación Next.js moderna con el App Router.

```
elite-interview-prep/
├── .env                  # Variables de entorno (API keys de Firebase y Gemini)
├── .next/                # Directorio de build de Next.js (autogenerado)
├── node_modules/         # Dependencias del proyecto (autogenerado)
├── public/               # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── ai/
│   │   ├── flows/
│   │   │   └── star-feedback.ts  # Lógica del flujo de IA para el feedback STAR
│   │   ├── dev.ts            # Archivo de entrada para el servidor de desarrollo de Genkit
│   │   └── genkit.ts         # Configuración e inicialización de Genkit
│   ├── app/
│   │   ├── (auth)/           # Grupo de rutas para páginas de autenticación
│   │   │   ├── login/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── layout.tsx    # Layout específico para las páginas de auth
│   │   ├── learn/
│   │   │   ├── [...slug]/page.tsx # Ruta dinámica para mostrar contenido
│   │   │   ├── tools/
│   │   │   │   └── star-feedback/ # Página y acciones para la herramienta de IA
│   │   │   │       ├── actions.ts
│   │   │   │       └── page.tsx
│   │   │   ├── _components/  # Componentes específicos del layout 'learn'
│   │   │   │   └── main-nav.tsx
│   │   │   ├── layout.tsx    # Layout principal de la app (con sidebar)
│   │   │   └── page.tsx      # Página de bienvenida del área de aprendizaje
│   │   ├── globals.css       # Estilos globales y variables de tema de Tailwind/ShadCN
│   │   ├── layout.tsx        # Layout raíz de la aplicación
│   │   └── page.tsx          # Página de inicio (landing page)
│   ├── components/
│   │   ├── auth/             # Componentes de autenticación (formularios, etc.)
│   │   ├── ui/               # Componentes de UI de ShadCN (Botón, Tarjeta, etc.)
│   │   ├── content-renderer.tsx # Renderiza el contenido dinámico (texto, código, etc.)
│   │   ├── logo.tsx          # Componente del logo de la aplicación
│   │   └── user-nav.tsx      # Menú de usuario en la barra de navegación
│   ├── hooks/
│   │   ├── use-auth.tsx      # Hook para gestionar el estado de autenticación
│   │   └── use-toast.ts      # Hook para mostrar notificaciones (toasts)
│   └── lib/
│       ├── content.ts        # Contenido principal del curso, estructurado
│       ├── firebase.ts       # Inicialización y configuración de Firebase SDK
│       └── utils.ts          # Funciones de utilidad (ej. cn para clases de Tailwind)
├── next.config.ts        # Configuración de Next.js
├── package.json          # Dependencias y scripts del proyecto
├── tailwind.config.ts    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

---

## 🚀 Guía de Inicio y Descarga

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### **Pre-requisitos**

-   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
-   `npm` o un gestor de paquetes compatible (`yarn`, `pnpm`)

### **Paso 1: Clona el Repositorio**

Abre tu terminal y clona este repositorio en tu máquina local. Si has descargado los archivos, simplemente navega hasta el directorio del proyecto.

```bash
git clone https://github.com/tu-usuario/elite-interview-prep.git
cd elite-interview-prep
```

### **Paso 2: Instala las Dependencias**

Instala todos los paquetes necesarios para el proyecto.

```bash
npm install
```

### **Paso 3: Configura Firebase**

1.  Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2.  Crea un nuevo proyecto o selecciona uno existente.
3.  Dentro de tu proyecto, ve a **Authentication > Sign-in method** y asegúrate de que los proveedores **Email/Password** y **Google** estén habilitados.
4.  En la misma sección, ve a **Settings > Authorized domains** y añade el dominio `localhost` si no está presente.
5.  Finalmente, ve a la configuración del proyecto (icono de engranaje). En la pestaña "General", desplázate hacia abajo hasta "Tus aplicaciones" y crea una nueva "Aplicación web" si aún no tienes una. Copia el objeto de configuración de Firebase (`firebaseConfig`).

### **Paso 4: Configura las Variables de Entorno**

1.  En la raíz del proyecto, crea un nuevo archivo llamado `.env`.
2.  Abre el archivo `.env` y añade las credenciales de tu aplicación web de Firebase y tu clave de API de Gemini.

```env
# Variables de Firebase (obtenidas de la consola de Firebase)
NEXT_PUBLIC_FIREBASE_API_KEY="AIza..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="tu-proyecto.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="tu-proyecto"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="tu-proyecto.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
NEXT_PUBLIC_FIREBASE_APP_ID="1:..."

# Clave de API de Gemini (para Genkit)
# Obtén tu clave desde Google AI Studio: https://aistudio.google.com/app/apikey
GEMINI_API_KEY="AIza..."
```

### **Paso 5: Ejecuta la Aplicación**

Para que la aplicación funcione completamente (tanto el frontend de Next.js como los flujos de IA de Genkit), necesitas ejecutar dos comandos en **dos terminales separadas**.

**Terminal 1 (Frontend - Next.js):**

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Next.js, generalmente en `http://localhost:9002`.

**Terminal 2 (Backend - Genkit):**

```bash
npm run genkit:dev
```

Esto iniciará el servidor de desarrollo de Genkit, que gestiona los flujos de IA.

¡Y listo! Ahora puedes abrir tu navegador en `http://localhost:9002` para ver la aplicación en funcionamiento.

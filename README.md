# Elite Interview Prep

"Elite Interview Prep" es una plataforma de aprendizaje integral diseñada para dominar la preparación de entrevistas técnicas de alto nivel. Basada en los principios del documento 'El Arquitecto de Entrevistas Técnicas', la aplicación se centra en el reconocimiento de patrones sobre la memorización, proporcionando un camino estructurado y eficiente para el éxito.

Además del contenido curado, la plataforma incluye herramientas impulsadas por IA, como un analizador de respuestas de comportamiento (método STAR), para ofrecer retroalimentación personalizada y mejorar las habilidades de comunicación de los candidatos.

## ✨ Características Principales

-   **Currículo Estructurado:** Contenido organizado en partes, secciones y lecciones, siguiendo un plan de estudios lógico que va desde los fundamentos hasta los sistemas complejos.
-   **Navegación Intuitiva:** Una interfaz de usuario clara con una barra de navegación lateral que permite un fácil acceso a cualquier tema del currículo.
-   **Visualización de Código Clara:** Bloques de código con resaltado de sintaxis y una función de "copiar" para una fácil experimentación.
-   **Autenticación de Usuarios:** Registro e inicio de sesión seguros mediante correo electrónico/contraseña y Google Sign-In, gestionado a través de Firebase.
-   **Herramienta de Feedback con IA:** Una herramienta que utiliza Genkit y los modelos de IA de Google para analizar las respuestas de entrevistas de comportamiento (método STAR) y proporcionar una puntuación y retroalimentación detallada.

## 🚀 Pila Tecnológica

-   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
-   **Inteligencia Artificial:** [Genkit (Google Gemini)](https://firebase.google.com/docs/genkit)
-   **Autenticación y Backend:** [Firebase](https://firebase.google.com/) (Authentication)

---

## 🏁 Guía de Inicio y Descarga

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### **Pre-requisitos**

-   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
-   `npm` o un gestor de paquetes compatible (`yarn`, `pnpm`)

### **Paso 1: Clona el Repositorio**

Abre tu terminal y clona este repositorio en tu máquina local.

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_DIRECTORIO>
```

### **Paso 2: Instala las Dependencias**

Instala todos los paquetes necesarios para el proyecto.

```bash
npm install
```

### **Paso 3: Configura Firebase**

1.  Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2.  Crea un nuevo proyecto o selecciona uno existente.
3.  Dentro de tu proyecto, ve a la configuración del proyecto (icono de engranaje).
4.  En la pestaña "General", desplázate hacia abajo hasta "Tus aplicaciones".
5.  Crea una nueva "Aplicación web" (si aún no tienes una).
6.  Copia el objeto de configuración de Firebase (`firebaseConfig`). Necesitarás estos valores para el siguiente paso.

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

## 📦 Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo de Next.js con Turbopack.
-   `npm run genkit:dev`: Inicia el servidor de desarrollo de Genkit para los flujos de IA.
-   `npm run genkit:watch`: Inicia Genkit en modo de observación, reiniciándose con los cambios.
-   `npm run build`: Compila la aplicación Next.js para producción.
-   `npm run start`: Inicia un servidor de producción de Next.js.
-   `npm run lint`: Ejecuta ESLint para analizar el código en busca de problemas.
-   `npm run typecheck`: Ejecuta el compilador de TypeScript para verificar los tipos sin generar archivos.

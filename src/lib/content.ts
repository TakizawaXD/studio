export type ContentItem =
  | string
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: (string | { type: 'link'; text: string; href: string })[][] }
  | { type: 'heading'; level: 2 | 3 | 4; text: string };

export type Section = {
  id: string;
  title: string;
  slug: string;
  content?: ContentItem[];
  subsections?: Section[];
};

export type Part = {
  id: string;
  title: string;
  slug: string;
  sections: Section[];
};

export const content: Part[] = [
  {
    id: "part-1",
    title: "Parte I: La Fundación",
    slug: "la-fundacion",
    sections: [
      {
        id: "section-1",
        title: "1. Dominando el Proceso de Aprendizaje",
        slug: "dominando-el-proceso-de-aprendizaje",
        subsections: [
          {
            id: "subsection-1-1",
            title: "1.1 El Cambio de Paradigma: Reconocimiento de Patrones",
            slug: "cambio-de-paradigma-reconocimiento-de-patrones",
            content: [
              "El enfoque moderno para la preparación de entrevistas técnicas ha experimentado una transformación fundamental, alejándose de la memorización de soluciones específicas hacia el desarrollo de una comprensión profunda de los patrones de resolución de problemas subyacentes. Este cambio reconoce que el objetivo de las entrevistas en empresas de primer nivel no es evaluar si un candidato ha visto un problema exacto antes, sino determinar si posee un modelo mental robusto para deconstruir problemas nuevos y desconocidos.",
              "La evolución de las plataformas de preparación refleja esta transición. Inicialmente, sitios como LeetCode y HackerRank ofrecían vastos repositorios de problemas, lo que fomentó una cultura de \"grind\" o práctica intensiva y repetitiva. Si bien es valiosa para la exposición, esta estrategia a menudo resulta ineficiente, ya que muchos problemas son redundantes o se centran en conceptos oscuros que rara vez aparecen en entrevistas reales. Esto puede llevar al agotamiento y a una falsa sensación de progreso basada en la cantidad en lugar de la calidad de la comprensión.",
              "Posteriormente, plataformas como AlgoExpert surgieron con una filosofía de curación, ofreciendo un conjunto selecto de 200 de los \"mejores\" problemas, cada uno acompañado de explicaciones en video de alta calidad. Este modelo prioriza la calidad sobre la cantidad, enfatizando la importancia de entender el \"cómo\" y el \"porqué\" detrás de cada solución, en lugar de simplemente memorizar líneas de código.",
              "La culminación de esta evolución es el enfoque basado en patrones, popularizado por la serie \"Grokking the Coding Interview\" de Educative.io. Esta metodología postula que la gran mayoría de los problemas de entrevista de tipo LeetCode se pueden resolver aplicando un conjunto de aproximadamente 20 a 24 patrones reutilizables. Aprender a identificar y aplicar estos patrones, como \"Sliding Window\" (Ventana Deslizante) o \"Two Pointers\" (Dos Punteros), equipa a los candidatos con un conjunto de herramientas transferibles. Cuando se enfrentan a un problema nuevo, en lugar de buscar una solución única en su memoria, buscan identificar el patrón subyacente y aplicar una plantilla de solución probada. Esta habilidad para abstraer y categorizar problemas es una de las señales más potentes que los entrevistadores buscan, ya que demuestra una capacidad de resolución de problemas de nivel superior."
            ]
          },
          {
            id: "subsection-1-2",
            title: "1.2 Práctica Estructurada vs. No Estructurada",
            slug: "practica-estructurada-vs-no-estructurada",
            content: [
              "Adoptar una filosofía basada en patrones requiere un plan de práctica estructurado para ser efectivo. La práctica aleatoria, aunque puede proporcionar una amplia exposición, no construye el dominio enfocado de cada patrón. Por lo tanto, un plan de estudio moderno debe basarse en listas de problemas curadas y reconocidas por la industria, que han sido validadas por miles de ingenieros como las más representativas y de mayor impacto.",
              { type: 'heading', level: 4, text: "Listas Influyentes"},
              {
                type: 'list',
                items: [
                  "Blind 75: Una lista de 75 de las preguntas más frecuentes en entrevistas de empresas como Google, Amazon, Microsoft y Facebook. Su popularidad se debe a su enfoque en problemas fundamentales que cubren una amplia gama de temas esenciales.",
                  "NeetCode 150: Una extensión de la lista Blind 75 que añade 75 problemas adicionales para una cobertura más completa. Esta lista está organizada por tema y es ideal para quienes ya están familiarizados con las estructuras de datos y algoritmos básicos."
                ]
              },
              "Un plan de estudio híbrido y altamente efectivo, como se sugiere en diversas discusiones comunitarias, integra el aprendizaje de patrones con la práctica de estas listas curadas. El proceso recomendado es el siguiente:",
              {
                type: 'list',
                items: [
                  "Aprender un Patrón: Estudiar a fondo un patrón específico, como \"Merge Intervals\" (Fusión de Intervalos), comprendiendo su lógica, casos de uso y plantilla de implementación.",
                  "Práctica Enfocada: Resolver todos los problemas de la lista NeetCode 150 que están etiquetados con ese patrón.",
                  "Repetir: Continuar este ciclo para cada uno de los patrones fundamentales."
                ]
              },
              "Este método garantiza una práctica deliberada y de alto retorno de inversión. En lugar de resolver problemas al azar, el candidato construye un dominio profundo y sistemático de las técnicas más importantes. Alternativamente, plataformas como LeetCode ofrecen sus propios \"Study Plans\" (Planes de Estudio) y HackerRank sus \"Interview Preparation Kits\" (Kits de Preparación de Entrevistas), que proporcionan rutas de aprendizaje guiadas y estructuradas directamente en la plataforma."
            ]
          },
          {
            id: "subsection-1-3",
            title: "1.3 La Ciencia de la Retención: Sistemas de Repetición Espaciada (SRS)",
            slug: "ciencia-de-la-retencion-srs",
            content: [
              "La preparación para entrevistas técnicas es un maratón, no un sprint. El conocimiento adquirido en las primeras semanas debe permanecer fresco y accesible meses después. La memorización masiva o \"cramming\" es ineficaz para la retención a largo plazo. Aquí es donde los Sistemas de Repetición Espaciada (SRS) ofrecen una solución científicamente probada.",
              "El principio se basa en la Curva del Olvido de Ebbinghaus, que demuestra que olvidamos la información exponencialmente con el tiempo si no hacemos un esfuerzo por retenerla. SRS interrumpe esta curva programando revisiones de la información en intervalos crecientes, justo antes de que se olvide por completo. Cada revisión exitosa refuerza la memoria, aplanando la curva del olvido y transfiriendo el conocimiento de la memoria a corto plazo a la memoria a largo plazo.",
              "Para aplicar SRS a la preparación de algoritmos, se puede seguir este proceso:",
              {
                type: "list",
                items: [
                  "Crear \"Flashcards\" Digitales: Después de resolver un problema y entender completamente su solución, se crea una \"flashcard\" en una aplicación como Anki o en una base de datos personal como Notion.",
                  "Enfocarse en el Recuerdo Activo: La tarjeta no debe contener la solución completa. En su lugar, debe plantear una pregunta que active el recuerdo del concepto clave. Por ejemplo: Anverso: \"Problema: Encontrar la subcadena más larga con no más de K caracteres distintos. ¿Qué patrón se aplica y cuál es la idea clave?\" Reverso: \"Patrón: Ventana Deslizante (Sliding Window). Idea clave: Usar un mapa de frecuencias para rastrear los caracteres en la ventana. Expandir la ventana hacia la derecha y contraerla desde la izquierda cuando la condición (<= K caracteres distintos) se rompe.\"",
                  "Seguir el Algoritmo: La aplicación de SRS gestionará el calendario de revisión. Los conceptos difíciles aparecerán con más frecuencia, mientras que los conceptos dominados se revisarán en intervalos cada vez más largos (por ejemplo, 1 día, 3 días, 1 semana, 1 mes)."
                ]
              },
              "Es crucial crear tarjetas que sean simples y atómicas. El objetivo no es re-resolver el problema cada vez, sino reforzar el reconocimiento del patrón y la estrategia central. Este método asegura que los conceptos fundamentales permanezcan accesibles durante todo el período de preparación."
            ],
          },
          {
            id: "subsection-1-4",
            title: "1.4 El Protocolo de Resolución de Problemas",
            slug: "protocolo-de-resolucion-de-problemas",
            content: [
              "Una entrevista de codificación no solo evalúa la corrección de la solución final, sino también el proceso para llegar a ella. Los entrevistadores buscan señales de un enfoque sistemático, habilidades de comunicación y atención al detalle. Por lo tanto, es fundamental adoptar y practicar un protocolo estricto para abordar cada problema.",
              { type: 'heading', level: 3, text: 'Paso 1: Clarificar y Definir el Alcance (5-10 minutos)'},
              "No se debe empezar a codificar inmediatamente. Las preguntas de entrevista son a menudo ambiguas a propósito para evaluar la capacidad del candidato para manejar la incertidumbre.",
              { type: 'list', items: [
                "Repetir la Pregunta: Parafrasear el problema con las propias palabras para confirmar la comprensión.",
                "Aclarar Entradas y Salidas: Preguntar sobre el rango de los valores de entrada (¿números negativos?, ¿flotantes?, ¿valores extremadamente grandes?), el formato (¿array ordenado?, ¿puede contener duplicados?, ¿puede ser nulo o vacío?), y el formato de salida esperado.",
                "Trabajar con un Ejemplo: Proponer un ejemplo simple y recorrerlo manualmente para validar la comprensión de la lógica del problema. Por ejemplo, para un verificador de palíndromos, usar \"KAYAK\" (verdadero) y \"MOUSE\" (falso)."
              ]},
              { type: 'heading', level: 3, text: 'Paso 2: Planificar y Discutir el Enfoque (10-15 minutos)'},
              "Verbalizar el proceso de pensamiento es una de las señales de comunicación más importantes.",
              { type: 'list', items: [
                  "Solución Bruta (Brute-Force): Comenzar discutiendo una solución ingenua o de fuerza bruta. Esto demuestra que se puede resolver el problema, aunque no sea de manera óptima, y establece una línea de base para la mejora.",
                  "Enfoque Optimizado: Proponer una solución más eficiente. Identificar los cuellos de botella en el enfoque de fuerza bruta y explicar qué estructuras de datos o algoritmos se pueden usar para optimizarlos.",
                  "Discutir Compensaciones (Trade-offs): Analizar la complejidad temporal y espacial (O(n), O(logn), etc.) de los diferentes enfoques. Explicar por qué se elige una solución sobre otra (por ejemplo, \"Podríamos usar un mapa hash para una búsqueda más rápida en O(1), pero a costa de un espacio adicional de O(n)\")."
              ]},
              { type: 'heading', level: 3, text: 'Paso 3: Implementar el Código (15-20 minutos)'},
              "La calidad del código es tan importante como su corrección.",
              { type: 'list', items: [
                  "Código Limpio y Legible: Usar nombres de variables descriptivos (por ejemplo, left_pointer en lugar de i).",
                  "Explicar Mientras se Codifica: Narrar las decisiones de implementación a medida que se escribe el código. Esto mantiene al entrevistador involucrado y le permite seguir el razonamiento.",
                  "Modularidad: Si es apropiado, dividir la lógica en funciones auxiliares para mejorar la legibilidad y la reutilización."
              ]},
              { type: 'heading', level: 3, text: 'Paso 4: Probar y Verificar (5-10 minutos)'},
              "Anunciar que se ha \"terminado\" inmediatamente después de escribir la última línea de código es una señal de alerta. La verificación es un paso crucial.",
              { type: 'list', items: [
                "Revisión Manual: Escanear visualmente el código en busca de errores comunes, como errores por un paso (off-by-one errors).",
                "Prueba con Casos de Borde: Probar la solución con los casos de borde identificados en el Paso 1 (por ejemplo, arrays vacíos, entradas nulas, un solo elemento, entradas con todos los elementos duplicados).",
                "Recorrido del Código: Simular la ejecución del código con un caso de prueba, rastreando el valor de las variables en cada paso, como si se fuera un depurador."
              ]},
              "Este protocolo estructurado transforma la entrevista de una prueba de conocimiento en una demostración de competencia profesional en ingeniería.",
              {
                type: "table",
                headers: ["Plataforma", "Filosofía Central", "Formato de Contenido Clave", "Fortalezas", "Debilidades"],
                rows: [
                  [
                    { type: 'link', text: 'AlgoExpert', href: 'https://www.algoexpert.io/product' },
                    "Calidad sobre cantidad; aprendizaje guiado",
                    "200 problemas curados con explicaciones en video de dos partes (conceptual y código)",
                    "Explicaciones en video muy detalladas y de alta producción; entorno de codificación integrado; curso intensivo de estructuras de datos.",
                    "Conjunto de problemas fijo y limitado; puede ser costoso; el enfoque en video puede ser más lento que la lectura para algunos."
                  ],
                  [
                    { type: 'link', text: 'LeetCode', href: 'https://leetcode.com/' },
                    "Cantidad y comunidad; el \"gimnasio\" de la codificación",
                    "Más de 2000 problemas, planes de estudio, concursos semanales, foros de discusión",
                    "Vasta selección de problemas, incluyendo los más recientes de entrevistas; comunidad activa para soluciones y discusión; concursos para práctica cronometrada.",
                    "Puede ser abrumador y carece de una ruta de aprendizaje clara sin guías externas (ej. NeetCode); la calidad de las explicaciones varía."
                  ],
                  [
                    { type: 'link', text: 'HackerRank', href: 'https://www.hackerrank.com/' },
                    "Enfoque en la evaluación y la preparación para empresas",
                    "Kits de preparación de entrevistas, desafíos específicos de habilidades, plataforma de evaluación utilizada por empresas",
                    "Familiariza a los usuarios con el entorno de evaluación que muchas empresas utilizan; kits de preparación estructurados; fuerte en dominios como SQL y regex.",
                    "Menos enfocado en la enseñanza conceptual profunda en comparación con AlgoExpert o Educative; la interfaz puede ser menos intuitiva para la práctica pura de algoritmos."
                  ],
                  [
                    { type: 'link', text: 'Educative.io', href: 'https://www.educative.io/' },
                    "Aprendizaje basado en patrones y sin videos",
                    "Cursos interactivos basados en texto con fragmentos de código ejecutables (\"Grokking the Coding Interview\")",
                    "Enfoque en patrones que es altamente eficiente para la resolución de problemas; el aprendizaje basado en texto es más rápido que los videos; amplia gama de cursos (diseño de sistemas, etc.).",
                    "La falta de videos puede ser un inconveniente para los aprendices visuales; el costo es por suscripción, no por compra única."
                  ]
                ]
              }
            ]
          }
        ]
      },
      {
        id: "section-2",
        title: "2. Los Pilares - Estructuras de Datos",
        slug: "los-pilares-estructuras-de-datos",
        subsections: [
          {
            id: 'subsection-2-1',
            title: '2.1 Arrays y Cadenas',
            slug: 'arrays-y-cadenas',
            content: [
              "Los arrays son la estructura de datos más fundamental, representando una colección contigua de elementos en memoria. Las cadenas son, en esencia, arrays de caracteres.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Bloques de memoria contiguos, accesibles por un índice. Esta contigüidad permite un acceso rápido pero hace que las inserciones y eliminaciones sean costosas.",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso por índice: O(1)",
                "Búsqueda (lineal): O(n)",
                "Inserción/Eliminación (al final, si hay capacidad): O(1) (amortizado para arrays dinámicos)",
                "Inserción/Eliminación (al principio/medio): O(n) (debido al desplazamiento de elementos)"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Cualquier problema que involucre una colección ordenada de datos, procesamiento de texto, o la necesidad de acceso rápido por índice. Son la base para muchos patrones como Ventana Deslizante y Dos Punteros.",
              { type: 'heading', level: 4, text: "Implementación" },
              "Los arrays dinámicos (como ArrayList en Java, list en Python, std::vector en C++) son la implementación más común que gestiona automáticamente el redimensionamiento.",
            ]
          },
          {
            id: 'subsection-2-2',
            title: '2.2 Listas Enlazadas (Singly, Doubly)',
            slug: 'listas-enlazadas',
            content: [
              "Las listas enlazadas consisten en nodos donde cada nodo contiene datos y un puntero al siguiente nodo (y al anterior en las doblemente enlazadas).",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Nodos no contiguos en memoria, conectados por punteros. Esto permite inserciones y eliminaciones eficientes, pero sacrifica el acceso por índice en O(1).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso/Búsqueda: O(n)",
                "Inserción/Eliminación (al principio): O(1)",
                "Inserción/Eliminación (dado un puntero al nodo): O(1)",
                "Inserción/Eliminación (al final): O(n) para simplemente enlazadas (requiere recorrer), O(1) si se mantiene un puntero a la cola."
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Problemas que requieren frecuentes inserciones o eliminaciones en medio de una secuencia, o donde la memoria no puede ser asignada de forma contigua. El patrón de \"Punteros Rápidos y Lentos\" se utiliza comúnmente para detectar ciclos o encontrar el medio. Problemas como \"Invertir una Lista Enlazada\" son clásicos."
            ]
          }
        ]
      }
    ],
  },
];

export function findContentBySlug(slug: string[]) {
  const [partSlug, sectionSlug, subsectionSlug] = slug;
  const part = content.find((p) => p.slug === partSlug);
  if (!part) return null;

  const section = part.sections.find((s) => s.slug === sectionSlug);
  if (!section) return null;

  if (subsectionSlug) {
    const subsection = section.subsections?.find((ss) => ss.slug === subsectionSlug);
    return subsection || null;
  }
  
  return section;
}

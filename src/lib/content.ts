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
              "Problemas que requieren frecuentes inserciones o eliminaciones en medio de una secuencia. El patrón de \"Punteros Rápidos y Lentos\" se utiliza comúnmente para detectar ciclos o encontrar el medio. Problemas como \"Invertir una Lista Enlazada\" son clásicos."
            ]
          },
          {
            id: 'subsection-2-3',
            title: '2.3 Tablas Hash (Mapas)',
            slug: 'tablas-hash',
            content: [
              "Las tablas hash (o mapas) almacenan pares clave-valor. Utilizan una función hash para calcular un índice en un array de cubetas o ranuras, desde donde se puede encontrar el valor deseado.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una estructura de datos que mapea claves a valores para búsquedas, inserciones y eliminaciones altamente eficientes. La clave se pasa a través de una función hash que determina dónde almacenar el valor. Las colisiones (dos claves que hashean al mismo índice) se manejan típicamente con encadenamiento (listas enlazadas en cada índice).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Inserción: O(1) en promedio, O(n) en el peor caso (si todas las claves colisionan)",
                "Eliminación: O(1) en promedio, O(n) en el peor caso",
                "Búsqueda: O(1) en promedio, O(n) en el peor caso"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Siempre que necesites buscar, insertar o eliminar elementos rápidamente y el orden no sea importante. Son increíblemente versátiles. Palabras clave: \"frecuencia\", \"conteo\", \"duplicados\", \" caché\", \"dos sumas\". Problemas como \"Two Sum\", \"Group Anagrams\" y la implementación de una caché LRU dependen de las tablas hash."
            ]
          },
          {
            id: 'subsection-2-4',
            title: '2.4 Pilas (Stacks)',
            slug: 'pilas',
            content: [
              "Una estructura de datos LIFO (Last-In, First-Out), análoga a una pila de platos.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una colección de elementos con dos operaciones principales: push (añadir al tope) y pop (quitar del tope).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Push (Añadir al tope): O(1)",
                "Pop (Quitar del tope): O(1)",
                "Peek/Top (Ver el elemento superior): O(1)"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Problemas que implican procesamiento en orden inverso, como invertir una cadena. Comprobación de sintaxis (paréntesis, llaves, corchetes balanceados). Algoritmos de recorrido de grafos y árboles (DFS). Problemas de \"próximo elemento mayor\". Problemas clásicos: \"Valid Parentheses\", \"Min Stack\"."
            ]
          },
          {
            id: 'subsection-2-5',
            title: '2.5 Colas (Queues)',
            slug: 'colas',
            content: [
              "Una estructura de datos FIFO (First-In, First-Out), como una fila para pagar.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una colección de elementos donde los elementos se añaden por detrás (enqueue) y se quitan por delante (dequeue).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Enqueue (Añadir al final): O(1)",
                "Dequeue (Quitar del principio): O(1)",
                "Peek (Ver el primer elemento): O(1)"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Algoritmo de Búsqueda en Anchura (BFS) para árboles y grafos, que es clave para encontrar el camino más corto en grafos no ponderados. Programación de tareas. Cualquier escenario que requiera procesar elementos en el orden en que llegaron."
            ]
          },
          {
            id: 'subsection-2-6',
            title: '2.6 Árboles (BST, Montículos)',
            slug: 'arboles',
            content: [
              "Estructuras de datos jerárquicas que consisten en nodos conectados por aristas.",
              { type: 'heading', level: 3, text: 'Árbol de Búsqueda Binaria (BST)'},
              { type: 'list', items: [
                "Modelo Conceptual: Un árbol binario donde para cada nodo, todos los valores en su subárbol izquierdo son menores que el valor del nodo, y todos los valores en su subárbol derecho son mayores.",
                "Operaciones: Búsqueda, Inserción, Eliminación tienen una complejidad de O(log n) en promedio (para un árbol balanceado) y O(n) en el peor caso (un árbol degenerado, similar a una lista enlazada).",
                "Disparadores: Problemas que requieren mantener un conjunto ordenado de datos con inserciones y búsquedas eficientes. \"Validar un BST\", \"Encontrar el k-ésimo elemento más pequeño en un BST\"."
              ]},
              { type: 'heading', level: 3, text: 'Montículos (Heaps)'},
              { type: 'list', items: [
                "Modelo Conceptual: Un árbol binario completo que satisface la propiedad del montículo: en un min-heap, el padre es siempre menor o igual que sus hijos; en un max-heap, el padre es siempre mayor or igual.",
                "Operaciones: Inserción (O(log n)), Extracción del mínimo/máximo (O(log n)), Obtener el mínimo/máximo (O(1)).",
                "Disparadores: Problemas que requieren acceso rápido al elemento mínimo o máximo de una colección. Implementación de una cola de prioridad. Problemas como \"Encontrar la mediana de un flujo de datos\", \"Top K elementos frecuentes\", \"Fusionar K listas ordenadas\"."
              ]}
            ]
          },
           {
            id: 'subsection-2-7',
            title: '2.7 Grafos',
            slug: 'grafos',
            content: [
              "Un conjunto de nodos (vértices) conectados por aristas. Las aristas pueden ser dirigidas o no dirigidas, y ponderadas o no ponderadas.",
              { type: 'heading', level: 4, text: "Representaciones Clave" },
              { type: 'list', items: [
                "Lista de Adyacencia: Un array o mapa donde cada índice/clave corresponde a un vértice y el valor es una lista de sus vecinos. Eficiente en espacio para grafos dispersos.",
                "Matriz de Adyacencia: Una matriz NxN donde N es el número de vértices. M[i][j] = 1 (o el peso) si hay una arista de i a j. Eficiente para comprobar rápidamente la existencia de una arista entre dos nodos, pero costosa en espacio para grafos grandes."
              ]},
              { type: 'heading', level: 4, text: "Algoritmos de Recorrido" },
               { type: 'list', items: [
                "Búsqueda en Anchura (BFS): Explora los vecinos de un nodo antes de pasar al siguiente nivel. Usa una cola. Ideal para encontrar el camino más corto en grafos no ponderados.",
                "Búsqueda en Profundidad (DFS): Explora tan lejos como sea posible a lo largo de cada rama antes de retroceder. Usa una pila (a menudo la pila de llamadas recursivas). Útil para problemas como la detección de ciclos, ordenación topológica y encontrar componentes conectados."
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Cualquier problema que modele redes y conexiones: redes sociales, mapas de ciudades, dependencias de tareas. Palabras clave: \"red\", \"conexiones\", \"camino más corto\", \"ciclo\", \"requisitos previos\". Problemas clásicos: \"Número de Islas\", \"Clonar Grafo\", \"Course Schedule\"."
            ]
          }
        ]
      }
    ],
  },
  {
    id: "part-2",
    title: "Parte II: Patrones de Codificación",
    slug: "patrones-de-codificacion",
    sections: [
      {
        id: "section-2-1",
        title: "1. Patrones de Array/Cadena",
        slug: "patrones-de-array-o-cadena",
        subsections: [
          {
            id: "subsection-2-1-1",
            title: "1.1 Ventana Deslizante (Sliding Window)",
            slug: "ventana-deslizante",
            content: [
              "Este patrón se utiliza para realizar una operación en una subsección específica de un array o cadena, a menudo para encontrar la subsección óptima (por ejemplo, la más larga, la más corta o la que cumple una condición).",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Imagina dos punteros, `izquierda` y `derecha`, que forman los límites de una \"ventana\". El puntero `derecha` se expande para incluir nuevos elementos. Cuando la condición de la ventana ya no es válida, el puntero `izquierda` se contrae para que la ventana vuelva a ser válida. Este proceso continúa hasta que el puntero `derecha` alcanza el final.",
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              { type: 'list', items: [
                "El problema involucra un array, lista enlazada o cadena.",
                "Se te pide que encuentres una subsección (subarray o subcadena) que satisfaga ciertas restricciones.",
                "Se usan palabras clave como \"subarray/subcadena más larga/corta\", \"contiguous\" (contiguo), \"máximo/mínimo\".",
              ]},
              { type: 'heading', level: 4, text: "Ejemplo de Problema Clásico" },
              "**Problema:** Dado un array de enteros `nums` y un entero `k`, encuentra la suma máxima de cualquier subarray contiguo de tamaño `k`.",
              "**Solución con Ventana Deslizante:**",
              "1. Calcula la suma de la primera ventana de tamaño `k`.",
              "2. Itera desde el k-ésimo elemento hasta el final del array.",
              "3. En cada paso, \"desliza\" la ventana hacia adelante: suma el nuevo elemento (en `derecha`) y resta el elemento que sale de la ventana (en `izquierda`).",
              "4. Mantén un registro de la suma máxima encontrada."
            ]
          },
          {
            id: "subsection-2-1-2",
            title: "1.2 Dos Punteros (Two Pointers)",
            slug: "dos-punteros",
            content: [
              "En este patrón, se utilizan dos punteros para iterar a través de una estructura de datos, a menudo desde extremos opuestos, hasta que se encuentran en el medio. Es extremadamente útil para optimizar problemas que de otro modo requerirían un bucle anidado O(n^2).",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Normalmente, un puntero `izquierda` comienza en el índice 0 y un puntero `derecha` comienza en el último índice. En cada paso, se evalúa la condición basada en los valores en `izquierda` y `derecha`, y uno de los punteros se mueve hacia el centro. El bucle termina cuando `izquierda >= derecha`.",
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              { type: 'list', items: [
                "El problema involucra un array o cadena **ordenado**.",
                "Se te pide que encuentres un par, un trío o un subarray que satisfaga una condición.",
                "Necesitas comparar elementos desde ambos extremos de la estructura de datos.",
                "Problemas relacionados con palíndromos, encontrar sumas de pares, o eliminar duplicados."
              ]},
              { type: 'heading', level: 4, text: "Ejemplo de Problema Clásico" },
              "**Problema:** Dado un array **ordenado** de enteros `nums` y un entero `target`, encuentra dos números en el array que sumen `target`.",
              "**Solución con Dos Punteros:**",
              "1. Inicializa `izquierda = 0` y `derecha = nums.length - 1`.",
              "2. Mientras `izquierda < derecha`:",
              "   a. Calcula `suma = nums[izquierda] + nums[derecha]`.",
              "   b. Si `suma === target`, has encontrado el par.",
              "   c. Si `suma < target`, necesitas una suma mayor, así que incrementa `izquierda`.",
              "   d. Si `suma > target`, necesitas una suma menor, así que decrementa `derecha`."
            ]
          }
        ]
      },
       {
        id: "section-2-2",
        title: "2. Patrones de Lista Enlazada",
        slug: "patrones-de-lista-enlazada",
        subsections: [
          {
            id: "subsection-2-2-1",
            title: "2.1 Punteros Rápidos y Lentos",
            slug: "punteros-rapidos-y-lentos",
            content: [
              "Este patrón, también conocido como el algoritmo de la liebre y la tortuga, utiliza dos punteros que se mueven a través de una secuencia a diferentes velocidades. Es el patrón de referencia para problemas de ciclos y de encontrar puntos medios en listas enlazadas.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Un puntero `lento` se mueve un paso a la vez, mientras que un puntero `rápido` se mueve dos pasos a la vez. Si la lista enlazada tiene un ciclo, el puntero `rápido` eventualmente alcanzará al puntero `lento` por detrás.",
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              { type: 'list', items: [
                "El problema involucra una lista enlazada.",
                "Se te pide que detectes un ciclo.",
                "Necesitas encontrar el nodo del medio de la lista.",
                "Problemas relacionados con encontrar el k-ésimo nodo desde el final."
              ]},
              { type: 'heading', level: 4, text: "Ejemplos de Problemas Clásicos" },
              "**1. Detección de Ciclos:** Si en algún momento `rapido === lento`, hay un ciclo. Si `rapido` o `rapido.next` llega a ser `null`, no hay ciclo.",
              "**2. Encontrar el Nodo del Medio:** Cuando el puntero `rápido` llega al final de la lista, el puntero `lento` estará exactamente en el medio."
            ]
          }
        ]
      }
    ]
  }
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

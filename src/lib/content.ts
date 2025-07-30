export type ContentItem =
  | string
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: (string | { type: 'link'; text: string; href: string })[][] }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'code'; code: string };

export type Section = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content?: ContentItem[];
  subsections?: Section[];
};

export type Part = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  sections: Section[];
  content?: ContentItem[];
};

export const content: Part[] = [
  {
    id: "part-1",
    title: "Parte I: La Fundación",
    slug: "la-fundacion",
    description: "Conceptos Fundamentales y Estrategia de Aprendizaje. Esta primera parte establece las bases filosóficas y prácticas para todo el viaje de preparación. Va más allá de una simple lista de temas para abordar cómo un ingeniero debe enfocar el aprendizaje para obtener la máxima eficiencia y retención a largo plazo.",
    sections: [
      {
        id: "section-1-1",
        title: "1. Dominando el Proceso de Aprendizaje",
        slug: "dominando-el-proceso-de-aprendizaje",
        description: "Un Marco Moderno para la preparación de entrevistas técnicas, enfocado en la eficiencia y la retención a largo plazo.",
        subsections: [
          {
            id: "subsection-1-1-1",
            title: "1.1 Reconocimiento de Patrones",
            slug: "cambio-de-paradigma-reconocimiento-de-patrones",
            content: [
              "El enfoque moderno para la preparación de entrevistas técnicas ha experimentado una transformación fundamental, alejándose de la memorización de soluciones específicas hacia el desarrollo de una comprensión profunda de los patrones de resolución de problemas subyacentes. Este cambio reconoce que el objetivo de las entrevistas en empresas de primer nivel no es evaluar si un candidato ha visto un problema exacto antes, sino determinar si posee un modelo mental robusto para deconstruir problemas nuevos y desconocidos.",
              "La evolución de las plataformas de preparación refleja esta transición. Inicialmente, sitios como `LeetCode` y `HackerRank` ofrecían vastos repositorios de problemas, lo que fomentó una cultura de \"grind\" o práctica intensiva y repetitiva. Si bien es valiosa para la exposición, esta estrategia a menudo resulta ineficiente, ya que muchos problemas son redundantes o se centran en conceptos oscuros que rara vez aparecen en entrevistas reales. Esto puede llevar al agotamiento y a una falsa sensación de progreso basada en la cantidad en lugar de la calidad de la comprensión.",
              "Posteriormente, plataformas como `AlgoExpert` surgieron con una filosofía de curación, ofreciendo un conjunto selecto de 200 de los \"mejores\" problemas, cada uno acompañado de explicaciones en video de alta calidad. Este modelo prioriza la calidad sobre la cantidad, enfatizando la importancia de entender el \"cómo\" y el \"porqué\" detrás de cada solución, en lugar de simplemente memorizar líneas de código.",
              "La culminación de esta evolución es el enfoque basado en patrones, popularizado por la serie \"Grokking the Coding Interview\" de `Educative.io`. Esta metodología postula que la gran mayoría de los problemas de entrevista de tipo LeetCode se pueden resolver aplicando un conjunto de aproximadamente 20 a 24 patrones reutilizables. Aprender a identificar y aplicar estos patrones, como `Sliding Window` (Ventana Deslizante) o `Two Pointers` (Dos Punteros), equipa a los candidatos con un conjunto de herramientas transferibles. Cuando se enfrentan a un problema nuevo, en lugar de buscar una solución única en su memoria, buscan identificar el patrón subyacente y aplicar una plantilla de solución probada. Esta habilidad para abstraer y categorizar problemas es una de las señales más potentes que los entrevistadores buscan, ya que demuestra una capacidad de resolución de problemas de nivel superior."
            ]
          },
          {
            id: "subsection-1-1-2",
            title: "1.2 Práctica Estructurada",
            slug: "practica-estructurada-vs-no-estructurada",
            content: [
              "Adoptar una filosofía basada en patrones requiere un plan de práctica estructurado para ser efectivo. La práctica aleatoria, aunque puede proporcionar una amplia exposición, no construye el dominio enfocado de cada patrón. Por lo tanto, un plan de estudio moderno debe basarse en listas de problemas curadas y reconocidas por la industria, que han sido validadas por miles de ingenieros como las más representativas y de mayor impacto.",
              { type: 'heading', level: 4, text: "Listas Influyentes"},
              {
                type: 'list',
                items: [
                  "`Blind 75`: Una lista de 75 de las preguntas más frecuentes en entrevistas de empresas como Google, Amazon, Microsoft y Facebook. Su popularidad se debe a su enfoque en problemas fundamentales que cubren una amplia gama de temas esenciales.",
                  "`NeetCode 150`: Una extensión de la lista Blind 75 que añade 75 problemas adicionales para una cobertura más completa. Esta lista está organizada por tema y es ideal para quienes ya están familiarizados con las estructuras de datos y algoritmos básicos."
                ]
              },
              "Un plan de estudio híbrido y altamente efectivo, como se sugiere en diversas discusiones comunitarias, integra el aprendizaje de patrones con la práctica de estas listas curadas. El proceso recomendado es el siguiente:",
              {
                type: 'list',
                items: [
                  "Aprender un Patrón: Estudiar a fondo un patrón específico, como `Merge Intervals` (Fusión de Intervalos), comprendiendo su lógica, casos de uso y plantilla de implementación.",
                  "Práctica Enfocada: Resolver todos los problemas de la lista NeetCode 150 que están etiquetados con ese patrón.",
                  "Repetir: Continuar este ciclo para cada uno de los patrones fundamentales."
                ]
              },
              "Este método garantiza una práctica deliberada y de alto retorno de inversión. En lugar de resolver problemas al azar, el candidato construye un dominio profundo y sistemático de las técnicas más importantes. Alternativamente, plataformas como `LeetCode` ofrecen sus propios \"Study Plans\" (Planes de Estudio) y `HackerRank` sus \"Interview Preparation Kits\" (Kits de Preparación de Entrevistas), que proporcionan rutas de aprendizaje guiadas y estructuradas directamente en la plataforma."
            ]
          },
          {
            id: "subsection-1-1-3",
            title: "1.3 Sistemas de Repetición Espaciada",
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
            id: "subsection-1-1-4",
            title: "1.4 Protocolo de Resolución de Problemas",
            slug: "protocolo-de-resolucion-de-problemas",
            content: [
              "Una entrevista de codificación no solo evalúa la corrección de la solución final, sino también el proceso para llegar a ella. Los entrevistadores buscan señales de un enfoque sistemático, habilidades de comunicación y atención al detalle. Por lo tanto, es fundamental adoptar y practicar un protocolo estricto para abordar cada problema.",
              { type: 'heading', level: 3, text: 'Paso 1: Clarificar y Definir el Alcance (5-10 minutos)'},
              "No se debe empezar a codificar inmediatamente. Las preguntas de entrevista son a menudo ambiguas a propósito para evaluar la capacidad del candidato para manejar la incertidumbre.",
              { type: 'list', items: [
                "Repetir la Pregunta: Parafrasear el problema con las propias palabras para confirmar la comprensión.",
                "Aclarar Entradas y Salidas: Preguntar sobre el rango de los valores de entrada (¿números negativos?, ¿flotantes?, ¿valores extremadamente grandes?), el formato (¿array ordenado?, ¿puede contener duplicados?, ¿puede ser nulo o vacío?), y el formato de salida esperado.",
                "Trabajar con un Ejemplo: Proponer un ejemplo simple y recorrerlo manualmente para validar la comprensión de la lógica del problema. Por ejemplo, para un verificador de palíndromos, usar `KAYAK` (verdadero) y `MOUSE` (falso)."
              ]},
              { type: 'heading', level: 3, text: 'Paso 2: Planificar y Discutir el Enfoque (10-15 minutos)'},
              "Verbalizar el proceso de pensamiento es una de las señales de comunicación más importantes.",
              { type: 'list', items: [
                  "Solución Bruta (Brute-Force): Comenzar discutiendo una solución ingenua o de fuerza bruta. Esto demuestra que se puede resolver el problema, aunque no sea de manera óptima, y establece una línea de base para la mejora.",
                  "Enfoque Optimizado: Proponer una solución más eficiente. Identificar los cuellos de botella en el enfoque de fuerza bruta y explicar qué estructuras de datos o algoritmos se pueden usar para optimizarlos.",
                  "Discutir Compensaciones (Trade-offs): Analizar la complejidad temporal y espacial (`O(n)`, `O(logn)`, etc.) de los diferentes enfoques. Explicar por qué se elige una solución sobre otra (por ejemplo, \"Podríamos usar un mapa hash para una búsqueda más rápida en `O(1)`, pero a costa de un espacio adicional de `O(n)\")."
              ]},
              { type: 'heading', level: 3, text: 'Paso 3: Implementar el Código (15-20 minutos)'},
              "La calidad del código es tan importante como su corrección.",
              { type: 'list', items: [
                  "Código Limpio y Legible: Usar nombres de variables descriptivos (por ejemplo, `leftPointer` en lugar de `i`).",
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
        id: "section-1-2",
        title: "2. Los Pilares - Estructuras de Datos",
        slug: "los-pilares-estructuras-de-datos",
        description: "El dominio de las estructuras de datos es el requisito previo indispensable para la resolución de problemas algorítmicos. Son las herramientas fundamentales con las que un ingeniero organiza y manipula la información.",
        subsections: [
          {
            id: 'subsection-1-2-1',
            title: '2.1 Arrays y Cadenas',
            slug: 'arrays-y-cadenas',
            content: [
              "Los arrays son la estructura de datos más fundamental, representando una colección contigua de elementos en memoria. Las cadenas son, en esencia, arrays de caracteres.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Bloques de memoria contiguos, accesibles por un índice. Esta contigüidad permite un acceso rápido pero hace que las inserciones y eliminaciones sean costosas.",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso por índice: `O(1)`",
                "Búsqueda (lineal): `O(n)`",
                "Inserción/Eliminación (al final, si hay capacidad): `O(1)` (amortizado para arrays dinámicos)",
                "Inserción/Eliminación (al principio/medio): `O(n)` (debido al desplazamiento de elementos)"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Cualquier problema que involucre una colección ordenada de datos, procesamiento de texto, o la necesidad de acceso rápido por índice. Son la base para muchos patrones como Ventana Deslizante y Dos Punteros.",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Invertir un Array' },
              { type: 'code', code: 
`function reverseArray(arr: any[]): any[] {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Intercambiar elementos
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Mover punteros hacia el centro
    left++;
    right--;
  }
  return arr;
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-2',
            title: '2.2 Listas Enlazadas (Singly, Doubly)',
            slug: 'listas-enlazadas',
            content: [
              "Las listas enlazadas consisten en nodos donde cada nodo contiene datos y un puntero al siguiente nodo (y al anterior en las doblemente enlazadas).",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Nodos no contiguos en memoria, conectados por punteros. Esto permite inserciones y eliminaciones eficientes, pero sacrifica el acceso por índice en `O(1)`.",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso/Búsqueda: `O(n)`",
                "Inserción/Eliminación (al principio): `O(1)`",
                "Inserción/Eliminación (dado un puntero al nodo): `O(1)`",
                "Inserción/Eliminación (al final): `O(n)` para simplemente enlazadas (requiere recorrer), `O(1)` si se mantiene un puntero a la cola."
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Problemas que requieren frecuentes inserciones o eliminaciones en medio de una secuencia. El patrón de \"Punteros Rápidos y Lentos\" se utiliza comúnmente para detectar ciclos o encontrar el medio. Problemas como \"Invertir una Lista Enlazada\" son clásicos.",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Definición de Nodo e Inversión de Lista' },
              { type: 'code', code: 
`class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  
  while (current !== null) {
    const nextTemp: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  
  return prev;
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-3',
            title: '2.3 Tablas Hash (Mapas)',
            slug: 'tablas-hash',
            content: [
              "Las tablas hash (o mapas) almacenan pares clave-valor. Utilizan una función hash para calcular un índice en un array de cubetas o ranuras, desde donde se puede encontrar el valor deseado.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una estructura de datos que mapea claves a valores para búsquedas, inserciones y eliminaciones altamente eficientes. La clave se pasa a través de una función hash que determina dónde almacenar el valor. Las colisiones (dos claves que hashean al mismo índice) se manejan típicamente con encadenamiento (listas enlazadas en cada índice).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Inserción: `O(1)` en promedio, `O(n)` en el peor caso (si todas las claves colisionan)",
                "Eliminación: `O(1)` en promedio, `O(n)` en el peor caso",
                "Búsqueda: `O(1)` en promedio, `O(n)` en el peor caso"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Siempre que necesites buscar, insertar o eliminar elementos rápidamente y el orden no sea importante. Son increíblemente versátiles. Palabras clave: \"frecuencia\", \"conteo\", \"duplicados\", \" caché\", \"dos sumas\". Problemas como \"Two Sum\", \"Group Anagrams\" y la implementación de una caché LRU dependen de las tablas hash.",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Problema "Two Sum"' },
              { type: 'code', code:
`function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // valor -> índice
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  
  return []; // No se encontró solución
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-4',
            title: '2.4 Pilas (Stacks)',
            slug: 'pilas',
            content: [
              "Una estructura de datos LIFO (Last-In, First-Out), análoga a una pila de platos.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una colección de elementos con dos operaciones principales: `push` (añadir al tope) y `pop` (quitar del tope).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Push (Añadir al tope): `O(1)`",
                "Pop (Quitar del tope): `O(1)`",
                "Peek/Top (Ver el elemento superior): `O(1)`"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Problemas que implican procesamiento en orden inverso, como invertir una cadena. Comprobación de sintaxis (paréntesis, llaves, corchetes balanceados). Algoritmos de recorrido de grafos y árboles (DFS). Problemas de \"próximo elemento mayor\". Problemas clásicos: \"Valid Parentheses\", \"Min Stack\".",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Paréntesis Válidos' },
              { type: 'code', code:
`function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const lastOpen = stack.pop()!;
      if (map[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-5',
            title: '2.5 Colas (Queues)',
            slug: 'colas',
            content: [
              "Una estructura de datos FIFO (First-In, First-Out), como una fila para pagar.",
              { type: 'heading', level: 4, text: "Modelo Conceptual" },
              "Una colección de elementos donde los elementos se añaden por detrás (`enqueue`) y se quitan por delante (`dequeue`).",
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Enqueue (Añadir al final): `O(1)`",
                "Dequeue (Quitar del principio): `O(1)`",
                "Peek (Ver el primer elemento): `O(1)`"
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Algoritmo de Búsqueda en Anchura (BFS) para árboles y grafos, que es clave para encontrar el camino más corto en grafos no ponderados. Programación de tareas. Cualquier escenario que requiera procesar elementos en el orden en que llegaron.",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Implementación Básica de una Cola' },
              { type: 'code', code: 
`class Queue<T> {
  private storage: T[] = [];

  enqueue(item: T): void {
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  peek(): T | undefined {
    return this.storage[0];
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }
  
  size(): number {
    return this.storage.length;
  }
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-6',
            title: '2.6 Árboles (BST, Montículos)',
            slug: 'arboles',
            content: [
              "Estructuras de datos jerárquicas que consisten en nodos conectados por aristas.",
              { type: 'heading', level: 3, text: 'Árbol de Búsqueda Binaria (BST)'},
              { type: 'list', items: [
                "Modelo Conceptual: Un árbol binario donde para cada nodo, todos los valores en su subárbol izquierdo son menores que el valor del nodo, y todos los valores en su subárbol derecho son mayores.",
                "Operaciones: Búsqueda, Inserción, Eliminación tienen una complejidad de `O(log n)` en promedio (para un árbol balanceado) y `O(n)` en el peor caso (un árbol degenerado, similar a una lista enlazada).",
                "Disparadores: Problemas que requieren mantener un conjunto ordenado de datos con inserciones y búsquedas eficientes. \"Validar un BST\", \"Encontrar el k-ésimo elemento más pequeño en un BST\"."
              ]},
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Búsqueda en un BST' },
              { type: 'code', code:
`class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null || root.val === val) {
        return root;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}`
              },
              { type: 'heading', level: 3, text: 'Montículos (Heaps)'},
              { type: 'list', items: [
                "Modelo Conceptual: Un árbol binario completo que satisface la propiedad del montículo: en un `min-heap`, el padre es siempre menor o igual que sus hijos; en un `max-heap`, el padre es siempre mayor or igual.",
                "Operaciones: Inserción (`O(log n)`), Extracción del mínimo/máximo (`O(log n)`), Obtener el mínimo/máximo (`O(1)`).",
                "Disparadores: Problemas que requieren acceso rápido al elemento mínimo o máximo de una colección. Implementación de una cola de prioridad. Problemas como \"Encontrar la mediana de un flujo de datos\", \"Top K elementos frecuentes\", \"Fusionar K listas ordenadas\"."
              ]},
              { type: 'heading', level: 4, text: 'Ejemplo de Uso: Encontrar los K elementos más grandes' },
              "Aunque no se suele implementar un montículo desde cero en una entrevista, es crucial saber cómo usarlo. La mayoría de los lenguajes no tienen una implementación nativa de min-heap/max-heap, por lo que a menudo se utilizan librerías o se simula un max-heap negando los números en un min-heap.",
            ]
          },
           {
            id: 'subsection-1-2-7',
            title: '2.7 Grafos',
            slug: 'grafos',
            content: [
              "Un conjunto de nodos (vértices) conectados por aristas. Las aristas pueden ser dirigidas o no dirigidas, y ponderadas o no ponderadas.",
              { type: 'heading', level: 4, text: "Representaciones Clave" },
              { type: 'list', items: [
                "Lista de Adyacencia: Un array o mapa donde cada índice/clave corresponde a un vértice y el valor es una lista de sus vecinos. Eficiente en espacio para grafos dispersos.",
                "Matriz de Adyacencia: Una matriz NxN donde N es el número de vértices. `M[i][j] = 1` (o el peso) si hay una arista de `i` a `j`. Eficiente para comprobar rápidamente la existencia de una arista entre dos nodos, pero costosa en espacio para grafos grandes."
              ]},
              { type: 'heading', level: 4, text: "Algoritmos de Recorrido" },
               { type: 'list', items: [
                "Búsqueda en Anchura (BFS): Explora los vecinos de un nodo antes de pasar al siguiente nivel. Usa una cola. Ideal para encontrar el camino más corto en grafos no ponderados.",
                "Búsqueda en Profundidad (DFS): Explora tan lejos como sea posible a lo largo de cada rama antes de retroceder. Usa una pila (a menudo la pila de llamadas recursivas). Útil para problemas como la detección de ciclos, ordenación topológica y encontrar componentes conectados."
              ]},
              { type: 'heading', level: 4, text: "Casos de Uso y Disparadores de Entrevista" },
              "Cualquier problema que modele redes y conexiones: redes sociales, mapas de ciudades, dependencias de tareas. Palabras clave: \"red\", \"conexiones\", \"camino más corto\", \"ciclo\", \"requisitos previos\". Problemas clásicos: \"Número de Islas\", \"Clonar Grafo\", \"Course Schedule\".",
              { type: 'heading', level: 4, text: 'Ejemplo de Código: Recorrido BFS de un Grafo' },
              { type: 'code', code:
`function bfs(graph: Map<number, number[]>, startNode: number): void {
  const visited = new Set<number>();
  const queue: number[] = [startNode];
  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    console.log(currentNode); // Procesar el nodo

    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Ejemplo de uso:
// El grafo se representa como una lista de adyacencia
const graph = new Map<number, number[]>();
graph.set(0, [1, 2]);
graph.set(1, [2]);
graph.set(2, [0, 3]);
graph.set(3, [3]);

bfs(graph, 2); // Salida: 2, 0, 3, 1`
              }
            ]
          }
        ]
      },
       {
        id: "section-1-3",
        title: "3. Algoritmos Fundamentales",
        slug: "algoritmos-fundamentales",
        description: "Los algoritmos son los procedimientos paso a paso que operan sobre las estructuras de datos para resolver problemas. Una sólida comprensión de estos algoritmos fundamentales es esencial para construir soluciones eficientes.",
        subsections: [
          {
            id: 'subsection-1-3-1',
            title: '3.1 Búsqueda',
            slug: 'busqueda',
            content: [
                { type: 'heading', level: 3, text: 'Búsqueda Binaria' },
                { type: 'list', items: [
                    "Principio Algorítmico: Un algoritmo de búsqueda eficiente que funciona en arrays ordenados. Divide repetidamente el intervalo de búsqueda por la mitad. Si el valor del punto medio es menor que el objetivo, se descarta la mitad inferior; si es mayor, se descarta la mitad superior.",
                    "Complejidad: `O(log n)` en tiempo, `O(1)` en espacio.",
                    "Cuándo Usarlo: Siempre que se necesite buscar un elemento en un conjunto de datos ordenado o encontrar un punto que satisfaga una condición en un espacio de búsqueda monotónico."
                ]},
                { type: 'heading', level: 3, text: 'Búsqueda en Profundidad (DFS)' },
                { type: 'list', items: [
                    "Principio Algorítmico: Un algoritmo de recorrido de árboles o grafos que explora tan lejos como sea posible a lo largo de cada rama antes de retroceder (backtracking). Se implementa comúnmente de forma recursiva o de forma iterativa usando una pila.",
                    "Complejidad: `O(V+E)` en tiempo (donde V es el número de vértices y E el de aristas), `O(H)` en espacio para la implementación recursiva (donde H es la altura del árbol/grafo).",
                    "Cuándo Usarlo: Para problemas de recorrido (pre-orden, in-orden, post-orden en árboles), detección de ciclos, búsqueda de caminos y problemas de backtracking."
                ]},
                { type: 'heading', level: 3, text: 'Búsqueda en Amplitud (BFS)' },
                { type: 'list', items: [
                    "Principio Algorítmico: Un algoritmo de recorrido de árboles o grafos que explora todos los vecinos de un nodo en el nivel actual antes de pasar al siguiente nivel. Se implementa usando una cola.",
                    "Complejidad: `O(V+E)` en tiempo, `O(W)` en espacio (donde W es el ancho máximo del árbol/grafo).",
                    "Cuándo Usarlo: Para encontrar el camino más corto en un grafo no ponderado, recorridos por nivel y problemas donde se necesita explorar los nodos más cercanos primero."
                ]},
            ]
        },
        {
            id: 'subsection-1-3-2',
            title: '3.2 Ordenamiento',
            slug: 'ordenamiento',
            content: [
                { type: 'heading', level: 3, text: 'Conceptos Fundamentales (Bubble, Insertion, Selection Sort)' },
                { type: 'list', items: [
                    "Principio Algorítmico: Estos son algoritmos de ordenamiento simples pero ineficientes (`O(n^2)`). Aunque no son soluciones óptimas en una entrevista, comprenderlos demuestra un conocimiento fundamental. Bubble Sort intercambia repetidamente elementos adyacentes desordenados; Insertion Sort construye el array ordenado final un elemento a la vez; Selection Sort encuentra repetidamente el elemento mínimo y lo coloca en su posición correcta.",
                    "Complejidad: `O(n^2)` en tiempo."
                ]},
                { type: 'heading', level: 3, text: 'Algoritmos Eficientes (Merge Sort, Quick Sort, Heap Sort)' },
                { type: 'list', items: [
                    "`Merge Sort`: Un algoritmo de \"divide y vencerás\". Divide el array por la mitad, se ordena a sí mismo recursivamente en cada mitad y luego fusiona las dos mitades ordenadas. Su complejidad de `O(n log n)` está garantizada.",
                    "`Quick Sort`: Otro algoritmo de \"divide y vencerás\". Elige un elemento como pivote y particiona el array de modo que los elementos más pequeños que el pivote queden a su izquierda y los más grandes a su derecha. Luego, ordena recursivamente las sub-arrays. Su complejidad promedio es de `O(n log n)`, pero en el peor de los casos es `O(n^2)`.",
                    "`Heap Sort`: Utiliza una estructura de datos de montículo (Heap) para ordenar. Primero, construye un Max-Heap a partir de los datos y luego extrae repetidamente el elemento más grande del montículo y lo coloca al final del array. Su complejidad es de `O(n log n)`."
                ]},
            ]
        },
        {
            id: 'subsection-1-3-3',
            title: '3.3 Recursión y Backtracking',
            slug: 'recursion-y-backtracking',
            content: [
                { type: 'list', items: [
                    "Principio Algorítmico: La recursión es una técnica en la que una función se llama a sí misma para resolver subproblemas más pequeños. El backtracking es una forma de recursión que construye una solución de forma incremental y abandona (retrocede) una ruta tan pronto como determina que no puede conducir a una solución válida.",
                    "Cuándo Usarlo: Problemas que pueden descomponerse en subproblemas idénticos, como permutaciones, combinaciones, subconjuntos, y la resolución de laberintos o sudokus."
                ]},
            ]
        },
        {
            id: 'subsection-1-3-4',
            title: '3.4 Algoritmos Voraces',
            slug: 'algoritmos-voraces',
            content: [
                { type: 'list', items: [
                    "Principio Algorítmico: En cada paso, se toma la decisión que parece ser la mejor en ese momento (la óptima local), con la esperanza de que conduzca a una solución óptima global. No siempre funciona, pero para ciertos problemas (como el problema de hacer cambio con monedas o la asignación de tareas), es muy eficiente.",
                    "Complejidad: Varía según el problema, pero a menudo es muy eficiente, como `O(n log n)` si requiere ordenamiento."
                ]},
            ]
        },
        {
            id: 'subsection-1-3-5',
            title: '3.5 Programación Dinámica (DP)',
            slug: 'programacion-dinamica',
            content: [
                "Una técnica para resolver problemas complejos dividiéndolos en subproblemas más simples y superpuestos. Almacena las soluciones a estos subproblemas para evitar recalcularlas. Hay dos enfoques principales:",
                { type: 'list', items: [
                    "Memoización (Top-Down): Se utiliza la recursión, pero se almacena el resultado de cada llamada a la función en una caché (como un mapa hash o un array) para que las llamadas futuras con los mismos argumentos devuelvan el resultado almacenado.",
                    "Tabulación (Bottom-Up): Se resuelve el problema de forma iterativa, llenando una tabla (generalmente un array o una matriz) desde los casos base más pequeños hasta la solución final."
                ]},
                "Cuándo Usarlo: Problemas de optimización (encontrar el máximo o mínimo) o de conteo que tienen subproblemas superpuestos y una subestructura óptima. Ejemplos clásicos incluyen la secuencia de Fibonacci, el problema de la mochila (Knapsack) y la subsecuencia común más larga.",
            ]
        },
        ]
      }
    ],
  },
  {
    id: "part-2",
    title: "Parte II: La Aplicación",
    slug: "la-aplicacion",
    description: "Patrones de Resolución de Problemas y Temas Avanzados. Esta parte cierra la brecha entre el conocimiento de una estructura de datos y la habilidad para resolver un problema con ella. Constituye el núcleo de la estrategia de preparación moderna basada en patrones, transformando el conocimiento teórico en capacidad práctica.",
    sections: [
      {
        id: "section-2-1",
        title: "4. Deconstruyendo Problemas: Patrones 'Grokking'",
        slug: "patrones-grokking",
        description: "Esta sección es la más detallada y accionable del currículo de codificación. El dominio de estos patrones es la meta-habilidad más importante, permitiendo a los candidatos categorizar rápidamente problemas nuevos y aplicar un marco de solución probado.",
        subsections: [
          {
            id: "subsection-2-1-1",
            title: "4.1 Ventana Deslizante (Sliding Window)",
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
              { type: 'heading', level: 4, text: "Plantilla de Código" },
              { type: 'code', code:
`function findMaxSumSubarray(nums: number[], k: number): number {
  let maxSum = -Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd]; // Añadir el siguiente elemento

    // Deslizar la ventana si hemos alcanzado el tamaño k
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[windowStart]; // Restar el elemento que sale
      windowStart++; // Deslizar la ventana hacia adelante
    }
  }

  return maxSum;
}`
              }
            ]
          },
          {
            id: "subsection-2-1-2",
            title: "4.2 Dos Punteros (Two Pointers)",
            slug: "dos-punteros",
            content: [
              "En este patrón, se utilizan dos punteros para iterar a través de una estructura de datos, a menudo desde extremos opuestos, hasta que se encuentran en el medio. Es extremadamente útil para optimizar problemas que de otro modo requerirían un bucle anidado `O(n^2)`.",
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
              { type: 'heading', level: 4, text: "Plantilla de Código" },
              { type: 'code', code: 
`function pairWithTargetSum(arr: number[], targetSum: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right]; // Par encontrado
    }

    if (targetSum > currentSum) {
      left++; // Necesitamos un par con una suma mayor
    } else {
      right--; // Necesitamos un par con una suma menor
    }
  }

  return [-1, -1]; // No se encontró el par
}`
              }
            ]
          },
          {
            id: "subsection-2-1-3",
            title: "4.3 Punteros Rápidos y Lentos",
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
              { type: 'heading', level: 4, text: "Ejemplo de Problema Clásico" },
              "**Problema:** Detectar si una lista enlazada tiene un ciclo.",
              { type: 'heading', level: 4, text: "Plantilla de Código" },
              { type: 'code', code: 
`class ListNode {
  val: number;
  next: ListNode | null;
  // ... constructor
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Ciclo detectado
    }
  }

  return false; // No hay ciclo
}`
              }
            ]
          },
          {
            id: 'subsection-2-1-4',
            title: '4.4 Fusión de Intervalos',
            slug: 'fusion-de-intervalos',
            content: [
              "Este patrón se ocupa de problemas que involucran intervalos superpuestos. La idea general es ordenar los intervalos y luego fusionar o procesar los que se superponen.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              { type: 'list', items: [
                "El problema presenta una lista de intervalos (representados como pares de números, por ejemplo, `[start, end]`).",
                "Se pide encontrar superposiciones, fusionar intervalos, o gestionar conflictos de programación.",
              ]},
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Fusión)' },
              { type: 'list', items: [
                "Ordenar los intervalos por su tiempo de inicio.",
                "Inicializar una lista de resultados con el primer intervalo.",
                "Iterar a través de los intervalos restantes.",
                "Para cada intervalo, compararlo con el último intervalo en la lista de resultados.",
                "Si hay una superposición, fusionarlos actualizando el tiempo de finalización del último intervalo en los resultados.",
                "Si no hay superposición, añadir el intervalo actual a la lista de resultados.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Merge Intervals`, `Insert Interval`, `Intervals Intersection`, `Minimum Meeting Rooms`.",
            ],
          },
          {
            id: 'subsection-2-1-5',
            title: '4.5 Ordenamiento Cíclico',
            slug: 'ordenamiento-ciclico',
            content: [
              "Este patrón se utiliza para resolver problemas con arrays que contienen números en un rango específico, como de 1 a N. La idea es iterar a través del array y colocar cada número en su posición correcta.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              { type: 'list', items: [
                "El problema involucra un array de números en un rango contiguo y limitado (por ejemplo, 1 a N).",
                "Pide encontrar números faltantes, duplicados o corruptos de una manera eficiente en cuanto a espacio (generalmente `O(1)`).",
              ]},
              { type: 'heading', level: 4, text: 'Plantilla de Solución' },
              { type: 'list', items: [
                "Inicializar un puntero `i = 0`.",
                "Usar un bucle `while (i < array.length)`.",
                "El valor en `array[i]` debería estar en el índice `array[i] - 1`. Sea `j = array[i] - 1`.",
                "Si `array[i]` no está en su lugar correcto (es decir, `array[i] != array[j]`), intercambiar `array[i]` con `array[j]`.",
                "Si `array[i]` ya está en su lugar correcto, incrementar `i`.",
                "Después de que el array esté ordenado, una segunda pasada puede encontrar fácilmente el número faltante o duplicado.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Find the Missing Number`, `Find all Missing Numbers`, `Find the Duplicate Number`.",
            ],
          },
          {
            id: 'subsection-2-1-6',
            title: '4.6 Inversión de Lista Enlazada',
            slug: 'inversion-lista-enlazada',
            content: [
              "Este patrón invierte los nodos de una lista enlazada (o una sublista) sin usar espacio adicional. Implica manipular cuidadosamente los punteros `next` de los nodos.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide explícitamente invertir una lista enlazada, una sublista, o realizar operaciones que requieran una inversión como parte de la solución.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Inversión Completa)' },
              { type: 'list', items: [
                "Inicializar tres punteros: `previous = null`, `current = head`, `next = null`.",
                "Iterar mientras `current` no sea nulo.",
                "Almacenar el siguiente nodo: `next = current.next`.",
                "Invertir el puntero del nodo actual: `current.next = previous`.",
                "Mover los punteros hacia adelante: `previous = current`, `current = next`.",
                "Al final, `previous` será la nueva cabeza de la lista invertida.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Reverse a LinkedList`, `Reverse a Sub-list`, `Reverse every K-element Sub-list`.",
            ],
          },
          {
            id: 'subsection-2-1-7',
            title: '4.7 Búsqueda en Amplitud en Árboles (Tree BFS)',
            slug: 'tree-bfs',
            content: [
              "Este patrón utiliza la Búsqueda en Amplitud (BFS) para recorrer un árbol nivel por nivel. Utiliza una cola para mantener un registro de todos los nodos en un nivel antes de visitar el siguiente.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide recorrer un árbol nivel por nivel, encontrar el sucesor de un nodo en el mismo nivel, o encontrar el camino más corto en un árbol (donde cada arista tiene un peso de 1).",
              { type: 'heading', level: 4, text: 'Plantilla de Solución' },
              { type: 'list', items: [
                "Inicializar una cola y añadir el nodo raíz.",
                "Usar un bucle `while` la cola no esté vacía.",
                "Obtener el tamaño del nivel actual (`levelSize = queue.size()`).",
                "Crear una lista para el nivel actual.",
                "Usar un bucle `for` que se ejecute `levelSize` veces.",
                "En cada iteración, sacar un nodo de la cola, añadir su valor a la lista del nivel actual, y añadir sus hijos (si existen) a la cola.",
                "Procesar la lista del nivel actual.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Binary Tree Level Order Traversal`, `Zigzag Traversal`, `Minimum Depth of a Binary Tree`.",
            ],
          },
          {
            id: 'subsection-2-1-8',
            title: '4.8 Búsqueda en Profundidad en Árboles (Tree DFS)',
            slug: 'tree-dfs',
            content: [
              "Este patrón utiliza la Búsqueda en Profundidad (DFS) para recorrer un árbol siguiendo una ruta hasta su final antes de retroceder. Generalmente se implementa de forma recursiva.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra encontrar un camino desde la raíz hasta una hoja que cumpla con ciertas condiciones, contar todos los caminos posibles, o realizar un recorrido pre-orden, in-orden o post-orden.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Recursiva)' },
              { type: 'list', items: [
                "Definir una función recursiva que tome el nodo actual y el estado actual (por ejemplo, la suma del camino actual).",
                "Caso base: si el nodo actual es nulo, retornar.",
                "Procesar el nodo actual (por ejemplo, añadir su valor a la suma del camino).",
                "Caso base de éxito: si el nodo actual es una hoja y cumple la condición, registrar la solución.",
                "Llamar recursivamente a la función para los hijos izquierdo y derecho.",
                "(Si se usa backtracking) \"Deshacer\" el procesamiento del nodo actual antes de retornar para explorar otras rutas.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Binary Tree Path Sum`, `All Paths for a Sum`, `Sum of Path Numbers`, `Tree Diameter`.",
            ],
          },
          {
            id: 'subsection-2-1-9',
            title: '4.9 Dos Montículos (Two Heaps)',
            slug: 'dos-monticulos',
            content: [
              "Este patrón utiliza dos montículos (un Min-Heap y un Max-Heap) para dividir un conjunto de números en dos partes. El Max-Heap almacena la mitad más pequeña de los números, y el Min-Heap almacena la mitad más grande.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide encontrar la mediana de un conjunto de datos en constante cambio (un flujo), o resolver problemas que requieren encontrar un punto de división o equilibrio en un conjunto de números.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Mediana de un Flujo)' },
              { type: 'list', items: [
                "Mantener un Max-Heap (`smallHalf`) y un Min-Heap (`largeHalf`).",
                "Al añadir un nuevo número, insertarlo en `smallHalf`.",
                "Para mantener el equilibrio, mover el elemento más grande de `smallHalf` a `largeHalf`.",
                "Si `largeHalf` tiene más elementos que `smallHalf`, mover el elemento más pequeño de `largeHalf` a `smallHalf`.",
                "La mediana es la cima de `smallHalf` (si los tamaños son desiguales) o el promedio de las cimas de ambos montículos (si los tamaños son iguales).",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Find the Median of a Number Stream`, `Sliding Window Median`.",
            ],
          },
          {
            id: 'subsection-2-1-10',
            title: '4.10 Subconjuntos (Subsets)',
            slug: 'subconjuntos',
            content: [
              "Este patrón se ocupa de problemas que piden encontrar todas las combinaciones, permutaciones o subconjuntos de un conjunto dado. Generalmente se resuelve usando recursión con backtracking.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide generar \"todos los posibles\" X (subconjuntos, permutaciones, combinaciones, paréntesis válidos) de un conjunto de entrada.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Subconjuntos con Backtracking)' },
              { type: 'list', items: [
                "Definir una función de backtracking que tome el índice actual y el subconjunto actual.",
                "Añadir el subconjunto actual a la lista de resultados.",
                "Iterar desde el índice actual hasta el final del conjunto de entrada.",
                "En cada iteración, \"elegir\" el elemento (añadirlo al subconjunto actual).",
                "Llamar recursivamente a la función de backtracking con el siguiente índice.",
                "\"No elegir\" el elemento (eliminarlo del subconjunto actual para retroceder).",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Subsets`, `Subsets With Duplicates`, `Permutations`, `Generate Parentheses`.",
            ],
          },
          {
            id: 'subsection-2-1-11',
            title: '4.11 Búsqueda Binaria Modificada',
            slug: 'busqueda-binaria-modificada',
            content: [
              "Este patrón es una aplicación de la Búsqueda Binaria en escenarios más complejos que un simple array ordenado. Se aplica a arrays que están ordenados pero con alguna modificación, como estar rotados, o cuando se busca un rango en lugar de un solo elemento.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra un array ordenado que ha sido rotado, o pide encontrar el primer/último elemento que cumple una condición, o buscar en un espacio de búsqueda infinito o desconocido.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Array Rotado)' },
              { type: 'list', items: [
                "Implementar una búsqueda binaria estándar con `left` y `right`.",
                "En cada paso, después de encontrar el `mid`, determinar qué mitad del array (`left` a `mid` o `mid` a `right`) está ordenada.",
                "Comprobar si el objetivo se encuentra dentro del rango de la mitad ordenada.",
                "Si es así, ajustar los punteros para buscar en esa mitad.",
                "Si no, buscar en la otra mitad.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Search in Rotated Array`, `Number Range`, `Search in a Sorted Infinite Array`.",
            ],
          },
          {
            id: 'subsection-2-1-12',
            title: '4.12 Los K Elementos Superiores (Top K)',
            slug: 'top-k-elements',
            content: [
              "Este patrón se utiliza para encontrar los K elementos más grandes, más pequeños o más frecuentes en un conjunto de datos. La solución más común y eficiente utiliza un montículo (Heap).",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide explícitamente los \"K\" elementos superiores/inferiores/más frecuentes, o el \"k-ésimo\" elemento más grande/pequeño.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Top K Frecuentes)' },
              { type: 'list', items: [
                "Construir un mapa de frecuencias de los elementos.",
                "Crear un Min-Heap de tamaño K.",
                "Iterar a través del mapa de frecuencias.",
                "Para cada elemento, añadirlo al Min-Heap.",
                "Si el tamaño del montículo supera K, eliminar el elemento superior (el de menor frecuencia).",
                "Al final, el montículo contendrá los K elementos más frecuentes.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Top K Frequent Elements`, `Kth Largest Element in an Array`, `K Closest Points to Origin`.",
            ],
          },
          {
            id: 'subsection-2-1-13',
            title: '4.13 Fusión de K Vías (K-way Merge)',
            slug: 'fusion-k-vias',
            content: [
              "Este patrón ayuda a resolver problemas que involucran un conjunto de listas ordenadas. La idea es fusionar estas listas en una única lista ordenada.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema presenta múltiples arrays o listas ordenadas y pide fusionarlas, encontrar el elemento más pequeño entre ellas, o encontrar la mediana de su combinación.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Fusionar K Listas)' },
              { type: 'list', items: [
                "Crear un Min-Heap.",
                "Añadir el primer elemento de cada una de las K listas al Min-Heap.",
                "Mientras el Min-Heap no esté vacío:",
                "a. Extraer el elemento más pequeño del montículo y añadirlo a la lista de resultados.",
                "b. Si la lista de la que provino el elemento extraído tiene más elementos, añadir el siguiente elemento de esa lista al montículo.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Merge K Sorted Lists`.",
            ],
          },
          {
            id: 'subsection-2-1-14',
            title: '4.14 Ordenamiento Topológico',
            slug: 'ordenamiento-topologico',
            content: [
              "El ordenamiento topológico se utiliza para encontrar un ordenamiento lineal de nodos en un Grafo Acíclico Dirigido (DAG) donde para cada arista dirigida de `u` a `v`, `u` viene antes que `v` en el ordenamiento.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra dependencias entre elementos, como un calendario de cursos, dependencias de compilación de software, o cualquier tarea donde algunas deben completarse antes que otras.",
              { type: 'heading', level: 4, text: "Plantilla de Solución (Basada en Kahn's Algorithm - BFS)" },
              { type: 'list', items: [
                "Construir el grafo y un mapa de grados de entrada (in-degree) para cada nodo.",
                "Inicializar una cola con todos los nodos que tienen un grado de entrada de 0 (fuentes).",
                "Mientras la cola no esté vacía:",
                "a. Sacar un nodo de la cola y añadirlo a la lista de resultados ordenados.",
                "b. Para cada vecino del nodo sacado, decrementar su grado de entrada en 1.",
                "c. Si el grado de entrada de un vecino se convierte en 0, añadirlo a la cola.",
                "Si la lista de resultados tiene el mismo número de nodos que el grafo, es un ordenamiento topológico válido; de lo contrario, hay un ciclo.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`Course Schedule`, `Alien Dictionary`.",
            ],
          },
          {
            id: 'subsection-2-1-15',
            title: '4.15 Mochila 0/1 (0/1 Knapsack - DP)',
            slug: 'mochila-0-1',
            content: [
              "Este es un patrón fundamental de Programación Dinámica. Dado un conjunto de elementos, cada uno con un peso y un valor, se debe determinar el número de cada elemento a incluir en una colección para que el peso total sea menor o igual a un límite dado y el valor total sea el máximo posible. En la variante 0/1, solo se puede tomar o dejar cada elemento.",
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema pide tomar decisiones (tomar/no tomar, incluir/excluir) para maximizar o minimizar un valor bajo ciertas restricciones de capacidad o peso.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Tabulación)' },
              { type: 'list', items: [
                "Crear una tabla DP `dp[i][c]` donde `i` es el número de elementos considerados y `c` es la capacidad actual.",
                "`dp[i][c]` almacenará el valor máximo que se puede obtener con los primeros `i` elementos y una capacidad de `c`.",
                "Llenar la tabla iterativamente. Para cada elemento `i` y capacidad `c`:",
                "a. Si no se incluye el elemento `i`, el valor es `dp[i-1][c]`.",
                "b. Si se incluye el elemento `i` (y su peso no excede `c`), el valor es `valor[i] + dp[i-1][c - peso[i]]`.",
                "c. `dp[i][c]` es el máximo de estas dos opciones.",
              ]},
              { type: 'heading', level: 4, text: 'Problemas Canónicos' },
              "`0/1 Knapsack`, `Partition Equal Subset Sum`, `Target Sum`.",
            ],
          },
        ]
      },
       {
        id: "section-2-2",
        title: "5. Dominios de Conocimiento Especializados",
        slug: "dominios-especializados",
        description: "Para destacar en entrevistas en empresas de primer nivel o para roles de mayor antigüedad, el dominio de los patrones fundamentales debe complementarse con conocimientos en áreas más especializadas.",
        subsections: [
            {
                id: 'subsection-2-2-1',
                title: '5.1 Manipulación de Bits',
                slug: 'manipulacion-de-bits',
                content: [
                    "La manipulación de bits implica operar directamente en la representación binaria de los números. Es fundamental para la optimización de bajo nivel y para resolver ciertos problemas algorítmicos de manera elegante.",
                    { type: 'heading', level: 4, text: 'Operadores Fundamentales' },
                    "Es crucial comprender los operadores a nivel de bits: `AND (&)`, `OR (|)`, `XOR (^)`, `NOT (~)`, `Desplazamiento a la Izquierda (<<)` y `Desplazamiento a la Derecha (>>)`.",
                    { type: 'heading', level: 4, text: 'Técnicas Comunes en Entrevistas' },
                    { type: 'list', items: [
                        "Máscaras de Bits (Bit Masking): Crear un valor binario (la máscara) para establecer, limpiar, alternar o probar un bit específico en un número. Por ejemplo, para establecer el k-ésimo bit de un número n, se usa `n |= (1 << k)`.",
                        "Comprobar si un número es potencia de dos: Un número n > 0 es una potencia de dos si y solo si `(n & (n - 1)) == 0`.",
                        "Contar bits establecidos (set bits): Una técnica eficiente es usar repetidamente la operación `n &= (n - 1)`, que elimina el bit establecido menos significativo en cada iteración.",
                        "Intercambiar dos números sin una variable temporal: Usando XOR: `a ^= b; b ^= a; a ^= b;`."
                    ]}
                ]
            },
            {
                id: 'subsection-2-2-2',
                title: '5.2 Algoritmos de Grafos Avanzados',
                slug: 'algoritmos-grafos-avanzados',
                content: [
                    "Mientras que BFS y DFS son suficientes para muchos problemas de grafos, los escenarios que involucran pesos en las aristas o heurísticas requieren algoritmos más avanzados.",
                    { type: 'heading', level: 4, text: 'Algoritmo de Dijkstra' },
                     { type: 'list', items: [
                        "Propósito: Encuentra el camino más corto desde un único nodo de origen a todos los demás nodos en un grafo ponderado con pesos de arista no negativos.",
                        "Principio: Es un algoritmo voraz. Mantiene un conjunto de nodos visitados y, en cada paso, selecciona el nodo no visitado con la distancia más corta conocida desde el origen. Luego, actualiza las distancias a sus vecinos.",
                        "Implementación: Se utiliza comúnmente una cola de prioridad (Min-Heap) para seleccionar eficientemente el nodo con la distancia mínima en cada paso, lo que resulta en una complejidad de tiempo de `O(E log V)`."
                     ]},
                     { type: 'heading', level: 4, text: 'Algoritmo de Búsqueda A* (A-Star)' },
                     { type: 'list', items: [
                         "Propósito: Un algoritmo de búsqueda de caminos que es una extensión de Dijkstra. Es un algoritmo de búsqueda \"informado\" porque utiliza una función heurística para guiar su búsqueda hacia el nodo objetivo.",
                         "Principio: La prioridad de un nodo se determina por la función `f(n) = g(n) + h(n)`, donde `g(n)` es el costo real del camino desde el inicio hasta el nodo `n`, y `h(n)` es el costo estimado (heurístico) desde el nodo `n` hasta el objetivo.",
                     ]},
                     { type: 'heading', level: 4, text: 'Union-Find (Disjoint Set Union - DSU)' },
                     { type: 'list', items: [
                        "Propósito: Una estructura de datos que rastrea un conjunto de elementos particionados en varios conjuntos disjuntos (no superpuestos). Permite determinar eficientemente a qué conjunto pertenece un elemento y unir dos conjuntos.",
                        "Operaciones Clave: `find` (determina el representante de un conjunto) y `union` (fusiona dos conjuntos). Con optimizaciones, estas operaciones son casi de tiempo constante."
                     ]}
                ]
            }
        ]
       }
    ]
  },
   {
    id: "part-3",
    title: "Parte III: El Arquitecto",
    slug: "el-arquitecto",
    description: "Entrevistas de Diseño de Sistemas. Esta parte marca una transición crucial desde la codificación de algoritmos aislados hacia el diseño de sistemas distribuidos a gran escala. Esta habilidad es un requisito fundamental para ingenieros de nivel medio y superior.",
    sections: [
        {
            id: 'section-3-1',
            title: '6. Fundamentos del Diseño de Sistemas',
            slug: 'fundamentos-diseno-sistemas',
            description: "Para poder discutir arquitecturas de sistemas de manera efectiva, es esencial dominar un vocabulario común y comprender los componentes básicos que forman los sistemas modernos.",
            content: [
                { type: 'heading', level: 3, text: '6.1 Conceptos Clave' },
                { type: 'list', items: [
                    "**Escalabilidad:** La capacidad de un sistema para manejar una carga creciente (Vertical vs. Horizontal).",
                    "**Disponibilidad:** La proporción de tiempo que un sistema está operativo, lograda a través de la redundancia.",
                    "**Fiabilidad:** La probabilidad de que un sistema funcione correctamente sin fallos.",
                    "**Latencia vs. Rendimiento:** El tiempo de una solicitud vs. el número de solicitudes por segundo.",
                    "**Consistencia:** Cómo y cuándo los datos se vuelven consistentes en un sistema distribuido (Fuerte vs. Eventual).",
                    "**Teorema CAP:** Un sistema distribuido solo puede garantizar dos de tres: Consistencia, Disponibilidad y Tolerancia a Particiones."
                ]},
                { type: 'heading', level: 3, text: '6.2 Componentes Centrales' },
                { type: 'list', items: [
                    "**Balanceadores de Carga:** Distribuyen el tráfico entre múltiples servidores.",
                    "**Pasarelas de API (API Gateways):** Un único punto de entrada para todas las solicitudes de los clientes.",
                    "**Caché (Caching):** Almacena datos accedidos con frecuencia para reducir latencia (Redis, Memcached).",
                    "**Bases de Datos:** SQL (relacional, esquemas fijos) vs. NoSQL (flexible, escalado horizontal).",
                    "**Sistemas de Mensajería (Queues):** Permiten comunicación asíncrona entre servicios (Kafka, RabbitMQ)."
                ]}
            ]
        },
        {
            id: 'section-3-2',
            title: '7. Manual de Diseño de Sistemas',
            slug: 'manual-diseno-sistemas',
            description: "Una entrevista de diseño de sistemas es una simulación de una reunión de planificación técnica. El proceso es más importante que el resultado final.",
            content: [
                { type: 'heading', level: 3, text: '7.1 Un Enfoque Estructurado' },
                { type: 'list', items: [
                    "**Clarificación de Requisitos:** El paso más crítico. Definir requisitos funcionales y no funcionales (escala, latencia, etc.).",
                    "**Estimaciones de Servilleta:** Calcular aproximadamente tráfico, almacenamiento y ancho de banda para justificar decisiones.",
                    "**Diseño de Alto Nivel:** Esbozar los componentes principales y cómo interactúan (diagrama de bloques).",
                    "**Diseño Detallado (Deep Dive):** Profundizar en componentes clave, como el esquema de la base de datos y el diseño de la API.",
                    "**Discutir Compensaciones:** Justificar cada elección de diseño (SQL vs. NoSQL, etc.) y sus alternativas.",
                    "**Abordar Cuellos de Botella:** Discutir escalabilidad y tolerancia a fallos."
                ]},
                 { type: 'heading', level: 3, text: '7.2 Recorridos de Problemas Clásicos' },
                 { type: 'list', items: [
                    "**Diseñar un Acortador de URL:** Enfoque en la generación de claves, redirección, base de datos NoSQL y caching agresivo.",
                    "**Diseñar un Feed de Twitter/Noticias:** Discutir los enfoques de 'fan-out on write' (push) vs. 'fan-out on load' (pull) y un modelo híbrido para manejar celebridades."
                 ]},
                 { type: 'heading', level: 3, text: '7.3 Errores Comunes a Evitar' },
                 { type: 'list', items: [
                    "Saltar directamente al diseño sin aclarar requisitos.",
                    "No discutir las compensaciones.",
                    "Ignorar la escalabilidad y la tolerancia a fallos.",
                    "Trabajar en silencio sin comunicar el proceso de pensamiento."
                 ]}
            ]
        }
    ]
   },
    {
    id: "part-4",
    title: "Parte IV: El Elemento Humano",
    slug: "el-elemento-humano",
    description: "Entrevistas de Comportamiento y el Metajuego. Esta parte final aborda los aspectos no técnicos cruciales que a menudo determinan el resultado de un ciclo de entrevistas.",
    sections: [
        {
            id: 'section-4-1',
            title: '8. Dominando la Entrevista de Comportamiento',
            slug: 'entrevista-de-comportamiento',
            description: "Las entrevistas de comportamiento se basan en la premisa de que el comportamiento pasado es el mejor predictor del rendimiento futuro. Los entrevistadores buscan ejemplos concretos de experiencias pasadas.",
            content: [
                { type: 'heading', level: 3, text: '8.1 El Método STAR' },
                "El método STAR (Situación, Tarea, Acción, Resultado) es el estándar de oro para estructurar respuestas a preguntas de comportamiento.",
                { type: 'list', items: [
                    "**S - Situación (20%):** Describir brevemente el contexto.",
                    "**T - Tarea (10%):** Explicar cuál era el objetivo o el desafío.",
                    "**A - Acción (60%):** La parte más importante. Describir las acciones específicas que TÚ tomaste. Usar \"yo\" en lugar de \"nosotros\".",
                    "**R - Resultado (10%):** Explicar el resultado de las acciones y cuantificar el impacto siempre que sea posible."
                ]},
                { type: 'heading', level: 3, text: '8.2 Construyendo un "Banco de Historias"' },
                "En lugar de improvisar, prepara de 5 a 10 anécdotas detalladas de tu experiencia profesional que se puedan adaptar para responder a una amplia variedad de preguntas.",
                { type: 'heading', level: 3, text: '8.3 Deconstruyendo Preguntas Comunes' },
                { type: 'list', items: [
                    "**\"Háblame de ti\":** Presenta un \"discurso de ascensor\" profesional de 1-2 minutos conectando tu pasado, presente y futuro.",
                    "**\"¿Por qué esta empresa?\":** Demuestra una investigación genuina y un interés específico en sus productos, tecnología o misión.",
                    "**Conflictos y Fracasos:** Elige un fracaso real pero no catastrófico. La parte más importante de la respuesta es lo que aprendiste de la experiencia."
                ]}
            ]
        },
        {
            id: 'section-4-2',
            title: '9. El Proceso de Entrevista Desmitificado',
            slug: 'proceso-de-entrevista',
            description: "Comprender la logística y la psicología del proceso de entrevista en las grandes empresas tecnológicas es una ventaja estratégica.",
            content: [
                 { type: 'heading', level: 3, text: '9.1 Navegando por el "Full Loop" en FAANG' },
                 "Un proceso de varias etapas que puede durar semanas. Incluye selección de CV, llamada con reclutador, entrevista telefónica técnica, y un día completo de entrevistas 'in situ' (virtuales o presenciales) con 2-3 rondas de codificación, 1-2 de diseño de sistemas y 1 de comportamiento.",
                 { type: 'heading', level: 3, text: '9.2 Entendiendo la Evaluación: Señales y Rúbricas' },
                 "Los entrevistadores recopilan \"señales\" en cuatro dimensiones clave: Resolución de Problemas, Competencia Técnica, Comunicación y Verificación/Pruebas. La comunicación y la verbalización del proceso de pensamiento son a menudo las señales más importantes.",
                 { type: 'heading', alevel: 3, text: '9.3 El Comité de Contratación y el "Bar Raiser" de Amazon' },
                 "La decisión final rara vez la toma una sola persona. Comités de contratación (Google, Meta) o roles como el 'Bar Raiser' de Amazon (que tiene poder de veto) aseguran un estándar de calidad consistente y reducen el sesgo individual.",
                 { type: 'heading', level: 3, text: '9.4 El Poder de la Práctica: Simulacros de Entrevista' },
                 "Practicar en solitario es insuficiente. Es crucial simular el entorno de la entrevista en vivo para practicar la comunicación y el rendimiento bajo presión. Usa plataformas como Pramp (peer-to-peer) o servicios pagados con expertos de la industria."
            ]
        }
    ]
    }
];

export function findContentBySlug(slug: string[]) {
  if (!slug || slug.length === 0) return null;
  const [partSlug, sectionSlug, subsectionSlug] = slug;
  
  const part = content.find((p) => p.slug === partSlug);
  if (!part) return null;
  
  if (!sectionSlug) return part;

  const section = part.sections.find((s) => s.slug === sectionSlug);
  if (!section) return null;

  if (!subsectionSlug) return section;

  const subsection = section.subsections?.find((ss) => ss.slug === subsectionSlug);
  return subsection || null;
}

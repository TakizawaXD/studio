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
    description: "Establece las bases filosóficas y prácticas para la preparación. Se enfoca en cómo un ingeniero debe abordar el aprendizaje para obtener la máxima eficiencia y retención a largo plazo.",
    sections: [
      {
        id: "section-1-1",
        title: "1. Dominando el Proceso de Aprendizaje",
        slug: "dominando-el-proceso-de-aprendizaje",
        description: "Un marco moderno para la preparación de entrevistas técnicas, enfocado en la eficiencia, la retención a largo plazo y la aplicación práctica.",
        subsections: [
          {
            id: "subsection-1-1-1",
            title: "1.1 Reconocimiento de Patrones",
            slug: "cambio-de-paradigma-reconocimiento-de-patrones",
            description: "El enfoque moderno es alejarse de la memorización y centrarse en comprender patrones de resolución de problemas reutilizables.",
            content: [
              "El objetivo de las entrevistas en empresas de primer nivel no es ver si has memorizado una solución, sino si tienes un modelo mental para deconstruir problemas nuevos. La preparación ha evolucionado de la práctica masiva (LeetCode) a un enfoque curado y basado en patrones (Grokking the Coding Interview).",
              { type: 'heading', level: 4, text: "Clave del Patrón"},
              "La mayoría de los problemas de entrevista se pueden resolver aplicando un conjunto de ~20 patrones reutilizables. Aprender a identificar y aplicar estos patrones (ej. `Sliding Window`, `Two Pointers`) es la meta-habilidad más importante."
            ]
          },
          {
            id: "subsection-1-1-2",
            title: "1.2 Práctica Estructurada",
            slug: "practica-estructurada-vs-no-estructurada",
            description: "La práctica aleatoria es ineficiente. Un plan estructurado basado en listas curadas por la industria maximiza el retorno de la inversión.",
            content: [
              { type: 'heading', level: 4, text: "Listas Curadas Famosas"},
              {
                type: 'list',
                items: [
                  "`Blind 75`: Las 75 preguntas más frecuentes y fundamentales.",
                  "`NeetCode 150`: Una extensión de Blind 75 con cobertura más completa, organizada por patrón."
                ]
              },
              { type: 'heading', level: 4, text: "Proceso Recomendado"},
              {
                type: 'list',
                items: [
                  "1. Aprender un Patrón: Estudiar a fondo su lógica y plantilla.",
                  "2. Práctica Enfocada: Resolver los problemas de NeetCode 150 para ese patrón.",
                  "3. Repetir: Continuar el ciclo para todos los patrones."
                ]
              },
            ]
          },
          {
            id: "subsection-1-1-3",
            title: "1.3 Sistemas de Repetición Espaciada (SRS)",
            slug: "ciencia-de-la-retencion-srs",
            description: "Para combatir la curva del olvido y retener el conocimiento a largo plazo, se utilizan Sistemas de Repetición Espaciada.",
            content: [
              "SRS interrumpe el olvido programando revisiones en intervalos crecientes, justo antes de que olvides un concepto. Esto transfiere el conocimiento a la memoria a largo plazo.",
              { type: 'heading', level: 4, text: "Aplicación Práctica"},
              {
                type: 'list',
                items: [
                  "Usa Anki o Notion para crear flashcards después de resolver un problema.",
                  "La tarjeta debe activar el recuerdo, no mostrar la solución completa.",
                  "**Anverso:** 'Problema: Subcadena más larga con K caracteres distintos. ¿Patrón?'",
                  "**Reverso:** 'Patrón: Ventana Deslizante. Idea: Usar mapa de frecuencias para rastrear caracteres en la ventana.'"
                ]
              },
            ],
          },
          {
            id: "subsection-1-1-4",
            title: "1.4 Protocolo de Resolución de Problemas",
            slug: "protocolo-de-resolucion-de-problemas",
            description: "Una entrevista evalúa tu proceso tanto como tu solución. Practicar un protocolo estricto demuestra profesionalismo y un enfoque sistemático.",
            content: [
              { type: 'heading', level: 4, text: "Pasos del Protocolo"},
              { type: 'list', items: [
                "**1. Clarificar (5-10 min):** Repite la pregunta, aclara entradas/salidas, y recorre un ejemplo a mano. Nunca empieces a codificar de inmediato.",
                "**2. Planificar (10-15 min):** Verbaliza tu proceso. Comienza con una solución de fuerza bruta, luego propón un enfoque optimizado discutiendo las compensaciones de tiempo y espacio.",
                "**3. Implementar (15-20 min):** Escribe código limpio con nombres de variables descriptivos. Narra tus decisiones mientras codificas.",
                "**4. Probar y Verificar (5-10 min):** No termines al escribir la última línea. Prueba con casos de borde y recorre tu código con un ejemplo para depurarlo."
              ]},
              { type: 'heading', level: 4, text: "Comparación de Plataformas de Preparación"},
              {
                type: "table",
                headers: ["Plataforma", "Filosofía Central", "Fortalezas", "Debilidades"],
                rows: [
                  [
                    { type: 'link', text: 'AlgoExpert', href: 'https://www.algoexpert.io/product' },
                    "Calidad sobre cantidad",
                    "Explicaciones en video detalladas",
                    "Conjunto de problemas limitado y costoso"
                  ],
                  [
                    { type: 'link', text: 'LeetCode', href: 'https://leetcode.com/' },
                    "Cantidad y comunidad",
                    "Vasta selección de problemas, comunidad activa",
                    "Puede ser abrumador, calidad de explicaciones variable"
                  ],
                  [
                    { type: 'link', text: 'HackerRank', href: 'https://www.hackerrank.com/' },
                    "Enfoque en evaluación",
                    "Familiariza con entornos de evaluación reales",
                    "Menos enfocado en la enseñanza conceptual"
                  ],
                  [
                    { type: 'link', text: 'Educative.io', href: 'https://www.educative.io/' },
                    "Aprendizaje basado en patrones",
                    "Enfoque eficiente, cursos interactivos basados en texto",
                    "Puede no ser ideal para aprendices visuales"
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
            description: "La estructura más fundamental: una colección contigua de elementos en memoria, accesible por un índice.",
            content: [
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso por índice: `O(1)`",
                "Búsqueda (lineal): `O(n)`",
                "Inserción/Eliminación (al principio/medio): `O(n)` (requiere desplazamiento)"
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Problemas con colecciones ordenadas, procesamiento de texto o necesidad de acceso rápido por índice. Son la base para patrones como Ventana Deslizante y Dos Punteros.",
              { type: 'heading', level: 4, text: 'Ejemplo: Invertir un Array' },
              { type: 'code', code: 
`function reverseArray(arr: any[]): any[] {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
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
            title: '2.2 Listas Enlazadas',
            slug: 'listas-enlazadas',
            description: "Nodos no contiguos en memoria, conectados por punteros. Permiten inserciones y eliminaciones eficientes.",
            content: [
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Acceso/Búsqueda: `O(n)`",
                "Inserción/Eliminación (al principio): `O(1)`",
                "Inserción/Eliminación (dado un puntero): `O(1)`",
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Problemas que requieren frecuentes inserciones o eliminaciones. El patrón de 'Punteros Rápidos y Lentos' se usa comúnmente para detectar ciclos o encontrar el medio.",
              { type: 'heading', level: 4, text: 'Ejemplo: Inversión de Lista' },
              { type: 'code', code: 
`class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) { /*...*/ }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    const nextTemp = current.next;
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
            description: "Almacenan pares clave-valor usando una función hash para búsquedas, inserciones y eliminaciones increíblemente rápidas.",
            content: [
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Inserción: `O(1)` promedio",
                "Eliminación: `O(1)` promedio",
                "Búsqueda: `O(1)` promedio"
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Palabras clave: 'frecuencia', 'conteo', 'duplicados', 'caché'. El problema 'Two Sum' es el ejemplo canónico de su poder.",
              { type: 'heading', level: 4, text: 'Ejemplo: Problema "Two Sum"' },
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
  return [];
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-4',
            title: '2.4 Pilas (Stacks)',
            slug: 'pilas',
            description: "Estructura de datos LIFO (Last-In, First-Out), como una pila de platos. Todas las operaciones principales son O(1).",
            content: [
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Push (Añadir al tope): `O(1)`",
                "Pop (Quitar del tope): `O(1)`",
                "Peek/Top (Ver el elemento superior): `O(1)`"
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Problemas de procesamiento en orden inverso, comprobación de sintaxis (paréntesis balanceados), y recorrido de grafos (DFS).",
              { type: 'heading', level: 4, text: 'Ejemplo: Paréntesis Válidos' },
              { type: 'code', code:
`function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = { "(": ")", "[": "]", "{": "}" };
  for (const char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop();
      if (lastOpen === undefined || map[lastOpen] !== char) {
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
            description: "Estructura de datos FIFO (First-In, First-Out), como una fila para pagar. Todas las operaciones principales son O(1).",
            content: [
              { type: 'heading', level: 4, text: "Operaciones Clave y Complejidad" },
              { type: 'list', items: [
                "Enqueue (Añadir al final): `O(1)`",
                "Dequeue (Quitar del principio): `O(1)`",
                "Peek (Ver el primer elemento): `O(1)`"
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Búsqueda en Anchura (BFS) para árboles y grafos, clave para encontrar el camino más corto en grafos no ponderados. Programación de tareas.",
              { type: 'heading', level: 4, text: 'Ejemplo: Implementación Básica' },
              { type: 'code', code: 
`class Queue<T> {
  private storage: T[] = [];
  enqueue(item: T): void { this.storage.push(item); }
  dequeue(): T | undefined { return this.storage.shift(); }
  isEmpty(): boolean { return this.storage.length === 0; }
}`
              }
            ]
          },
          {
            id: 'subsection-1-2-6',
            title: '2.6 Árboles (BST, Montículos)',
            slug: 'arboles',
            description: "Estructuras jerárquicas que consisten en nodos conectados. Fundamentales para datos ordenados y colas de prioridad.",
            content: [
              { type: 'heading', level: 3, text: 'Árbol de Búsqueda Binaria (BST)'},
              "Un árbol binario donde `nodo.izquierdo.valor < nodo.valor < nodo.derecho.valor`. Permite búsqueda, inserción y eliminación en `O(log n)` en un árbol balanceado.",
              { type: 'heading', level: 3, text: 'Montículos (Heaps)'},
              "Un árbol binario completo donde cada padre satisface una propiedad (min-heap o max-heap). Permite obtener el min/max en `O(1)` e inserción/extracción en `O(log n)`. Usado para colas de prioridad y problemas de 'Top K'.",
              { type: 'heading', level: 4, text: 'Ejemplo: Búsqueda en un BST' },
              { type: 'code', code:
`function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root || root.val === val) return root;
    return val < root.val 
      ? searchBST(root.left, val) 
      : searchBST(root.right, val);
}`
              },
            ]
          },
           {
            id: 'subsection-1-2-7',
            title: '2.7 Grafos',
            slug: 'grafos',
            description: "Un conjunto de nodos (vértices) conectados por aristas. Modelan redes y conexiones de todo tipo.",
            content: [
              { type: 'heading', level: 4, text: "Representaciones y Recorridos" },
              { type: 'list', items: [
                "**Lista de Adyacencia:** Eficiente en espacio para grafos dispersos. La representación más común.",
                "**Búsqueda en Anchura (BFS):** Usa una cola. Explora por niveles. Encuentra el camino más corto en grafos no ponderados.",
                "**Búsqueda en Profundidad (DFS):** Usa una pila o recursión. Explora una rama hasta el final. Detecta ciclos y ordena topológicamente."
              ]},
              { type: 'heading', level: 4, text: "Disparadores de Entrevista" },
              "Palabras clave: 'red', 'conexiones', 'camino más corto', 'ciclo', 'requisitos previos'.",
              { type: 'heading', level: 4, text: 'Ejemplo: Recorrido BFS' },
              { type: 'code', code:
`function bfs(graph: Map<number, number[]>, startNode: number): void {
  const visited = new Set<number>();
  const queue: number[] = [startNode];
  visited.add(startNode);
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    // console.log(currentNode); // Procesar el nodo
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`
              }
            ]
          }
        ]
      },
       {
        id: "section-1-3",
        title: "3. Algoritmos Fundamentales",
        slug: "algoritmos-fundamentales",
        description: "Los algoritmos son los procedimientos paso a paso que operan sobre las estructuras de datos para resolver problemas. Comprenderlos es esencial para construir soluciones eficientes.",
        content: []
       }
    ],
  },
  {
    id: "part-2",
    title: "Parte II: La Aplicación",
    slug: "la-aplicacion",
    description: "Cierra la brecha entre el conocimiento de una estructura de datos y la habilidad para resolver un problema con ella. Esta parte es el núcleo de la estrategia de preparación moderna basada en patrones.",
    sections: [
      {
        id: "section-2-1",
        title: "4. Deconstruyendo Problemas: Patrones 'Grokking'",
        slug: "patrones-grokking",
        description: "El dominio de estos patrones es la meta-habilidad más importante. Permite categorizar rápidamente problemas nuevos y aplicar un marco de solución probado.",
        subsections: [
          {
            id: "subsection-2-1-1",
            title: "4.1 Ventana Deslizante (Sliding Window)",
            slug: "ventana-deslizante",
            description: "Se utiliza para realizar una operación en una subsección específica (ventana) de un array o cadena.",
            content: [
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              "El problema involucra un array/cadena y pide encontrar una subsección **contigua** óptima (más larga, más corta, suma máxima, etc.).",
              { type: 'heading', level: 4, text: "Plantilla de Código" },
              { type: 'code', code:
`function slidingWindowTemplate(nums: number[], k: number): number {
  let windowStart = 0;
  let result = 0;
  // ... otras variables de estado como windowSum, etc.

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // Añadir nums[windowEnd] a la ventana
    
    // Contraer la ventana desde la izquierda si ya no es válida
    while (/* condición de la ventana inválida */) {
      // Quitar nums[windowStart] de la ventana
      windowStart++;
    }

    // Actualizar el resultado
  }
  return result;
}`
              }
            ]
          },
          {
            id: "subsection-2-1-2",
            title: "4.2 Dos Punteros (Two Pointers)",
            slug: "dos-punteros",
            description: "Utiliza dos punteros para iterar a través de una estructura de datos, a menudo desde extremos opuestos, hasta que se encuentran.",
            content: [
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              "El problema involucra un array o cadena **ordenado** y pide encontrar un par, trío o subarray que satisfaga una condición.",
              { type: 'heading', level: 4, text: "Plantilla de Código" },
              { type: 'code', code: 
`function twoPointersTemplate(arr: number[], target: number): number[] {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    }
    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`
              }
            ]
          },
          {
            id: "subsection-2-1-3",
            title: "4.3 Punteros Rápidos y Lentos",
            slug: "punteros-rapidos-y-lentos",
            description: "También conocido como el algoritmo de la liebre y la tortuga, utiliza dos punteros que se mueven a diferentes velocidades.",
            content: [
              { type: 'heading', level: 4, text: "Cuándo Usarlo (Señales)" },
              "El problema involucra una **lista enlazada** y pide detectar un ciclo, encontrar el punto medio o el k-ésimo nodo desde el final.",
              { type: 'heading', level: 4, text: "Plantilla de Código (Detección de Ciclos)" },
              { type: 'code', code: 
`function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // Ciclo detectado
    }
  }
  return false;
}`
              }
            ]
          },
          {
            id: 'subsection-2-1-4',
            title: '4.4 Fusión de Intervalos',
            slug: 'fusion-de-intervalos',
            description: "Se ocupa de problemas que involucran intervalos superpuestos. La clave es ordenar los intervalos por su inicio.",
            content: [
              { type: 'heading', level: 4, text: "Disparadores de Identificación" },
              "La entrada es una lista de intervalos `[inicio, fin]`. Se pide encontrar superposiciones, fusionar, o gestionar conflictos (ej. salas de reuniones).",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Fusión)' },
              { type: 'code', code:
`function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];
    if (current[0] <= last[1]) { // Superposición
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}`
            }
            ],
          },
          {
            id: 'subsection-2-1-5',
            title: '4.5 Ordenamiento Cíclico',
            slug: 'ordenamiento-ciclico',
            description: "Se utiliza para problemas con arrays que contienen números en un rango específico (ej. 1 a N), para colocar cada número en su posición correcta.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra un array de números en un rango contiguo y pide encontrar números faltantes, duplicados o corruptos en espacio `O(1)`.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución' },
              { type: 'code', code:
`function cyclicSort(nums: number[]): void {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
    } else {
      i++;
    }
  }
  // Después de esto, el array está 'ordenado' cíclicamente.
  // Una segunda pasada puede encontrar el número faltante/duplicado.
}`
              }
            ],
          },
          {
            id: 'subsection-2-1-6',
            title: '4.6 Inversión de Lista Enlazada',
            slug: 'inversion-lista-enlazada',
            description: "Invierte los nodos de una lista enlazada (o una sublista) sin usar espacio adicional, manipulando los punteros `next`.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide explícitamente invertir una lista enlazada o una sublista.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Inversión Completa)' },
               { type: 'code', code: 
`function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}`
              }
            ],
          },
          {
            id: 'subsection-2-1-7',
            title: '4.7 Búsqueda en Amplitud en Árboles (Tree BFS)',
            slug: 'tree-bfs',
            description: "Utiliza BFS para recorrer un árbol nivel por nivel, usando una cola.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide recorrer un árbol nivel por nivel, encontrar la profundidad mínima, o cualquier problema que explore los nodos más cercanos primero.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución' },
              { type: 'code', code: 
`function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue = [root];
  const result: number[][] = [];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`
              }
            ],
          },
          {
            id: 'subsection-2-1-8',
            title: '4.8 Búsqueda en Profundidad en Árboles (Tree DFS)',
            slug: 'tree-dfs',
            description: "Utiliza DFS para recorrer un árbol explorando una rama hasta su final antes de retroceder, generalmente con recursión.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide encontrar un camino de raíz a hoja que cumpla una condición, contar todos los caminos, o realizar recorridos pre/in/post-orden.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Suma de Camino)' },
              { type: 'code', code:
`function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  // Si es una hoja y la suma es correcta
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }
  // Llamada recursiva para los hijos
  const remainingSum = targetSum - root.val;
  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
}`
              }
            ],
          },
          {
            id: 'subsection-2-1-9',
            title: '4.9 Dos Montículos (Two Heaps)',
            slug: 'dos-monticulos',
            description: "Utiliza un Min-Heap y un Max-Heap para dividir un conjunto de números en dos partes y encontrar la mediana.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide encontrar la mediana de un flujo de datos o de una ventana deslizante.",
              { type: 'heading', level: 4, text: 'Lógica Principal' },
              "Un Max-Heap almacena la mitad pequeña de los números y un Min-Heap almacena la mitad grande. Se balancean los montículos para que la mediana siempre esté en la cima de uno de ellos (o sea el promedio de ambas cimas)."
            ],
          },
          {
            id: 'subsection-2-1-10',
            title: '4.10 Subconjuntos (Subsets)',
            slug: 'subconjuntos',
            description: "Genera todas las combinaciones, permutaciones o subconjuntos de un conjunto dado, usualmente con recursión y backtracking.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide generar 'todos los posibles' subconjuntos, permutaciones, etc.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Subconjuntos con Backtracking)' },
              { type: 'code', code: 
`function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];

  function backtrack(startIndex: number) {
    result.push([...subset]); // Añadir copia del subconjunto actual
    for (let i = startIndex; i < nums.length; i++) {
      subset.push(nums[i]); // Elegir
      backtrack(i + 1);    // Explorar
      subset.pop();          // No elegir (backtrack)
    }
  }

  backtrack(0);
  return result;
}`
              }
            ],
          },
          {
            id: 'subsection-2-1-11',
            title: '4.11 Búsqueda Binaria Modificada',
            slug: 'busqueda-binaria-modificada',
            description: "Aplica la Búsqueda Binaria a arrays ordenados pero con alguna modificación, como estar rotados.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra un array ordenado que ha sido rotado, o pide encontrar el primer/último elemento que cumple una condición.",
              { type: 'heading', level: 4, text: 'Lógica Principal (Array Rotado)' },
              "En cada paso, se determina qué mitad del array está ordenada. Luego, se comprueba si el objetivo está en esa mitad ordenada para decidir hacia dónde acotar la búsqueda."
            ],
          },
          {
            id: 'subsection-2-1-12',
            title: '4.12 Los K Elementos Superiores (Top K)',
            slug: 'top-k-elements',
            description: "Encuentra los K elementos más grandes, más pequeños o más frecuentes en un conjunto, usando un montículo (Heap).",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide explícitamente los 'K' elementos superiores/inferiores/más frecuentes, o el 'k-ésimo' elemento más grande/pequeño.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Top K Frecuentes)' },
              "1. Construir un mapa de frecuencias. 2. Crear un Min-Heap de tamaño K. 3. Iterar sobre el mapa, añadiendo al heap. Si `heap.size() > K`, se extrae el mínimo. Al final, el heap contiene los K más frecuentes."
            ],
          },
          {
            id: 'subsection-2-1-13',
            title: '4.13 Fusión de K Vías (K-way Merge)',
            slug: 'fusion-k-vias',
            description: "Fusiona un conjunto de listas ordenadas en una única lista ordenada, usando un Min-Heap.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se presentan múltiples arrays o listas ordenadas y se pide fusionarlas o encontrar el k-ésimo elemento más pequeño entre todas.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución' },
              "1. Crear un Min-Heap. 2. Añadir el primer elemento de cada lista al heap. 3. Mientras el heap no esté vacío: extraer el mínimo, añadirlo al resultado, y añadir el siguiente elemento de la lista de origen al heap."
            ],
          },
          {
            id: 'subsection-2-1-14',
            title: '4.14 Ordenamiento Topológico',
            slug: 'ordenamiento-topologico',
            description: "Encuentra un ordenamiento lineal de nodos en un Grafo Acíclico Dirigido (DAG) basado en dependencias.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "El problema involucra dependencias, como un calendario de cursos, dependencias de compilación, o cualquier tarea donde unas deben completarse antes que otras.",
              { type: 'heading', level: 4, text: "Plantilla de Solución (Kahn's Algorithm - BFS)" },
              "1. Construir el grafo y un mapa de grados de entrada (in-degree). 2. Inicializar una cola con todos los nodos de in-degree 0. 3. Mientras la cola no esté vacía: sacar un nodo, añadirlo al resultado, y decrementar el in-degree de sus vecinos, añadiéndolos a la cola si su in-degree llega a 0."
            ],
          },
          {
            id: 'subsection-2-1-15',
            title: '4.15 Mochila 0/1 (0/1 Knapsack - DP)',
            slug: 'mochila-0-1',
            description: "Un patrón fundamental de Programación Dinámica para problemas de optimización con restricciones.",
            content: [
              { type: 'heading', level: 4, text: 'Disparadores de Identificación' },
              "Se pide tomar decisiones (tomar/no tomar) para maximizar o minimizar un valor bajo una restricción de capacidad o peso.",
              { type: 'heading', level: 4, text: 'Plantilla de Solución (Tabulación)' },
              "Se crea una tabla DP `dp[i][c]` que almacena el valor máximo para los primeros `i` elementos con una capacidad `c`. La celda `dp[i][c]` se calcula como el máximo entre no tomar el elemento `i` (`dp[i-1][c]`) o tomarlo (`valor[i] + dp[i-1][c - peso[i]]`)."
            ],
          },
        ]
      },
       {
        id: "section-2-2",
        title: "5. Dominios de Conocimiento Especializados",
        slug: "dominios-especializados",
        description: "Temas que actúan como diferenciadores en entrevistas para roles de mayor antigüedad o en empresas de primer nivel, demostrando una mayor profundidad de conocimientos.",
        content: []
       }
    ]
  },
   {
    id: "part-3",
    title: "Parte III: El Arquitecto",
    slug: "el-arquitecto",
    description: "Transición desde la codificación de algoritmos aislados hacia el diseño de sistemas distribuidos a gran escala, un requisito fundamental para ingenieros de nivel medio y superior.",
    sections: [
        {
            id: 'section-3-1',
            title: '6. Fundamentos del Diseño de Sistemas',
            slug: 'fundamentos-diseno-sistemas',
            description: "Dominar un vocabulario común y comprender los componentes básicos que forman los sistemas modernos es esencial para discutir arquitecturas de manera efectiva.",
            content: []
        },
        {
            id: 'section-3-2',
            title: '7. Manual de Diseño de Sistemas',
            slug: 'manual-diseno-sistemas',
            description: "Una entrevista de diseño de sistemas simula una reunión de planificación técnica. El proceso es más importante que el resultado final.",
            content: []
        }
    ]
   },
    {
    id: "part-4",
    title: "Parte IV: El Elemento Humano",
    slug: "el-elemento-humano",
    description: "Aborda los aspectos no técnicos cruciales que a menudo determinan el resultado de un ciclo de entrevistas.",
    sections: [
        {
            id: 'section-4-1',
            title: '8. Dominando la Entrevista de Comportamiento',
            slug: 'entrevista-de-comportamiento',
            description: "Se basan en la premisa de que el comportamiento pasado es el mejor predictor del rendimiento futuro. Se buscan ejemplos concretos de experiencias pasadas.",
            content: [
                { type: 'heading', level: 3, text: '8.1 El Método STAR' },
                "El método STAR (Situación, Tarea, Acción, Resultado) es el estándar de oro para estructurar respuestas.",
                { type: 'list', items: [
                    "**S - Situación:** Describe brevemente el contexto.",
                    "**T - Tarea:** Explica cuál era tu objetivo o desafío.",
                    "**A - Acción:** La parte más importante. Describe las acciones específicas que **TÚ** tomaste. Usa 'yo', no 'nosotros'.",
                    "**R - Resultado:** Explica el resultado de tus acciones, cuantificando el impacto siempre que sea posible y mencionando lo que aprendiste."
                ]},
                { type: 'heading', level: 3, text: '8.2 Construyendo un "Banco de Historias"' },
                "Prepara 5-10 anécdotas detalladas de tu experiencia profesional, escritas en formato STAR, que puedan adaptarse para responder a una amplia variedad de preguntas sobre tus competencias (liderazgo, trabajo en equipo, resolución de conflictos, etc.)."
            ]
        },
        {
            id: 'section-4-2',
            title: '9. El Proceso de Entrevista Desmitificado',
            slug: 'proceso-de-entrevista',
            description: "Comprender la logística y la psicología del proceso de entrevista en las grandes empresas tecnológicas es una ventaja estratégica.",
            content: [
                 { type: 'heading', level: 3, text: '9.1 Navegando por el "Full Loop" en FAANG' },
                 "Es un proceso de varias etapas: selección de CV, llamada con reclutador, entrevista telefónica técnica, y un día completo de entrevistas 'in situ' (virtuales o presenciales) que incluye rondas de codificación, diseño de sistemas y comportamiento.",
                 { type: 'heading', level: 3, text: '9.2 Entendiendo la Evaluación: Señales y Rúbricas' },
                 "Los entrevistadores recopilan 'señales' en cuatro dimensiones: Resolución de Problemas, Competencia Técnica, Comunicación y Verificación. La comunicación clara de tu proceso de pensamiento es a menudo la señal más importante.",
                 { type: 'heading', level: 3, text: '9.3 El Comité de Contratación y el "Bar Raiser"' },
                 "La decisión final rara vez la toma una sola persona. Comités de contratación (Google, Meta) o roles como el 'Bar Raiser' de Amazon (que tiene poder de veto) aseguran un estándar de calidad consistente y reducen el sesgo individual."
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

  if (!subsectionSlug) {
    if (section.subsections && section.subsections.length > 0) {
      // Si es una sección padre con subsecciones, retorna la sección sin contenido.
      // El usuario debe elegir una subsección.
      const { content, ...sectionWithoutContent } = section;
      return sectionWithoutContent;
    }
    return section;
  }

  const subsection = section.subsections?.find((ss) => ss.slug === subsectionSlug);
  return subsection || null;
}

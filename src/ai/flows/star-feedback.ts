'use server';

/**
 * @fileOverview Un agente de IA que proporciona retroalimentación sobre las respuestas de entrevistas utilizando el método STAR.
 *
 * - aiStarFeedback - Una función que maneja el proceso de retroalimentación STAR.
 * - AiStarFeedbackInput - El tipo de entrada para la función aiStarFeedback.
 * - AiStarFeedbackOutput - El tipo de retorno para la función aiStarFeedback.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiStarFeedbackInputSchema = z.object({
  question: z.string().describe('La pregunta de comportamiento hecha por el entrevistador.'),
  answer: z.string().describe('La respuesta del candidato a la pregunta usando el método STAR.'),
});
export type AiStarFeedbackInput = z.infer<typeof AiStarFeedbackInputSchema>;

const AiStarFeedbackOutputSchema = z.object({
  overallScore: z
    .number()
    .describe(
      'Una puntuación numérica (de 100) que representa la calidad general de la respuesta STAR.'
    ),
  situationFeedback: z
    .string()
    .describe('Retroalimentación sobre el componente de Situación de la respuesta STAR.'),
  taskFeedback: z.string().describe('Retroalimentación sobre el componente de Tarea de la respuesta STAR.'),
  actionFeedback: z.string().describe('Retroalimentación sobre el componente de Acción de la respuesta STAR.'),
  resultFeedback: z.string().describe('Retroalimentación sobre el componente de Resultado de la respuesta STAR.'),
  overallFeedback: z.string().describe('Retroalimentación general y sugerencias de mejora.'),
});
export type AiStarFeedbackOutput = z.infer<typeof AiStarFeedbackOutputSchema>;

export async function aiStarFeedback(input: AiStarFeedbackInput): Promise<AiStarFeedbackOutput> {
  return aiStarFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStarFeedbackPrompt',
  input: {schema: AiStarFeedbackInputSchema},
  output: {schema: AiStarFeedbackOutputSchema},
  prompt: `Eres un entrenador de entrevistas impulsado por IA que se especializa en proporcionar retroalimentación sobre respuestas a preguntas de entrevistas de comportamiento utilizando el método STAR (Situación, Tarea, Acción, Resultado).

  Evalúa la respuesta proporcionada basándote en los siguientes criterios para cada componente STAR:

  - Situación: ¿Se describió el contexto de manera clara y concisa?
  - Tarea: ¿Estaba bien definido el desafío u objetivo?
  - Acción: ¿Se articularon claramente las acciones tomadas por el candidato y demostraron habilidades relevantes?
  - Resultado: ¿Se cuantificaron los resultados de las acciones y se compartieron las lecciones aprendidas?

  Proporciona una puntuación numérica (de 100) para la calidad general de la respuesta. Ofrece retroalimentación constructiva para cada componente del método STAR y da sugerencias generales para mejorar.

  Pregunta: {{{question}}}
  Respuesta: {{{answer}}}
  `,
});

const aiStarFeedbackFlow = ai.defineFlow(
  {
    name: 'aiStarFeedbackFlow',
    inputSchema: AiStarFeedbackInputSchema,
    outputSchema: AiStarFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

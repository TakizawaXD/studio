'use server';

/**
 * @fileOverview An AI agent that provides feedback on STAR method interview responses.
 *
 * - aiStarFeedback - A function that handles the STAR feedback process.
 * - AiStarFeedbackInput - The input type for the aiStarFeedback function.
 * - AiStarFeedbackOutput - The return type for the aiStarFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiStarFeedbackInputSchema = z.object({
  question: z.string().describe('The behavioral question asked by the interviewer.'),
  answer: z.string().describe('The candidate\'s response to the question using the STAR method.'),
});
export type AiStarFeedbackInput = z.infer<typeof AiStarFeedbackInputSchema>;

const AiStarFeedbackOutputSchema = z.object({
  overallScore: z
    .number()
    .describe(
      'A numerical score (out of 100) representing the overall quality of the STAR response.'
    ),
  situationFeedback: z
    .string()
    .describe('Feedback on the Situation component of the STAR response.'),
  taskFeedback: z.string().describe('Feedback on the Task component of the STAR response.'),
  actionFeedback: z.string().describe('Feedback on the Action component of the STAR response.'),
  resultFeedback: z.string().describe('Feedback on the Result component of the STAR response.'),
  overallFeedback: z.string().describe('Overall feedback and suggestions for improvement.'),
});
export type AiStarFeedbackOutput = z.infer<typeof AiStarFeedbackOutputSchema>;

export async function aiStarFeedback(input: AiStarFeedbackInput): Promise<AiStarFeedbackOutput> {
  return aiStarFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStarFeedbackPrompt',
  input: {schema: AiStarFeedbackInputSchema},
  output: {schema: AiStarFeedbackOutputSchema},
  prompt: `You are an AI-powered interview coach specializing in providing feedback on responses to behavioral interview questions using the STAR method (Situation, Task, Action, Result).

  Evaluate the provided answer based on the following criteria for each STAR component:

  - Situation: Was the context clearly and concisely described?
  - Task: Was the challenge or objective well-defined?
  - Action: Were the actions taken by the candidate clearly articulated, and did they demonstrate relevant skills?
  - Result: Were the outcomes of the actions quantified, and were lessons learned shared?

  Provide a numerical score (out of 100) for the overall quality of the response. Provide constructive feedback for each component of the STAR method, and give overall suggestions for improvement.

  Question: {{{question}}}
  Answer: {{{answer}}}
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

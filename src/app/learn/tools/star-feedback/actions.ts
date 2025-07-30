"use server";

import { aiStarFeedback } from "@/ai/flows/star-feedback";
import { z } from "zod";

const formSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

type FormState = {
  data: Awaited<ReturnType<typeof aiStarFeedback>> | null;
  error: string | null;
};

export async function analyzeStarResponse(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = formSchema.safeParse({
    question: formData.get("question"),
    answer: formData.get("answer"),
  });

  if (!parsed.success) {
    return { data: null, error: "Invalid form data." };
  }

  try {
    const result = await aiStarFeedback(parsed.data);
    return { data: result, error: null };
  } catch (e: any) {
    return {
      data: null,
      error: e.message || "An unexpected error occurred.",
    };
  }
}

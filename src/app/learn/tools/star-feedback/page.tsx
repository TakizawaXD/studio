"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { aiStarFeedback, AiStarFeedbackOutput } from "@/ai/flows/star-feedback";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { BotMessageSquare, Lightbulb, Target, ArrowRight, Award, Loader2 } from "lucide-react";
import { analyzeStarResponse } from "./actions";

const formSchema = z.object({
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
  answer: z.string().min(50, {
    message: "Answer must be at least 50 characters.",
  }),
});

export default function StarFeedbackPage() {
  const [state, formAction] = useFormState(analyzeStarResponse, {
    data: null,
    error: null,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const { isSubmitting } = form.formState;

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-4 mb-2">
            <BotMessageSquare className="w-8 h-8 text-primary"/>
            <h1 className="text-3xl font-bold font-headline">AI STAR Method Feedback</h1>
        </div>
        <p className="text-muted-foreground">
          Refine your behavioral interview answers. Paste the question and your
          STAR response to get instant, AI-powered feedback.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>STAR Response Analyzer</CardTitle>
          <CardDescription>
            Enter the details below to have your response analyzed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interview Question</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., 'Tell me about a time you faced a challenging deadline.'"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The behavioral question you were asked.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your STAR Answer</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the Situation, Task, Action, and Result..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your complete answer following the STAR method.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                    </>
                ) : "Analyze Response"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Analysis Results</CardTitle>
            <CardDescription>
              Here's the breakdown of your response.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Overall Score</h3>
                <span className="text-xl font-bold text-primary">{state.data.overallScore}/100</span>
              </div>
              <Progress value={state.data.overallScore} className="w-full" />
               <p className="text-sm text-muted-foreground mt-4">{state.data.overallFeedback}</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <FeedbackCard icon={Lightbulb} title="Situation" feedback={state.data.situationFeedback} />
              <FeedbackCard icon={Target} title="Task" feedback={state.data.taskFeedback} />
              <FeedbackCard icon={ArrowRight} title="Action" feedback={state.data.actionFeedback} />
              <FeedbackCard icon={Award} title="Result" feedback={state.data.resultFeedback} />
            </div>

          </CardContent>
        </Card>
      )}

      {state.error && (
         <Card className="border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Analysis Failed</CardTitle>
                <CardDescription className="text-destructive/80">{state.error}</CardDescription>
            </CardHeader>
        </Card>
      )}
    </div>
  );
}

function FeedbackCard({ icon: Icon, title, feedback }: { icon: React.ElementType, title: string, feedback: string }) {
    return (
        <Card className="bg-background/50">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary"/>
                    <CardTitle className="font-headline">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{feedback}</p>
            </CardContent>
        </Card>
    );
}

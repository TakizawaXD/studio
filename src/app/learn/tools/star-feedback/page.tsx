"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
    message: "La pregunta debe tener al menos 10 caracteres.",
  }),
  answer: z.string().min(50, {
    message: "La respuesta debe tener al menos 50 caracteres.",
  }),
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full sm:w-auto">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando...
                </>
            ) : "Analizar Respuesta"}
        </Button>
    );
}


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

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-4 mb-2">
            <BotMessageSquare className="w-8 h-8 text-primary"/>
            <h1 className="text-3xl font-bold font-headline">Feedback del Método STAR con IA</h1>
        </div>
        <p className="text-muted-foreground">
          Perfecciona tus respuestas en entrevistas de comportamiento. Pega la pregunta y tu
          respuesta STAR para obtener retroalimentación instantánea impulsada por IA.
        </p>
      </div>

      <Card>
        <form action={formAction}>
            <CardHeader>
            <CardTitle>Analizador de Respuestas STAR</CardTitle>
            <CardDescription>
                Ingresa los detalles a continuación para que tu respuesta sea analizada.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Form {...form}>
                <div className="space-y-8">
                <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Pregunta de la Entrevista</FormLabel>
                        <FormControl>
                        <Input
                            placeholder="Ej: 'Cuéntame sobre una vez que enfrentaste una fecha límite desafiante.'"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription>
                        La pregunta de comportamiento que te hicieron.
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
                        <FormLabel>Tu Respuesta STAR</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Describe la Situación, Tarea, Acción y Resultado..."
                            className="min-h-[200px]"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription>
                        Tu respuesta completa siguiendo el método STAR.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <SubmitButton />
                </div>
            </Form>
            </CardContent>
        </form>
      </Card>

      {state.data && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Resultados del Análisis</CardTitle>
            <CardDescription>
              Aquí está el desglose de tu respuesta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Puntuación General</h3>
                <span className="text-xl font-bold text-primary">{state.data.overallScore}/100</span>
              </div>
              <Progress value={state.data.overallScore} className="w-full" />
               <p className="text-sm text-muted-foreground mt-4">{state.data.overallFeedback}</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <FeedbackCard icon={Lightbulb} title="Situación" feedback={state.data.situationFeedback} />
              <FeedbackCard icon={Target} title="Tarea" feedback={state.data.taskFeedback} />
              <FeedbackCard icon={ArrowRight} title="Acción" feedback={state.data.actionFeedback} />
              <FeedbackCard icon={Award} title="Resultado" feedback={state.data.resultFeedback} />
            </div>

          </CardContent>
        </Card>
      )}

      {state.error && (
         <Card className="border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Análisis Fallido</CardTitle>
                <CardDescription className="text-destructive/80">{state.error}</CardDescription>
            </CardHeader>
        </Card>
      )}
    </div>
  );
}

function FeedbackCard({ icon: Icon, title, feedback }: { icon: React.ElementType, title: string, feedback: string }) {
    return (
        <Card className="bg-secondary/50">
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

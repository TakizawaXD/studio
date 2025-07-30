import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BookOpenCheck } from "lucide-react";
import Link from "next/link";

export default function LearnHomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
        <Card className="w-full max-w-lg border-dashed shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-4xl mb-2">
                    ¡Bienvenido, Arquitecto de Entrevistas!
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                    Has llegado al lugar correcto para forjar tu camino hacia el éxito en las entrevistas técnicas de alto nivel.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p>
                    Usa la barra de navegación de la izquierda para explorar el contenido. Comienza por la fundación, sumérgete en los patrones de codificación y prepárate para dominar cualquier desafío técnico.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/learn/la-fundacion/dominando-el-proceso-de-aprendizaje/cambio-de-paradigma-reconocimiento-de-patrones">
                             <BookOpenCheck className="mr-2 h-4 w-4" /> Empezar a Estudiar
                        </Link>
                    </Button>
                     <Button variant="outline" asChild>
                        <Link href="/learn/tools/star-feedback">
                            <Lightbulb className="mr-2 h-4 w-4" /> Probar Herramienta IA
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

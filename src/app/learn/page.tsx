import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function LearnDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Bienvenido a tu Panel de Preparación</h1>
        <p className="text-muted-foreground">Este es tu centro de mando para triunfar en las entrevistas técnicas. Empecemos.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">El Manual del Arquitecto</CardTitle>
            </div>
            <CardDescription>Sumérgete en la guía completa que cubre desde estructuras de datos hasta diseño de sistemas.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/learn/la-fundacion/dominando-el-proceso-de-aprendizaje/cambio-de-paradigma-reconocimiento-de-patrones">Comenzar a Leer la Parte I</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Analizador del Método STAR</CardTitle>
            </div>
            <CardDescription>Practica tus respuestas de comportamiento y obtén retroalimentación instantánea con IA para perfeccionar tus historias.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/learn/tools/star-feedback">Analizar una Respuesta</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Patrones de Codificación</CardTitle>
            </div>
            <CardDescription>Domina los más de 20 patrones de codificación esenciales para resolver cualquier problema de algoritmos con confianza.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button asChild className="w-full">
              <Link href="/learn/patrones-de-codificacion/patrones-de-array-o-cadena/ventana-deslizante">Explorar Patrones</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

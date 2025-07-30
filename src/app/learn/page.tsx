import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Star, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function LearnDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome to Your Prep Dashboard</h1>
        <p className="text-muted-foreground">This is your command center for acing technical interviews. Let's get started.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">The Architect's Handbook</CardTitle>
            </div>
            <CardDescription>Dive into the comprehensive guide covering everything from data structures to system design.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/learn/la-fundacion/dominando-el-proceso-de-aprendizaje/cambio-de-paradigma-reconocimiento-de-patrones">Start Reading Part I</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">STAR Method Analyzer</CardTitle>
            </div>
            <CardDescription>Practice your behavioral answers and get instant, AI-powered feedback to perfect your stories.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/learn/tools/star-feedback">Analyze an Answer</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Coding Patterns</CardTitle>
            </div>
            <CardDescription>Master the 20+ essential coding patterns to solve any algorithm problem with confidence.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button asChild variant="secondary" className="w-full">
              <Link href="#">Explore Patterns (Coming Soon)</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

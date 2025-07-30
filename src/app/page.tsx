import { Button } from "@/components/ui/button";
import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            prefetch={false}
          >
            Iniciar Sesión
          </Link>
          <Button asChild variant="secondary">
            <Link href="/signup">Comenzar</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-4">
                   <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    Plan Maestro de Élite
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    El Arquitecto de Entrevistas Técnicas
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Un plan integral y probado para la preparación de élite en entrevistas técnicas. Domina los patrones, no la memorización.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-start justify-center">
                   <Button asChild size="lg">
                      <Link href="/signup">
                        <BookOpenCheck className="mr-2 h-5 w-5" />
                        Empezar a Aprender
                      </Link>
                    </Button>
                </div>
              </div>
                <img
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="abstract network"
                    width="600"
                    height="400"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4 border-t border-border/20">
        <p className="text-xs text-muted-foreground">© 2024 El Arquitecto de Entrevistas Técnicas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

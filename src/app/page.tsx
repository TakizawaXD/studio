import { Button } from "@/components/ui/button";
import { Gauge } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Iniciar Sesión
          </Link>
          <Button asChild>
            <Link href="/signup">Comenzar</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Sistema de Contador Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Una aplicación sencilla para demostrar la autenticación de usuarios y la interacción básica. Inicia sesión para usar el contador.
                </p>
              </div>
              <div className="space-x-4">
                 <Button asChild size="lg">
                    <Link href="/signup">
                      Empezar
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Sistema de Contador. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Code, BookOpen } from "lucide-react";
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
            Login
          </Link>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    The Technical Interview Architect
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your comprehensive master plan for elite-level technical interview preparation. Master patterns, data structures, and system design to land your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Start Learning for Free
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                 <div className="w-full max-w-md p-6 rounded-xl shadow-2xl bg-card/50 backdrop-blur-sm border border-border/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold font-headline">Pattern Recognition</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Move beyond rote memorization. Learn to identify underlying patterns to solve any problem.
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="p-2 bg-primary/10 rounded-md">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold font-headline">Structured Study</h3>
                    </div>
                     <p className="text-sm text-muted-foreground mt-4">
                      Follow curated study plans like Blind 75 and NeetCode 150 for efficient, high-impact practice.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Elite Interview Prep. All rights reserved.</p>
      </footer>
    </div>
  );
}

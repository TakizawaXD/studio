import { Logo } from "@/components/logo";
import { UserNav } from "@/components/user-nav";
import Link from "next/link";
import { MainNav } from "./_components/main-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-background/80 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/learn">
              <Logo />
            </Link>
          </div>
          <ScrollArea className="flex-1">
            <MainNav />
          </ScrollArea>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            {/* Mobile Nav Trigger can go here */}
            <div className="md:hidden">
              {/* Placeholder for a mobile nav trigger like a hamburger menu */}
            </div>
            <div className="flex-1">
              {/* Maybe a search bar here in the future */}
            </div>
            <UserNav />
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

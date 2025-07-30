import { Logo } from "@/components/logo";
import { UserNav } from "@/components/user-nav";
import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
          <Link href="/learn">
            <Logo />
          </Link>
          <div className="flex-1">
            {/* Maybe a search bar here in the future */}
          </div>
          <UserNav />
       </header>
       <main className="flex-1 p-4 sm:p-6 md:p-8">
        {children}
       </main>
    </div>
  );
}

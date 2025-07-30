import { Logo } from "@/components/logo";
import { UserNav } from "@/components/user-nav";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { MainNav } from "./_components/main-nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Link href="/learn">
              <Logo />
            </Link>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <MainNav />
          </SidebarContent>
        </Sidebar>
        <main className="transition-all duration-300 ease-in-out md:pl-64">
           <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
              <div className="flex-1">
                {/* Maybe a search bar here in the future */}
              </div>
              <UserNav />
           </header>
           <div className="p-4 sm:p-6 md:p-8">
            {children}
           </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

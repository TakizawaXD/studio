"use client";

import { content } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {BotMessageSquare, BookOpen, ChevronRight} from "lucide-react";

export function MainNav() {
  const pathname = usePathname();
  const defaultOpen = content.map(part => part.id);

  return (
    <nav className="flex flex-col h-full px-2">
      <div className="flex-1 space-y-2">
        <Accordion type="multiple" defaultValue={defaultOpen} className="w-full">
          {content.map((part) => (
            <AccordionItem value={part.id} key={part.id} className="border-b-0">
              <AccordionTrigger className="text-sm font-headline hover:no-underline text-muted-foreground px-2 py-3">
                <Link href={`/learn/${part.slug}`} className="hover:text-foreground">{part.title}</Link>
              </AccordionTrigger>
              <AccordionContent className="pl-2 border-l ml-[9px]">
                <ul className="space-y-1 mt-1">
                  {part.sections.map((section) => (
                    <li key={section.id}>
                       <Accordion type="multiple" className="w-full" defaultValue={section.subsections && section.subsections.length > 0 ? [section.id] : []}>
                         <AccordionItem value={section.id} className="border-b-0">
                           <AccordionTrigger className="text-sm font-medium hover:no-underline py-2 px-2 rounded-md hover:bg-accent group">
                              <Link href={`/learn/${part.slug}/${section.slug}`} className="flex items-center gap-2 hover:text-foreground w-full">
                                <BookOpen className="w-4 h-4 text-primary/80"/>
                                <span>{section.title}</span>
                              </Link>
                           </AccordionTrigger>
                           {section.subsections && section.subsections.length > 0 && (
                           <AccordionContent className="pl-4 border-l ml-[9px] mt-1">
                              <ul className="space-y-1">
                                {section.subsections.map(subsection => (
                                  <li key={subsection.id}>
                                    <Link href={`/learn/${part.slug}/${section.slug}/${subsection.slug}`} passHref>
                                      <span className={cn(
                                        "flex items-center gap-2 w-full text-left p-2 rounded-md text-sm transition-colors",
                                        pathname === `/learn/${part.slug}/${section.slug}/${subsection.slug}`
                                          ? "bg-primary text-primary-foreground"
                                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                      )}>
                                        <ChevronRight className="w-4 h-4 text-primary/80" />
                                        {subsection.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                           </AccordionContent>
                           )}
                         </AccordionItem>
                       </Accordion>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="px-2 py-2">
           <h3 className="mb-2 font-headline text-sm text-muted-foreground px-2">Herramientas</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="/learn/tools/star-feedback" passHref>
                        <span className={cn(
                            "flex items-center gap-2 text-left p-2 rounded-md text-sm font-medium transition-colors",
                            pathname === "/learn/tools/star-feedback"
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}>
                            <BotMessageSquare className="w-4 h-4 text-primary/80" />
                            Feedback STAR con IA
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

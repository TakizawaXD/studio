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
import {BookMarked, BotMessageSquare} from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full">
      <div className="flex-1 space-y-2">
        <Accordion type="multiple" defaultValue={["part-1"]} className="w-full">
          {content.map((part) => (
            <AccordionItem value={part.id} key={part.id}>
              <AccordionTrigger className="text-base font-headline hover:no-underline">
                {part.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1">
                  {part.sections.map((section) => (
                    <li key={section.id}>
                      {section.subsections ? (
                         <Accordion type="multiple" className="w-full">
                           <AccordionItem value={section.id}>
                             <AccordionTrigger className="text-sm font-medium hover:no-underline py-2">
                               {section.title}
                             </AccordionTrigger>
                             <AccordionContent className="pl-4">
                                <ul className="space-y-1">
                                  {section.subsections.map(subsection => (
                                    <li key={subsection.id}>
                                      <Link href={`/learn/${part.slug}/${section.slug}/${subsection.slug}`} passHref>
                                        <span className={cn(
                                          "block w-full text-left p-2 rounded-md text-sm",
                                          pathname === `/learn/${part.slug}/${section.slug}/${subsection.slug}`
                                            ? "bg-primary/20 text-primary"
                                            : "hover:bg-accent/50"
                                        )}>
                                          {subsection.title}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                             </AccordionContent>
                           </AccordionItem>
                         </Accordion>
                      ) : (
                        <Link href={`/learn/${part.slug}/${section.slug}`} passHref>
                          <span className={cn(
                              "block w-full text-left p-2 rounded-md text-sm font-medium",
                               pathname === `/learn/${part.slug}/${section.slug}`
                                ? "bg-primary/20 text-primary"
                                : "hover:bg-accent/50"
                            )}>
                              {section.title}
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="px-4 py-2">
           <h3 className="mb-2 font-headline text-lg">Tools</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="/learn/tools/star-feedback" passHref>
                        <span className={cn(
                            "flex items-center gap-2 text-left p-2 rounded-md text-sm font-medium",
                            pathname === "/learn/tools/star-feedback"
                                ? "bg-primary/20 text-primary"
                                : "hover:bg-accent/50"
                        )}>
                            <BotMessageSquare className="w-4 h-4" />
                            STAR Feedback AI
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

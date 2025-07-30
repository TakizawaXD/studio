import type { ContentItem } from "@/lib/content";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";

function CodeBlock({ code }: { code: string }) {
    return (
      <div className="my-6 rounded-lg bg-secondary/30 border">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <p className="text-sm text-muted-foreground">Ejemplo de código</p>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigator.clipboard.writeText(code)}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="text-sm text-foreground/90">
              <code>{code}</code>
            </pre>
        </div>
      </div>
    );
  }

export function ContentRenderer({ content }: { content: ContentItem[] }) {
  return (
    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
      {content.map((item, index) => {
        if (typeof item === "string") {
          // Usar un regex para encontrar texto entre ` (acentos graves) y envolverlo en <code>
          const parts = item.split(/(`[^`]+`)/g);
          return (
            <p key={index}>
              {parts.map((part, i) =>
                part.startsWith("`") && part.endsWith("`") ? (
                  <code key={i}>{part.slice(1, -1)}</code>
                ) : (
                  part
                )
              )}
            </p>
          );
        }
        
        switch (item.type) {
            case "heading":
                const Tag = `h${item.level}` as keyof JSX.IntrinsicElements;
                const size = {
                    2: "text-3xl mt-16 mb-6 font-headline text-foreground border-b pb-4",
                    3: "text-2xl mt-12 mb-4 font-headline text-foreground",
                    4: "text-xl mt-10 mb-4 font-headline text-foreground/90",
                }[item.level];
                return <Tag key={index} className={size}>{item.text}</Tag>;

            case "list":
                return (
                    <ul key={index} className="list-disc space-y-3 pl-6">
                    {item.items.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                    ))}
                    </ul>
                );

            case "code":
                return <CodeBlock key={index} code={item.code} />;

            case "table":
                return (
                    <div key={index} className="my-8 overflow-x-auto rounded-lg border">
                        <Table>
                            <TableHeader>
                            <TableRow>
                                {item.headers.map((header, hIndex) => (
                                <TableHead key={hIndex} className="font-headline text-foreground">{header}</TableHead>
                                ))}
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            {item.rows.map((row, rIndex) => (
                                <TableRow key={rIndex}>
                                {row.map((cell, cIndex) => (
                                    <TableCell key={cIndex} className="text-foreground/80">
                                        {typeof cell === 'object' && cell.type === 'link' ? (
                                            <Link href={cell.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                                                {cell.text}
                                            </Link>
                                        ) : (
                                            cell
                                        )}
                                    </TableCell>
                                ))}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                );
        }
      })}
    </div>
  );
}

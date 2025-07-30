import type { ContentItem } from "@/lib/content";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

function CodeBlock({ code }: { code: string }) {
    return (
      <div className="my-4 rounded-md bg-muted/50 p-4">
        <pre className="text-sm text-foreground/90 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

export function ContentRenderer({ content }: { content: ContentItem[] }) {
  return (
    <div className="space-y-6 text-foreground/90 leading-loose">
      {content.map((item, index) => {
        if (typeof item === "string") {
          return <p key={index}>{item}</p>;
        }
        
        switch (item.type) {
            case "heading":
                const Tag = `h${item.level}` as keyof JSX.IntrinsicElements;
                const size = {
                    2: "text-3xl mt-12 mb-4 font-headline border-b pb-2",
                    3: "text-2xl mt-8 mb-4 font-headline",
                    4: "text-xl mt-6 mb-4 font-headline",
                }[item.level];
                return <Tag key={index} className={size}>{item.text}</Tag>;

            case "list":
                return (
                    <ul key={index} className="list-disc space-y-2 pl-5">
                    {item.items.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                    ))}
                    </ul>
                );

            case "code":
                return <CodeBlock key={index} code={item.code} />;

            case "table":
                return (
                    <div key={index} className="my-6 overflow-x-auto">
                        <Table>
                            <TableHeader>
                            <TableRow>
                                {item.headers.map((header, hIndex) => (
                                <TableHead key={hIndex}>{header}</TableHead>
                                ))}
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            {item.rows.map((row, rIndex) => (
                                <TableRow key={rIndex}>
                                {row.map((cell, cIndex) => (
                                    <TableCell key={cIndex}>
                                        {typeof cell === 'object' && cell.type === 'link' ? (
                                            <Link href={cell.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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

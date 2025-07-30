import { findContentBySlug } from '@/lib/content';
import { ContentRenderer } from '@/components/content-renderer';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: {
    slug: string[];
  };
};

export default function ContentPage({ params }: Props) {
  const { slug } = params;
  const content = findContentBySlug(slug);

  if (!content) {
    notFound();
  }

  const getBadgeText = () => {
    if (content.id.startsWith("part")) return "Parte";
    if (content.id.startsWith("section")) return "Sección";
    if (content.id.startsWith("subsection")) return "Lección de Estudio";
    return "Contenido";
  }

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-2 font-normal">{getBadgeText()}</Badge>
        <h1 className="font-headline text-4xl lg:text-5xl mb-2 text-foreground">
            {content.title}
        </h1>
        {content.description && <p className="text-xl text-muted-foreground mt-4">{content.description}</p>}
      </div>
      <Separator className="my-8" />
      {content.content && content.content.length > 0 ? (
        <ContentRenderer content={content.content} />
      ) : (
        !content.id.startsWith('subsection') && (
            <p className="text-muted-foreground">Selecciona una lección del menú de la izquierda para comenzar.</p>
        )
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  const { content } = await import('@/lib/content');

  content.forEach(part => {
     paths.push({ slug: [part.slug] });
    part.sections.forEach(section => {
      paths.push({ slug: [part.slug, section.slug] });
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          paths.push({ slug: [part.slug, section.slug, subsection.slug] });
        });
      }
    });
  });

  return paths;
}

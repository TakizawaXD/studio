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

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        {content.id.startsWith("subsection") ? (
          <Badge variant="secondary" className="mb-2 font-normal">Sección de Estudio</Badge>
        ) : (
           <Badge variant="outline" className="mb-2 font-normal">{content.id.includes('part') ? 'Parte' : 'Sección'}</Badge>
        )}
        <h1 className="font-headline text-4xl lg:text-5xl mb-2 text-foreground">
            {content.title}
        </h1>
        {content.description && <p className="text-xl text-muted-foreground mt-4">{content.description}</p>}
      </div>
      <Separator className="my-8" />
      <ContentRenderer content={content.content || []} />
    </article>
  );
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  const { content } = await import('@/lib/content');

  content.forEach(part => {
     paths.push({ slug: [part.slug] });
    part.sections.forEach(section => {
      if (section.subsections) {
         paths.push({ slug: [part.slug, section.slug] });
        section.subsections.forEach(subsection => {
          paths.push({ slug: [part.slug, section.slug, subsection.slug] });
        });
      } else {
        paths.push({ slug: [part.slug, section.slug] });
      }
    });
  });

  return paths;
}

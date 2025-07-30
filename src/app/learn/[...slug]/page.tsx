import { findContentBySlug } from '@/lib/content';
import { ContentRenderer } from '@/components/content-renderer';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

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
      <h1 className="font-headline text-4xl mb-2">{content.title}</h1>
      {content.id.startsWith("subsection") && <Badge variant="secondary" className="mb-8">Study Section</Badge>}
      <ContentRenderer content={content.content || []} />
    </article>
  );
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  const { content } = await import('@/lib/content');

  content.forEach(part => {
    part.sections.forEach(section => {
      if (section.subsections) {
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

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from 'next-intl';

import { BlockManager, getBlocks } from '@/components/templates/block-manager';
import { getPage } from '@/modules/page/api/page.api';
import { getMetadata } from '@/utils/next-metadata';

interface PageProps {
  params: Promise<{
    locale: Locale;
    slug?: string[];
  }>;
  searchParams: Promise<never>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = await getPage(slug?.join('/') || 'home', locale);

  if (!page) return {};

  return getMetadata(page);
}

export default async function Page(props: PageProps) {
  const [{ locale, slug }, searchParams] = await Promise.all([props.params, props.searchParams]);
  const page = await getPage(slug?.join('/') || 'home', locale);

  if (!page) return notFound();

  return <BlockManager blocks={getBlocks(page.blocks || [])} locale={locale} searchParams={searchParams} />;
}

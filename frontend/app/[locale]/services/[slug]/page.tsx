import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from 'next-intl';

import { BlockManager, getBlocks } from '@/components/templates/block-manager';
import { getService } from '@/modules/service/api/service.api';
import { getMetadata } from '@/utils/next-metadata';

interface ServicesProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
  searchParams: Promise<never>;
}

export async function generateMetadata({ params }: ServicesProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const service = await getService(slug, locale);

  if (!service) return {};

  return getMetadata(service);
}

export default async function Services(props: ServicesProps) {
  const [{ locale, slug }, searchParams] = await Promise.all([props.params, props.searchParams]);
  const service = await getService(slug, locale);

  if (!service) return notFound();

  return <BlockManager blocks={getBlocks(service.blocks || [])} locale={locale} searchParams={searchParams} />;
}

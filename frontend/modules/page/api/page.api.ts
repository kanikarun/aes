import { Locale } from 'next-intl';

import { fetchAPI } from '@/strapi';

import * as I from './page.interface';

type PageSlug = 'home';

export async function getPage<T extends string>(slug: PageSlug | T, locale: Locale = 'en') {
  const fields = ['metaTitle', 'locale', 'documentId'];
  const rootPages = await fetchAPI<I.PagesResponse>('/pages', {
    locale: 'en',
    filters: { slug },
    fields,
    pagination: { limit: 1 },
    populate: {
      localizations: { fields }
    }
  });

  if (!rootPages?.data?.length) return null;

  const rootPage = rootPages.data[0];

  const p = rootPage.localizations?.find(x => x.locale === locale);
  const documentId = p ? p.documentId : rootPage.documentId;

  const page = await fetchAPI<I.PageResponse>(`/pages/${documentId}`, {
    locale: p ? locale : 'en',
    populate: 'all'
  });

  if (!page?.data) return null;

  return page.data;
}

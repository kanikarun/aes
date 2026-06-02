import { Locale } from 'next-intl';

import { fetchAPI } from '@/strapi';

import * as I from './service.interface';

type PageSlug = 'services';

export async function getService<T extends string>(slug: PageSlug | T, locale: Locale = 'en') {
  const fields = ['metaTitle', 'locale', 'documentId'];
  const rootServices = await fetchAPI<I.ServicesResponse>('/services', {
    locale: 'en',
    filters: { slug },
    fields,
    pagination: { limit: 1 },
    populate: {
      localizations: { fields }
    }
  });

  if (!rootServices?.data?.length) return null;

  const rootService = rootServices.data[0];

  const p = rootService.localizations?.find(x => x.locale === locale);
  const documentId = p ? p.documentId : rootService.documentId;

  const service = await fetchAPI<I.ServiceResponse>(`/services/${documentId}`, {
    locale: p ? locale : 'en',
    populate: 'all'
  });

  if (!service?.data) return null;

  return service.data;
}

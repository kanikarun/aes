import { fetchAPI, getStrapiMedia } from '@/strapi';

import * as I from './app-module.interface';

export async function getAppModules({
  locale = 'en',
  selectedIds
}: {
  locale?: string;
  selectedIds?: number[];
}): Promise<I.GetAppModulesResponse> {
  if (selectedIds?.length === 0) return { data: [] };

  const res = await fetchAPI<I.AppModulesResponse>('/app-modules', {
    locale,
    fields: ['title', 'description', 'locale', 'isHide'],
    populate: '*'
  });

  if (!res) return { data: [] };

  const modules = res.data
    .filter((item: I.IAppModule) => !item.isHide)
    .map((item: I.IAppModule) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: getStrapiMedia(item.image)
    }));

  return {
    data: selectedIds!
      .map(id => modules.find(m => m.id === id))
      .filter((m): m is NonNullable<typeof m> => m !== undefined)
  };
}

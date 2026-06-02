'use server';

import { Locale } from 'next-intl';

import { fetchAPI } from '@/strapi';

import * as I from './interface';

async function fetchNavigation(slug: 'navigation' | 'footer'): Promise<I.INavigationItem[]> {
  try {
    const res = await fetchAPI<I.INavigationItem[]>(`/navigation/render/${slug}`, {type: 'TREE'});
    return (res || []).filter(item => !item.additionalFields?.isHide);
  } catch (error) {
    return [];
  }
}

function mapNavItemToMenu(item: I.INavigationItem, locale: Locale): I.Navigation {
  const isExternal = item.type === 'EXTERNAL';

  return {
    name: item.additionalFields?.[`${locale}Title`] || item.additionalFields?.enTitle || item.title,
    target: isExternal ? '_blank' : undefined,
    href: item.type === 'WRAPPER' ? undefined : item.path || undefined,
    items: item.items?.filter(child => !child.additionalFields?.isHide).map(child => mapNavItemToMenu(child, locale))
  };
}

export async function getNavigationHeader(locale: Locale): Promise<I.Navigation[]> {
  const [items] = await Promise.all([fetchNavigation('navigation')]);
  return items.map(item => mapNavItemToMenu(item, locale));
}

export async function getNavigationFooter(locale: Locale): Promise<I.Navigation[]> {
  const [items] = await Promise.all([fetchNavigation('footer')]);
  return items.map(item => mapNavItemToMenu(item, locale));
}

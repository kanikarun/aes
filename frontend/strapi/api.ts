import { stringify } from 'qs';

import { env } from '@/env';

import * as I from './interface';

export const getStrapiURL = (path = '') => {
  return `${env.NEXT_STRAPI_URL || 'http://localhost:1337'}${path}`;
};

export interface StrapiParams extends Record<string, unknown> {
  fields?: string[];
  filters?: Record<string, unknown>;
  locale?: string | 'all';
  populate?: '*' | 'all' | 'deep' | `deep,${number}` | Record<string, unknown>;
  sort?: string[];
  nested?: boolean;
  pagination?: {
    start?: number;
    limit?: number;
    page?: number;
    pageSize?: number;
    withCount?: boolean;
  };
}

export async function fetchAPI<T>(
  path: string,
  params: StrapiParams = {},
  options: RequestInit = {}
): Promise<T | null> {
  const queryString = stringify(params, {
    addQueryPrefix: true
  });

  const url = getStrapiURL(`/api${path}${queryString}`);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 300,
        tags: ['api']
      },

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.NEXT_STRAPI_API_TOKEN ?? ''}`
      },

      signal: AbortSignal.timeout(10000),

      ...options
    });

    if (!response.ok) {
      return null;
    }

    return response.json() as Promise<T>;
  } catch {
    return null;
  }
}

export async function getConfig(): Promise<I.IConfig | null> {
  const res = await fetchAPI<{ data: I.IConfig }>('/config', { populate: '*' });
  return res?.data ?? null;
}

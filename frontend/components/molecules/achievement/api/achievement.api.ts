import { group } from 'radash';

import { fetchAPI, getStrapiMedia } from '@/strapi';

import * as I from './achievement.interface';

const achievementType: Record<string, { en: string; km: string }> = {
  Award: { en: 'Awards', km: 'ពានរង្វាន់' },
  Partner: { en: 'Partners', km: 'ដៃគូ' },
};

export async function getAchievements({type, locale = 'en'}: I.GetAchievementsRequest) {
    const res = await fetchAPI<I.GetAchievementsResponse>('/achievements', {
      fields: ['type', 'enTitle', 'kmTitle', 'enDescription', 'kmDescription'],
      filters: type ? { type: { $eq: type } } : {},
      populate: '*'
    });

    if (!res) return [];

    const data = group(res.data, item => item.type);

    return Object.entries(data).map(([key, values]) => ({
    id: key,
    label: achievementType[key][locale],
    values: (values ?? []).map(item => ({
      title: item[`${locale}Title`] || item.enTitle,
      description: item[`${locale}Description`] || item.enDescription,
      image: getStrapiMedia(item.image)
    }))
  }));
}

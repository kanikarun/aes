import { Locale } from 'next-intl';

import { IArrayResponse, Image } from '@/strapi';

type AchievementType = 'Award' | 'Partner';

export interface GetAchievementsRequest {
  type?: AchievementType;
  locale?: Locale;
}

interface IAchievement {
  id: number;
  type: AchievementType;
  enTitle: string;
  kmTitle?: string;
  enDescription?: string;
  kmDescription?: string;
  documentId: string;
  image: Image;
}

export type GetAchievementsResponse = IArrayResponse<IAchievement>;

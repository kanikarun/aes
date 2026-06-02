import { Locale } from 'next-intl';

import { Achievement } from '@/components/molecules/achievement';
import { getAchievements } from '@/components/molecules/achievement/api/achievement.api';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';

export interface TemplateAchievementProps {
  type?: 'Award' | 'Partner';
  sectionTitle?: SectionTitleProps;
  locale: Locale;
}

export const TemplateAchievement: React.FC<TemplateAchievementProps> = async ({ type, sectionTitle, locale }) => {
  const data = await getAchievements({ type, locale });

  if (!data.length) return null;

  return (
    <section className="container bg-white py-8 lg:py-16">
      {sectionTitle && <SectionTitle {...sectionTitle} />}
      <Achievement data={data} />
    </section>
  );
};

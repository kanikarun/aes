import { Locale } from 'next-intl';

import { Props as SectionTitleProps } from '@/components/molecules/section-title';
import { BentoGridProps } from '@/components/organisms/bento-grid';
import { getAppModules } from '@/modules/app-module/api/app-module.api';

import { TemplateBentoGrid } from '../bento-grid';

export interface TemplateAppModuleProps {
  sectionTitle?: SectionTitleProps;
  items?: BentoGridProps[];
  showBgCurve?: boolean;
  locale: Locale;
}

export const TemplateAppModule: React.FC<TemplateAppModuleProps> = async props => {
  const { sectionTitle, items, showBgCurve, locale } = props;

  const selectedIds = items?.map(item => item.id);
  const { data } = await getAppModules({ locale, selectedIds });

  if (!data.length) return null;

  return <TemplateBentoGrid sectionTitle={sectionTitle} items={data} showBgCurve={showBgCurve} />;
};

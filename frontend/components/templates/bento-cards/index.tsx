import { Fragment } from 'react/jsx-runtime';

import { CurveWrapper } from '@/components/molecules/curve-wrapper';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { BentoCards } from '@/components/organisms/bento-cards';

export interface TemplateBentoCardsProps {
  sectionTitle?: SectionTitleProps;
  showBgCurve?: boolean;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
}

export const TemplateBentoCard: React.FC<TemplateBentoCardsProps> = props => {
  const { sectionTitle, items = [], showBgCurve } = props;
  const Wrapper = showBgCurve ? CurveWrapper : Fragment;
  return (
    <Wrapper>
      <div className="bg-primary-50">
        <div className="relative container space-y-10 py-8 sm:space-y-16 lg:py-16">
          {sectionTitle && <SectionTitle {...sectionTitle} />}
          <BentoCards items={items} />
        </div>
      </div>
    </Wrapper>
  );
};

import { CurveWrapper } from '@/components/molecules/curve-wrapper';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { BentoGrid, BentoGridProps } from '@/components/organisms/bento-grid';
import { Fragment } from 'react';

export interface TemplateBentoGridProps {
  sectionTitle?: SectionTitleProps;
  items: BentoGridProps[];
  showBgCurve?: boolean;
}

export const TemplateBentoGrid: React.FC<TemplateBentoGridProps> = props => {
  const { sectionTitle, items, showBgCurve } = props;
  const Wrapper = showBgCurve ? CurveWrapper : Fragment;

  return (
    <Wrapper>
      <div className="bg-primary-50 py-8 lg:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} className="container" />}
        <div className="container py-8 lg:py-16">
          <div className="-mx-4 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {items.map(item => (
              <BentoGrid
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

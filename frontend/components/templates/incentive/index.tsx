import Image from 'next/image';
import React, { Fragment } from 'react';

import { CurveWrapper } from '@/components/molecules/curve-wrapper';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { Incentives } from '@/components/organisms/incentive';
import { Props as IncentiveItemProps } from '@/components/organisms/incentive';

export interface TemplateIncentiveProps {
  sectionTitle: SectionTitleProps;
  items: IncentiveItemProps['items'];
  image?: string;
  showBgCurve?: boolean;
}

export const TemplateIncentive: React.FC<TemplateIncentiveProps> = props => {
  const { sectionTitle, items, image, showBgCurve } = props;
  const Wrapper = showBgCurve ? CurveWrapper : Fragment;
  return (
    <Wrapper>
      <div className="bg-primary-50 py-16">
        <div className="isolate container">
          <SectionTitle {...sectionTitle} className="-mt-12" />
          {image && (
            <div className="relative mt-8 aspect-video lg:mt-16">
              <Image className="object-cover" fill src={image} alt="OdooKH" />
            </div>
          )}
          <Incentives title={sectionTitle.title} items={items} />
        </div>
      </div>
    </Wrapper>
  );
};

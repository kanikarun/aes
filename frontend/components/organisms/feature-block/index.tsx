import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { CurveWrapper } from '@/components/molecules/curve-wrapper';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';

interface FeatureBlockItem {
  id: number;
  title: string;
  description?: string;
  image?: string | StaticImport;
}

export interface FeatureBlockProps {
  sectionTitle?: SectionTitleProps;
  items?: FeatureBlockItem[];
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ sectionTitle, items }) => {
  return (
    <CurveWrapper>
      <div className="container space-y-16 py-8 lg:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} className="text-center" />}

        {items?.map(x => {
          return (
            <div key={x.id} className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-2xl sm:p-10">
              <div className="col-span-full space-y-4 self-center lg:col-span-1">
                <h5 className="text-primary font-heading text-2xl leading-snug font-bold tracking-tight text-pretty sm:text-3xl">
                  {x.title}
                </h5>
                {x.description && <p className="sm:text-lg">{x.description}</p>}
              </div>
              <div className="relative col-span-full aspect-3/2 overflow-hidden rounded-2xl lg:col-span-1">
                {x.image && (
                  <Image fill className="object-cover object-center" src={x.image} alt="Feature Block Image" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </CurveWrapper>
  );
};

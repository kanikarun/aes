import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { cluster } from 'radash';

import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { cn } from '@/lib/utils';

interface ValuePropositionItem {
  id: number;
  title: string;
  description?: string;
}

export interface ValuePropositionProps {
  sectionTitle?: SectionTitleProps;
  items?: ValuePropositionItem[];
  shouldScaleImage?: boolean;
  image: string | StaticImport;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ sectionTitle, items, shouldScaleImage, image }) => {
  const [leftItems, rightItems] = cluster(items ?? [], (items?.length ?? 0) / 2);
  return (
    <section className="bg-white">
      <div className="container flex flex-col py-8 lg:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <div className="grid-col-1 grid gap-5 py-8 lg:grid-cols-3 lg:py-16">
          <Values items={leftItems} />
          <div className="relative aspect-square rounded-full">
            <Image className={cn('object-cover', { 'lg:scale-120': shouldScaleImage })} fill src={image} alt="OdooKH" />
          </div>
          <Values items={rightItems} />
        </div>
      </div>
    </section>
  );
};

const Values: React.FC<Pick<ValuePropositionProps, 'items'>> = ({ items }) => {
  return (
    <div className="flex flex-col items-center justify-around space-y-5 lg:items-start">
      {items?.map(x => (
        <div key={x.id} className="max-w-sm space-y-2 text-center lg:text-left">
          <h6 className="text-primary font-heading text-lg font-semibold sm:text-xl">{x.title}</h6>
          <span className="text-gray-500">{x.description}</span>
        </div>
      ))}
    </div>
  );
};

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { cn } from '@/lib/utils';
interface BentoCardProps {
  id: number;
  title: string;
  description: string;
  image: string | StaticImport;
}
interface Props {
  items: BentoCardProps[];
}

export const BentoCards: React.FC<Props> = ({ items = [] }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 lg:grid-cols-6',
        'lg:*:nth-[3n]:rounded-r-4xl lg:*:nth-[3n-2]:rounded-l-4xl'
      )}
    >
      {items.map(x => (
        <BentoCard key={x.id} {...x} />
      ))}
    </div>
  );
};

const BentoCard: React.FC<BentoCardProps> = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:col-span-2">
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="relative aspect-4/3">
          <Image fill className="object-cover" src={image} alt="Bento Image" />
        </div>
        <div className="p-6">
          <p className="text-primary font-heading text-base leading-snug font-bold tracking-tight sm:text-lg">
            {title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

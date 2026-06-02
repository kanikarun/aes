import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export interface BentoGridProps {
  id: number;
  title: string;
  description: string;
  image: string | StaticImport;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ image, title, description }) => {
  return (
    <div className="group flex flex-col items-center bg-white p-6 text-center hover:bg-white/85 sm:p-10">
      <div className="relative size-25">
        <Image fill className="object-contain" src={image} alt={title} />
      </div>
      <h6 className="group-hover:text-primary font-heading mb-4 text-base leading-snug font-semibold sm:text-lg">
        {title}
      </h6>
      <p className="text-sm text-gray-400 sm:text-base">{description}</p>
    </div>
  );
};

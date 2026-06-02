import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
export interface Props {
  title: string;
  image?: StaticImport | string;
  items: {
    id: number;
    title: string;
    description: string;
    image?: StaticImport | string;
  }[];
}

export const Incentives: React.FC<Props> = ({ items }) => {
  return (
    <div className="py-8 lg:py-16">
      <div className="rounded-2xl bg-white p-9 shadow-sm">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(x => (
            <div key={x.id} className="flex flex-col space-x-4 text-center">
              <Image className="mx-auto size-20" width={64} height={64} src={x.image || ''} alt="" />
              <div className="mt-2 space-y-2">
                <h5 className="text-primary font-heading font-semibold">{x.title}</h5>
                <p className="text-gray-500">{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

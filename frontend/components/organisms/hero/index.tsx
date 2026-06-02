import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export interface HeroProps {
  image: string | StaticImport;
  title: string;
  description: string;
  buttons?: Array<{ text: string; link: string }>;
  footerText?: string;
}

export const Hero: React.FC<HeroProps> = props => {
  const { image, title, description, buttons, footerText } = props;
  return (
    <section className="relative pb-24">
      <Image src="/images/romdoul-mesh.svg" className="bg-repeat object-cover opacity-10" fill alt="Artwork" />
      <div className="relative mx-auto aspect-7/6 lg:aspect-16/6 xl:max-w-7xl">
        <Image className="absolute top-0 size-full object-cover object-top" src={image} fill alt="ERP App Module" />
        <div className="absolute inset-0 bg-linear-to-t from-white to-transparent to-70%" />
      </div>
      <div className="isolate container -mt-16 text-center md:-mt-32 lg:mt-0">
        <h1
          className="text-primary font-heading mb-6 text-3xl leading-snug font-bold md:text-5xl [&>span]:text-gray-400"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-xl md:text-2xl">{description}</p>
        {buttons && buttons.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {buttons.map((item, i) => (
              <Button key={i} size="xl" className="grow sm:grow-0" variant={!i ? 'default' : 'outline-teal'} asChild>
                <Link href={item.link || '#'}>{item.text}</Link>
              </Button>
            ))}
          </div>
        )}
        {Boolean(footerText) && <p className="mx-auto mt-12 max-w-3xl text-lg">{footerText}</p>}
      </div>
    </section>
  );
};

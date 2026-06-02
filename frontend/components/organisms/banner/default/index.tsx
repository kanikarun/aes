import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

import { BannerProps } from '../interface';

export const Default: React.FC<BannerProps> = props => {
  const { bgColor, tagline, title, content, image, buttons } = props;
  const bgClass = bgColor === 'Purple' ? 'bg-primary-50' : 'bg-white';

  return (
    <div className={bgClass}>
      <div className="container grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="space-y-4 py-8 lg:py-16">
          {tagline && <span className="text-primary text-xl font-semibold">{tagline}</span>}
          <h2
            className="font-heading [&>span]:text-primary max-w-md text-2xl leading-snug font-black tracking-tight text-pretty sm:text-5xl md:text-4xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="text-md text-black [&>p]:text-black" dangerouslySetInnerHTML={{ __html: content }} />
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((item, i) => (
                <Button key={i} size="xl" className="grow sm:grow-0" variant={!i ? 'default' : 'outline-teal'} asChild>
                  <Link href={item.link || '#'}>{item.text}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="relative aspect-4/3">
            <Image
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              src={image}
              alt="Banner Image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

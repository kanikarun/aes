import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { SectionTitle } from '@/components/molecules/section-title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Curve from '@/public/curve.svg';

import { PricingProps } from './interface';

export const Pricing: React.FC<PricingProps> = async ({ sectionTitle, items, variant }) => {
  const t = await getTranslations('common');
  const isFourCol = variant === 'Four Column';
  return (
    <section>
      {sectionTitle && <SectionTitle {...sectionTitle} className="container py-8 lg:py-16" />}
      <div className="bg-primary-50 relative">
        <Curve className="absolute" />
        <div className="py-8 lg:py-16">
          <div className="container">
            <div
              className={cn('mx-auto mt-16 grid grid-cols-1 gap-y-8 sm:mt-20 lg:grid-cols-3', {
                'lg:grid-cols-4': variant === 'Four Column'
              })}
            >
              {items?.map(x => (
                <div
                  key={x.id}
                  className={cn(
                    'flex flex-col justify-between rounded-3xl bg-white p-8 inset-ring inset-ring-gray-200 lg:rounded-none',
                    isFourCol
                      ? 'lg:nth-[4n-3]:rounded-l-3xl lg:nth-[4n-3]:rounded-r-none'
                      : 'lg:nth-[3n-2]:rounded-l-3xl lg:nth-[3n-2]:rounded-r-none',

                    isFourCol
                      ? 'lg:nth-[4n]:rounded-l-none lg:nth-[4n]:rounded-r-3xl'
                      : 'lg:nth-[3n]:rounded-l-none lg:nth-[3n]:rounded-r-3xl'
                  )}
                >
                  <div>
                    {x.image && (
                      <div className="relative mb-2 aspect-square">
                        <Image fill className="object-contain" src={x.image} alt={x.title} />
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-x-4">
                      <h3
                        className={cn(
                          x.isRecommend ? 'text-primary' : 'text-gray-900',
                          'font-heading text-lg/8 leading-snug font-semibold'
                        )}
                      >
                        {x.title}
                      </h3>
                      {x.isRecommend ? (
                        <p className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs/5 font-semibold">
                          {t('recommend')}
                        </p>
                      ) : null}
                    </div>

                    {Boolean(x.description) && <p className="mt-4 text-sm/6 text-gray-600">{x.description}</p>}

                    {Boolean(x.price) && (
                      <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900">${x.price}</span>
                        {Boolean(x.priceType) && (
                          <span className="text-sm/6 font-semibold text-gray-600">/{x.priceType?.toLowerCase()}</span>
                        )}
                      </p>
                    )}

                    <div className="mt-8 space-y-3 text-sm/6 text-gray-600">
                      {x.content && (
                        <div className="tick prose prose-sm" dangerouslySetInnerHTML={{ __html: x.content }} />
                      )}
                    </div>
                  </div>

                  {x.button && (
                    <Button variant={x.isRecommend ? 'default' : 'outline'} className="mt-8" asChild>
                      <Link href={x.button.link}>{x.button.text}</Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

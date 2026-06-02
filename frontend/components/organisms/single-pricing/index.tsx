import { Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { getTranslations } from 'next-intl/server';

import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';
import { Link } from '@/i18n/navigation';

export interface SinglePricingProps {
  sectionTitle?: SectionTitleProps;
  title: string;
  description?: string;
  features: string[];
  priceTitle: string;
  price: number;
  priceType?: 'Monthly' | 'Yearly';
  priceNote?: string;
}

export const SinglePricing: React.FC<SinglePricingProps> = async ({ sectionTitle, ...rest }) => {
  const t = await getTranslations('common');
  const { title, description, features, priceTitle, price, priceType, priceNote } = rest;

  return (
    <section className="bg-primary-50 py-8 lg:py-16">
      <div className="container space-y-16 sm:space-y-20">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <div className="rounded-3xl bg-white ring-1 ring-gray-200 lg:mx-0 lg:flex">
          <div className="grow p-8 sm:p-10">
            <h3 className="font-heading text-2xl leading-snug font-semibold tracking-tight text-gray-900 md:text-3xl">
              {title}
            </h3>
            {Boolean(description) && <p className="mt-6 text-base/7 text-gray-600">{description}</p>}
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="text-primary flex-none text-sm/6 font-semibold">{t('included-features')}</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {features.map(feature => (
                <li key={feature} className="flex gap-x-3">
                  <HugeiconsIcon icon={Tick02Icon} aria-hidden="true" className="text-primary h-6 w-5 flex-none" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="h-full rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">{priceTitle}</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">${price}</span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">{priceType}</span>
                </p>
                <Button size="lg" className="mt-10 w-full" asChild>
                  <Link href={ROUTES.CONTACT}>{t('contact')}</Link>
                </Button>
                <p className="mt-6 text-xs/5 text-gray-600">{priceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

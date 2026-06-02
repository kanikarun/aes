import { getTranslations } from 'next-intl/server';

import { siteConfig } from '@/config/site';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import IconFacebook from '@/public/icons/brand-facebook.svg';
import IconInstagram from '@/public/icons/brand-instagram.svg';
import IconTelegram from '@/public/icons/brand-telegram.svg';
import IconTikTok from '@/public/icons/brand-tiktok.svg';
import Logo from '@/public/odookh-logo.svg';
import { IConfig } from '@/strapi';

import * as I from './api/interface';

export const Footer: React.FC<{ data: I.Navigation[]; config: IConfig | null }> = async ({ data, config }) => {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-[#252733] text-white">
      <div className="container grid grid-cols-9 gap-5 py-8 lg:py-16">
        <div className="col-span-full space-y-4 lg:col-span-3">
          <Logo className="w-48" />
          <p className="text-sm text-gray-200">{t('text')}</p>
        </div>

        <FooterMenus data={data} />

        <div className="col-span-full space-y-2 sm:col-span-3 sm:justify-self-end lg:col-span-2">
          <h5 className="font-heading font-semibold sm:text-lg">{t('follow-us')}</h5>
          <div className="flex space-x-3">
            <FooterSocialIcon ariaLabel="Go to Facebook" href={config?.facebookLink} icon={IconFacebook} />
            <FooterSocialIcon ariaLabel="Go to Instagram" href={config?.instagramLink} icon={IconInstagram} />
            <FooterSocialIcon ariaLabel="Go to TikTok" href={config?.tiktokLink} icon={IconTikTok} />
            <FooterSocialIcon ariaLabel="Go to Telegram" href={config?.telegramLink} icon={IconTelegram} />
          </div>
        </div>
      </div>
      <div className="bg-[#1A1C24] py-4">
        <p className="container text-center">
          {t('copyright', { year: new Date().getFullYear() })} &nbsp;
          <Link href={siteConfig.oneworldWebsite} target="_blank">
            OneWorld Technology
          </Link>
        </p>
      </div>
    </footer>
  );
};

const FooterMenus: React.FC<{ data: I.Navigation[] }> = ({ data }) => {
  return data?.map(x => {
    if (x.items?.length) {
      return (
        <div key={x.name} className="col-span-4 space-y-2 sm:col-span-3 lg:col-span-2 lg:justify-self-end">
          <h5 className="font-heading font-semibold sm:text-lg">{x.name}</h5>
          <ul className="text-sm text-gray-200">
            {x.items.map(y => {
              return (
                <li key={y.name} className="py-2">
                  <Link target={y.target} href={y.href || '#'}>
                    {y.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    return (
      <Link key={x.name} href={x.href || '#'} target={x.target}>
        {x.name}
      </Link>
    );
  });
};

interface FooterSocialIconProps {
  ariaLabel: string;
  className?: string;
  icon: React.ElementType;
  href?: string;
}

const FooterSocialIcon: React.FC<FooterSocialIconProps> = ({ ariaLabel, className, icon: Icon, href }) => {
  if (!href) return null;
  return (
    <a href={href} target="_blank" aria-label={ariaLabel}>
      <Icon className={cn('size-7 fill-white transition-all duration-300 md:size-7.5 md:hover:scale-120', className)} />
    </a>
  );
};

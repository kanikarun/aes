import { Call02Icon, Mail01Icon, Sent02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon, HugeiconsIconProps } from '@hugeicons/react';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import { getConfig } from '@/strapi';

export const ContactInfo: React.FC<{ title: string }> = async ({ title }) => {
  const t = await getTranslations('page.contact');
  const config = await getConfig();

  if (!config) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-primary font-heading max-w-sm text-xl font-black tracking-tight text-pretty sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-2">
        <ContactInfoItem icon={Mail01Icon} label={t('email')} value={config.email} href={`mailto:${config.email}`} />
        <ContactInfoItem icon={Call02Icon} label={t('phone')} value={config.phone} href={`tel:${config.phone}`} />
        <ContactInfoItem icon={Sent02Icon} label={t('telegram')} value="@OdooKh" href={config.telegramLink} />
      </div>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: HugeiconsIconProps['icon'];
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => {
  if (!href) return null;
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-primary/20 flex size-10 shrink-0 items-center justify-center rounded-lg">
        <HugeiconsIcon icon={icon} aria-hidden="true" className="text-primary size-6" />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500">{label}: </label>
        <Link href={href || '#'} className="text-primary">
          {value}
        </Link>
      </div>
    </div>
  );
};

import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface Props {
  fullHeight?: boolean;
}

export const TemplateNotFound: React.FC<Props> = async ({ fullHeight }) => {
  const t = await getTranslations('page.not-found');

  return (
    <div className={cn('grid h-[80vh] min-h-full place-items-center px-6 py-24 lg:px-8', { 'h-dvh': fullHeight })}>
      <div className="flex flex-col space-y-6 text-center">
        <p className="text-primary text-7xl font-bold md:text-8xl">404</p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h1>

        <p className="text-muted-foreground max-w-md text-sm leading-6 md:text-base">{t('subtitle')}</p>

        <div>
          <Button asChild>
            <Link href="/">{t('back')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

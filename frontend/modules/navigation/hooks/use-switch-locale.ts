import { useSearchParams } from 'next/navigation';
import { Locale, useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

export function useSwitchLocale() {
  const locale = useLocale();
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const switchLocale = (locale: Locale) => {
    const url = `${pathname}?${searchParams}`;
    router.replace(url, { scroll: false, locale });
  };

  return { locale, switchLocale };
}

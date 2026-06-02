'use client';

import { ChevronDown } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';
import { Locale } from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Cambodia from '@/public/images/cambodia.png';
import UK from '@/public/images/united-kingdom.png';

import { useSwitchLocale } from '../hooks/use-switch-locale';

const languages = [
  { locale: 'km', key: 'kh', name: 'ខ្មែរ', img: Cambodia },
  { locale: 'en', key: 'gb', name: 'English', img: UK }
];

export const LocaleToggle: React.FC = () => {
  const { locale, switchLocale } = useSwitchLocale();
  const lang = languages.find(x => x.locale === locale);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 focus:outline-none">
          <Image
            alt={locale}
            className="size-4.5 rounded-xs"
            fill={false}
            height={1}
            src={lang?.img || languages[0].img}
            width={1}
          />
          <div className="pr-1 text-sm">{lang?.name}</div>
          <HugeiconsIcon icon={ChevronDown} className="size-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-100 w-30" align="end">
        {languages.map(x => (
          <DropdownMenuItem
            key={x.key}
            className="flex cursor-pointer space-x-2"
            onClick={() => switchLocale(x.locale as Locale)}
          >
            <Image className="h-4.5 w-auto" preload fill={false} width={1} height={1} src={x.img} alt={locale} />
            <span>{x.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

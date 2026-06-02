'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { ArrowDown01Icon, Cancel01Icon, Menu11Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ROUTES } from '@/config/routes';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import Logo from '@/public/odookh-logo.svg';

import { Navigation } from './api/interface';
import { LocaleToggle } from './component/locale-toggle';

interface Props {
  data: Navigation[];
}

export const Header: React.FC<Props> = ({ data }) => {
  const t = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container">
      <nav aria-label="Global" className="flex items-center justify-between py-6">
        {/* Logo Branding */}
        <div className="flex lg:flex-1">
          <Link href={ROUTES.HOME} className="-m-1.5 p-1.5">
            <span className="sr-only">OdooKH</span>
            <Logo className="text-primary fill-primary w-30" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <HugeiconsIcon icon={Menu11Icon} aria-hidden="true" className="size-6" />
          </button>
        </div>

        <DesktopMenu data={data} />

        {/* Language Switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LocaleToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 container w-full max-w-none overflow-y-auto bg-white py-6 sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href={ROUTES.HOME} className="-m-1.5 p-1.5">
              <span className="sr-only">OdooKH</span>
              <Logo className="text-primary fill-primary w-24" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <HugeiconsIcon icon={Cancel01Icon} aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300">
              <MobileMenu data={data} onClick={() => setMobileMenuOpen(false)} />
              <div className="py-6">
                <BottomCard label={t('language')}>
                  <LocaleToggle />
                </BottomCard>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

const BottomCard: React.FC<React.PropsWithChildren<{ label: string }>> = ({ label, children }) => (
  <div className="bg-slate-background flex h-12 items-center justify-between rounded-lg border px-4">
    <div className="text-sm font-semibold">{label}</div>
    {children}
  </div>
);

const DesktopMenu: React.FC<Props> = ({ data }) => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {data.map(x => {
        const isActive = x.href !== '/' ? pathname.startsWith(x.href || '#') : x.href === pathname;
        const activeClassName = isActive ? 'text-primary border-b-2 border-primary' : '';

        if (x.items?.length) {
          return (
            <HoverCard key={x.name} openDelay={10} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link key={x.name} href={x.href || '#'} className={cn('text-base font-semibold', activeClassName)}>
                  <div className="flex items-center space-x-1">
                    <span>{x.name}</span>
                    <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit min-w-48 overflow-hidden rounded-xl p-0" align="start">
                {x.items.map(y => {
                  const className = 'font-semibold py-2 px-4';
                  const isLvl1Active = pathname.startsWith(y.href || '#');
                  return (
                    <div key={y.name}>
                      {!y.href ? (
                        <h6 className={className}>{y.name}</h6>
                      ) : (
                        <Link href={y.href} target={y.target} className={cn({ 'text-primary': isLvl1Active })}>
                          <div className={className}>{y.name}</div>
                        </Link>
                      )}
                      <div className="flex flex-col">
                        {y.items?.map(z => {
                          const isLvl2Active = pathname.startsWith(z.href || '#');
                          return (
                            <Link
                              key={z.name}
                              href={z.href || ''}
                              target={z.target}
                              className={cn('px-6 py-2', { 'text-primary': isLvl2Active })}
                            >
                              {z.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </HoverCardContent>
            </HoverCard>
          );
        }

        return (
          <Link
            key={x.name}
            href={x.href || '#'}
            target={x.target}
            className={cn('text-base font-semibold', activeClassName)}
          >
            {x.name}
          </Link>
        );
      })}
    </div>
  );
};

interface MobileMenuProps extends Props {
  onClick?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ data, onClick }) => {
  const className = 'py-2 font-semibold';
  const pathname = usePathname();

  return (
    <div className="py-6">
      {data.map(x => {
        const isActive = x.href !== '/' ? pathname.startsWith(x.href || '#') : x.href === pathname;
        const activeClassName = isActive ? 'text-primary' : '';

        return (
          <Accordion
            key={`mobile-menu-${x.name}`}
            type="single"
            collapsible
            className="group rounded-none border-0 p-0 **:text-base! **:no-underline!"
          >
            {x.items?.length ? (
              <AccordionItem value="item-1" className="bg-white!">
                <AccordionTrigger className={cn('p-0', className, activeClassName)}>{x.name}</AccordionTrigger>
                <AccordionContent className="-mx-4 pb-0">
                  {x.items.map(y => {
                    const isLvl1Active = pathname.startsWith(y.href || '#');
                    return (
                      <div key={y.name}>
                        {!y.href ? (
                          <h6 className={cn('px-4 py-2 font-semibold', { 'text-primary': isLvl1Active })}>{y.name}</h6>
                        ) : (
                          <Link href={y.href} target={y.target} onClick={onClick}>
                            <div className={cn('px-4 py-2 font-semibold', { 'text-primary': isLvl1Active })}>
                              {y.name}
                            </div>
                          </Link>
                        )}
                        <div className="flex flex-col font-normal!">
                          {y.items?.map(z => {
                            const isLvl2Active = pathname.startsWith(z.href || '#');
                            return (
                              <Link
                                key={z.name}
                                href={z.href || ''}
                                target={z.target}
                                className={cn('px-6 py-2', { 'text-primary': isLvl2Active })}
                                onClick={onClick}
                              >
                                {z.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                key={x.name}
                href={x.href || '#'}
                target={x.target}
                className={cn('-mx-3 block px-3', className, activeClassName)}
                onClick={onClick}
              >
                {x.name}
              </Link>
            )}
          </Accordion>
        );
      })}
    </div>
  );
};

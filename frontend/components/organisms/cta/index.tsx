import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
export interface CTAProps {
  title: string;
  description?: string;
  bgColor: 'Purple' | 'White';
  buttons: Array<{
    text: string;
    link: string;
  }>;
}

export const CallToAction: React.FC<CTAProps> = ({ title, description, buttons, bgColor }) => {
  return (
    <div className={cn('bg-primary-50', { 'bg-white': bgColor === 'White' }, 'py-16')}>
      <div className="container flex flex-col items-center space-y-6 space-x-0 md:flex-row md:justify-between md:space-y-0 md:space-x-6">
        <div className="flex w-full min-w-0 flex-col space-y-5">
          <h5
            className="[&>span]:text-primary font-heading max-w-xl items-center text-center text-3xl leading-snug font-bold md:text-left md:text-4xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {description && <p className="text-medium max-w-xl text-center md:text-left">{description}</p>}
        </div>
        <div className="flex shrink-0 flex-col gap-4">
          {buttons.map((item, i) => (
            <Button key={i} size="xl" variant={!i ? 'default' : 'outline-teal'} asChild>
              <Link href={item.link}>{item.text}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

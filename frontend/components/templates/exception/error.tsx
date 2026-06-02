import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  fullHeight?: boolean;
}

export const TemplateError: React.FC<Props> = ({ fullHeight }) => (
  <div className={cn('grid h-[80vh] min-h-full place-items-center px-6 py-24 lg:px-8', { 'h-screen': fullHeight })}>
    <div className="flex flex-col space-y-6 text-center">
      <p className="text-primary text-7xl font-bold md:text-8xl">500</p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Server Error</h1>

      <p className="text-muted-foreground max-w-md text-sm leading-6 md:text-base">
        Oop something went wrong, Try to refresh this page or feel free contact us if the problems persists.
      </p>

      <div>
        <Button asChild>
          <Link href="/">Back Home</Link>
        </Button>
      </div>
    </div>
  </div>
);

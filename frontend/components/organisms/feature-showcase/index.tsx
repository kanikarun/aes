import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export interface Props {
  title: string;
  content: string;
  videoSrc?: string;
  imageSrc?: string | StaticImport;
  reverse?: boolean;
}

export const FeatureShowcase: React.FC<Props> = ({ title, content, videoSrc, imageSrc, reverse }) => {
  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className={cn('col-span-full space-y-4 self-center lg:col-span-1', { 'lg:ml-10': reverse })}>
            <h5 className="text-primary font-heading text-2xl font-bold tracking-tight text-pretty sm:text-3xl">
              {title}
            </h5>
            {content && (
              <div
                className="checkmark prose-a:no-underline prose prose-a:font-semibold prose-a:text-primary prose-strong:font-bold *:text-foreground max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
          <div className={cn('col-span-full lg:col-span-1', { 'lg:order-first': reverse })}>
            {videoSrc ? (
              <video
                className="aspect-video rounded-2xl border border-gray-100 shadow-2xl"
                autoPlay
                playsInline
                loop
                muted
              >
                <source src={videoSrc} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-100 shadow-2xl">
                <Image fill className="object-cover" src={imageSrc || ''} alt="Feature Image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

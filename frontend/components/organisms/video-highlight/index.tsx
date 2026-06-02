import React from 'react';

import { SectionTitle } from '@/components/molecules/section-title';
export interface VideoHighlightProps {
  title: string;
  video: string;
}

export const VideoHighlight: React.FC<VideoHighlightProps> = ({ title, video }) => {
  return (
    <section className="bg-primary-50 relative py-8 lg:py-16">
      <div className="absolute right-0 h-[calc(100dvh*0.45)] w-full rounded-l-full bg-white lg:w-[calc(1024px+(100vw-1024px)/2)] xl:w-[calc(1280px+(100vw-1280px)/2)]" />
      <div className="isolate container space-y-12 py-12">
        <SectionTitle title={title} />
        <div className="sm:px-6 md:px-12 lg:px-24">
          <video className="aspect-video rounded-2xl border-8 border-white shadow-2xl" autoPlay playsInline loop muted>
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

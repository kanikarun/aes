import { cn } from '@/lib/utils';

export interface Props {
  title: string;
  description?: string;
  className?: string;
}

export const SectionTitle: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={cn('space-y-8', className)}>
      <h2
        className="[&>span]:text-primary font-heading mx-auto max-w-2xl text-center text-2xl leading-snug font-black tracking-tight text-pretty sm:text-5xl md:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {Boolean(description) && (
        <div
          className="mx-auto max-w-4xl text-center sm:text-lg"
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      )}
    </div>
  );
};

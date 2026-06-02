import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { FeatureShowcase } from '@/components/organisms/feature-showcase';

interface TemplateFeatureShowcaseItem {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
}

export interface TemplateFeatureShowcaseProps {
  sectionTitle?: SectionTitleProps;
  items?: TemplateFeatureShowcaseItem[];
}

export const TemplateFeatureShowcase: React.FC<TemplateFeatureShowcaseProps> = ({ sectionTitle, items = [] }) => {
  return (
    <div className="bg-primary-50">
      {sectionTitle && <SectionTitle {...sectionTitle} className="container mb-16 pt-2" />}
      {items.map((item, i) => (
        <FeatureShowcase
          key={item.id}
          title={item.title}
          content={item.content}
          imageSrc={item.image}
          videoSrc={item.video}
          reverse={i % 2 !== 0}
        />
      ))}
    </div>
  );
};

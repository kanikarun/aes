import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { InfoList } from '@/components/organisms/info-list';

export interface TemplateInfoListProps {
  sectionTitle?: SectionTitleProps;
  content: string[];
}

export const TemplateInfoList: React.FC<TemplateInfoListProps> = ({ sectionTitle, content }) => {
  return (
    <div className="container space-y-8 py-8 lg:space-y-16 lg:py-16">
      {sectionTitle && <SectionTitle {...sectionTitle} />}
      <InfoList content={content} />
    </div>
  );
};

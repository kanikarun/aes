import { Locale } from 'next-intl';

import { Banner } from '@/components/organisms/banner';
import { CallToAction } from '@/components/organisms/cta';
import { FeatureBlock } from '@/components/organisms/feature-block';
import { Hero } from '@/components/organisms/hero';
import { Pricing } from '@/components/organisms/pricing';
import { SinglePricing } from '@/components/organisms/single-pricing';
import { ValueProposition } from '@/components/organisms/value-proposition';
import { VideoHighlight } from '@/components/organisms/video-highlight';

import { TemplateAppModule } from '../app-module';
import { TemplateAchievement } from '../archievments';
import { TemplateBentoCard } from '../bento-cards';
import { TemplateBentoGrid } from '../bento-grid';
import { TemplateContact } from '../contact';
import { TemplateFeatureShowcase } from '../feature-showcase';
import { TemplateIncentive } from '../incentive';
import { TemplateInfoList } from '../info-lists';
import { BlockError, ErrorComponent } from './block-error';
import { BlockComponentProps, BlockOption } from './block-manager.interface';

interface Props {
  locale: Locale;
  blocks: (BlockComponentProps | null)[];
  searchParams: any;
  options?: BlockOption;
}

export const BlockManager: React.FC<Props> = ({ blocks, locale, options, searchParams }) => (
  <>
    {blocks.map((x, i) => {
      if (!x) return null;
      return (
        <section key={i} data-name={x.__component}>
          <BlockError>
            <BlockComponent {...x} locale={locale} options={options} searchParams={searchParams} />
          </BlockError>
        </section>
      );
    })}
  </>
);

const BlockComponent: React.FC<BlockComponentProps> = ({ __component, data, options, locale = 'en', searchParams }) => {
  const {
    /* page, override */
  } = options || {};

  switch (__component) {
    case 'blocks.template-feature-showcase':
      return <TemplateFeatureShowcase {...data} />;
    case 'blocks.template.app-module':
      return <TemplateAppModule {...data} locale={locale} />;
    case 'blocks.template-bento-grid':
      return <TemplateBentoGrid {...data} />;
    case 'blocks.banner':
      return <Banner {...data} />;
    case 'blocks.template-bento-card':
      return <TemplateBentoCard {...data} />;
    case 'blocks.hero':
      return <Hero {...data} />;
    case 'blocks.feature-block':
      return <FeatureBlock {...data} />;
    case 'blocks.pricing':
      return <Pricing {...data} />;
    case 'blocks.single-pricing':
      return <SinglePricing {...data} />;
    case 'blocks.value-proposition':
      return <ValueProposition {...data} />;
    case 'blocks.contact':
      return <TemplateContact />;
    case 'blocks.video-highlight':
      return <VideoHighlight {...data} />;
    case 'blocks.template.achievement':
      return <TemplateAchievement {...data} locale={locale} />;
    case 'blocks.call-to-action':
      return <CallToAction {...data} />;
    case 'blocks.template-incentive':
      return <TemplateIncentive {...data} />;
    case 'blocks.info-list':
      return <TemplateInfoList {...data} />;
    default:
      return <ErrorComponent message={`Unknown component: ${__component}`} />;
  }
};

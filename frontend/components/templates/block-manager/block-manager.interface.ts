import { Locale } from 'next-intl';

import { BannerProps } from '@/components/organisms/banner/interface';
import type { CTAProps } from '@/components/organisms/cta';
import { FeatureBlockProps } from '@/components/organisms/feature-block';
import type { HeroProps } from '@/components/organisms/hero';
import { PricingProps } from '@/components/organisms/pricing/interface';
import { SinglePricingProps } from '@/components/organisms/single-pricing';
import { ValuePropositionProps } from '@/components/organisms/value-proposition';
import type { VideoHighlightProps } from '@/components/organisms/video-highlight';

import { TemplateAppModuleProps } from '../app-module';
import { TemplateAchievementProps } from '../archievments';
import { TemplateBentoCardsProps } from '../bento-cards';
import { TemplateBentoGridProps } from '../bento-grid';
import { TemplateFeatureShowcaseProps } from '../feature-showcase';
import { TemplateIncentiveProps } from '../incentive';
import { TemplateInfoListProps } from '../info-lists';
export interface BlockOption {
  /**
   * Slug page from Strapi collection
   */
  page?: string;
  /**
   * Override config on block, such as className ...etc
   */
  override?: Partial<{
    [key in BlockComponent]: IExtractBlock<key>['data'];
  }>;
}

type Block<Comp extends BlockComponent, Props> = {
  __component: Comp;
  data: Props;
  locale?: Locale;
  searchParams?: never;
  options?: BlockOption;
};

export type IExtractBlock<T extends BlockComponent> = Extract<BlockComponentProps, { __component: T }>;

export type BlockComponent =
  | 'blocks.template.achievement'
  | 'blocks.template.app-module'
  | 'blocks.template-feature-showcase'
  | 'blocks.template-bento-card'
  | 'blocks.hero'
  | 'blocks.template-bento-grid'
  | 'blocks.banner'
  | 'blocks.contact'
  | 'blocks.video-highlight'
  | 'blocks.call-to-action'
  | 'blocks.template-incentive'
  | 'blocks.feature-block'
  | 'blocks.pricing'
  | 'blocks.single-pricing'
  | 'blocks.value-proposition'
  | 'blocks.info-list';

export type BlockComponentProps =
  | Block<'blocks.template.achievement', TemplateAchievementProps>
  | Block<'blocks.template.app-module', TemplateAppModuleProps>
  | Block<'blocks.template-feature-showcase', TemplateFeatureShowcaseProps>
  | Block<'blocks.template-bento-grid', TemplateBentoGridProps>
  | Block<'blocks.template-bento-card', TemplateBentoCardsProps>
  | Block<'blocks.hero', HeroProps>
  | Block<'blocks.contact', never>
  | Block<'blocks.banner', BannerProps>
  | Block<'blocks.video-highlight', VideoHighlightProps>
  | Block<'blocks.call-to-action', CTAProps>
  | Block<'blocks.template-incentive', TemplateIncentiveProps>
  | Block<'blocks.value-proposition', ValuePropositionProps>
  | Block<'blocks.feature-block', FeatureBlockProps>
  | Block<'blocks.pricing', PricingProps>
  | Block<'blocks.single-pricing', SinglePricingProps>
  | Block<'blocks.info-list', TemplateInfoListProps>;

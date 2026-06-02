import { Image, Video } from '@/strapi';

type BlockComponent =
  // --- block ---
  | 'blocks.achievement'
  | 'blocks.app-module'
  | 'blocks.feature-showcase'
  | 'blocks.bento-grid'
  | 'blocks.banner'
  | 'blocks.call-to-action'
  | 'blocks.hero-section'
  | 'blocks.contact'
  | 'blocks.video-highlight'
  | 'blocks.bento-card'
  | 'blocks.incentive'
  | 'blocks.feature-block'
  | 'blocks.pricing'
  | 'blocks.single-pricing'
  | 'blocks.value-proposition'
  | 'blocks.info-list';

type IStrapiBlock<Comp extends BlockComponent, Props> = Props & { __component: Comp };

export type IExtractStrapiBlock<T extends BlockComponent> = Extract<IStrapiBlocks, { __component: T }>;

export type IStrapiBlocks =
  // --- other ---
  | IStrapiBlock<'blocks.achievement', IBlockAchievement>
  | IStrapiBlock<'blocks.app-module', IBlockAppModule>
  | IStrapiBlock<'blocks.bento-grid', IBlockBentoGrid>
  | IStrapiBlock<'blocks.feature-showcase', IBlockFeatureShowcase>
  | IStrapiBlock<'blocks.banner', IBlockBanner>
  | IStrapiBlock<'blocks.call-to-action', IBlockCTA>
  | IStrapiBlock<'blocks.hero-section', IBlockHeroSection>
  | IStrapiBlock<'blocks.contact', IBlockContact>
  | IStrapiBlock<'blocks.video-highlight', IBlockVideoHighlight>
  | IStrapiBlock<'blocks.bento-card', IBlockBentoCard>
  | IStrapiBlock<'blocks.incentive', IBlockIncentive>
  | IStrapiBlock<'blocks.value-proposition', IBlockValueProposition>
  | IStrapiBlock<'blocks.single-pricing', IBlockSinglePricing>
  | IStrapiBlock<'blocks.feature-block', IBlockFeatureBlock>
  | IStrapiBlock<'blocks.pricing', IBlockPricing>
  | IStrapiBlock<'blocks.info-list', IBlockInfoList>;

// ------------------------------
// BLOCK
// ------------------------------

interface IBlockFeatureShowcase {
  sectionTitle?: ISharedSectionTitle;
  items: Array<{
    id: number;
    title: string;
    content: string;
    image?: Image;
    video?: Video;
  }>;
  isHide?: boolean;
}

interface IBlockBentoGrid {
  showBgCurve: boolean;
  sectionTitle?: ISharedSectionTitle;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: Image;
  }>;
  isHide?: boolean;
}

interface IBlockBanner {
  variant: 'Default' | 'Service';
  bgColor: 'Purple' | 'White';
  tagline?: string;
  title: string;
  content: string;
  image?: Image;
  buttons?: Array<ISharedButton>;
  isHide?: boolean;
}
interface IBlockHeroSection {
  title: string;
  description: string;
  image: Image;
  buttons?: Array<ISharedButton>;
  footerText?: string;
  isHide?: boolean;
}

interface IBlockFeatureBlock {
  sectionTitle?: ISharedSectionTitle;
  items?: Array<{
    id: number;
    title: string;
    description?: string;
    image?: string;
  }>;
  isHide?: boolean;
}

interface IBlockPricing {
  sectionTitle?: ISharedSectionTitle;
  variant?: 'Four Column' | 'Three Column';
  items?: Array<{
    id: number;
    title: string;
    isRecommend?: boolean;
    description?: string;
    price?: number;
    priceType?: 'Monthly' | 'Yearly';
    content: string;
    image?: string;
    button?: ISharedButton;
  }>;
  isHide?: boolean;
}

interface IBlockSinglePricing {
  sectionTitle?: ISharedSectionTitle;
  title: string;
  features: string;
  priceTitle: string;
  price: number;
  priceType?: 'Monthly' | 'Yearly';
  priceNote?: string;
  isHide?: boolean;
}

interface IBlockValueProposition {
  sectionTitle?: ISharedSectionTitle;
  items?: Array<{
    id: number;
    title: string;
    description?: string;
  }>;
  image: Image;
  shouldScaleImage?: boolean;
  isHide?: boolean;
}

interface IBlockContact {
  isHide?: boolean;
}

interface IBlockVideoHighlight {
  title: string;
  video: Video;
  isHide?: boolean;
}

interface IBlockAchievement {
  type?: 'Award' | 'Partner';
  sectionTitle?: ISharedSectionTitle;
  isHide?: boolean;
}

interface IBlockBentoCard {
  sectionTitle?: ISharedSectionTitle;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: Image;
  }>;
  showBgCurve?: boolean;
  isHide?: boolean;
}

interface IBlockInfoList {
  sectionTitle?: ISharedSectionTitle;
  content: string;
  isHide?: boolean;
}

interface IBlockCTA {
  title: string;
  description?: string;
  buttons?: Array<ISharedButton>;
  bgColor: 'Purple' | 'White';
  isHide?: boolean;
}
interface IBlockIncentive {
  sectionTitle: ISharedSectionTitle;
  image?: Image;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image?: Image;
  }>;
  showBgCurve?: boolean;
  isHide?: boolean;
}

interface IBlockAppModule {
  sectionTitle?: ISharedSectionTitle;
  items?: Array<{
    id: number;
    title: string;
    description: string;
    image: Image;
    isHide?: boolean;
  }>;
  showBgCurve?: boolean;
  isHide?: boolean;
}

// ------------------------------
// SHARED
// ------------------------------

interface ISharedSectionTitle {
  title?: string;
  description?: string;
}

interface ISharedButton {
  text: string;
  link: string;
}

interface ISharedButton {
  text: string;
  link: string;
}

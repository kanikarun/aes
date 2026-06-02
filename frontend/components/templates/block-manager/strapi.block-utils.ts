import { getStrapiMedia, getStrapiVideo } from '@/strapi';

import { IExtractBlock } from './block-manager.interface';
import { IExtractStrapiBlock, IStrapiBlocks } from './strapi.interface';

export function getBlocks(blocks: IStrapiBlocks[]) {
  return blocks.map(b => getBlock(b));
}

function getBlock(block: IStrapiBlocks) {
  switch (block.__component) {
    case 'blocks.achievement':
      return blockAchievement(block);
    case 'blocks.app-module':
      return blockAppModule(block);
    case 'blocks.feature-showcase':
      return blockFeatureShowcase(block);
    case 'blocks.bento-grid':
      return blockBentoGrid(block);
    case 'blocks.banner':
      return blockBanner(block);
    case 'blocks.call-to-action':
      return blockCTA(block);
    case 'blocks.hero-section':
      return blockHeroSection(block);
    case 'blocks.feature-block':
      return blockFeatureBlock(block);
    case 'blocks.pricing':
      return blockPricing(block);
    case 'blocks.single-pricing':
      return blockSinglePricing(block);
    case 'blocks.value-proposition':
      return blockValueProposition(block);
    case 'blocks.contact':
      return blockContact(block);
    case 'blocks.video-highlight':
      return blockVideoHighlight(block);
    case 'blocks.bento-card':
      return blockBentoCard(block);
    case 'blocks.incentive':
      return blockIncentive(block);
    case 'blocks.info-list':
      return blockInfoList(block);
    default:
      return null;
  }
}

function blockFeatureShowcase(block: IExtractStrapiBlock<'blocks.feature-showcase'>) {
  const { isHide, sectionTitle, items } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-feature-showcase',
    data: {
      sectionTitle,
      items: (items ?? []).map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        image: getStrapiMedia(item.image),
        video: getStrapiVideo(item.video)
      }))
    }
  } as IExtractBlock<'blocks.template-feature-showcase'>;
}

function blockCTA(block: IExtractStrapiBlock<'blocks.call-to-action'>) {
  const { isHide, title, description, buttons, bgColor } = block;
  if (isHide) return null;

  return {
    __component: 'blocks.call-to-action',
    data: {
      title,
      description,
      buttons,
      bgColor
    }
  } as IExtractBlock<'blocks.call-to-action'>;
}

function blockBentoGrid(block: IExtractStrapiBlock<'blocks.bento-grid'>) {
  const { isHide, sectionTitle, showBgCurve, items } = block;

  if (isHide) return null;
  return {
    __component: 'blocks.template-bento-grid',
    data: {
      sectionTitle,
      showBgCurve,
      items: (items ?? []).map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: getStrapiMedia(item.image)
      }))
    }
  } as IExtractBlock<'blocks.template-bento-grid'>;
}
function blockBanner(block: IExtractStrapiBlock<'blocks.banner'>) {
  const { variant, bgColor, tagline, title, content, image, buttons, isHide } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.banner',
    data: {
      variant,
      bgColor,
      tagline,
      title,
      content,
      image: getStrapiMedia(image),
      buttons
    }
  } as IExtractBlock<'blocks.banner'>;
}
function blockHeroSection(block: IExtractStrapiBlock<'blocks.hero-section'>) {
  const { isHide, title, description, image, buttons, footerText } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.hero',
    data: {
      title,
      description,
      image: getStrapiMedia(image),
      buttons,
      footerText
    }
  } as IExtractBlock<'blocks.hero'>;
}

function blockFeatureBlock(block: IExtractStrapiBlock<'blocks.feature-block'>) {
  const { sectionTitle, items, isHide } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.feature-block',
    data: {
      sectionTitle,
      items: (items ?? []).map(({ image, ...item }) => ({
        ...item,
        image: getStrapiMedia(image)
      }))
    }
  } as IExtractBlock<'blocks.feature-block'>;
}

function blockPricing(block: IExtractStrapiBlock<'blocks.pricing'>) {
  const { isHide, sectionTitle, variant, items } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.pricing',
    data: {
      sectionTitle,
      variant,
      items: (items ?? []).map(({ image, ...item }) => ({
        ...item,
        image: getStrapiMedia(image)
      }))
    }
  } as IExtractBlock<'blocks.pricing'>;
}

function blockSinglePricing(block: IExtractStrapiBlock<'blocks.single-pricing'>) {
  const { isHide, sectionTitle, title, features, priceTitle, price, priceType, priceNote } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.single-pricing',
    data: {
      sectionTitle,
      title,
      features: features?.split('\n').filter(Boolean) ?? [],
      priceTitle,
      price,
      priceType,
      priceNote
    }
  } as IExtractBlock<'blocks.single-pricing'>;
}

function blockValueProposition(block: IExtractStrapiBlock<'blocks.value-proposition'>) {
  const { isHide, sectionTitle, items, image, shouldScaleImage } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.value-proposition',
    data: {
      sectionTitle,
      shouldScaleImage,
      image: getStrapiMedia(image),
      items
    }
  } as IExtractBlock<'blocks.value-proposition'>;
}

function blockContact(block: IExtractStrapiBlock<'blocks.contact'>) {
  const { isHide } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.contact',
    data: {}
  } as IExtractBlock<'blocks.contact'>;
}

function blockVideoHighlight(block: IExtractStrapiBlock<'blocks.video-highlight'>) {
  const { isHide, title, video } = block;
  if (isHide) return null;

  return {
    __component: 'blocks.video-highlight',
    data: {
      title,
      video: getStrapiVideo(video)
    }
  } as IExtractBlock<'blocks.video-highlight'>;
}

function blockAchievement(block: IExtractStrapiBlock<'blocks.achievement'>) {
  const { isHide, type, sectionTitle } = block;
  if (isHide) return null;

  return {
    __component: 'blocks.template.achievement',
    data: {
      type,
      sectionTitle
    }
  } as IExtractBlock<'blocks.template.achievement'>;
}

function blockBentoCard(block: IExtractStrapiBlock<'blocks.bento-card'>) {
  const { isHide, sectionTitle, items, showBgCurve } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-bento-card',
    data: {
      sectionTitle,
      showBgCurve,
      items: (items ?? []).map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: getStrapiMedia(item.image)
      }))
    }
  } as IExtractBlock<'blocks.template-bento-card'>;
}

function blockIncentive(block: IExtractStrapiBlock<'blocks.incentive'>) {
  const { isHide, sectionTitle, image, items, showBgCurve } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template-incentive',
    data: {
      sectionTitle,
      showBgCurve,
      image: getStrapiMedia(image),
      items: (items ?? []).map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: getStrapiMedia(item.image)
      }))
    }
  } as IExtractBlock<'blocks.template-incentive'>;
}

function blockInfoList(block: IExtractStrapiBlock<'blocks.info-list'>) {
  const { isHide, sectionTitle, content } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.info-list',
    data: {
      sectionTitle,
      content: content.split('\n').filter(Boolean)
    }
  } as IExtractBlock<'blocks.info-list'>;
}

function blockAppModule(block: IExtractStrapiBlock<'blocks.app-module'>) {
  const { sectionTitle, items, showBgCurve, isHide } = block;

  if (isHide) return null;

  return {
    __component: 'blocks.template.app-module',
    data: {
      sectionTitle,
      items: (items ?? []).map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: getStrapiMedia(item.image)
      })),
      showBgCurve
    }
  } as IExtractBlock<'blocks.template.app-module'>;
}

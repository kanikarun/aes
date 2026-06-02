import { Props as SectionTitleProps } from '@/components/molecules/section-title';

interface PricingItem {
  id: number;
  title: string;
  isRecommend?: boolean;
  description?: string;
  price?: number;
  priceType?: 'Monthly' | 'Yearly';
  content: string;
  image?: string;
  button?: {
    text: string;
    link: string;
  };
}

export interface PricingProps {
  sectionTitle?: SectionTitleProps;
  variant?: 'Four Column' | 'Three Column';
  items?: PricingItem[];
}

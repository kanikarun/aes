import { IStrapiBlocks } from '@/components/templates/block-manager/strapi.interface';
import { IArrayResponse, IDataAttribute, Image } from '@/strapi';

export interface IPage {
  metaTitle: string;
  metaDescription?: string;
  metaImage?: Image;
  slug: string;
  blocks: IStrapiBlocks[];
  locale: string;
  localizations: IPage[];
  documentId: string;
}

export type PagesResponse = IArrayResponse<IPage>;
export type PageResponse = IDataAttribute<IPage>;

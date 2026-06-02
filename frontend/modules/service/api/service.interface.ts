import { IStrapiBlocks } from '@/components/templates/block-manager/strapi.interface';
import { IArrayResponse, IDataAttribute, Image } from '@/strapi';

export interface IService {
  metaTitle: string;
  metaDescription?: string;
  metaImage?: Image;
  slug: string;
  blocks: IStrapiBlocks[];
  locale: string;
  localizations: IService[];
  documentId: string;
}

export type ServicesResponse = IArrayResponse<IService>;
export type ServiceResponse = IDataAttribute<IService>;

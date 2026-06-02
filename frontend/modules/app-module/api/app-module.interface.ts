import { IArrayResponse, IDataAttribute, Image } from '@/strapi';

export interface IAppModule {
  id: number;
  title: string;
  description: string;
  image: Image;
  isHide?: boolean;
  locale: string;
  localizations: IAppModule[];
  documentId: string;
}

export type AppModuleResponse = IDataAttribute<IAppModule>;
export type AppModulesResponse = IArrayResponse<IAppModule>;

export interface GetAppModulesResponse {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    isHide?: boolean;
  }[];
}

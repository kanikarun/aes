export interface IConfig {
  documentId: string;
  facebookLink: string;
  instagramLink: string;
  tiktokLink: string;
  telegramLink: string;
  address: string;
  email: string;
  phone: string;
  logo: Image | null;
  og: Image | null;
  locale: string;
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Image {
  id: number;
  name: string;
  url: string;
  blurhash?: string;
  ext?: string;
  formats?: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

export interface Video {
  id: number;
  name: string;
  url: string;
}

export type ConfigResponse = IConfig;

export type Images = { data: Image[]; meta: Meta };
export type Videos = { data: Video[]; meta: Meta };

export type ImageResponse = { data: Image };
export type VideoResponse = { data: Video };

// interface IPage {
//   id: number;
//   meta_title: string;
//   meta_description?: string;
//   meta_image?: Image;
//   slug: string;
//   keywords?: string;
//   block: IStrapiBlocks[];
//   localizations: IArrayResponse<IPage>;
// }

// export type PagesResponse = IArrayResponse<IPage>;
// export type PageResponse  = { data: IPage };

export type IArrayResponse<T> = { data: T[]; meta: Meta };
export type IDataAttribute<T> = { data: T; meta?: Meta };

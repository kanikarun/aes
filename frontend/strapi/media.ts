import { getStrapiURL } from './api';
import { Image, Video } from './interface';

export const STRAPI_IMAGE_FIELDS = { fields: ['url', 'name', 'formats', 'blurhash'] };

export function getStrapiMedia(media?: Image | string, size?: 'S' | 'M' | 'T' | 'L') {
  if (typeof media === 'string') return media;
  if (!media) return '';

  const { url = '', formats } = media ?? {};

  const smallImgUrl = formats?.small?.url ?? '';
  const mediumImgUrl = formats?.medium?.url ?? '';
  const thumbnailUrl = formats?.thumbnail?.url ?? '';
  const largeUrl = formats?.large?.url ?? '';

  let imgUrl: string;
  if (size === 'M') imgUrl = mediumImgUrl;
  else if (size === 'S') imgUrl = smallImgUrl;
  else if (size === 'T') imgUrl = thumbnailUrl;
  else if (size === 'L') imgUrl = largeUrl;
  else imgUrl = url;

  imgUrl = imgUrl || url;

  return imgUrl;
}

export function getStrapiVideo(video?: Video) {
  const url = video?.url;
  return url ? getStrapiURL(url) : '';
}

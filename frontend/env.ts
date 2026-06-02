import { createEnv } from '@t3-oss/env-nextjs';
import * as v from 'valibot';

const IsRequiredString = v.pipe(v.string(), v.minLength(1));
const IsRequiredUrl = v.pipe(v.string(), v.url());

export const env = createEnv({
  server: {
    NEXT_RECAPTCHA_SECRET_KEY: IsRequiredString,

    NEXT_TELEGRAM_TOKEN: IsRequiredString,
    NEXT_TELEGRAM_CHAT_ID: IsRequiredString,

    NEXT_STRAPI_URL: IsRequiredString,
    NEXT_STRAPI_API_TOKEN: IsRequiredString
  },
  client: {
    NEXT_PUBLIC_RECAPTCHA_KEY: IsRequiredString,
    NEXT_PUBLIC_SITE_URL: IsRequiredUrl,
  },
  runtimeEnv: {
    NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
    NEXT_RECAPTCHA_SECRET_KEY: process.env.NEXT_RECAPTCHA_SECRET_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_TELEGRAM_CHAT_ID: process.env.NEXT_TELEGRAM_CHAT_ID,
    NEXT_TELEGRAM_TOKEN: process.env.NEXT_TELEGRAM_TOKEN,

    NEXT_STRAPI_URL: process.env.NEXT_STRAPI_URL,
    NEXT_STRAPI_API_TOKEN: process.env.NEXT_STRAPI_API_TOKEN
  }
});

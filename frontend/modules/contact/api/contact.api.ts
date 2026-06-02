'use server';

import { stringify } from 'qs';

import { env } from '@/env';
import { recaptchaVerify } from '@/utils/recaptcha';

import * as I from './contact.interface';

const BOT_TOKEN = env.NEXT_TELEGRAM_TOKEN;
const CHAT_ID = env.NEXT_TELEGRAM_CHAT_ID;

const getConfig = (body: I.SendMessageRequest) => {
  const { email, fullname, message, phone } = body;
  return {
    baseURL: 'https://api.telegram.org',
    params: {
      text: `Fullname: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      chat_id: CHAT_ID
    }
  };
};

export async function sendMessage(req: I.SendMessageRequest) {
  try {
    const { recaptchaToken = '', ...rest } = req;

    const verify = await recaptchaVerify(recaptchaToken);

    if (!verify.success) {
      return { message: 'Fail reCAPTCHA verification', error: true };
    }

    const url = `bot${BOT_TOKEN}/sendMessage`;
    const { baseURL, params } = getConfig(rest);
    const queryString = stringify(params, { addQueryPrefix: true });

    await fetch(`${baseURL}/${url}${queryString}`, { method: 'POST' });

    return { message: 'Message sent successfully', error: false };
  } catch (e) {
    return { message: 'Message sent fail. ', error: true };
  }
}

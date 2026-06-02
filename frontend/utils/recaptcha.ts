'use server';

import { env } from '@/env';

/**
 *
 * @link https://developers.google.com/recaptcha/docs/verify
 * @link https://stackoverflow.com/a/76150064
 */
export async function recaptchaVerify(token?: string | null) {
  const secret = env.NEXT_RECAPTCHA_SECRET_KEY;
  try {
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
      method: 'POST'
    });

    const data = (await res.json()) as { success: boolean };

    if (!data.success) {
      return { message: 'Verification Fail', success: false };
    }

    return { message: 'Verification Success', success: true };
  } catch (error) {
    return { message: 'Something went wrong!', success: false };
  }
}

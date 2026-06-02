import * as v from 'valibot';

const REGEX_PHONE = /^([+]?(\d{9,15}))$/;

// https://github.com/open-circle/valibot/issues/892#issuecomment-2432882478
const isNotEmptyString = () =>
  v.pipe(
    v.literal(''),
    v.transform(() => undefined)
  );

export const isOptionalEmail = (m?: string) =>
  v.optional(v.union([isNotEmptyString(), v.pipe(v.string(), v.nonEmpty(), v.email(m))]));

export const isOptionalString = () => v.optional(v.string());

export const isRequiredString = (m?: string) => v.pipe(v.string(m), v.minLength(1, m));

export const isRequiredPhone = (m: string, n: string) => v.pipe(v.string(m), v.nonEmpty(m), v.regex(REGEX_PHONE, n));

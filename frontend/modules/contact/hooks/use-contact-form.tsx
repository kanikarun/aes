import { valibotResolver } from '@hookform/resolvers/valibot';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as v from 'valibot';

import { isOptionalEmail, isRequiredPhone, isRequiredString } from '@/utils/validation';

interface ErrorMessage {
  fullname_empty: string;
  email_invalid: string;
  phone_empty: string;
  phone_invalid: string;
  message_empty: string;
}

const schema = (e: ErrorMessage) =>
  v.object({
    fullname: isRequiredString(e.fullname_empty),
    email: isOptionalEmail(e.email_invalid),
    phone: isRequiredPhone(e.phone_empty, e.phone_invalid),
    message: isRequiredString(e.message_empty)
  });

export type ContactFormInput = v.InferOutput<ReturnType<typeof schema>>;

export const useContactForm = () => {
  const t = useTranslations('page.contact.form.validation');

  return useForm<ContactFormInput>({
    resolver: valibotResolver(
      schema({
        fullname_empty: t('fullname-empty'),
        email_invalid: t('email-invalid'),
        phone_empty: t('phone-empty'),
        phone_invalid: t('phone-invalid'),
        message_empty: t('message_empty')
      })
    ),
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }
  });
};

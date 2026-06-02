'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { ControlFieldInput } from '@/components/molecules/form/field-input';
import { ControlFieldTextarea } from '@/components/molecules/form/field-textarea';
import { Button } from '@/components/ui/button';
import { FieldSet } from '@/components/ui/field';
import { env } from '@/env';
import { Alert } from '@/utils/alert';

import { sendMessage } from '../api/contact.api';
import { ContactFormInput, useContactForm } from '../hooks/use-contact-form';

export const ContactForm: React.FC = () => {
  const t = useTranslations('page.contact.form');
  const form = useContactForm();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormInput) => {
    setIsLoading(true);

    try {
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      recaptchaRef?.current?.reset();
      const { error, message } = await sendMessage({ ...data, recaptchaToken });

      if (error) {
        Alert.error('Error', message);
      } else {
        Alert.success('Success', message);
      }
    } catch (error) {
      Alert.error('Error', (error as any)?.message || 'Something went wrong!');
    } finally {
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <ControlFieldInput
          required
          control={form.control}
          name="fullname"
          label={t('field.fullname.label')}
          placeholder={t('field.fullname.placeholder')}
          disabled={isLoading}
        />
        <ControlFieldInput
          control={form.control}
          name="email"
          label={t('field.email.label')}
          placeholder={t('field.email.placeholder')}
          disabled={isLoading}
        />
        <ControlFieldInput
          required
          control={form.control}
          name="phone"
          label={t('field.phone.label')}
          placeholder={t('field.phone.placeholder')}
          disabled={isLoading}
        />
        <ControlFieldTextarea
          required
          control={form.control}
          name="message"
          label={t('field.message.label')}
          placeholder={t('field.message.placeholder')}
          disabled={isLoading}
        />
        <ReCAPTCHA ref={recaptchaRef} sitekey={env.NEXT_PUBLIC_RECAPTCHA_KEY || ''} size="invisible" />
        <Button type="submit" disabled={isLoading}>
          {t('btn-submit')}
        </Button>
      </FieldSet>
    </form>
  );
};

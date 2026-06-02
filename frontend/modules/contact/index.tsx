import { getTranslations } from 'next-intl/server';

import { ContactAddress } from '@/modules/contact/components/contact-address';
import { ContactForm } from '@/modules/contact/components/contact-form';
import { ContactInfo } from '@/modules/contact/components/contact-info';

export async function Contact() {
  const t = await getTranslations('page.contact');

  return (
    <div>
      <div className="py-16">
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactAddress title={t('address-title')} />
            <ContactInfo title={t('contact-title')} />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

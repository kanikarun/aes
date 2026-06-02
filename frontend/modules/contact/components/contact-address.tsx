import { getTranslations } from 'next-intl/server';

export const ContactAddress: React.FC<{ title: string }> = async ({ title }) => {
  const t = await getTranslations('page.contact');

  return (
    <div className="space-y-4">
      <h2 className="text-primary font-heading max-w-sm text-xl font-black tracking-tight text-pretty sm:text-2xl">
        {title}
      </h2>
      <address>{t('address')}</address>
      <div className="relative sm:aspect-3/1">
        <iframe
          className="size-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.984084945976!2d104.93758927512542!3d11.552998444389802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1774333692209!5m2!1sen!2skh"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

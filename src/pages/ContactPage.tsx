import { useEffect, useRef, useState } from 'react';
import { ContactFaq } from '../components/contact/ContactFaq';
import { ContactFinalCta } from '../components/contact/ContactFinalCta';
import { ContactFormSection } from '../components/contact/ContactFormSection';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactProcess } from '../components/contact/ContactProcess';
import { ContactServices } from '../components/contact/ContactServices';
import { ContactWhatsapp } from '../components/contact/ContactWhatsapp';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';
import { track } from '../lib/analytics';
import { projectTypeLabel, type ProjectTypeValue } from '../lib/leadOptions';

const ContactPage = () => {
  const [service, setService] = useState<ProjectTypeValue | ''>('');
  const viewTracked = useRef(false);

  useEffect(() => {
    if (viewTracked.current) return;
    viewTracked.current = true;
    track('contact_view');
  }, []);

  // Marca a página para o CSS controlar o botão flutuante de WhatsApp (ver index.css).
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-page', 'contact');
    return () => root.removeAttribute('data-page');
  }, []);

  // Quando já há um serviço escolhido, os links de WhatsApp mencionam esse interesse.
  const interest = service ? projectTypeLabel(service) : undefined;

  return (
    <PublicLayout>
      <PageSeo page="contato" />
      <main>
        <ContactHero interest={interest} />
        <ContactServices selected={service} onSelect={setService} />
        <ContactFormSection service={service} onServiceChange={setService} />
        <ContactWhatsapp interest={interest} service={service || undefined} />
        <ContactProcess />
        <ContactFaq />
        <ContactFinalCta interest={interest} service={service || undefined} />
      </main>
    </PublicLayout>
  );
};

export default ContactPage;

import { ContactFaq } from '../components/contact/ContactFaq';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactMain } from '../components/contact/ContactMain';
import { CtaBand } from '../components/home/CtaBand';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';

const ContactPage = () => (
  <PublicLayout>
    <PageSeo page="contato" />
    <main>
      <ContactHero />
      <ContactMain />
      <ContactFaq />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default ContactPage;

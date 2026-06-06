import { ContactFaq } from '../components/contact/ContactFaq';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactMain } from '../components/contact/ContactMain';
import { CtaBand } from '../components/home/CtaBand';
import { PublicLayout } from '../components/layout/PublicLayout';

const ContactPage = () => (
  <PublicLayout>
    <main>
      <ContactHero />
      <ContactMain />
      <ContactFaq />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default ContactPage;

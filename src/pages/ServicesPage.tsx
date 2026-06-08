import { AboutStats } from '../components/about/AboutStats';
import { CtaBand } from '../components/home/CtaBand';
import { Process } from '../components/home/Process';
import { PublicLayout } from '../components/layout/PublicLayout';
import { ServicesBenefits } from '../components/services/ServicesBenefits';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesTech } from '../components/services/ServicesTech';
import { PageSeo } from '../components/seo/PageSeo';

const ServicesPage = () => (
  <PublicLayout>
    <PageSeo page="servicos" />
    <main>
      <ServicesHero />
      <ServicesGrid id="catalogo" showFeatures />
      <ServicesBenefits />
      <AboutStats />
      <ServicesTech />
      <Process />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default ServicesPage;

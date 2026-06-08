import { CtaBand } from '../components/home/CtaBand';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { PortfolioHero } from '../components/portfolio/PortfolioHero';
import { PortfolioStats } from '../components/portfolio/PortfolioStats';
import { PageSeo } from '../components/seo/PageSeo';

const PortfolioPage = () => (
  <PublicLayout>
    <PageSeo page="portfolio" />
    <main>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioStats />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default PortfolioPage;

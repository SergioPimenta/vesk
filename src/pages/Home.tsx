import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { CtaBand } from '../components/home/CtaBand';
import { Hero } from '../components/home/Hero';
import { Portfolio } from '../components/home/Portfolio';
import { Process } from '../components/home/Process';
import { Products } from '../components/home/Products';
import { Services } from '../components/home/Services';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';

const Home = () => (
  <PublicLayout>
    <PageSeo page="home" />
    <main>
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <Process />
      <About />
      <CtaBand />
      <Contact />
    </main>
  </PublicLayout>
);

export default Home;

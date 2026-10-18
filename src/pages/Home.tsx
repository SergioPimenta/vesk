import { useState } from 'react';
import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { CtaBand } from '../components/home/CtaBand';
import { Hero } from '../components/home/Hero';
import { Plans } from '../components/home/Plans';
import { Portfolio } from '../components/home/Portfolio';
import { Process } from '../components/home/Process';
import { Products } from '../components/home/Products';
import { Solutions } from '../components/home/Solutions';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';
import type { ProjectTypeValue } from '../lib/leadOptions';

const Home = () => {
  // Cards de solução e planos pré-preenchem o formulário de contato no fim da página.
  const [service, setService] = useState<ProjectTypeValue | ''>('');
  const [plan, setPlan] = useState<string | undefined>();

  return (
    <PublicLayout>
      <PageSeo page="home" />
      <main>
        <Hero />
        <Solutions
          onSelect={(value) => {
            setService(value);
            setPlan(undefined);
          }}
        />
        <Portfolio />
        <Products />
        <Process />
        <Plans
          onChoose={(value, name) => {
            setService(value);
            setPlan(name);
          }}
        />
        <About />
        <Contact
          service={service}
          onServiceChange={(value) => {
            setService(value);
            setPlan(undefined);
          }}
          plan={plan}
        />
        <CtaBand />
      </main>
    </PublicLayout>
  );
};

export default Home;

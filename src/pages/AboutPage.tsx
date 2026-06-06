import { AboutHero } from '../components/about/AboutHero';
import { AboutMission } from '../components/about/AboutMission';
import { AboutStats } from '../components/about/AboutStats';
import { AboutStory } from '../components/about/AboutStory';
import { AboutValues } from '../components/about/AboutValues';
import { CtaBand } from '../components/home/CtaBand';
import { Process } from '../components/home/Process';
import { PublicLayout } from '../components/layout/PublicLayout';

const AboutPage = () => (
  <PublicLayout>
    <main>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutStory />
      <AboutValues />
      <Process />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default AboutPage;

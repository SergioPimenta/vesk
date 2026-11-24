import { BlogHero } from '../components/blog/BlogHero';
import { BlogList } from '../components/blog/BlogList';
import { CtaBand } from '../components/home/CtaBand';
import { PublicLayout } from '../components/layout/PublicLayout';
import { PageSeo } from '../components/seo/PageSeo';

const BlogPage = () => (
  <PublicLayout>
    <PageSeo page="blog" />
    <main>
      <BlogHero />
      <BlogList />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default BlogPage;

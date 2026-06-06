import { CtaBand } from '../components/home/CtaBand';
import { PublicLayout } from '../components/layout/PublicLayout';
import { ProductsGrid } from '../components/products/ProductsGrid';
import { ProductsHero } from '../components/products/ProductsHero';
import { ProductsHighlights } from '../components/products/ProductsHighlights';

const ProductsPage = () => (
  <PublicLayout>
    <main>
      <ProductsHero />
      <ProductsGrid />
      <ProductsHighlights />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default ProductsPage;

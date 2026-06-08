import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Dashboard from './admin/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Admin Routes */}
      <Route path="/admin" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        {/* Adicione mais rotas filhas admin aqui */}
      </Route>

      {/* Catch-all Not Found */}
      <Route path="*" element={<div className="font-body flex h-screen items-center justify-center bg-light text-2xl font-bold text-vesk-black">404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

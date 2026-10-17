import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './index.css';
import { initAnalytics } from './lib/analytics.ts';
import { captureAttribution } from './lib/attribution.ts';
import { flushLeadQueue } from './lib/leads.ts';

initAnalytics();
captureAttribution();

// Solicitações que não puderam ser entregues (CRM fora do ar, sem rede) são reenviadas automaticamente.
const retryPendingLeads = () => void flushLeadQueue();
window.addEventListener('online', retryPendingLeads);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') retryPendingLeads();
});
window.setTimeout(retryPendingLeads, 3000);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

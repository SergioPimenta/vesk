import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { inputClass } from '../components/contact/contactData';
import { ArrowIcon } from '../components/home/icons';
import { NavLogo, pageHeroTitleClass } from '../components/home/ui';
import { useAuth } from '../contexts/AuthContext';
import { useVeskBodyTheme } from '../hooks/useVeskBodyTheme';
import { cn } from '../lib/cn';
import { api } from '../services/api';
import { PageSeo } from '../components/seo/PageSeo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  useVeskBodyTheme();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.post<{
        token: string;
        user: { id: number; email: string; name: string; role: string };
      }>('/auth/login', {
        email,
        password,
      });

      login(response.token, response.user);
      navigate('/admin');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao efetuar login';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-body relative flex min-h-screen overflow-hidden bg-vesk-black text-vesk-surface antialiased">
      <PageSeo page="login" />
      <div
        className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.1)_0%,transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,92,56,0.05)_0%,transparent_70%)]"
        aria-hidden
      />

      <Link
        to="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-[13px] text-vesk-mid no-underline transition-colors hover:text-vesk-surface page-px lg:left-8"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar ao site
      </Link>

      <div className="relative z-10 grid w-full flex-1 lg:grid-cols-2">
        <div className="hidden flex-col justify-center px-12 py-24 lg:flex lg:px-16 xl:px-24">
          <NavLogo className="mb-12" />
          <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] text-vesk-orange uppercase before:block before:h-px before:w-8 before:bg-vesk-orange before:content-['']">
            Painel administrativo
          </div>
          <h1 className={cn('mb-6 max-w-md', pageHeroTitleClass)}>
            Gerencie sua operação com <span className="text-vesk-orange">segurança</span>
          </h1>
          <p className="mb-10 max-w-md text-base leading-[1.75] font-light text-vesk-mid">
            Acesso restrito à equipe VESK. Entre com suas credenciais para acompanhar projetos, clientes e
            configurações.
          </p>
          <ul className="flex list-none flex-col gap-4">
            {['Ambiente seguro e criptografado', 'Controle de acesso por perfil', 'Monitoramento em tempo real'].map(
              (item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-vesk-muted">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vesk-orange-dim text-vesk-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="flex items-center justify-center px-6 py-24 lg:px-12 xl:px-20">
          <div className="w-full max-w-[420px]">
            <div className="mb-8 text-center lg:hidden">
              <NavLogo className="mb-6 justify-center" />
            </div>

            <div className="rounded-2xl border border-vesk-border bg-vesk-dark-2 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.4)] md:p-10">
              <div className="mb-8 text-center lg:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-vesk-orange-dim text-vesk-orange lg:mx-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight">Acesso restrito</h2>
                <p className="mt-2 text-sm text-vesk-muted">Faça login para acessar o painel administrativo</p>
              </div>

              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                {error && (
                  <div
                    role="alert"
                    className="rounded-md border border-red-900/40 bg-red-950/30 px-4 py-3 text-center text-sm text-red-300"
                  >
                    {error}
                  </div>
                )}

                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-wider text-vesk-muted uppercase">E-mail</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="admin@vesk.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-wider text-vesk-muted uppercase">Senha</span>
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    className={inputClass}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    'mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded bg-vesk-orange px-8 py-3.5 text-sm font-medium text-white transition-all duration-200',
                    'hover:-translate-y-0.5 hover:bg-vesk-orange-light disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0',
                  )}
                >
                  {isLoading ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Entrar no painel
                      <ArrowIcon />
                    </>
                  )}
                </button>
              </form>
            </div>

            <p className="mt-6 text-center text-xs text-vesk-muted">
              Problemas de acesso?{' '}
              <a href="mailto:contato@vesk.com.br" className="text-vesk-orange no-underline hover:text-vesk-orange-light">
                contato@vesk.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

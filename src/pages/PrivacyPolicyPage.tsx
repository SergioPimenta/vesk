import { PublicLayout } from '../components/layout/PublicLayout';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { PageSeo } from '../components/seo/PageSeo';

const PrivacyPolicyPage = () => (
  <PublicLayout>
    <PageSeo page="privacidade" />
    <main>
      <LegalPageLayout
        label="Legal"
        title="Políticas de Privacidade"
        updatedAt="7 de junho de 2026"
        intro={
          <>
            A VESK Software House, com sede em Curitiba, PR, está comprometida com a proteção dos dados
            pessoais de clientes, parceiros e visitantes do site{' '}
            <a href="https://www.vesk.com.br" className="text-vesk-orange">
              vesk.com.br
            </a>
            . Este documento descreve como coletamos, usamos, armazenamos e protegemos suas informações, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </>
        }
        sections={[
          {
            title: '1. Quem somos',
            content: (
              <p>
                A VESK é uma Software House especializada em desenvolvimento de sistemas, CRM, e-commerce e
                automações. Para questões relacionadas à privacidade e proteção de dados, entre em contato pelo
                e-mail{' '}
                <a href="mailto:contato@vesk.com.br">contato@vesk.com.br</a>.
              </p>
            ),
          },
          {
            title: '2. Dados que coletamos',
            content: (
              <ul>
                <li>
                  <strong className="text-vesk-surface">Dados de contato:</strong> nome, e-mail, telefone,
                  empresa e mensagem enviados via formulário ou WhatsApp.
                </li>
                <li>
                  <strong className="text-vesk-surface">Dados de navegação:</strong> endereço IP, tipo de
                  navegador, páginas visitadas e tempo de permanência, por meio de cookies e ferramentas de
                  analytics.
                </li>
                <li>
                  <strong className="text-vesk-surface">Dados contratuais:</strong> informações necessárias
                  para execução de projetos e prestação de serviços, quando você se torna cliente VESK.
                </li>
              </ul>
            ),
          },
          {
            title: '3. Finalidade do tratamento',
            content: (
              <ul>
                <li>Responder solicitações de contato, orçamentos e suporte;</li>
                <li>Executar contratos de desenvolvimento de software e serviços relacionados;</li>
                <li>Melhorar a experiência de navegação e o desempenho do site;</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Enviar comunicações relevantes sobre nossos serviços, quando autorizado.</li>
              </ul>
            ),
          },
          {
            title: '4. Base legal (LGPD)',
            content: (
              <p>
                Tratamos dados pessoais com base no consentimento, execução de contrato, legítimo interesse
                (como melhoria de serviços) e cumprimento de obrigação legal, conforme aplicável a cada
                situação.
              </p>
            ),
          },
          {
            title: '5. Compartilhamento de dados',
            content: (
              <p>
                Não vendemos dados pessoais. Podemos compartilhar informações com prestadores de serviço
                essenciais à operação (hospedagem, e-mail, CRM e ferramentas de analytics), sempre com
                contratos que garantam a proteção dos dados. Também podemos compartilhar dados quando exigido
                por lei ou ordem judicial.
              </p>
            ),
          },
          {
            title: '6. Retenção e segurança',
            content: (
              <p>
                Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas ou exigências
                legais. Adotamos medidas técnicas e organizacionais para proteger as informações contra acesso
                não autorizado, perda ou alteração indevida.
              </p>
            ),
          },
          {
            title: '7. Seus direitos',
            content: (
              <p>
                Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
                anonimização, portabilidade, eliminação, informação sobre compartilhamento e revogação do
                consentimento. Envie sua solicitação para{' '}
                <a href="mailto:contato@vesk.com.br">contato@vesk.com.br</a>.
              </p>
            ),
          },
          {
            title: '8. Cookies',
            content: (
              <p>
                Utilizamos cookies para funcionamento do site, análise de tráfego e integração com ferramentas
                de atendimento (como widget de WhatsApp). Você pode gerenciar cookies nas configurações do seu
                navegador; a desativação pode afetar algumas funcionalidades.
              </p>
            ),
          },
          {
            title: '9. Alterações',
            content: (
              <p>
                Esta política pode ser atualizada periodicamente. A data da última revisão será indicada no
                topo desta página. Recomendamos consulta regular.
              </p>
            ),
          },
        ]}
      />
    </main>
  </PublicLayout>
);

export default PrivacyPolicyPage;

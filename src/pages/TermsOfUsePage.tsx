import { Link } from 'react-router-dom';
import { PublicLayout } from '../components/layout/PublicLayout';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';
import { PageSeo } from '../components/seo/PageSeo';

const TermsOfUsePage = () => (
  <PublicLayout>
    <PageSeo page="termos" />
    <main>
      <LegalPageLayout
        label="Legal"
        title="Termos de Uso"
        updatedAt="7 de junho de 2026"
        intro={
          <>
            Estes Termos de Uso regulam o acesso e a utilização do site{' '}
            <a href="https://www.vesk.com.br" className="text-vesk-orange">
              vesk.com.br
            </a>{' '}
            e dos serviços digitais oferecidos pela VESK Software House, sediada em Curitiba, PR. Ao acessar
            este site, você concorda com as condições abaixo.
          </>
        }
        sections={[
          {
            title: '1. Aceitação dos termos',
            content: (
              <p>
                O uso do site implica aceitação integral destes Termos de Uso e da nossa{' '}
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>. Se não concordar,
                interrompa o uso imediatamente.
              </p>
            ),
          },
          {
            title: '2. Serviços oferecidos',
            content: (
              <p>
                A VESK oferece serviços de desenvolvimento de software, consultoria tecnológica, produtos SaaS
                e suporte técnico. As informações publicadas no site têm caráter informativo e comercial; a
                contratação efetiva depende de proposta comercial e contrato específico.
              </p>
            ),
          },
          {
            title: '3. Uso permitido',
            content: (
              <ul>
                <li>Navegar e consultar informações sobre serviços e produtos VESK;</li>
                <li>Entrar em contato por formulário, e-mail ou WhatsApp para solicitações comerciais;</li>
                <li>Compartilhar links do site em redes sociais e outros canais, desde que sem alteração do conteúdo.</li>
              </ul>
            ),
          },
          {
            title: '4. Uso proibido',
            content: (
              <ul>
                <li>Utilizar o site para fins ilegais, fraudulentos ou que violem direitos de terceiros;</li>
                <li>Tentar acessar áreas restritas, sistemas ou dados sem autorização;</li>
                <li>Reproduzir, copiar ou distribuir conteúdo do site sem autorização prévia por escrito;</li>
                <li>Enviar spam, malware ou conteúdo ofensivo por meio dos canais de contato;</li>
                <li>Realizar engenharia reversa ou interferir no funcionamento do site.</li>
              </ul>
            ),
          },
          {
            title: '5. Propriedade intelectual',
            content: (
              <p>
                Todo o conteúdo do site — textos, layout, logotipos, marcas, imagens e código — é de
                propriedade da VESK ou de licenciadores, protegido pela legislação brasileira de direitos
                autorais e propriedade industrial. O nome VESK e produtos associados (VESK CRM, VESK Gestão,
                VESK Escola) são marcas da empresa.
              </p>
            ),
          },
          {
            title: '6. Limitação de responsabilidade',
            content: (
              <p>
                Empregamos esforços para manter o site disponível e as informações atualizadas, mas não
                garantimos ausência total de erros ou interrupções. A VESK não se responsabiliza por danos
                indiretos decorrentes do uso ou impossibilidade de uso do site. Serviços contratados são
                regidos pelo contrato específico firmado entre as partes.
              </p>
            ),
          },
          {
            title: '7. Links externos',
            content: (
              <p>
                O site pode conter links para sites de terceiros. A VESK não controla nem se responsabiliza
                pelo conteúdo, políticas ou práticas de sites externos.
              </p>
            ),
          },
          {
            title: '8. Privacidade e dados pessoais',
            content: (
              <p>
                O tratamento de dados pessoais é regido pela nossa{' '}
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>, em conformidade com a
                LGPD.
              </p>
            ),
          },
          {
            title: '9. Alterações dos termos',
            content: (
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações
                entram em vigor na data de publicação nesta página. O uso continuado do site após alterações
                constitui aceitação dos novos termos.
              </p>
            ),
          },
          {
            title: '10. Legislação e foro',
            content: (
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
                comarca de Curitiba, PR, para dirimir quaisquer controvérsias, com renúncia a qualquer outro,
                por mais privilegiado que seja.
              </p>
            ),
          },
        ]}
      />
    </main>
  </PublicLayout>
);

export default TermsOfUsePage;

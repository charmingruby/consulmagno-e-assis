import * as Container from '@/components/ui/container'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { CustomerStory } from './components/customer-story'
import * as CTA from '@/components/cta'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata = generateStaticSeo({
  rawTitle: 'Relatos',
  description:
    'Descubra histórias reais de sucesso de clientes que confiaram em nosso escritório para suas questões legais em Juiz de fora e em todo o Brasil. Nossos relatos destacam nossa dedicação e resultados positivos.',
})

export default function Cases() {
  return (
    <>
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col text-start items-start md:items-center md:text-center lg:text-start  gap-6">
          {' '}
          <h2 className="text-white font-bold text-5xl">Relatos de clientes</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Carrosel de clientes */}

      {/* Todos clientes */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <PageTitle title="Nossos clientes" />
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                accusamus molestiae voluptatum recusandae atque, labore,
                deserunt quas mollitia saepe maiores, velit nihil earum. Quam ad
                aut cupiditate quod totam culpa.
              </Text>
            </div>
            <div className="flex flex-col md:justify-center md:items-end gap-2">
              <span className="text-xl">
                {' '}
                <strong className="text-primary-main">+200</strong> clientes
                satisfeitos
              </span>

              <span className="text-xl">
                {' '}
                <strong className="text-primary-main">+22</strong> cidades
                diferentes
              </span>
            </div>
          </div>

          {/* Listagem de clientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Vitória"
              office="Cidade"
              problem="Problema"
              url="https://img.freepik.com/fotos-premium/foto-de-rosto-de-mulher-jovem-latina-feliz-com-fundo-de-expressao-de-sorriso-com-espaco-de-copia-retrato-de-rosto-de-pessoas-reais-etnicas-da-america-do-sul-boliviana_394926-96.jpg"
              reporter="Eterna gratidão por vocês. Super indico o serviço, são ótimas pessoas e ótimos profissionais. Com o conhecimento de vocês, meu filho conseguiu vaga no CTI e hoje teve alta. Eu sou imensamente grata por vocês, me faltam palavras para escrever aqui, mas me senti aliviada quando meu problema foi resolvido"
            />
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Nadia"
              office="Juiz de fora"
              problem="Problema"
              url="https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg"
              reporter="Nossa, decisão completa, estou lendo aqui. Estava precisando de uma noticia boa. Lucas, tenho que te agradecer!! Muito Obrigado."
            />
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Nome pessoa"
              office="Cidade"
              problem="Problema"
              url="https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg"
              reporter="Dr. Paulo Renato, bom dia. Agradeço a Deus, N.S.Aparecida, tenho rezado muito. Agradeço muito ao senhor, foi Deus que colocou o senhor no meu caminho. Eu não tenho palavras para agradecer o senhor. Deus sabe o alivio que eu estou sentindo agora.” "
            />
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Neide"
              office="Cidade"
              problem="Problema"
              url="https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg"
              reporter="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          eveniet eius impedit odio. Nulla perferendis dignissimos eligendi
          similique incidunt magni dolore deserunt illum. Deserunt quasi
          nesciunt sapiente consequuntur, temporibus distinctio."
            />
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Neide"
              office="Cidade"
              problem="Problema"
              url="https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg"
              reporter="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          eveniet eius impedit odio. Nulla perferendis dignissimos eligendi
          similique incidunt magni dolore deserunt illum. Deserunt quasi
          nesciunt sapiente consequuntur, temporibus distinctio."
            />
            <CustomerStory
              category="Direito abordado"
              companyName="Nome empresa"
              name="Neide"
              office="Cidade"
              problem="Problema"
              url="https://i.pinimg.com/736x/fd/fc/ef/fdfcefc24e58a4e3ed4dd6099d530353.jpg"
              reporter="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          eveniet eius impedit odio. Nulla perferendis dignissimos eligendi
          similique incidunt magni dolore deserunt illum. Deserunt quasi
          nesciunt sapiente consequuntur, temporibus distinctio."
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Nos diga como podemos te ajudar
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Compreendemos que cada caso é único. Nossa equipe está pronta para
            ouvir você e fornecer soluções legais eficazes e sob medida para sua
            situação.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="Nos mande uma mensagem" url="/contato" />
      </CTA.Root>
    </>
  )
}

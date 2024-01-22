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
            Veja a qualidade de nosso serviço através dos relatos de nossos
            clientes.
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
                Por meio de um serviço qualificado, eficiente, moderno, pautado
                no atendimento personalizado a cada cliente, compreendendo suas
                expectativas e atividades, entregamos soluções jurídicas para
                clientes em todo o Brasil.
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
                <strong className="text-primary-main">+20</strong> cidades
                diferentes
              </span>
            </div>
          </div>

          {/* Listagem de clientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CustomerStory
              category="Direito Civil"
              companyName="Vitória"
              name="Vitória"
              office="Cabo Frio RJ"
              problem="Recusa de tratamento médico"
              reporter="Eterna gratidão por vocês. Super indico o serviço, são ótimas pessoas e ótimos profissionais. Com o conhecimento de vocês, meu filho conseguiu vaga no CTI e hoje teve alta. Eu sou imensamente grata por vocês, me faltam palavras para escrever aqui, mas me senti aliviada quando meu problema foi resolvido"
            />

            <CustomerStory
              category="Direito Civil"
              companyName="José Alício"
              name="José Alício"
              office="Cataguases MG"
              problem="Atraso em Vôo"
              reporter="Estou muito contente com o excelente atendimento do advogado Paulo Renato, da Consulmagno e Assis Advocacia. Sua capacidade de esclarecer cada fase do processo de forma transparente e compreensível reflete um cuidado notável. A dedicação personalizada que recebi ao longo de todo o procedimento destaca a competência e comprometimento do advogado. Recomendo seus serviços sem reservas."
            />

            <CustomerStory
              category="Direito Civil e Societário"
              companyName="Yuri Padilha"
              name="Yuri Padilha"
              office="São Paulo SP"
              problem="Inadimplemento Contratual e Exclusão Societária"
              reporter="Estou sendo atendido pelo Dr. Paulo Renato do Consulmagno e Assis advocacia e estou tendo uma experiência excelente! Foi a primeira vez que tive que ter contato direto com um escritório de advocacia, o que no geral traz bastante insegurança, mas desde o começo me senti muito confiante com as explicações e suporte recebido pelo profissional! Consigo ver um atendimento muito humanizado, explicações compreensíveis e numa linguagem adequada por um preço justo. Só tenho a agradecer!"
            />

            <CustomerStory
              category="Direito Imobiliário"
              companyName="Daniel Parreira"
              name="Daniel Parreira"
              office="Juiz de Fore MG"
              problem="Due Dilligence Imobiliária"
              reporter="Parabéns pelo trabalho eficiente que desempenharam e pela agilidade no retorno! 👏🏻👏🏻👏🏻” "
            />

            <CustomerStory
              category="Direito Civil"
              companyName="Nadia"
              name="Nadia"
              office="Lima Duarte MG"
              problem="Fraude Contratual"
              reporter="Nossa, decisão completa, estou lendo aqui. Estava precisando de uma noticia boa. Lucas, tenho que te agradecer!! Muito Obrigado."
            />

            <CustomerStory
              category="Direito Civil"
              companyName="Neide"
              name="Neide"
              office="Juiz de Fora MG"
              problem="Fraude Contratual"
              reporter=" Dr. Paulo Renato e Dr. Lucas, bom dia. Agradeço a Deus, N.S.Aparecida, tenho rezado muito. Agradeço muito aos senhores, foi Deus que colocou vocês no meu caminho, eu não tenho palavras para agradecer vocês, hoje realmente vou deitar na cama e dormi tranquila, muito feliz. Não tenho como explicar.” "
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
            O escritório Consulmagno e Assis Advocacia está preparado para lhe
            oferecer a solução jurídica mais adequada ao seu caso, buscando
            construir possibilidades jurídicas baseadas no que há de mais
            atualizado no cenário jurídico nacional. Como podemos lhe auxiliar?
          </Text>
        </div>

        <CTA.ContactButtonGroup title="Nos mande uma mensagem" url="/contato" />
      </CTA.Root>
    </>
  )
}

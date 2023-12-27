/**
 * Internal
 */
import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'
import { AreasList } from './components/areas-list'

export const metadata = generateStaticSeo({
  rawTitle: 'Áreas de Atuação',
  description:
    'Explore as diversas áreas de atuação do nosso escritório de advocacia em Juiz de Fora. Contamos com uma equipe especializada em oferecer soluções jurídicas eficientes para questões variadas. Conheça nossas competências agora e beneficie-se de um serviço personalizado e inovador.',
})

export default function ActionAreasPage() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col md:text-center text-left lg:text-start items-center gap-6">
          <h2 className="text-white font-bold text-5xl">
            Conheça Nossas Áreas de Atuação
          </h2>
          <span className="text-gray-200 text-xl">
            Onde a Experiência e o Comprometimento se Encontram para Proteger
            Seus Interesses{' '}
          </span>
        </Container.Content>
      </Container.Root>

      {/* Áreas de Atuação */}
      <Container.Root backgroundColor="white">
        <Container.Content className="">
          <AreasList />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Descubram o que falam de nós
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Tendo sempre como prioridade a satisfação dos nossos clientes ao
            proporcionar soluções jurídicas eficientes, não podíamos deixar de
            expressar nossa imensa alegria ao saber que auxiliamos de maneira
            eficaz, comprometida, atingindo o resultado esperado. É isso que
            alguns dos nossos clientes falam de nós. Veja.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="relatos" url="/relatos" />
      </CTA.Root>
    </>
  )
}

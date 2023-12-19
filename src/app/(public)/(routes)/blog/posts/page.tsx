import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { generateStaticSeo } from '@/components/seo/static'
import { Text } from '@/components/ui/text'
import { RecentPostsList } from '../components/recent-posts-list'

export const metadata = generateStaticSeo({
  rawTitle: 'Áreas de Atuação',
  description:
    '"Explore as diversas publicações do nosso escritório de advocacia em Juiz de Fora. Contamos com uma equipe especializada em oferecer soluções jurídicas eficientes para questões variadas. Conheça nossas competências agora',
})

export default function PostsPage() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col md:text-center text-left lg:text-start items-center gap-6">
          <h2 className="text-white font-bold text-5xl">Nossas Publicações</h2>
          <span className="text-gray-200 text-xl">
            Explorando a Sabedoria Jurídica: Nossas Publicações em Destaque{' '}
          </span>
        </Container.Content>
      </Container.Root>

      {/* Posts */}
      <Container.Root backgroundColor="white">
        <Container.Content className="flex flex-col items-center">
          <RecentPostsList />
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

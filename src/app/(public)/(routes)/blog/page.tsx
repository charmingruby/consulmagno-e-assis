import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Button } from '@/components/ui/button'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'
import { RecentPostsList } from './components/recent-posts-list'
import { FeaturedCategories } from './components/featured-categories'

export const metadata = generateStaticSeo({
  rawTitle: 'Blog',
  description: '',
})

export default function Blog() {
  return (
    <>
      {/* Header */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col text-left md:text-center items-start md:items-center gap-6">
          <h2 className="text-white font-bold text-5xl">Blog</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Most recents */}
      <Container.Root backgroundColor="white">
        <Container.Content className="flex flex-col items-center gap-8">
          <RecentPostsList />
          <Button color="outline">Carregar mais</Button>
        </Container.Content>
      </Container.Root>

      {/* Categories */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="space-y-4 mb-12">
            <PageTitle title="Áreas em destaque" />
            <Text opacity="low" size="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsam incidunt, velit iusto ea repellat veritatis dolore magni
              consectetur dignissimos obcaecati architecto vero deserunt, et
              laudantium doloremque? Culpa, delectus magnam.
            </Text>
          </div>

          <FeaturedCategories />
        </Container.Content>
      </Container.Root>

      {/* Tabs navigation */}
      <Container.Root>
        <Container.Content>Carregar mais</Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Enfrente Desafios Legais
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Estamos aqui para enfrentar os desafios legais ao seu lado. Conte
            com nossa experiência e dedicação.
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

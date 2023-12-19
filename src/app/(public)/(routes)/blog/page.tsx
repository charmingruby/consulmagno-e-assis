import * as Container from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'
import { RecentPostsList } from './components/recent-posts-list'
import { PostsCategories } from './components/posts-categories'
import { SocialsHeader } from './components/socials-header'
import Image from 'next/image'
import coverImg from '@/assets/images/lawyers.png'
import * as CTA from '@/components/cta'
import { ContentHeading } from './components/content-heading'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateStaticSeo({
  rawTitle: 'Blog',
  description:
    'Descubra a expertise do nosso escritório por meio de nosso blog jurídico. Navegue por artigos envolventes que abrangem diversas áreas do direito e mantenha-se atualizado sobre as tendências legais em Juiz de Fora e além.',
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
        <Container.Content className="flex flex-col items-center">
          <SocialsHeader />

          <RecentPostsList />

          <Link href="/blog/posts" prefetch={false}>
            <Button color="outline" className="mt-8 flex items-center gap-1">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Container.Content>
      </Container.Root>

      {/* Categories */}
      <Container.Root backgroundColor="white">
        <Container.Content className="flex flex-col items-center">
          <ContentHeading heading="Principais Categorias" />

          <PostsCategories />
        </Container.Content>
      </Container.Root>

      {/* Cover */}
      <Container.Root backgroundColor="white">
        <Container.Content className="">
          <div className="h-96 relative flex items-center justify-center">
            <Image
              src={coverImg}
              alt="Imagem de capa"
              className="h-96 object-cover object-top absolute top-0 right-0"
            />

            {/* Filter */}
            <div className="absolute w-full h-full z-10 bg-black opacity-60 top-0 right-0" />

            <div className="absolute z-20 max-w-2xl text-center text-gray-50 space-y-4">
              <h2 className="text-3xl font-semibold">
                Consulmagno & Assis criando soluções para seus problemas
              </h2>
              <Text className="text-gray-50" size="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, reprehenderit asperiores et odit quidem deserunt
                nesciunt deleniti at voluptas repellendus mollitia.
              </Text>

              <Button color="uncolored">Entrar em contato</Button>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Nossas Áreas de Atuação
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Abordamos diversas áreas, do direito empresarial à resolução de
            conflitos, para atender suas necessidades. Descubra como nossa
            expertise pode impulsionar o sucesso dos seus casos. Clique para
            explorar.
          </Text>
        </div>

        <CTA.ContactButtonGroup
          title="Áreas de atuaçao"
          url="/areas-de-atuacao"
        />
      </CTA.Root>
    </>
  )
}

import * as Container from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'
import { RecentPostsList } from './components/recent-posts-list'
import { FeaturedCategories } from './components/featured-categories'
import { SocialsHeader } from './components/socials-header'
import Image from 'next/image'
import coverImg from '@/assets/images/lawyers.png'
import { TabsParent } from './components/posts-navigation/tabs-parent'

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
          <SocialsHeader />

          <RecentPostsList />
          <Button color="outline">Carregar mais</Button>
        </Container.Content>
      </Container.Root>

      {/* Cover */}
      <Container.Root backgroundColor="white">
        <Container.Content className="">
          <div className="h-96 relative flex items-center justify-center">
            <Image
              src={coverImg}
              alt=""
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

      {/* Categories */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="space-y-4 mb-12">
            <PageTitle title="Áreas em destaque" />
          </div>

          <FeaturedCategories />
        </Container.Content>
      </Container.Root>

      {/* Tabs navigation */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <TabsParent />
        </Container.Content>
      </Container.Root>
    </>
  )
}

import { ReasonCard } from './components/reason-card'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { ArrowRight, Eye, Gem, Lightbulb, Target } from 'lucide-react'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
import { AreaList } from './components/area-list'
import { PageTitle } from '@/components/page-title'
import map from '@/assets/images/map.png'
import Image from 'next/image'
import { MapAnnotations } from './components/map-annotations'
import * as CTA from '@/components/cta'
import { DepositionItem } from './components/deposition-item'
import { Separator } from './components/separator'
import { generateStaticSeo } from '@/components/seo/static'
import { Socials } from '@/components/cta/socials'
import { RecentPosts } from './components/recent-posts'

export const metadata = generateStaticSeo({
  rawTitle: 'Início',
  description:
    'Escritório de advocacia em juiz de fora. Melhores advogados em Juiz de Fora. Advogados que trabalham remotamente.  ',
})

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="hero-img flex items-center sm:pt-16 bg-no-repeat bg-center bg-fixed md:min-h-screen sm:text-left">
        <Container.Content>
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center ">
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0 text-4xl md:text-4xl mb-6 break-words">
              Defesa Legal em Suas Mãos: Advocacia Especializada e Comprometida
              com seus Direitos
            </h1>

            <p className="text-gray-100 text-lg mb-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, sapiente qui asperiores deserunt exercitationem impedit
              nam quas molestiae eligendi sed neque quae repellat iste quaerat
              dolorem quo non facilis distinctio.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/relatos"
                prefetch={false}
                className="flex justify-center"
              >
                <Button color="primary" className="w-full">
                  Soluções
                </Button>
              </Link>
              <Link
                href="/contato"
                prefetch={false}
                className="flex justify-center"
              >
                <Button color="secondary" className="w-full">
                  Entre em contato
                </Button>
              </Link>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Why Us */}
      <Container.Root className="w-full bg-white">
        <Container.Content>
          <div className="w-full mb-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <h2 className="text-4xl font-bold text-primary-main">
                Por que escolher a Brand?
              </h2>
              <p className="leading-relaxed text-gray-400">
                Somos parceiros e protegemos nossos clientes em todo o mundo.
                Nossos profissionais são especializados em mais de 30 áreas do
                direito.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard
              icon={Target}
              prefixTitle="Nossa"
              sufixTitle="missão"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id molestias quibusdam! Rem commod"
            />
            <ReasonCard
              icon={Eye}
              prefixTitle="Nossa"
              sufixTitle="visão"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id molestias quibusdam! Rem commod"
            />
            <ReasonCard
              icon={Gem}
              prefixTitle="Nossos"
              sufixTitle="valores"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id molestias quibusdam! Rem commod"
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Map */}
      <Container.Root className="bg-white">
        <Container.Content className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center gap-12">
            <MapAnnotations
              title="Title"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, nobis dolore. Adipisci porro, nesciunt exercitationem, ab tenetur numquam praesentium tempora fugiat mollitia vero aspernatur, ut eligendi perferendis ad soluta dignissimos!"
            />
            <MapAnnotations
              title="Title"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, nobis dolore. Adipisci porro, nesciunt exercitationem, ab tenetur numquam praesentium tempora fugiat mollitia vero aspernatur, ut eligendi perferendis ad soluta dignissimos!"
            />
          </div>
          <div className="order-first md:order-last">
            <Image src={map} alt="Mapa de onde atuamos" />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Areas */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="mb-10 flex flex-col items-center max-w-2xl mx-auto">
            <div className="flex flex-col gap-2 mb-4">
              <PageTitle title="Áreas de atuação" />
            </div>
            <Text align="center" opacity="low">
              Nossa equipe de advogados comprometidos entende a importância do
              seu caso. Com experiência em várias áreas de atuação, o(a) Brand
              lidará com seus problemas legais com cuidado e profissionalismo.
            </Text>
          </div>

          <AreaList />

          <div className="w-full flex justify-center">
            <Link
              href="/areas-de-atuacao"
              prefetch={false}
              className="flex justify-center w-full"
            >
              <Button className="w-full md:w-fit flex items-center justify-center mt-6">
                <div className="flex gap-2 items-center">
                  Ver todas as áreas
                  <ArrowRight size={18} className="text-secondary-main" />
                </div>
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Depositions */}
      <Container.Root border="borderY">
        <Container.Content>
          {/* Heading */}
          <div className="lg:w-1/2">
            <PageTitle title="Relatos de clientes" />
          </div>

          {/* Depositions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full">
            <div className="mt-12 space-y-6">
              <DepositionItem />
              <Separator />
              <DepositionItem />
            </div>

            <div className="block lg:hidden my-6">
              <Separator />
            </div>

            <div className="space-y-6">
              <DepositionItem />
              <Separator />
              <DepositionItem />
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Insights */}
      <Container.Root className="bg-white">
        <Container.Content>
          <div className="mb-8 flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-secondary-main" />

            <div className="text-3xl md:text-4xl text-primary-main">
              <span>Últimas</span> <strong>publicações</strong>
            </div>
          </div>

          <RecentPosts />

          <div className="w-full flex justify-center mt-6">
            <Link
              href="/blog"
              prefetch={false}
              className="flex justify-center w-full"
            >
              <Button className="w-full md:w-fit flex justify-center items-center">
                <div className="flex gap-2 items-center">
                  Blog <ArrowRight size={18} className="text-secondary-main" />
                </div>
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Fale Conosco
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Estamos aqui para ajudar. Entre em contato conosco para obter
            assistência personalizada.
          </Text>
        </div>

        <Socials></Socials>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

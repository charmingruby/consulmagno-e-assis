import { ReasonCard } from './components/reason-card'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import {
  ArrowRight,
  Eye,
  Facebook,
  Gem,
  Instagram,
  Lightbulb,
  Linkedin,
  Target,
} from 'lucide-react'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
import { AreaList } from './components/area-list'
import { InsightCard } from './components/insight-card'
import { PageTitle } from '@/components/page-title'
import map from '@/assets/images/map.png'
import Image from 'next/image'
import { MapAnnotations } from './components/map-annotations'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="hero-img flex items-center sm:pt-16 bg-no-repeat bg-center bg-fixed md:min-h-screen">
        <Container.Content>
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center ">
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-4xl mb-6 break-words">
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
      <Container.Root border="borderY">
        <Container.Content>
          <div className="mb-10 flex flex-col items-center max-w-2xl mx-auto">
            <div className="flex flex-col gap-2 mb-4">
              <PageTitle title="Áreas de atuação" />
            </div>
            <Text align="center">
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

      {/* Insights */}
      <Container.Root className="bg-white">
        <Container.Content>
          <div className="mb-8 flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-secondary-main" />

            <div className="text-3xl md:text-4xl text-primary-main">
              <span>Últimas</span> <strong>publicações</strong>
            </div>
          </div>

          <div className="mb-8 grid-cols-3 ">
            <InsightCard
              imageUrl=""
              title="Novo direito civil"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
              url="Novo direito civil"
              horizontal
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InsightCard
              imageUrl=""
              title="Novo direito civil"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
              url="Novo direito civil"
            />
            <InsightCard
              imageUrl=""
              title="Novo direito civil"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
              url="Novo direito civil"
            />
            <InsightCard
              imageUrl=""
              title="Novo direito civil"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
              url="test"
            />
          </div>
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
      <Container.Root backgroundColor="primary">
        <Container.Content spacing="spaceless" className="py-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <strong className="text-3xl md:text-4xl text-white">
                Nos diga como podemos te ajudar
              </strong>
            </div>

            <div>
              <Text size="md" align="center" className="text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                odio veniam ad exercitationem fugit dolorum enim eveniet
                voluptatum laboriosam soluta repellendus fugiat reprehenderit
                velit, ullam libero, cupiditate doloribus perferendis cumque?
              </Text>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                href="https://www.linkedin.com/company/consulmagnoeassis/"
                target="_blank"
                prefetch={false}
                className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                <Linkedin className=" text-secondary-main h-8 w-8 " />
              </Link>
              <Link
                href="https://www.facebook.com/ConsulmagnoAssis"
                target="_blank"
                prefetch={false}
                className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                <Facebook className=" text-secondary-main h-8 w-8 " />
              </Link>
              <Link
                href="https://www.instagram.com/consulmagnoassisadv/"
                target="_blank"
                prefetch={false}
                className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                <Instagram className=" text-secondary-main h-8 w-8 " />
              </Link>
            </div>

            <Link
              href="/contato"
              prefetch={false}
              className="flex justify-center w-full"
            >
              <Button
                color="secondary"
                className="flex justify-center items-center gap-2 w-full md:w-fit"
              >
                <span>Entre em contato</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

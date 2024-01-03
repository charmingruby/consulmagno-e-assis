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
import PauloImg from '@/assets/team/Paulo 01.png'
import LucasImg from '@/assets/team/Lucas 02.png'
import TarikImg from '@/assets/team/Tarik 01.png'

export const metadata = generateStaticSeo({
  rawTitle: 'Início',
  description:
    'Escritório de advocacia em juiz de fora que trabalha remotamente para todo o Brasil. Soluções jurídicas personalizadas para o crescimento e sucesso dos nossos clientes.',
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
              Excelência, Pessoalidade e Modernidade.
            </h1>

            <p className="text-gray-100 text-lg mb-16">
              Estes são os pilares do nosso negócio, tratamos cada cliente de
              forma personalizada, promovendo um atendimento célere, eficiente e
              humanizado gerando valor para nossos clientes.
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
      <Container.Root className="w-full bg-white ">
        <Container.Content>
          <div className="w-full mb-10">
            <div className="grid grid-rows-1-1 gap-0 lg:grid-rows-2">
              <h2 className="text-4xl font-bold text-primary-main">
                Por que escolher o escritório Consulmagno e Assis advocacia?
              </h2>
              <p className="leading-relaxed text-gray-400">
                Nós oferecemos um serviço de qualidade, inovador, humanizado,
                com foco total na pessoalidade do serviço. Acreditamos que cada
                cliente é único e oferecemos soluções personalizadas para
                atender às necessidades específicas. Entendemos que as soluções
                jurídicas estratégicas que oferecemos são essenciais para o
                crescimento e sucesso dos nosso clientes.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard
              icon={Target}
              prefixTitle="Nossa"
              sufixTitle="missão"
              description="Prestar um serviço altamente qualificado, eficiente, moderno, por meio de um atendimento diferenciado, personalíssimo e humano, gerando valor às atividades dos nossos clientes"
            />
            <ReasonCard
              icon={Eye}
              prefixTitle="Nossa"
              sufixTitle="visão"
              description="Ser reconhecido dentro do mais alto padrão ético e eficiente da advocacia, sendo referência nominal na prestação de serviços jurídico consultivos e contenciosos."
            />
            <ReasonCard
              icon={Gem}
              prefixTitle="Nossos"
              sufixTitle="valores"
              description="Ética, Qualidade, Pessoalidade, Disponibilidade e Comprometimento"
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Map */}
      <Container.Root className="bg-white">
        <Container.Content className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center gap-12">
            <MapAnnotations
              title="Atendendo Clientes em Todo o Brasil"
              description="O escritório Consulmagno e Assis atua nacionalmente, oferecendo soluções jurídicas em qualquer localização do país. Atualmente estamos presentes em mais de 100 municípios e em mais de 20 Estados"
            />
            <MapAnnotations
              title="Nossa sede"
              description="Nossa sede está localizada em Juiz de Fora – MG, na Av. Barão do Rio Branco, 1871, Sala 613"
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
              Possuímos profissionais especializados nas mais variadas áreas do
              Direito, e por meio da multidisciplinaridade de cada profissional,
              somos capazes de entender a complexidade das questões apresentadas
              pelos clientes e a apresentar soluções adequadas e criativas,
              garantindo a segurança e o sucesso de suas atividades dos nossos
              clientes
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
              <DepositionItem
                name="Vitória"
                avatarUrl={TarikImg}
                role="Cabo Frio RJ"
                deposition="Eterna gratidão por vocês. Super indico o serviço, são ótimas pessoas e ótimos profissionais. Com o conhecimento de vocês, meu filho conseguiu vaga no CTI e hoje teve alta. Eu sou imensamente grata por vocês, me faltam palavras para escrever aqui, mas me senti aliviada quando meu problema foi resolvido."
              />
              <Separator />
              <DepositionItem
                avatarUrl={PauloImg}
                name="Nadia"
                role="Lima Duarte MG"
                deposition="Nossa, decisão completa, estou lendo aqui. Estava precisando de uma noticia boa. Lucas, tenho que te agradecer!! Muito Obrigado."
              />
            </div>

            <div className="block lg:hidden my-6">
              <Separator />
            </div>

            <div className="space-y-6">
              <DepositionItem
                name="Neide"
                avatarUrl={PauloImg}
                role="Juiz de Fora MG"
                deposition="Dr. Paulo Renato, bom dia. Agradeço a Deus, N.S.Aparecida, tenho rezado muito. Agradeço muito ao senhor, foi Deus que colocou o senhor no meu caminho. Eu não tenho palavras para agradecer o senhor. Deus sabe o alivio que eu estou sentindo agora.” "
              />
              <Separator />
              <DepositionItem
                name="Nome"
                role="Juiz de Fora MG"
                avatarUrl={LucasImg}
                deposition="Dr. Paulo Renato, bom dia. Agradeço a Deus, N.S.Aparecida, tenho rezado muito. Agradeço muito ao senhor, foi Deus que colocou o senhor no meu caminho. Eu não tenho palavras para agradecer o senhor. Deus sabe o alivio que eu estou sentindo agora.” "
              />
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
            Não perca tempo em agendar uma consulta com nossos profissionais de
            forma rápida e simples! Estamos sempre disponíveis para oferecer a
            melhor solução para você.
          </Text>
        </div>

        <Socials></Socials>

        <CTA.ContactButtonGroup title="Entre em contato" url="/contato" />
      </CTA.Root>
    </>
  )
}

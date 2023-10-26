import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import lawyer from '@/assets/images/lawyer.jpg'
import { Text } from '@/components/ui/text'
import { ArrowRight, Eye, Users } from 'lucide-react'
import Link from 'next/link'
import { AreaCard } from './components/area-card'
import { Button } from '@/components/ui/button'

export default function Team() {
  return (
    <>
      {/* Foto da equipe com uma texto */}
      <Container.Root className="hero-img flex items-center sm:py-16 bg-no-repeat bg-center bg-fixed md:min-h-screen">
        <Container.Content>
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center">
            <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-4xl mb-6 break-words">
              Conheça nosso time
            </h1>
            <h2 className="text-gray-50">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              excepturi sint expedita voluptas quidem adipisci modi deleniti at
              odit, laborum cumque sit voluptatem nam placeat similique aut
              soluta itaque facilis.
            </h2>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Mostrar membros do time com foto */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <Users className="text-secondary-main h-8 w-8 mb-4" />
            <PageTitle title="Conheça nossa equipe" />
            <Text className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eos
              accusantium ducimus aspernatur totam possimus asperiores!
              Exercitationem nemo eveniet, ea similique autem, quisquam
              doloremque mollitia, beatae tempore ipsa totam officiis!
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/consulmagnoassisadv/"
              linkedinUrl="https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true"
              name="John Doe"
              role="Estagiário"
              phoneNumber="(32) 98834-4973"
              areas={[
                {
                  label: 'Direito civil',
                  url: '/areas-de-atuacao/direito-civil',
                },
                {
                  label: 'Direito imobiliario',
                  url: '/areas-de-atuacao/direito-imobiliario',
                },
              ]}
            />

            <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/consulmagnoassisadv/"
              linkedinUrl="https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true"
              name="John Doe"
              role="Estagiário"
              phoneNumber="(32) 98834-4973"
              areas={[
                {
                  label: 'Direito civil',
                  url: '/areas-de-atuacao/direito-civil',
                },
                {
                  label: 'Direito imobiliario',
                  url: '/areas-de-atuacao/direito-imobiliario',
                },
              ]}
            />

            <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/consulmagnoassisadv/"
              linkedinUrl="https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true"
              name="John Doe"
              role="Estagiário"
              phoneNumber="(32) 98834-4973"
              areas={[
                {
                  label: 'Direito civil',
                  url: '/areas-de-atuacao/direito-civil',
                },
                {
                  label: 'Direito imobiliario',
                  url: '/areas-de-atuacao/direito-imobiliario',
                },
              ]}
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Algumas areas de atuaçao imprescindiveis para novos trabalhadores */}
      <Container.Root backgroundColor="white">
        <Container.Content className="grid grid-cols-1 gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <Eye className="text-secondary-main h-8 w-8"></Eye>
              <PageTitle title="Valores imprescindíveis"></PageTitle>
            </div>
            <div className="flex flex-col gap-2">
              <Text>
                No nosso escritório, entendemos que cada caso é único e merece a
                atenção dedicada e especializada que ele exige. É por isso que
                oferecemos expertise em diversas áreas do direito para atender
                às necessidades variadas dos nossos clientes.
              </Text>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AreaCard
                name="Respeito"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam odio nobis amet, praesentium magni iusto earum aliquam ut itaque sint cum, doloribus repellendus tenetur laboriosam ad modi temporibus consequuntur accusamus!"
              />
              <AreaCard
                name="Gentileza"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam odio nobis amet, praesentium magni iusto earum aliquam ut itaque sint cum, doloribus repellendus tenetur laboriosam ad modi temporibus consequuntur accusamus!"
              />
              <AreaCard
                name="Esforço"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam odio nobis amet, praesentium magni iusto earum aliquam ut itaque sint cum, doloribus repellendus tenetur laboriosam ad modi temporibus consequuntur accusamus!"
              />
              <AreaCard
                name="Harmonia"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam odio nobis amet, praesentium magni iusto earum aliquam ut itaque sint cum, doloribus repellendus tenetur laboriosam ad modi temporibus consequuntur accusamus!"
              />
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root backgroundColor="default" border="borderTop">
        <Container.Content>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <PageTitle title="Trabalhe conosco" />
            </div>

            <div>
              <Text align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                odio veniam ad exercitationem fugit dolorum enim eveniet
                voluptatum laboriosam soluta repellendus fugiat reprehenderit
                velit, ullam libero, cupiditate doloribus perferendis cumque?
              </Text>
            </div>

            <Link
              href="/contato"
              prefetch={false}
              className="flex justify-center w-full"
            >
              <Button className="flex justify-center items-center gap-2 w-full md:w-fit">
                <span>Entre em contato</span>
                <ArrowRight className="h-4 w-4 text-secondary-main" />
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

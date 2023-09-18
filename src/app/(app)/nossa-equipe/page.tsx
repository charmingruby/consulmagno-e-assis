import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import lawyer from '@/assets/images/lawyer.jpg'
import { Text } from '@/components/ui/text'
import { ArrowRight, Pin, Users } from 'lucide-react'
import Link from 'next/link'
import { AreaCard } from './components/area-card'
import { Button } from '@/components/ui/button'

export default function Team() {
  return (
    <>
      {/* Foto da equipe com uma texto */}
      <Container.Root className="hero-img flex items-center sm:py-0 bg-no-repeat bg-center bg-fixed md:min-h-screen">
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
      <Container.Root>
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
      <Container.Root className="bg-white">
        <Container.Content>
          <div>
            <div className="flex gap-2 justify-center">
              <Pin className="text-secondary-main h-8 w-8 mb-4 "></Pin>
              <PageTitle title="Áreas imprescindíveis"></PageTitle>
            </div>
            <Text className="pt-4 pb-8">
              No nosso escritório, entendemos que cada caso é único e merece a
              atenção dedicada e especializada que ele exige. É por isso que
              oferecemos expertise em diversas áreas do direito para atender às
              necessidades variadas dos nossos clientes.
              <br />
              <br />
              Nossos advogados são altamente qualificados e têm vasta
              experiência em uma ampla gama de campos jurídicos. Abaixo, você
              encontrará links para algumas das áreas mais importantes em que
              atuamos:
            </Text>
          </div>
          <div className=" flex flex-col justify-start">
            <div className='flex justify-center flex-wrap '>
              <AreaCard name="Direito do Trabalho" url="#"></AreaCard>
              <AreaCard name="Direito Societário e M&A" url="#"></AreaCard>
              <AreaCard name="Direito Civil e Consumeirista" url="#"></AreaCard>
            </div>
            <div className='flex  justify-center flex-wrap sm: '>
              <AreaCard
                name="Direito Sucessório e Planejamento Patrimonial"
                url="#"
              ></AreaCard>
              <AreaCard name="Direito Administrativo" url="#"></AreaCard>
              <AreaCard name="Direito Imobiliário" url="#"></AreaCard>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Trabalhe conosco - exemplo
      <Container.Root>
        <Container.Content>
        <div>
            <div className='flex gap-2 justify-center'>
              <Briefcase className="text-secondary-main h-8 w-8 mb-4" ></Briefcase>
              <PageTitle title='Trabalhe conosco'></PageTitle>
            </div>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              vero rem facilis quaerat minima sequi est quod neque fugit, alias in
              ipsum doloremque assumenda nisi, velit autem eligendi omnis beatae.
            </Text>
          </div>
          <Link prefetch={false} href="/">
            <span>Link</span>
            <ArrowRight className="" />
          </Link>
        </Container.Content>
      </Container.Root>  */}

      <Container.Root backgroundColor="primary">
        <Container.Content spacing="spaceless" className="py-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <strong className="text-3xl md:text-4xl text-white">
                Trabalhe Conosco
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

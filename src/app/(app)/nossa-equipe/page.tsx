import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import lawyer from '@/assets/images/lawyer.jpg'
import { Text } from '@/components/ui/text'
import { ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'

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

      {/* Trabalhe conosco */}
      <Container.Root>
        <Container.Content>
          <h2>Venha trabalhar conosco</h2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            vero rem facilis quaerat minima sequi est quod neque fugit, alias in
            ipsum doloremque assumenda nisi, velit autem eligendi omnis beatae.
          </Text>
          <Link prefetch={false} href="/">
            <span>Link</span>
            <ArrowRight className="" />
          </Link>
        </Container.Content>
      </Container.Root>
    </>
  )
}

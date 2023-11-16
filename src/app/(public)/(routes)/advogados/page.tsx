/**
 * Internal
 */
import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import lawyer from '@/assets/images/lawyer.jpg'
import { Text } from '@/components/ui/text'
import { Eye, Users } from 'lucide-react'
import { AreaCard } from './components/area-card'
import * as CTA from '@/components/cta'
import { generateStaticSeo } from '@/components/seo/static'
import heroImg from '@/assets/team/hero.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata = generateStaticSeo({
  rawTitle: 'Advogados',
  description:
    'Conheça nossa equipe de advogados em Juiz de Fora. Profissionais experientes e dedicados em diversas áreas do direito',
})

export default function Team() {
  return (
    <>
      {/* Foto da equipe com uma texto */}
      <Container.Root className="relative flex items-center sm:py-16 md:h-screen">
        <Image
          src={heroImg}
          className="absolute bg-no-repeat object-center object-cover object-fixed h-screen z-10"
          alt=""
          priority
          quality={100}
        />

        <div className="absolute h-full w-full bg-black z-20 opacity-60" />

        <Container.Content className="z-30">
          <div className="z-10 mt-16 sm:mt-0 w-full flex flex-col justify-center">
            <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-5xl mb-6 break-words">
              Nossa equipe de advogados{' '}
            </h1>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Mostrar membros do time com foto */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <Users className="text-secondary-main h-8 w-8 mb-4" />
            <PageTitle title="Conheça nossa equipe" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
        <Container.Content className="grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <PageTitle title="Valores imprescindíveis" />
            </div>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              incidunt iure minus eaque provident recusandae voluptatum dolorem
              aliquam necessitatibus vero repellat voluptatem doloremque vitae
              ea, odio labore maiores quas? Nulla?
            </Text>

            <Button>lllll</Button>
          </div>
          <div className=" flex flex-col col-span-2">
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

      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Explore Nossos Serviços
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Conheça o que oferecemos e encontre soluções personalizadas para
            atender às suas necessidades.
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

import * as Container from '@/components/ui/container'
import { ArrowRight, Briefcase, HelpCircle, Target } from 'lucide-react'
import { slugTransformer } from '@/utils/slug-transformer'
import { ReturnLink } from './components/return-link'
import Image from 'next/image'
import brandLogo from '@/app/icon.png'
import { ExplanationTopicTitle } from './components/explanation-topic-title'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
import * as CTA from '@/components/cta'
import { ServicesList } from './components/services-list'

interface PageProps {
  params: { slug: string }
}

export default function AreaPage({ params: { slug } }: PageProps) {
  const slugTransformed = slugTransformer(slug)

  return (
    <>
      {/* Hero */}
      <Container.Root className="bg-primary-gradient pt-16">
        <Container.Content
          spacing="spaceless"
          className=" flex flex-col items-start gap-6 pb-12 pt-8"
        >
          <ReturnLink />

          <div className="flex justify-between items-center w-full">
            <h1 className="text-white font-bold md:text-5xl text-3xl flex flex-col gap-2">
              Atuamos em{' '}
              <span className="text-secondary-main block">
                {slugTransformed}
              </span>
            </h1>

            <Image
              src={brandLogo}
              alt="Consulmagno & Assis logo"
              className="w-32 h-32 hidden sm:block"
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Descriptions */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="grid grid-col-1 md:grid-cols-2 justify-center text-left gap-12">
            {/* Problem abordation */}
            <div className="flex flex-col">
              <ExplanationTopicTitle
                icon={HelpCircle}
                title="O que oferecemos?"
              />

              {/* Content */}
              <div className="space-y-4">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus fuga dolorum optio officiis a, maxime illum, magnam
                  accusantium minima nobis recusandae incidunt.
                </Text>
                <Text className="text-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus fuga dolorum optio officiis a, maxime illum, magnam
                  accusantium minima nobis recusandae incidunt.
                </Text>
                <Text className="text-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus fuga dolorum optio officiis a, maxime illum, magnam
                  accusantium minima nobis recusandae incidunt.
                </Text>
              </div>
            </div>

            {/* How we act */}
            <div className="flex flex-col">
              <ExplanationTopicTitle icon={Target} title="Como agimos" />

              {/* Action content */}
              <div className="pb-4">
                <p className="text-lg  flex ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur id suscipit voluptate libero est inventore
                  laboriosamLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Temporibus fuga dolorum optio officiis a, maxime illum,
                  magnam accusantium minima nobis recusandae incidunt.
                </p>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4 gap-2 flex items-center">
                <span className="font-semibold text-lg">
                  É o que você está procurando?
                </span>
                <Link
                  href="/contato"
                  prefetch={false}
                  className="flex items-center gap-1 group"
                >
                  <span className="text-lg text-gray-400 group-hover:text-primary-main group-hover:underline transition-all">
                    Entre em contato
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary-main transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Serviços */}
      <Container.Root border="borderBottom" backgroundColor="white">
        <Container.Content className="flex flex-col items-center">
          <ExplanationTopicTitle icon={Briefcase} title="Nossos serviços" />

          <ServicesList slug={slug} />
        </Container.Content>
      </Container.Root>

      {/* Insights */}
      <Container.Root border="borderBottom">
        <Container.Content>area insights</Container.Content>
      </Container.Root>

      {/* Veja também */}
      <Container.Root border="borderBottom">
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Defesa Legal Personalizada
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Oferecemos soluções jurídicas sob medida para atender às suas
            necessidades. Saiba como podemos ajudar.
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

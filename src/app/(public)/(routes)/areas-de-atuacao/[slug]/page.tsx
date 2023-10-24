import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { ArrowRight, HelpCircle, Target } from 'lucide-react'
import { slugTransformer } from '@/utils/slug-transformer'
import { ReturnLink } from './componets/return-link'
import Image from 'next/image'
import brandLogo from '@/app/icon.png'
import { AreaAccordion } from './componets/area-accordion'
import { ExplanationTopicTitle } from './componets/explanation-topic-title'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

interface AreaPageProps {
  params: { slug: string }
}

export default function AreaPage({ params: { slug } }: AreaPageProps) {
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
              className="w-32 h-32"
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
              <div>
                <p className="font-medium text-2xl md:text-3xl flex ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur id suscipit voluptate libero est inventore laboriosam
                </p>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4">
                <span className="font-medium">
                  É o que você está procurando?
                </span>{' '}
                <Link
                  prefetch={false}
                  href="/contato"
                  className="hover:text-primary-main hover:font-medium transition-all"
                >
                  <span>Entre em contato</span>
                </Link>
              </div>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Serviços */}
      <Container.Root border="borderBottom" backgroundColor="white">
        <Container.Content>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <PageTitle title="Nossos serviços:" />
            </div>

            <AreaAccordion />
          </div>
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
      <Container.Root backgroundColor="default">
        <Container.Content className="flex flex-col items-center gap-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8 items-center">
            <PageTitle title="Ficou interessado?" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </p>
          </div>
          <Button className="w-fit flex items-center justify-center gap-2">
            <span>Entre em contato</span>
            <ArrowRight className="text-secondary-main h-4 w-4" />
          </Button>
        </Container.Content>
      </Container.Root>
    </>
  )
}

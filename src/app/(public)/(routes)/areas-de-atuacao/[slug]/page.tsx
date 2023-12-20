import * as Container from '@/components/ui/container'
import { ArrowRight, Goal, HelpCircle, Target } from 'lucide-react'
import { slugTransformer } from '@/utils/slug-transformer'
import { ReturnLink } from './components/return-link'
import Image from 'next/image'
import brandLogo from '@/app/icon.png'
import { ExplanationTopicTitle } from './components/explanation-topic-title'
import { Text } from '@/components/ui/text'
import Link from 'next/link'
import * as CTA from '@/components/cta'
import { ServicesList } from './components/services-list'
import { RelatedInsights } from './components/related-insights'
import { SeeAlsoPosts } from '@/components/see-also-posts'
import { areas, Area } from '@/data/areas'

interface PageProps {
  params: { slug: string }
}

export default function AreaPage({ params: { slug } }: PageProps) {
  const slugTransformed = slugTransformer(slug)

  const getAreaBySlug = (slug: string): Area | undefined => {
    return areas.find((area) => area.slug === slug)
  }
  const specificArea = getAreaBySlug(slug)

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
                {specificArea?.name}
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
          <div className="grid grid-col-1 lg:grid-cols-3 justify-center text-left gap-12 w-full">
            {/* Problem abordation */}
            <div className="flex flex-col lg:col-span-2">
              <ExplanationTopicTitle icon={Target} title="Nossas soluções" />

              {/* Content */}
              <div className="space-y-4 mb-8">
                <Text>{specificArea?.soluction}</Text>
              </div>

              <ServicesList slug={slug} />
            </div>

            {/* How we act */}
            <div className="order-first lg:order-last flex flex-col border border-gray-100 h-fit p-4 w-full">
              <ExplanationTopicTitle
                icon={HelpCircle}
                title="Sobre a área de atuação"
                small={true}
              />
              {/* Action content */}
              <div className="pb-4">
                <p className="text-base flex">{specificArea?.about}</p>
              </div>

              <div className="border-t border-gray-100 pt-4 gap-2 flex lg:flex-col">
                <Link
                  href="/contato"
                  prefetch={false}
                  className="flex items-center gap-1 group"
                >
                  <span className="text-gray-400 group-hover:text-primary-main group-hover:underline transition-all">
                    Entre em contato
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary-main transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Insights */}
      <Container.Root border="borderY">
        <Container.Content
          spacing="spaceless"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8"
        >
          {/* Heading */}
          <h2 className="col-span-1">
            <strong className="text-3xl text-primary-main">
              {`Publicações sobre`}{' '}
              <span className="text-secondary-main">{slugTransformed}</span>
            </strong>
          </h2>

          <RelatedInsights slug={slugTransformed} />
        </Container.Content>
      </Container.Root>

      {/* Veja também */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="flex items-center justify-center gap-2 w-full mb-8 text-secondary-main">
            <Goal className="h-7 w-7" />
            <strong className="text-3xl text-primary-main">Veja também</strong>
          </div>
          <SeeAlsoPosts />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Conheça Nossa Equipe Jurídica: Especialistas Comprometidos com Seu
            Sucesso!
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Conheça nossa equipe jurídica especializada. Conheça nossa equipe
            jurídica especializada. Descubra as habilidades e compromisso que
            fazem de nossa equipe a escolha certa para suas necessidades
            jurídicas.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="advogados" url="/advogados" />
      </CTA.Root>
    </>
  )
}

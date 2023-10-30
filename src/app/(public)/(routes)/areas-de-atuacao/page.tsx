/**
 * Internal
 */
import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { AreaList } from './components/area-list'
import { SearchBar } from './components/search-bar'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata = generateStaticSeo({
  title: 'Áreas de Atuação',
  description: '',
})

export default function ActionAreasPage() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col md:text-center text-left lg:text-start items-center gap-6">
          <h2 className="text-white font-bold text-5xl">
            Conheça Nossas Áreas de Atuação
          </h2>
          <span className="text-gray-200 text-xl">
            Onde a Experiência e o Comprometimento se Encontram para Proteger
            Seus Interesses{' '}
          </span>
        </Container.Content>
      </Container.Root>

      {/* Áreas de Atuação */}
      <Container.Root backgroundColor="white">
        <Container.Content className="">
          <div className="grid grid-row">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-2 mb-6 lg:mb-12">
              <div className="flex items-center gap-2">
                <PageTitle title="Áreas de Atuação" />
              </div>
              <div className="flex items-center">
                <SearchBar />
              </div>
            </div>

            <AreaList />
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Nos diga como podemos te ajudar
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            odio veniam ad exercitationem fugit dolorum enim eveniet voluptatum
            laboriosam soluta repellendus fugiat reprehenderit velit, ullam
            libero, cupiditate doloribus perferendis cumque?
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

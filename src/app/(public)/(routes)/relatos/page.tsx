import * as Container from '@/components/ui/container'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { CustomerStory } from './components/customer-story'
import * as CTA from '@/components/cta'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata = generateStaticSeo({
  rawTitle: 'Relatos',
  description: '',
})

export default function Cases() {
  return (
    <>
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col text-start items-start md:items-center md:text-center lg:text-start  gap-6">
          {' '}
          <h2 className="text-white font-bold text-5xl">Relatos de clientes</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Carrosel de clientes */}

      {/* Todos clientes */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <PageTitle title="Nossos clientes" />
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                accusamus molestiae voluptatum recusandae atque, labore,
                deserunt quas mollitia saepe maiores, velit nihil earum. Quam ad
                aut cupiditate quod totam culpa.
              </Text>
            </div>
            <div className="flex flex-col md:justify-center md:items-end gap-2">
              <span className="text-xl">
                {' '}
                <strong className="text-primary-main">+200</strong> clientes
                satisfeitos
              </span>

              <span className="text-xl">
                {' '}
                <strong className="text-primary-main">+22</strong> cidades
                diferentes
              </span>
            </div>
          </div>

          {/* Listagem de clientes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CustomerStory />
            <CustomerStory />
            <CustomerStory />
            <CustomerStory />
            <CustomerStory />
            <CustomerStory />
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
            Compreendemos que cada caso é único. Nossa equipe está pronta para
            ouvir você e fornecer soluções legais eficazes e sob medida para sua
            situação.
          </Text>
        </div>

        <CTA.ContactButtonGroup />
      </CTA.Root>
    </>
  )
}

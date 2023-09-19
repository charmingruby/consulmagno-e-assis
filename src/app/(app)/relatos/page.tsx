import * as Container from '@/components/ui/container'
import { CustomerCase } from './components/customer-case'
import { PageTitle } from '@/components/page-title'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { CustomerStory } from './components/customer-story'
import { ArrowRight } from 'lucide-react'

export default function Cases() {
  return (
    <>
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-6">
          <h2 className="text-white font-bold text-5xl">Relatos de clientes</h2>
          <span className="text-gray-200 text-xl">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Carrosel de clientes */}

      {/* Principais clientes */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="mb-12">
            <PageTitle title="Parcerias bem sucedidas" />
          </div>

          {/* Depoimentos de clientes */}
          <div className="grid grid-cols-3 gap-8">
            <CustomerCase />
            <CustomerCase />
            <CustomerCase />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Todos clientes */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 flex flex-col gap-4">
              <PageTitle title="Nossos clientes" />
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                accusamus molestiae voluptatum recusandae atque, labore,
                deserunt quas mollitia saepe maiores, velit nihil earum. Quam ad
                aut cupiditate quod totam culpa.
              </Text>
            </div>
            <div className="flex flex-col justify-center items-end gap-2">
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
          <div className="grid grid-cols-3 gap-8 mt-12">
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
      <Container.Root backgroundColor="default" border="borderTop">
        <Container.Content className="flex flex-col items-center gap-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8 items-center">
            <PageTitle title="Venha ser nosso próximo cliente" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </Text>
          </div>
          <Button className="w-fit flex items-center justify-center gap-2">
            <span>Conheça no que atuamos</span>
            <ArrowRight className="text-secondary-main h-4 w-4" />
          </Button>
        </Container.Content>
      </Container.Root>
    </>
  )
}

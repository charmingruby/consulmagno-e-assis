import * as Container from '@/components/ui/container'
import { CustomerCase } from './components/customer-case'
import { PageTitle } from '@/components/page-title'
import { Box } from '@/components/ui/box'
import { Quote, User } from 'lucide-react'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

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
          {/* Depoimentos de clientes */}
          <div className="grid grid-cols-3 gap-8">
            <CustomerCase />
            <CustomerCase />
            <CustomerCase />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Todos clientes */}
      <Container.Root backgroundColor="default" border="borderY">
        <Container.Content>
          <PageTitle title="Nossos clientes" />
          {/* Listagem de clientes */}
          <div className="grid grid-cols-3">
            <Box>
              {/* Nome do cliente */}
              <div className="flex items-center gap-2">
                {/* Logo */}
                <div className="border-2 border-primary-main h-12 w-12 rounded-full flex items-center justify-center">
                  <User className="text-primary-main" />
                </div>

                {/* Nome */}
                <div className="flex flex-col">
                  <strong className="text-lg">Ymir</strong>
                  <small className="text-sm">Loja de Software</small>
                </div>
              </div>

              {/* Tags */}
              <div>
                <small>Direito civil</small>
              </div>

              <div>
                <Quote />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem eveniet eius impedit odio. Nulla perferendis
                  dignissimos eligendi similique incidunt magni dolore deserunt
                  illum. Deserunt quasi nesciunt sapiente consequuntur,
                  temporibus distinctio.
                </Text>
              </div>
            </Box>
          </div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="max-w-2xl mx-auto text-center">
            <PageTitle title="Venha ser nosso próximo cliente" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </Text>
            <Button>Conheça no que atuamos</Button>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

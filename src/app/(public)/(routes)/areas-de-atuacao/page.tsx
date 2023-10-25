import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { AreaList } from './components/area-list'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SearchBar } from './components/search-bar'

export default function AreasDeAtuaçao() {
  return (
    <>
      {/* Hero */}
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-6">
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
            <div className="grid grid-cols-2 w-full gap-2 mb-12">
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

      {/* Veja tambem */}
      <Container.Root backgroundColor="white" border="borderTop">
        <Container.Content className="text-center">
          <PageTitle title="Veja tambem" />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="default" border="borderTop">
        <Container.Content className="flex flex-col items-center gap-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8 items-center">
            <PageTitle title="Descubra o que falam de nós" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </p>
          </div>
          <Link href="/relatos" prefetch={false}>
            <Button className="w-fit flex items-center justify-center gap-2">
              <span>Conheça os relatos dos clientes</span>
              <ArrowRight className="text-secondary-main h-4 w-4" />
            </Button>
          </Link>
        </Container.Content>
      </Container.Root>
    </>
  )
}

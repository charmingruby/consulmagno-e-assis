import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { NameCard } from './components/name-card'

export default function AreasDeAtuaçao() {
  return (
    <>
      {/* HERO */}
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-6">
          <h2 className="text-white font-bold text-5xl">
            Conheça Nossas Áreas de Atuação
          </h2>
          <span className="text-gray-200 text-xl">
            Onde a Experiência e o Comprometimento se Encontram para Proteger
            Seus Interesses
          </span>
        </Container.Content>
      </Container.Root>

      {/* Áreas de Atuação */}
      <Container.Root>
        <Container.Content>
          <div className="grid grid-row">
            <div className="flex justify-center mb-12">
              <PageTitle title="Áreas de Atuação" />
            </div>
            <div className="grid grid-cols-4 gap-6 ">
              <NameCard name="Direito Civil" url="#" bg={true}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={false}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={true}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={false}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={false}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={true}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={false}></NameCard>
              <NameCard name="Direito Civil" url="#" bg={true}></NameCard>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Veja tambem */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <PageTitle title="Veja tambem" />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="white" border="borderTop">
        <Container.Content className="flex flex-col items-center gap-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8 items-center">
            <PageTitle title="Venha ver o que dizem sobre nós" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </p>
          </div>
          <Button className="w-fit flex items-center justify-center gap-2 bg-secondary-main ">
            <span className="text-white">Descubra os relatos dos clientes</span>
          </Button>
        </Container.Content>
      </Container.Root>
    </>
  )
}

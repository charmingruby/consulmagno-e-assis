import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { InfoService } from './componets/info-service'

interface AreaPageProps {
  params: { id: string }
}

export default function AreaPage({ params }: AreaPageProps) {
  const areaId = params.id

  return (
    <>
      {/* HERO */}
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="md:pt-24 flex flex-col items-start gap-6 pt-8">
          <h2 className="text-white font-bold md:text-5xl text-3xl">
            Conheça mais sobre {areaId}
          </h2>
        </Container.Content>
      </Container.Root>

      {/* Voltar */}
      <Container.Root className=" bg-secondary-main py-0 ">
        <Container.Content spacing="spaceless" className=" py-2">
          <div className="text-primary-main">
            <Link href={'#'} prefetch={false} className="flex gap-1 text-lg">
              <ArrowLeft className="h-4 w-4 self-center"></ArrowLeft>
              <span className="font-medium">Voltar para áreas de atuações</span>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Descrição */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <div className="grid grid-col-1 md:grid-cols-2 justify-center text-left gap-12">
            <div className="text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus fuga dolorum optio officiis a, maxime illum, magnam
              accusantium minima nobis recusandae incidunt, natus atque illo
              inventore perferendis nam unde ab? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aut sed, deleniti recusandae libero
              hic aliquid ratione. Provident dignissimos quis porro, quaerat
              sed, quibusdam error qui, consequuntur maiores cupiditate numquam
              deleniti.
            </div>
            <div className="font-bold text-2xl md:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              id suscipit voluptate libero est inventore laboriosam facilis
              numquam dolore placeat exercitationem atque, ex commodi
              perspiciatis quo tempore, ab cupiditate laudantium!
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
            <div className="flex flex-col gap-3">
              <InfoService
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              id suscipit voluptate libero est inventore laboriosam facilis
              numquam dolore placeat exercitationem atque, ex commodi
              perspic"
                name="direito"
              ></InfoService>
              <InfoService description=" " name="direito"></InfoService>
              <InfoService
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              id suscipit voluptate libero est inventore laboriosam facilis
              numquam dolore placeat exercitationem atque, ex commodi
              perspic"
                name="direito"
              ></InfoService>
            </div>
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

import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface AreaPageProps {
  params: { id: string }
}

export default function AreaPage({ params }: AreaPageProps) {
  const areaId = params.id

  return (
    <>
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="md:pt-24 flex flex-col items-start gap-6 pt-8">
          <h2 className="text-white font-bold md:text-5xl text-3xl">
            Conheça mais sobre {areaId}
          </h2>
        </Container.Content>
      </Container.Root>

      <Container.Root className=" bg-secondary-main py-0 ">
        <Container.Content spacing="spaceless" className=" py-2">
          <div className="text-primary-main">
            <Link href={'#'} prefetch={false} className="flex gap-1 ">
              <ArrowLeft></ArrowLeft>
              <span>Voltar</span>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>resoluçoes</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>serviços</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>area insights</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>

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

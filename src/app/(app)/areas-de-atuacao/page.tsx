import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'

export default function AreasDeAtuaçao() {
  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">hero</Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>
          <PageTitle title="Áreas de Atuação" />
        </Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>
          <PageTitle title="Veja tambem" />
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>cta para contato</Container.Content>
      </Container.Root>
    </>
  )
}

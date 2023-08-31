import * as Container from '@/components/ui/container'

interface AreaPageProps {
  params: { id: string }
}

export default function AreaPage({ params }: AreaPageProps) {
  const areaId = params.id

  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">
          hero informative - {areaId}
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

      <Container.Root>
        <Container.Content>cta para contato</Container.Content>
      </Container.Root>
    </>
  )
}

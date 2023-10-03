import * as Container from '@/components/ui/container'

export default function Blog() {
  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">hero pequena</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>Post mais recente</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>Blog com filtro</Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>Carregar mais</Container.Content>
      </Container.Root>
    </>
  )
}

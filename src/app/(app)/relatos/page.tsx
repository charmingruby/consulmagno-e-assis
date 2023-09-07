import * as Container from '@/components/ui/container'

export default function Cases() {
  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">hero</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>carrosel</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>destaque de clientes</Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>todos clientes</Container.Content>
      </Container.Root>
    </>
  )
}

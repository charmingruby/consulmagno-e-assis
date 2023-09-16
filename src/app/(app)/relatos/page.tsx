import * as Container from '@/components/ui/container'

export default function Cases() {
  return (
    <>
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-4">
          <h2 className="text-white font-bold text-4xl">Relatos de clientes</h2>
          <span className="text-gray-200 text-lg">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
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

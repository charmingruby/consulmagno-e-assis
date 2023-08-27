import * as Container from '@/components/ui/container'

interface PostPageProps {
  params: { id: string }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">
          hero com foto do post e suas informaçoes - {params.id}
        </Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>conteudo</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>categorias do post</Container.Content>
      </Container.Root>

      <Container.Root border="borderless">
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>
    </>
  )
}

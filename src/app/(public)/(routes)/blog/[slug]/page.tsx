import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <>
      <Container.Root border="borderBottom">
        <Container.Content className="pt-24">
          hero com foto do post e suas informaçoes - {params.slug}
        </Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>conteudo</Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content>categorias do post</Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Converse Conosco Agora
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Pronto para resolver suas questões legais? Clique aqui para iniciar
            uma conversa e contar com a nossa experiência e comprometimento.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="Entre em contato" url="/contato" />
      </CTA.Root>
    </>
  )
}

import { PageTitle } from '@/components/page-title'
import { SectionDescriptor } from '@/components/section-descriptor'
import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AreaList } from './area-list'

export function Areas() {
  return (
    <div className="border-t border-gray-200 py-12">
      <Container>
        <div className="mb-10">
          <div className="flex flex-col gap-2 mb-4">
            <SectionDescriptor label="Nós oferecemos o que você precisa" />
            <PageTitle title="Áreas de atuação" />
          </div>
          <Text>
            Nossa equipe de advogados comprometidos entende a importância do seu
            caso. Com experiência em várias áreas de atuação, o(a) Brand lidará
            com seus problemas legais com cuidado e profissionalismo.
          </Text>
        </div>

        <AreaList />

        <div className="w-full flex justify-center mt-4">
          <Button>
            <div className="flex gap-2 items-center">
              Ver todas as áreas
              <ArrowRight size={18} className="text-secondary-main" />
            </div>
          </Button>
        </div>
      </Container>
    </div>
  )
}

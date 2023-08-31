import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AreaList } from './area-list'
import { PageTitle } from '@/components/shared/page-title'

export function Areas() {
  return (
    <Container.Root border="borderY">
      <Container.Content>
        <div className="mb-10 flex flex-col items-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <PageTitle title="Áreas de atuação" />
          </div>
          <Text align="center">
            Nossa equipe de advogados comprometidos entende a importância do seu
            caso. Com experiência em várias áreas de atuação, o(a) Brand lidará
            com seus problemas legais com cuidado e profissionalismo.
          </Text>
        </div>

        <AreaList />

        <div className="w-full flex justify-center mt-6">
          <Button>
            <div className="flex gap-2 items-center">
              Ver todas as áreas
              <ArrowRight size={18} className="text-secondary-main" />
            </div>
          </Button>
        </div>
      </Container.Content>
    </Container.Root>
  )
}

import * as Container from '@/components/ui/container'
import { EmailForm } from './email-form'
import { PageTitle } from '@/components/shared/page-title'
import { Subtitle } from '@/components/shared/subtitle'

export function Contact() {
  return (
    <Container.Root border="borderless" className="flex flex-row">
      {/* Right */}
      <div className="flex-1">
        <Container.Content>
          <div className="mb-8 flex flex-col gap-4">
            <PageTitle title="Conecte-se Conosco" />
            <Subtitle text="Precisa de ajuda com algo? Entre em contato com nosso time e retornaremos em menos de 2 horas." />
          </div>

          <EmailForm />
        </Container.Content>
      </div>
    </Container.Root>
  )
}

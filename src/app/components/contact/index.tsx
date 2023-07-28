import { Container } from '@/components/ui/container'
import { EmailForm } from './email-form'
import { PageTitle } from '@/components/page-title'
import { Subtitle } from '@/components/subtitle'

export function Contact() {
  return (
    <section className="flex flex-row border-t border-gray-200">
      {/* Right */}
      <div className="flex-1 py-12">
        <Container>
          <div className="mb-8 flex flex-col gap-4">
            <PageTitle title="Conecte-se Conosco" />
            <Subtitle text="Precisa de ajuda com algo? Entre em contato com nosso time e retornaremos em menos de 2 horas." />
          </div>

          <EmailForm />
        </Container>
      </div>
    </section>
  )
}

import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { EmailForm } from './components/email-form'
import { MeanItem } from './components/mean-item'
import { AtSign, Instagram, Mails, Phone, Pin } from 'lucide-react'
import { PageTitle } from '@/components/page-title'
import { Box } from '@/components/ui/box'

export default function Contact() {
  return (
    <>
      <Container.Root className=" min-h-screen flex flex-col justify-center pt-8">
        <Container.Content className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-main">
              Entre em <strong className="text-secondary-main">Contato</strong>
            </h2>
            <Text opacity="low" className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sequi, commodi minus incidunt sunt recusandae ut? Asperiores quis
              aperiam vero doloribus, harum eligendi. Ipsa recusandae, eum
              placeat ducimus non a?
            </Text>

            <div className="mt-12 flex flex-col gap-4">
              <MeanItem content="ymir@email.com" icon={AtSign} url="/" />
              <MeanItem content="(32) 9 9999-9999" icon={Phone} url="/" />
              <MeanItem content="/user" icon={Instagram} url="/" />
            </div>
          </div>

          <div className="flex flex-col justify-center w-full gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Mails />
              <h3 className="font-medium text-lg">Nos envie uma mensagem</h3>
            </div>
            <EmailForm />
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <Pin className="text-secondary-main h-8 w-8 mb-4" />
            <div className="flex flex-col gap-4 mb-12">
              <PageTitle title="Nossas localidades" />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem doloremque consequuntur explicabo, possimus
                blanditiis odit commodi dicta provident dolorum aliquid ut
                dolor, alias illo odio voluptas quis quae tenetur hic!
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <Box>office</Box>
            <Box>remote</Box>
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>
          <div>content</div>
          <div>options</div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

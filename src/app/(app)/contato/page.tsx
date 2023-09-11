import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { EmailForm } from './components/email-form'
import { MeanItem } from './components/mean-item'
import { AtSign } from 'lucide-react'
import { PageTitle } from '@/components/page-title'

export default function Contact() {
  return (
    <>
      <Container.Root
        border="borderBottom"
        className=" min-h-screen flex flex-col justify-center"
      >
        <Container.Content className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <PageTitle title="Entre em contato" />
            <Text opacity="low" className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sequi, commodi minus incidunt sunt recusandae ut? Asperiores quis
              aperiam vero doloribus, harum eligendi. Ipsa recusandae, eum
              placeat ducimus non a?
            </Text>

            <div className="mt-12 flex flex-col gap-4">
              <MeanItem content="ymir@email.com" icon={AtSign} url="/" />
              <MeanItem content="ymir@email.com" icon={AtSign} url="/" />
              <MeanItem content="ymir@email.com" icon={AtSign} url="/" />
            </div>
          </div>

          <div className="flex items-center w-full">
            <EmailForm />
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>
    </>
  )
}

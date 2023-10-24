import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { EmailForm } from './components/email-form'
import { MeanItem } from './components/mean-item'
import {
  ArrowRight,
  AtSign,
  Building,
  Globe2,
  Instagram,
  Mails,
  Phone,
} from 'lucide-react'
import { PageTitle } from '@/components/page-title'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Container.Root className=" min-h-screen flex flex-col justify-center pt-16 bg-white">
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
              <MeanItem
                content="contato@consulmagnoassis.com"
                icon={AtSign}
                url="mailto:contato@consulmagnoassis.com"
              />
              <MeanItem
                content="(32)9 8834-4973"
                icon={Phone}
                url="https://wa.me/5532988344973?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os"
              />
              <MeanItem
                content="/consulmagnoassisadv"
                icon={Instagram}
                url="https://www.instagram.com/consulmagnoassisadv/"
              />
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

      <Container.Root backgroundColor="default" border="borderY">
        <Container.Content>
          <div className="grid grid-cols-1 gap-4 mb-12">
            <PageTitle title="Nossas localidades" />

            <Text opacity="low">Atendemos quando e onde voce quiser.</Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Office option */}
            <Box className="flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Building className="w-8 h-8 text-secondary-main" />
                <strong className="font-semibold text-primary-main text-2xl">
                  Escritorio
                </strong>
              </div>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                veniam, eveniet vitae harum eos deleniti numquam molestias
                exercitationem omnis nam expedita repellendus mollitia quasi est
                suscipit quam dicta corporis error?
              </Text>
              <Link
                target="_blank"
                prefetch={false}
                href="https://www.google.com.br/maps/place/Av.+Bar%C3%A3o+do+Rio+Branco,+1871+-+Sala+613+-+Centro,+Juiz+de+Fora+-+MG,+41615-001/@-21.7583388,-43.3502574,17z/data=!3m1!4b1!4m6!3m5!1s0x989c9f39f31b85:0xfe746fb5fc325d6c!8m2!3d-21.7583388!4d-43.3502574!16s%2Fg%2F11s4g2t3vk?entry=ttu"
              >
                <Button className="w-full">Localização</Button>
              </Link>
            </Box>

            {/* Remote */}
            <Box className="bg-primary-main flex flex-col gap-8 hover:bg-primary-main/90 transition-colors">
              <div className="flex items-center gap-2">
                <Globe2 className="text-gray-50 w-8 h-8" />
                <strong className="font-semibold text-gray-50 text-2xl">
                  Remoto
                </strong>
              </div>
              <Text className="text-gray-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                veniam, eveniet vitae harum eos deleniti numquam molestias
                exercitationem omnis nam expedita repellendus mollitia quasi est
                suscipit quam dicta corporis error?
              </Text>
              <Link
                target="_blank"
                href="https://wa.me/5532988344973?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os"
                prefetch={false}
              >
                <Button color="secondary" className="w-full">
                  Contato
                </Button>
              </Link>
            </Box>
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="max-w-2xl mx-auto flex flex-col md:items-center gap-12">
            <PageTitle title="Conheça nossos serviços" />
            <Text className="md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              cum! Ut dolores mollitia odit ea culpa harum eveniet voluptate,
              cum et repellendus eaque expedita deleniti vel ipsum autem
              blanditiis illum.
            </Text>
            <Link href="/areas-de-atuacao" prefetch={false}>
              <Button className="flex gap-2 items-center justify-center w-full md:w-fit">
                <span>Ver tudo</span>
                <ArrowRight className="h-4 w-4 text-secondary-main" />
              </Button>
            </Link>
          </div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

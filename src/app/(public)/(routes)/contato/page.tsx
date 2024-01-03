import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { EmailForm } from './components/email-form'
import { MeanItem } from './components/mean-item'
import { AtSign, Building, Globe2, Instagram, Mails, Phone } from 'lucide-react'
import { PageTitle } from '@/components/page-title'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { generateStaticSeo } from '@/components/seo/static'
import { Socials } from '@/components/cta/socials'
import { email, mapLink, whatsappLink } from '@/site'

export const metadata = generateStaticSeo({
  rawTitle: 'Contato',
  description:
    'Precisa de assistência jurídica? Entre em contato conosco para uma consultoria personalizada. Nossa equipe especializada está pronta para ajudar. Fale conosco agora!',
})

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
              Entre em contato conosco hoje mesmo e dê o primeiro passo para
              encontrar a solução que você precisa. Nossa equipe está disponível
              para oferecer orientação personalizada e suporte especializado.
            </Text>

            <div className="mt-12 flex flex-col gap-4">
              <MeanItem content={email} icon={AtSign} url={`mailto:${email}`} />
              <MeanItem
                content="(32) 99138-6324"
                icon={Phone}
                url={whatsappLink}
              />
              <MeanItem
                content="@  consulmagnoassisadv"
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
              <Link target="_blank" prefetch={false} href={mapLink}>
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
              <Link target="_blank" href={whatsappLink} prefetch={false}>
                <Button color="secondary" className="w-full">
                  Contato
                </Button>
              </Link>
            </Box>
          </div>
        </Container.Content>
      </Container.Root>

      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Nos diga como podemos te ajudar
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            O escritório Consulmagno e Assis Advocacia está preparado para lhe
            oferecer a solução jurídica mais adequada ao seu caso, buscando
            construir possibilidades jurídicas baseadas no que há de mais
            atualizado no cenário jurídico nacional. Como podemos lhe auxiliar?
          </Text>
        </div>

        <Socials></Socials>
      </CTA.Root>
    </>
  )
}

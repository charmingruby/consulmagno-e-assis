import { SectionDescriptor } from '@/components/section-descriptor'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Hero() {
  return (
    <section className="">
      <div className="hero-img h-screen py-16 sm:py-0 bg-no-repeat bg-center bg-fixed">
        {/* Overlay */}
        <div className="flex items-center absolute inset-0 bg-[#000]/70 z-[2] bg-fixed" />
        <Container>
          <div className="z-10 absolute md:max-w-2xl flex flex-col justify-center h-screen ">
            <SectionDescriptor
              label="
              Advogados trabalhistas e criminais"
              primary={false}
            />
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0 text-4xl mb-4">
              Defesa Legal em Suas Mãos: Advocacia Especializada e Comprometida
              com seus Direitos
            </h1>

            <p className="text-gray-100 text-lg mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, sapiente qui asperiores deserunt exercitationem impedit
              nam quas molestiae eligendi sed neque quae repellat iste quaerat
              dolorem quo non facilis distinctio.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Button color="secondary">Soluções</Button>
              <Button color="uncolored">Entre em contato</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

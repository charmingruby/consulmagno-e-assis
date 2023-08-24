import { SectionDescriptor } from '@/components/shared/section-descriptor'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Hero() {
  return (
    <section className="hero-img flex items-center py-16 sm:py-0 bg-no-repeat bg-center bg-fixed md:min-h-screen">
      <Container>
        <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center ">
          <SectionDescriptor
            label="
              Advogados trabalhistas e criminais"
            primary={false}
          />
          {/* Title */}
          <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-4xl mb-4 break-words">
            Defesa Legal em Suas Mãos: Advocacia Especializada e Comprometida
            com seus Direitos
          </h1>

          <p className="text-gray-100 text-lg mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            sapiente qui asperiores deserunt exercitationem impedit nam quas
            molestiae eligendi sed neque quae repellat iste quaerat dolorem quo
            non facilis distinctio.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button color="secondary">Soluções</Button>
            <Button color="uncolored">Entre em contato</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

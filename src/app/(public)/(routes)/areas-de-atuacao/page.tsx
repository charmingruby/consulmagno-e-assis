import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { NameCard } from './components/name-card'
import {
  Briefcase,
  DollarSign,
  Lock,
  Home,
  Heart,
  Globe,
  ShoppingBag,
  Clipboard,
  File,
  Umbrella,
  Monitor,
  PenTool,
  Vote,
  Map,
  Star,
  ArrowRight,
} from 'lucide-react'

export default function AreasDeAtuaçao() {
  return (
    <>
      {/* HERO */}
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-6">
          <h2 className="text-white font-bold text-5xl">
            Conheça Nossas Áreas de Atuação
          </h2>
          <span className="text-gray-200 text-xl">
            Onde a Experiência e o Comprometimento se Encontram para Proteger
            Seus Interesses
          </span>
        </Container.Content>
      </Container.Root>

      {/* Áreas de Atuação */}
      <Container.Root>
        <Container.Content>
          <div className="grid grid-row">
            <div className="flex justify-center mb-12">
              <PageTitle title="Áreas de Atuação" />
            </div>
            <div className="grid grid-cols-4 gap-6 ">
              <NameCard
                name="Direito do Trabalho"
                url="#"
                icon={<Briefcase />}
              ></NameCard>

              <NameCard
                name="Direito Tributário"
                url="#"
                icon={<DollarSign />}
              ></NameCard>

              <NameCard name="Direito Penal" url="#" icon={<Lock />}></NameCard>

              <NameCard
                name="Direito Empresarial"
                url="#"
                icon={<Briefcase />}
              ></NameCard>

              <NameCard
                name="Direito Ambiental"
                url="#"
                icon={<Globe />}
              ></NameCard>

              <NameCard
                name="Direito de Família"
                url="#"
                icon={<Heart />}
              ></NameCard>

              <NameCard
                name="Direito Imobiliário"
                url="#"
                icon={<Home />}
              ></NameCard>

              <NameCard
                name="Direito Previdenciário"
                url="#"
                icon={<Umbrella />}
              ></NameCard>

              <NameCard
                name="Direito do Consumidor"
                url="#"
                icon={<ShoppingBag />}
              ></NameCard>

              <NameCard
                name="Direito Administrativo"
                url="#"
                icon={<Clipboard />}
              ></NameCard>

              <NameCard
                name="Direito Contratual"
                url="#"
                icon={<File />}
              ></NameCard>

              <NameCard
                name="Direito Internacional"
                url="#"
                icon={<Map />}
              ></NameCard>

              <NameCard
                name="Direito da Saúde"
                url="#"
                icon={<Star />}
              ></NameCard>

              <NameCard
                name="Direito Eleitoral"
                url="#"
                icon={<Vote />}
              ></NameCard>

              <NameCard
                name="Direito da Tecnologia da Informação"
                url="#"
                icon={<Monitor />}
              ></NameCard>

              <NameCard
                name="Direito de Propriedade Intelectual"
                url="#"
                icon={<PenTool />}
              ></NameCard>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Veja tambem */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <PageTitle title="Veja tambem" />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root backgroundColor="default" border="borderTop">
        <Container.Content className="flex flex-col items-center gap-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8 items-center">
            <PageTitle title="Descubra o que falam de nós" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo eius enim illum, dolorem nulla nesciunt quaerat ab. Quod
              natus exercitationem quis, consequatur eaque sint earum quia
              incidunt labore ea eos.
            </p>
          </div>
          <Button className="w-fit flex items-center justify-center gap-2">
            <span>Conheça os relatos dos clientes</span>
            <ArrowRight className="text-secondary-main h-4 w-4" />
          </Button>
        </Container.Content>
      </Container.Root>
    </>
  )
}

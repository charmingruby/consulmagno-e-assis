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
  const itens = [
    { name: 'do Trabalho', url: '#', icon: Briefcase },
    { name: 'Tributário', url: '#', icon: DollarSign },
    { name: 'Penal', url: '#', icon: Lock },
    { name: 'Empresarial', url: '#', icon: Briefcase },
    { name: 'Ambiental', url: '#', icon: Globe },
    { name: 'de Família', url: '#', icon: Heart },
    { name: 'Imobiliário', url: '#', icon: Home },
    { name: 'Previdenciário', url: '#', icon: Umbrella },
    { name: 'do Consumidor', url: '#', icon: ShoppingBag },
    { name: 'Administrativo', url: '#', icon: Clipboard },
    { name: 'Contratual', url: '#', icon: File },
    { name: 'Internacional', url: '#', icon: Map },
    { name: 'da Saúde', url: '#', icon: Star },
    { name: 'Eleitoral', url: '#', icon: Vote },
    { name: 'da Tecnologia da Informação', url: '#', icon: Monitor },
    { name: 'de Propriedade Intelectual', url: '#', icon: PenTool },
  ]

  return (
    <>
      {/* HERO */}
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="md:pt-24 flex flex-col items-center gap-6 pt-8">
          <h2 className="text-white font-bold md:text-5xl text-3xl">
            Conheça Nossas Áreas de Atuação
          </h2>
          <span className="text-gray-200 text-lg md:text-xl">
            Onde a Experiência e o Comprometimento se Encontram para Proteger
            Seus Interesses
          </span>
        </Container.Content>
      </Container.Root>

      {/* Áreas de Atuação */}
      <Container.Root backgroundColor="white">
        <Container.Content className="">
          <div className="grid grid-row">
            <div className="flex justify-center mb-12">
              <PageTitle title="Áreas de Atuação" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ">
              {itens.map(({ name, url, icon }, index) => (
                <NameCard name={name} url={url} icon={icon} key={index} />
              ))}
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Veja tambem */}
      <Container.Root backgroundColor="white">
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

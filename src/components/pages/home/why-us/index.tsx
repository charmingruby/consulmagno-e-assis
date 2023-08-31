import * as Container from '@/components/ui/container'
import { ReasonCard } from './reason-card'

export function WhyUs() {
  return (
    <Container.Root className="w-full bg-white">
      <Container.Content>
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <h2 className="text-4xl font-bold text-primary-main">
              Por que escolher a Brand?
            </h2>
            <p className="leading-relaxed text-gray-400">
              Somos parceiros e protegemos nossos clientes em todo o mundo.
              Nossos profissionais são especializados em mais de 30 áreas do
              direito.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReasonCard />
          <ReasonCard />
          <ReasonCard />
        </div>
      </Container.Content>
    </Container.Root>
  )
}

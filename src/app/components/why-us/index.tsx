import { Container } from '@/components/ui/container'
import { ReasonCard } from './reason-card'

export function WhyUs() {
  return (
    <section className="py-12 w-full bg-gray-75">
      <Container>
        <div className="w-full flex justify-center mb-8">
          <h2 className="text-4xl font-bold text-primary-main">
            Por que escolher a Brand?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReasonCard />
          <ReasonCard />
          <ReasonCard />
        </div>
      </Container>
    </section>
  )
}

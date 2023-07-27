import { Container } from '@/components/ui/container'

export function Hero() {
  return (
    <section className="">
      <div className="hero-img h-screen py-16  bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000]/70 z-[2]" />
        <Container>
          <div className="text-gray-50 z-10 absolute">content</div>
        </Container>
      </div>
    </section>
  )
}

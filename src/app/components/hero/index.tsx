import { SectionDescriptor } from '@/components/section-descriptor'
import { Container } from '@/components/ui/container'

export function Hero() {
  return (
    <section className="">
      <div className="hero-img h-screen py-16  bg-center bg-fixed">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000]/70 z-[2]" />
        <Container>
          <div className="z-10 absolute">
            <SectionDescriptor label="ddddddddddddddddddd" primary={false} />
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0">content</h1>
          </div>
        </Container>
      </div>
    </section>
  )
}

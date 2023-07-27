import { Container } from '@/components/ui/container'

export function Contact() {
  return (
    <section className="bg-primary-main min-h-screen border-t border-gray-200 ">
      <Container>
        <div className="py-12 grid grid-cols-2">
          {/* Contact Infos */}
          <div>Contact infos</div>
          {/* Contact Form */}
          <div>Contact form</div>
        </div>
      </Container>
    </section>
  )
}

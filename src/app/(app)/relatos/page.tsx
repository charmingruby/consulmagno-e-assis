import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Cases() {
  return (
    <>
      <Container.Root className="pt-16 bg-primary-gradient">
        <Container.Content className="pt-24 flex flex-col items-center gap-4">
          <h2 className="text-white font-bold text-4xl">Relatos de clientes</h2>
          <span className="text-gray-200 text-lg">
            Veja nossa qualidade atraves dos nossos clientes
          </span>
        </Container.Content>
      </Container.Root>

      {/* Carrosel de clientes */}
      <Container.Root>
        <Container.Content>
          {/* Clientes */}
          <div></div>
        </Container.Content>
      </Container.Root>

      {/* Principais clientes */}
      <Container.Root>
        <Container.Content>
          {/* Depoimentos de clientes */}
          <div>
            {/* Card */}
            <div>
              {/* Header */}
              <div>
                {/* Logo */}
                <Image src={'/'} alt="" />
                <div>
                  <strong>Cliente</strong>
                  <ArrowRight />
                </div>
              </div>

              <div>
                {/* Titulo */}
                <strong>
                  Como `Marca` ajudou na resoluçao dos problemas civis bla bla
                </strong>
                {/* Explicaçao */}
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique animi perspiciatis et blanditiis aut. Eligendi
                  maxime doloremque praesentium eius minima. Tenetur illo quos
                  sit corporis sapiente eius fuga in laudantium.
                </Text>
              </div>

              <footer>
                {/* Areas de ajuda */}
                <div></div>
              </footer>
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Todos clientes */}
      <Container.Root>
        <Container.Content>
          {/* Listagem de clientes */}
          <div></div>
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <Container.Root>
        <Container.Content>
          <div>Venha ser nosso cliente</div>
        </Container.Content>
      </Container.Root>
    </>
  )
}

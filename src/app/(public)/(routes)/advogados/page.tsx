/**
 * Internal
 */
import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import { Text } from '@/components/ui/text'
import { Gem, Users } from 'lucide-react'
import { AreaCard } from './components/area-card'
import * as CTA from '@/components/cta'
import { generateStaticSeo } from '@/components/seo/static'
import PauloImg from '@/assets/team/Paulo 01.png'
import LucasImg from '@/assets/team/Lucas 02.png'
import heroImg from '@/assets/team/hero.png'
import TarikImg from '@/assets/team/Tarik 01.png'
import Image from 'next/image'

export const metadata = generateStaticSeo({
  rawTitle: 'Advogados',
  description:
    'Conheça nossa equipe de advogados em Juiz de Fora. Profissionais experientes e dedicados em diversas áreas do direito. Atendimento personalizado e soluções jurídicas inovadoras para nossos clientes.',
})

export default function Team() {
  return (
    <>
      {/* Foto da equipe com uma texto */}
      <Container.Root className="relative flex items-center sm:py-16 md:h-screen">
        <Image
          src={heroImg}
          className="absolute bg-no-repeat object-center object-cover object-fixed h-screen z-10"
          alt="Foto da equipe"
          priority
          quality={100}
        />

        <div className="absolute h-full w-full bg-black z-20 opacity-60" />

        <Container.Content className="z-30">
          <div className="z-10 mt-16 sm:mt-0 w-full flex flex-col justify-center">
            <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-5xl mb-6 break-words">
              Nossa equipe de advogados{' '}
            </h1>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Mostrar membros do time com foto */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="flex flex-col gap-4">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <Users className="text-secondary-main h-8 w-8 mb-4" />
              <PageTitle title="Conheça nossa equipe" />
            </div>
            <div className="flex flex-col gap-2">
              <Text className="text-center">
                Nossos profissionais são altamente capacitados e especializados
                para entender as suas demandas e oferecerem a solução ideal para
                você. Acreditamos que cada pessoa é única e por isso, oferecemos
                um atendimento personalíssimo, humano e diferenciado para cada
                cliente, sem perder de vista o comprometimento e a qualidade.
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <LayerCard
              avatarUrl={PauloImg}
              description="Paulo Renato é sócio fundador do Consulmagno e Assis Advocacia e responsável pelas áreas de Direito Empresarial, Societário e Tributário. É mestrando em Direito e Inovação pela UFJF (Universidade Federal de Juiz de Fora) na área de Direito Tributário, possui o título de LLM (Latin Legum Magister) em Direito Empresarial pela Fundação Getúlio Vargas (FGV - Rio de Janeiro), além de ser especialista em Processo Civil, Negociação e Arbitragem.
              Também atua como Procurador da Legislativo, e é Professor das disciplinas de Direito Tributário e Financeiro em Cursos Preparatórios para Concursos.
              É membro da Comissão de Direito Empresarial da OAB/JF."
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/adv.pauloassis/"
              linkedinUrl="https://www.linkedin.com/in/paulo-renato-assis/"
              name="Paulo Renato Rodrigues Assis"
              role="Sócio"
              areas={[
                {
                  label: 'Direito Empresarial / Societário',
                  url: '/areas-de-atuacao/societario-e-m-a',
                },
                {
                  label: 'Direito Tributário ',
                  url: '/areas-de-atuacao/direito-tributario',
                },
              ]}
            />

            <LayerCard
              avatarUrl={LucasImg}
              description="Lucas é sócio fundador do Consulmagno e Assis Advocacia e responsável pelas áreas de Direito Civil, Consumidor e Administrativo. Atuante na Advocacia há mais de 9 anos, é Mestre em Direito pela UCP – RJ, professor de Pós-Graduação e Graduação das disciplinas de Processo Civil, Direito Empresarial e Direito Tributário, foi Procurador Geral Municipal e é autor de diversos artigos científicos."
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/lucas_consulmagno/"
              name="Lucas Goulart Consulmagno Prata"
              role="Sócio"
              areas={[
                {
                  label: 'Direito civil',
                  url: '/areas-de-atuacao/direito-civil',
                },
                {
                  label: 'Direito Consumidor',
                  url: '/areas-de-atuacao/direito-do-consumidor',
                },
                {
                  label: 'Direito Administrativo ',
                  url: '/areas-de-atuacao/direito-administrativo',
                },
              ]}
            />

            <LayerCard
              avatarUrl={TarikImg}
              description="Tárik é advogado associado, responsável pelas áreas de Direito do Trabalho e Imobiliário. Possui Pós-Graduação em Planejamento Tributário, e possui graduação em Gestão Financeira."
              emailUrl=" contato@consulmagnoassis.com"
              instagramUrl="https://www.instagram.com/tarikbellini/ "
              linkedinUrl="https://www.linkedin.com/in/t%C3%A1rik-bellini-89ab92174/"
              name="Tárik Bellini Pereira do Valle"
              role="Advogado Associado "
              areas={[
                {
                  label: 'Direito do Trabalho',
                  url: '/areas-de-atuacao/direito-do-trabalho',
                },
                {
                  label: 'Direito imobiliario',
                  url: '/areas-de-atuacao/direito-imobiliario',
                },
              ]}
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Algumas areas de atuaçao imprescindiveis para novos trabalhadores */}
      <Container.Root backgroundColor="white">
        <Container.Content className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col  gap-4 max-w-2xl">
            <div className="flex flex-col items-center text-center gap-1 md:gap-2">
              <Gem className="text-secondary-main h-8 w-8"></Gem>
              <PageTitle title="Valores imprescindíveis"></PageTitle>
            </div>
            <div className="flex flex-col gap-2">
              <Text className="text-center">
                No nosso escritório, acreditamos que soluções jurídicas
                adequadas, são essenciais para o crescimento e o sucesso de
                nossos clientes. Perseguimos a excelência e a qualidade em nosso
                serviço sem renunciar aos nossos valores.
              </Text>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AreaCard
                name="Pessoalidade"
                description="Acreditamos que pessoas se conectam com pessoas, buscamos prestar nosso serviço de forma mais pessoal e humanizada possível, nos aproximando de nossos clientes."
              />
              <AreaCard
                name="Qualidade"
                description="Somos pautados por elevado nível de qualidade técnica, estamos sempre em busca de aperfeiçoamento profissional e delimitamos um alto patamar de qualidade em nosso escritório."
              />
              <AreaCard
                name="Disponibilidade"
                description="O tempo é um bem escasso e todos querem resolver suas demandas de forma célere. Buscamos estar sempre disponíveis em situações ordinárias e em emergências para auxiliar nossos clientes."
              />
              <AreaCard
                name="Ética"
                description="Acreditamos que a Ética deve permear todo trabalho realizado e nas relações com clientes e terceiros. 
                "
              />
              <AreaCard
                name="Comprometimento"
                description="Nos comprometemos com nossos clientes e suas demandas, identificando em seus problemas os nossos problemas.
                "
              />
              <AreaCard
                name="Empatia"
                description="O cliente não é mero consumidor do nosso serviço muito menos um número. Buscamos compreender o sentimento que o outro está vivendo."
              />
            </div>
          </div>
        </Container.Content>
      </Container.Root>

      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Destaques Exclusivos em Nosso Blog!
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Acesse agora nosso Blog para conteúdos valiosos e exclusivos, e em
            casa de dúvidas não perca tempo e entre em contato imediatamente
            conosco.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="blog" url="/blog" />
      </CTA.Root>
    </>
  )
}

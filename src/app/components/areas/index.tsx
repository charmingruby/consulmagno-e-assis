import { PageTitle } from '@/components/page-title'
import { SectionDescriptor } from '@/components/section-descriptor'
import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { AreaItem } from './area-item'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Areas() {
  return (
    <div className="border-t border-gray-200 py-12">
      <Container>
        <div className="mb-6">
          <div className="flex flex-col gap-2 mb-4">
            <SectionDescriptor label="Nós oferecemos o que você precisa" />
            <PageTitle title="Áreas de atuação" />
          </div>
          <Text>
            Nossa equipe de advogados comprometidos entende a importância do seu
            caso. Com experiência em várias áreas de atuação, o(a) Brand lidará
            com seus problemas legais com cuidado e profissionalismo.
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <AreaItem
            description="objetivo de orientar, revisar e corrigir procedimentos trabalhistas dentro das empresas, visando diminuir o risco trabalhista."
            subtitle="Atuação em empresas"
            title="Direito do Trabalho"
            url="/"
          />
          <AreaItem
            description="Elaboração e negociação de contratos empresariais, incluindo contratos de compra e venda de participação societária, acordos de investimento, acordos de acionistas ou de quotistas, contratos de opção de compra e venda (put/call options), memorando de entendimentos, entre outros."
            subtitle="Contratos empresariais"
            title="Direito Societário e M&A"
            url="/"
          />
          <AreaItem
            description="Atuação contencioso judicial e extrajudicial (PROCON e outros órgãos), com a preparação e acompanhamento de medidas judiciais e extrajudiciais, tanto para pessoas físicas quanto para pessoas jurídicas."
            subtitle="Análise de contratos"
            title="Direito Civil e Consumeirista"
            url="/"
          />
          <AreaItem
            description="Prestamos assessoria na elaboração de planos de sucessão, visando a garantir e disciplinar a transmissão e partilha do patrimônio aos herdeiros."
            subtitle="Elaboração de planos de sucessão"
            title="Direito Sucessório e Planejamento Patrimonial"
            url="/"
          />
          <AreaItem
            description="Suporte na participação de licitações e na execução de contratos administrativos para clientes."
            subtitle="Contratos administrativos"
            title="Direito Administrativo"
            url="/"
          />
          <AreaItem
            description="Prestamos assessoria jurídica para pessoas físicas interessadas em negócios imobiliários, em especial, análise e elaboração de contratos, como locação, compra e venda e outros."
            subtitle="Locação, compra e venda e outros."
            title="Direito Imobiliário"
            url="/"
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <Button>
            <div className="flex gap-2 items-center">
              Ver todas as áreas
              <ArrowRight size={18} className="text-secondary-main" />
            </div>
          </Button>
        </div>
      </Container>
    </div>
  )
}

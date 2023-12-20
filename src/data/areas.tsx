import {
  AtSign,
  Binary,
  Briefcase,
  DollarSign,
  HeartHandshake,
  HomeIcon,
  Landmark,
  Shield,
  ShoppingBag,
  User,
  Users,
} from 'lucide-react'
import { ElementType } from 'react'

export interface Area {
  slug: string
  name: string
  offer: string
  action: string
  services: string[]
  icon: ElementType
}

export const areas: Area[] = [
  {
    slug: 'societario-e-m-a',
    name: 'Societário e M&A ',
    icon: Briefcase,
    offer:
      'Dados do IBGE provam que mais de 60% das empresas encerram suas atividades antes de completarem 5 anos, e os principais motivos são a falta de planejamento prévio, gestão empresarial e litígios societários',
    action:
      'Elaboramos contratos empresariais que asseguram o andamento da empresa, evitando conflitos societários e a falência do empreendimento, dentre eles contrato de compra e venda de participação societária, acordos de investimento, acordos de sócios, contratos de opção de compra e venda (put/call options), memorando de entendimentos (MoU), acordos de confidencialidade NDA, trespasse e outros.      ',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-civil',
    name: 'Direito Civil',
    icon: HeartHandshake,
    offer:
      'Direito Civil é o maior ramo de direito privado, envolvendo temas como contratos, capacidade civil, negócios jurídicos, obrigações, propriedade, família, sucessões. Por ano são ajuizadas aproximadamente 8.000.000 (oito milhões) de novos processos.',
    action:
      'Elaboramos e analisamos contratos civis que conferem segurança jurídica às partes envolvidas, como contratos de prestação de serviços, comodato, mútuo compra e venda, empreitada, doação, dentre outros',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-do-consumidor',
    name: 'Direito do Consumidor',
    icon: User,
    offer:
      'Todas as pessoas são consumidores em potencial, de bens e serviços, sendo o Direito do Consumidor um sub-ramo do Direito Civil, que dispõe especificamente sobre as relações de consumo. Por ano, são ajuizados por ano 6.500.000 novos processos envolvendo relações de consumo.',
    action:
      'Assessoramos empresas a fim de evitar despesas financeiras e de tempo ocasionadas por demandas consumeristas, de forma preventiva, elaborando contratos, termos e outros documentos. Também atuamos junto aos órgãos de proteção ao consumidor como PROCON e Ministério Público.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'planejamento-sucessorio-epatrimonial',
    name: 'Planejamento Sucessório e Patrimonial',
    icon: ShoppingBag,
    offer:
      'É comum que com o falecimento de membros da família, ocorram disputas pelos bens deixados ou dúvidas acerca da continuidade da administração desses bens. A título de exemplo, empresas familiares representam 90% dos empreendimentos em nosso país, e deste número, cerca de 75% fecham após o falecimento do fundador, e somente 15% conseguem sobreviver até a terceira geração.',
    action:
      'Para evitar conflitos sucessórios, auxiliamos no planejamento de longo prazo, elaborando testamentos, holdings patrimoniais, pactos pré-nupciais, doações e outros documentos pertinentes.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-administrativo',
    name: 'Direito Administrativo',
    icon: Landmark,
    offer:
      'Muitas empresas deixam de ofertar serviços e produtos ao Poder Público por desconhecerem os procedimentos administrativos e regras da Administração Pública. Ter a Administração Pública como cliente pode alavancar seu negócio e maximizar seus lucros. ',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-imobiliario',
    name: 'Direito Imobiliário',
    icon: HomeIcon,
    offer:
      'Dados do IBGE apontam que no Brasil existem aproximadamente 74.000.000 de imóveis. Atuamos para fornecer segurança jurídica nessas relações imobiliárias. ',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-digital',
    name: 'Direito Digital',
    icon: Binary,
    offer:
      'Com o mercado em constante transformação, inovando em novos bens e serviços, atuamos na área de direito digital conferindo segurança ao seu empreendimento.',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'compliance-e-governanca-corporativa',
    name: 'Compliance e Governança Corporativa',
    icon: AtSign,
    offer:
      'As empresas estão cada vez mais preocupadas em estarem em conformidade com as normas externas e internas, gerando valor para a própria organização como para a sociedade.',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-tributario',
    name: 'Direito Tributário',
    icon: DollarSign,
    offer:
      'Em 2021, a União, Estados e Municípios arrecadaram um total de 40,2 bilhões de reais em execuções fiscais, além disso, somos um dos países que mais tributa a população, seja na renda, no consumo ou no patrimônio.',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
  {
    slug: 'direito-do-trabalho',
    name: 'Direito do Trabalho',
    icon: DollarSign,
    offer:
      'Todos os anos são ajuizados aproximadamente 8.000.000 de processos trabalhistas, dessa forma, é essencial que as empresas mitiguem seus riscos trabalhistas e que estejam preparadas para eventuais ações',
    action:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
      'Testando um teste testado',
    ],
  },
]

import {
  AtSign,
  Binary,
  Briefcase,
  DollarSign,
  HeartHandshake,
  HomeIcon,
  Landmark,
  ShoppingBag,
  User,
} from 'lucide-react'
import { ElementType } from 'react'

export interface Area {
  slug: string
  name: string
  description: string
  soluction: string
  about: string
  services: string[]
  icon: ElementType
}

export const areas: Area[] = [
  {
    slug: 'societario-e-m-a',
    name: 'Societário e M&A ',
    icon: Briefcase,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
      'Elaboramos contratos empresariais que asseguram o andamento da empresa, evitando conflitos societários e a falência do empreendimento, dentre eles contrato de compra e venda de participação societária, acordos de investimento, acordos de sócios, contratos de opção de compra e venda (put/call options), memorando de entendimentos (MoU), acordos de confidencialidade NDA, trespasse e outros.      ',
    services: [
      'Compra e venda de empresas',
      'Participação societária',
      'Projetos de organização societária',
    ],
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-civil',
    name: 'Direito Civil',
    icon: HeartHandshake,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-do-consumidor',
    name: 'Direito do Consumidor',
    icon: User,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'planejamento-sucessorio-e-patrimonial',
    name: 'Planejamento Sucessório e Patrimonial',
    icon: ShoppingBag,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-administrativo',
    name: 'Direito Administrativo',
    icon: Landmark,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-imobiliario',
    name: 'Direito Imobiliário',
    icon: HomeIcon,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-digital',
    name: 'Direito Digital',
    icon: Binary,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'compliance-e-governanca-corporativa',
    name: 'Compliance e Governança Corporativa',
    icon: AtSign,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-tributario',
    name: 'Direito Tributário',
    icon: DollarSign,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
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
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
  {
    slug: 'direito-do-trabalho',
    name: 'Direito do Trabalho',
    icon: DollarSign,
    description:
      'Breve descrição Breve descrição Breve descrição Breve descrição Breve descrição ',
    soluction:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
    services: [
      'Contrato de trabalho',
      'Reclamações trabalhistas',
      'Planejamento trabalhista',
    ],
    about:
      'Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação Sobre a área de atuação  Sobre a área de atuação',
  },
]

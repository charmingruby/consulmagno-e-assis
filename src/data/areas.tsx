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
    slug: 'direito-do-trabalho',
    name: 'Direito do Trabalho',
    icon: Briefcase,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'direito-societario-e-m-a',
    name: 'Direito Societário e M&A',
    icon: HeartHandshake,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'direito-civil',
    name: 'Direito Civil',
    icon: User,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'direito-do-consumidor',
    name: 'Direito do Consumidor',
    icon: ShoppingBag,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'planejamento-patrimonial-e-sucessorio',
    name: 'Planejamento patrimonial e sucessório',
    icon: Landmark,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'direito-administrativo',
    name: 'Direito Administrativo',
    icon: Shield,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    slug: 'registro-de-marca',
    name: 'Registro de Marca',
    icon: AtSign,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
    icon: Users,
    offer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam soluta error deleniti saepe enim vitae esse culpa hic ullam at doloribus adipisci nobis excepturi perspiciatis nesciunt. Laboriosam, magni a.',
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

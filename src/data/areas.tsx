import {
  AtSign,
  Briefcase,
  Building2,
  CircleDollarSign,
  Fingerprint,
  HeartHandshake,
  Landmark,
  Network,
  ListChecks,
  User,
  Users,
} from 'lucide-react'
import { ElementType } from 'react'

export function teste() {
  return (
    <div>
      <AtSign></AtSign>
      <Building2></Building2>
      <Fingerprint></Fingerprint>
      <Network></Network>
      <CircleDollarSign></CircleDollarSign>
      <Users></Users>
    </div>
  )
}

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
      'O Direito Societário é a base que estrutura e regulamenta as relações entre os shareholders de uma empresa, definindo seus direitos, responsabilidades e a forma como ela opera. M&A são operações complexas envolvendo a compra e venda ou fusão de empresas, impulsionam o crescimento, expansão e o aumento de competitividade delas. ',
    soluction:
      'Elaboramos contratos empresariais que asseguram o andamento da empresa, evitando conflitos societários e a falência do empreendimento, dentre eles contrato de compra e venda de participação societária, acordos de investimento, acordos de sócios, contratos de opção de compra e venda (put/call options), memorando de entendimentos (MoU), acordos de confidencialidade NDA, trespasse e outros.      ',
    services: [
      'Compra e Venda de Participação Societária',
      'Elaboração de Projetos de Organização ou Reorganização Societária',
      'Elaboração de Acordo de Sócios',
      'Elaboração de Memorando de Entendimentos (MoU)',
      'Elaboração de Mútuo Conversível em Participação Societária',
      'Contrato de Trespasse',
      'Atuação Judicial em litígios Societários',
    ],
    about:
      'Dados do IBGE apontam que mais de 60% das empresas encerram suas atividades antes de completarem 5 anos, e os principais motivos são a falta de planejamento prévio, gestão empresarial e litígios societários, sendo essencial para o empreendedor o adequado assessoramento jurídico em questões societárias a fim de evitar litígios.',
  },
  {
    slug: 'direito-civil',
    name: 'Direito Civil',
    icon: HeartHandshake,
    description:
      'Direito Civil é o maior ramo de direito privado, envolvendo temas como contratos, capacidade civil, negócios jurídicos, obrigações, propriedade, família, sucessões. Por ano são ajuizadas aproximadamente oito milhões de novos processos.',
    soluction:
      'Elaboramos e analisamos contratos civis que conferem segurança jurídica às partes envolvidas, como contratos de prestação de serviços, comodato, mútuo compra e venda, empreitada, doação, dentre outros',
    services: [
      'Análise e elaboração de Contratos de Prestação de Serviço',
      'Análise e elaboração de Contratos de Compra e Venda',
      'Análise e elaboração de Contratos de Doação',
      'Análise e Elaboração de Testamentos e Inventários',
      'Atuação Judicial em Inventários',
      'Ações de Cobranças',
      'Divórcios',
      'Ações de Indenizações',
      'Usucapião e outras',
      'Atuação Judicial em Contratos',
      'Contratos Bancários e outros tipos Contratuais',
    ],
    about:
      'Direito Civil é o maior ramo de direito privado, envolvendo temas como contratos, capacidade civil, negócios jurídicos, obrigações, propriedade, família, sucessões. Por ano são ajuizadas aproximadamente 8.000.000 (oito milhões) de novos processos.',
  },
  {
    slug: 'direito-do-consumidor',
    name: 'Direito do Consumidor',
    icon: User,
    description:
      'O Direito do Consumidor regula exclusivamente as relações de consumo, que estão presentes no cotidiano de qualquer cidadão, sendo essencial que empresas e consumidores saibam das regras atinentes à relação de consumo.',
    soluction:
      'Assessoramos empresas a fim de evitar despesas financeiras e de tempo ocasionadas por demandas consumeristas, de forma preventiva, elaborando contratos, termos e outros documentos. Também atuamos junto aos órgãos de proteção ao consumidor como PROCON e Ministério Público.',
    services: [
      'Atuação em Ações de Indenização',
      'Obrigação de Fazer e outras envolvendo a relação de consumo',
      'Assessoramos empresas evitar a judicialização',
      'Atuamos extrajudicialmente no PROCON',
      'Ministério Público e outros',
      'Realizamos treinamento com os colaboradores',
    ],
    about:
      'odas as pessoas são consumidores em potencial, de bens e serviços, sendo o Direito do Consumidor um sub-ramo do Direito Civil, que dispõe especificamente sobre as relações de consumo. Por ano, são ajuizados por ano 6.500.000 novos processos envolvendo relações de consumo, é essencial tanto para o consumidor quanto para empresas saberem dos seus direitos e deveres e eventualmente, buscar a solução jurídica adequada',
  },
  {
    slug: 'planejamento-sucessorio-e-patrimonial',
    name: 'Planejamento Sucessório e Patrimonial',
    icon: ListChecks,
    description:
      'É comum que com o falecimento de membros da família, ocorram disputas pelos bens deixados ou dúvidas acerca da continuidade da administração desses bens. No Brasil, empresas familiares representam 90% dos empreendimentos, e deste número, cerca de 75% fecham após o falecimento do fundador, e somente 15% conseguem sobreviver até a terceira geração.',
    soluction:
      'Para evitar conflitos sucessórios, auxiliamos no planejamento de longo prazo, elaborando testamentos, holdings patrimoniais, pactos pré-nupciais, doações e outros documentos pertinentes.',
    services: [
      'Elaboramos Contratos Sucessórios como testamentos, pactos pré-nupciais, doações e outros',
      'Planejamento tributário sucessório',
      'Revisão e Alteração de Contrato Social e outros documentos societários',
      'Auxiliamos na criação de holdings patrimoniais',
    ],
    about:
      'É comum que com o falecimento de membros da família, ocorram disputas pelos bens deixados ou dúvidas acerca da continuidade da administração desses bens. A título de exemplo, empresas familiares representam 90% dos empreendimentos brasileiros, e deste número, cerca de 75% fecham após o falecimento do fundador, e somente 15% conseguem sobreviver até a terceira geração',
  },
  {
    slug: 'direito-administrativo',
    name: 'Direito Administrativo',
    icon: Landmark,
    description:
      'Muitas empresas deixam de ofertar serviços e produtos ao Poder Público por desconhecerem os procedimentos administrativos e regras da Administração Pública. Ter a Administração Pública como cliente pode alavancar seu negócio e maximizar seus lucros.',
    soluction:
      'Muitas empresas deixam de ofertar serviços e produtos ao Poder Público por desconhecerem os procedimentos administrativos e regras da Administração Pública. Ter a Administração Pública como cliente pode alavancar seu negócio e maximizar seus lucros.',
    services: [
      'Assessoramos empresas na participação de certames como Pregão',
      'Licitação e Credenciamento',
      'Análise de Editais',
      'Atuação Judicial face à Administração Pública',
      'Elaboração de Parecer Jurídico',
    ],
    about:
      'O Direito Administrativo regula as relações jurídicas entre os entes públicos e os particulares, sendo essencial para o assessoramento jurídico para conferir segurança jurídica para o particular nas suas relações comerciais com a administração pública. ',
  },
  {
    slug: 'direito-imobiliario',
    name: 'Direito Imobiliário',
    icon: Building2,
    description:
      'O Direito Imobiliário regulamenta as relações jurídicas que envolvem propriedades e posse, estabelecendo regras para a compra, venda, locação, uso e ocupação de imóveis. Contratos bem redigidos, normas claras e procedimentos legais adequados são essenciais para prevenir litígios e garantir a proteção dos direitos das partes envolvidas.',
    soluction:
      'Dados do IBGE apontam que no Brasil existem aproximadamente 74.000.000 de imóveis. Atuamos para fornecer segurança jurídica nessas relações imobiliárias, seja para uso pessoal, como locação, moradia ou para uso comercial, envolvendo locação comercial e outros. ',
    services: [
      'Analisamos e elaboramos contratos de compra e venda, locação, financiamento Imobiliário',
      'Analisamos e elaboramos contratos de cessão de direitos possessórios',
      'Analisamos e elaboramos contratos de Built to suit',
      'Elaboramos Due Diligence imobiliária',
      'Atuamos em Cartórios e em regularização imobiliária',
      'Análise e Elaboração de Convenção de Condomínio e Regimento Interno',
      'Participação em Assembléias Condominiais',
      'Atuação Judicial em litígios imobiliários',
    ],
    about:
      'O Direito Imobiliário regulamenta as relações jurídicas que envolvem propriedades e posse, estabelecendo regras para a compra, venda, locação, uso e ocupação de imóveis. Contratos bem redigidos, normas claras e procedimentos legais adequados são essenciais para prevenir litígios e garantir a proteção dos direitos das partes envolvidas.',
  },
  {
    slug: 'direito-digital',
    name: 'Direito Digital',
    icon: Fingerprint,
    description:
      'Com o mercado em constante transformação, inovando em novos bens e serviços, é essencial o assessoramento jurídico para entender as especificidades regulatórias, conferindo segurança ao seu negócio.',
    soluction:
      'Realizamos todo o procedimento de adequação à LGPD, realizando o mapeamento dos dados, política de privacidade, cookies, termo de privacidade, dentre outros documentos e ofertando treinamentos aos colaboradores das empresas.',
    services: [
      'Adequação à LGPD',
      'Mapeamento de Dados',
      'Elaboração de Política de Privacidade e Cookies',
      'Registro de Marca',
      'Assessoria para influencers',
    ],
    about:
      'Com o mercado em constante transformação, inovando em novos bens e serviços, atuamos na área de direito digital conferindo segurança ao seu empreendimento.',
  },
  {
    slug: 'compliance-e-governanca-corporativa',
    name: 'Compliance e Governança Corporativa',
    icon: Network,
    description:
      'Estudos afirmam que as empresas comprometidas em estar em conformidade com as leis e regulamentos, além de alinhadas com os interesses dos stakeholders, conseguem apresentar maiores retornos financeiros além de impactar positivamente a sociedade.',
    soluction:
      'Elaboramos políticas internas, organizamos a companhia como um todo em busca de transparência nas relações para garantir que os demais pilares ESG sejam cumpridos e desenvolvidos, sempre com atenção aos stakeholders. Verificamos a conformidade das empresas com as normas aplicáveis, sugerindo correções e melhorias se for o caso, e ofertamos treinamentos com os colaboradores e diretores.',
    services: [
      'Elaboração de Código de Ética e Conduta',
      'Elaboração de Políticas Anticorrupção',
      'Elaboração de Código de Boas Práticas',
      'Elaboração de Análises e Matriz de Risco;',
    ],
    about:
      'As empresas estão cada vez mais preocupadas em estarem em conformidade com as normas externas e internas, gerando valor para a própria organização como para a sociedade.',
  },
  {
    slug: 'direito-tributario',
    name: 'Direito Tributário',
    icon: CircleDollarSign,
    description:
      'O Brasil é o país que possui o sistema tributário mais complexo do mundo, sofrendo constantemente alterações legislativas no âmbito Federal, Estadual e Municipal, de forma que é essencial uma assessoria jurídica para evitar o pagamento de tributo em duplicidade, elaboração de planejamento visando uma redução da carga tributária e também a defesa dos contribuintes decorrentes de execuções fiscais ou multas.',
    soluction:
      'Elaboramos um planejamento tributário seguro para que o contribuinte tenha uma incidência mais branda dos impostos. Atuamos de forma extrajudicial em procedimentos administrativos e de forma judicial em execuções fiscais defendendo os interesses dos contribuintes Atuamos com a recuperação de crédito tributário decorrente de impostos pagos indevidamente, e também com teses tributárias.',
    services: [
      'Elaboração de Planejamento Tributário',
      'Defesa em execuções Fiscais',
      'Recuperação de Crédito Tributário',
      'Teses Tributárias',
      'Atuação Administrativa de recuperação de Créditos',
    ],
    about:
      'Em 2021, a União, Estados e Municípios arrecadaram um total de 40,2 bilhões de reais em execuções fiscais, além disso, somos um dos países que mais tributa a população, seja na renda, no consumo ou no patrimônio. É essencial que empresas e pessoas físicas estejam devidamente assessoradas para reduzir a carga fiscal.',
  },
  {
    slug: 'direito-do-trabalho',
    name: 'Direito do Trabalho',
    icon: Users,
    description:
      'Todos os anos são ajuizados aproximadamente 8.000.000 de processos trabalhistas, dessa forma, é essencial que as empresas mitiguem seus riscos trabalhistas e que estejam preparadas para eventuais ações.',
    soluction:
      'Atuamos de forma preventiva, visando a redução de possíveis passivos trabalhistas, realizando negociações, elaborando contratos de trabalhos, planejamento trabalhista para o menor pagamento de impostos. Atuamos também de forma judicial, representando empresas e funcionários em reclamações trabalhistas.',
    services: [
      'Planejamento Trabalhista Fiscal e Previdenciário',
      'Reclamações Trabalhistas',
      'Elaboração de Contrato de Trabalho',
      'Negociações',
    ],
    about:
      'Todos os anos são ajuizados aproximadamente 8.000.000 de processos trabalhistas, dessa forma, é essencial que as empresas mitiguem seus riscos trabalhistas e que estejam preparadas para eventuais ações.',
  },
]

import {
  HeartHandshake,
  Landmark,
  PersonStanding,
  Shield,
  Store,
  Wallet,
} from 'lucide-react'
import { AreaItem } from './area-item'

export function AreaList() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
      <AreaItem
        icon={PersonStanding}
        description="As empresas familiares representam 90% dos
        empreendimentos em nosso país, e deste número, cerca de
        75% fecham após o falecimento do fundador, e somente 15%
        conseguem sobreviver até a terceira geração."
        title="Direito do Trabalho"
        url="/"
      />
      <AreaItem
        icon={HeartHandshake}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        title="Direito Societário e M&A"
        url="/"
      />
      <AreaItem
        icon={Wallet}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        title="Direito Civil e Consumeirista"
        url="/"
      />
      <AreaItem
        icon={Landmark}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        title="Direito Sucessório e Planejamento Patrimonial"
        url="/"
      />
      <AreaItem
        icon={Shield}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        title="Direito Administrativo"
        url="/"
      />
      <AreaItem
        icon={Store}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        title="Direito Imobiliário"
        url="/"
      />
    </div>
  )
}

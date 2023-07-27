import { AreaItem } from './area-item'

export function AreaList() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Atuação em empresas"
        title="Direito do Trabalho"
        url="/"
      />
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Contratos empresariais"
        title="Direito Societário e M&A"
        url="/"
      />
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Análise de contratos"
        title="Direito Civil e Consumeirista"
        url="/"
      />
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Elaboração de planos de sucessão"
        title="Direito Sucessório e Planejamento Patrimonial"
        url="/"
      />
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Contratos administrativos"
        title="Direito Administrativo"
        url="/"
      />
      <AreaItem
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere qui aliquam voluptates consectetur tempora fuga sit similique minima nulla tenetur saepe deserunt perferendis est inventore, consequuntur recusandae necessitatibus iusto."
        subtitle="Locação, compra e venda e outros."
        title="Direito Imobiliário"
        url="/"
      />
    </div>
  )
}

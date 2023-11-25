import { RelatedInsightsItem } from './related-insight-item'

export function RelatedInsights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8">
      <RelatedInsightsItem
        subjects={['Aeroporto', 'Droga pesada']}
        slug="titulo-slug"
        title="Titulo grande para ter espaço"
      />
      <RelatedInsightsItem
        subjects={['Aeroporto', 'Droga pesada']}
        slug="titulo-slug"
        title="Titulo grande para ter espaço"
      />
      <RelatedInsightsItem
        subjects={['Aeroporto', 'Droga pesada']}
        slug="titulo-slug"
        title="Titulo grande para ter espaço"
      />
      <RelatedInsightsItem
        subjects={['Aeroporto', 'Droga pesada']}
        slug="titulo-slug"
        title="Titulo grande para ter espaço"
      />
    </div>
  )
}

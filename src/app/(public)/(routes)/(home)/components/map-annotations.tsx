import { Text } from '@/components/ui/text'

interface MapAnnotationsProps {
  title: string
  description: string
}

export function MapAnnotations({ title, description }: MapAnnotationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-xl">{title}</strong>
      <Text size="md" opacity="low">
        {description}
      </Text>
    </div>
  )
}

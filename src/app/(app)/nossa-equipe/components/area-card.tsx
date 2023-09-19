import { Box } from '@/components/ui/box'

interface areaCardProps {
  name: string
  description: string
}

export function AreaCard(props: areaCardProps) {
  return (
    <Box className="flex flex-col gap-2">
      <strong className="text-lg text-primary-main">{props.name}</strong>
      <small className="text-base text-gray-400">{props.description}</small>
    </Box>
  )
}

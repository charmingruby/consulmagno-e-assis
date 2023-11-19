import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = true }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={`relative whitespace-nowrap px-1 py-4 ${
        isSelected ? 'text-primary-main font-medium' : 'text-gray-400'
      }`}
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute left-0 right-0 h-0.5 -bottom-px bg-primary-light" />
      )}
    </Tabs.Trigger>
  )
}

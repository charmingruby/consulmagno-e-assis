import * as Tabs from '@radix-ui/react-tabs'

export function TabItem() {
  return (
    <Tabs.Trigger className="whitespace-nowrap relative px-1 py-4" value="tab2">
      Password
    </Tabs.Trigger>
  )
}

'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'
import { areas } from '@/data/areas'
import { PropsWithChildren, useState } from 'react'
import { useRouter } from 'next/navigation'

export function PostsTabs({ children }: PropsWithChildren) {
  const [currentTab, setCurrentTab] = useState(areas[0].slug)
  const { push } = useRouter()

  const handleTabsChange = (value: string) => {
    push(`/blog?query=${value}`)
  }

  return (
    <Tabs.Root
      defaultValue={currentTab}
      onValueChange={setCurrentTab}
      className="w-full"
    >
      <ScrollArea.Root type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List
            className="mt-6 flex w-full items-center gap-4 border-b border-gray-100 "
            aria-label="Manage your account"
          >
            {areas.map(({ name, slug }) => (
              <TabItem
                key={slug}
                title={name}
                value={slug}
                isSelected={currentTab === slug}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-1.5 translate-y-2 touch-none select-none bg-gray-100 w-full rounded-full"
        >
          <ScrollArea.Thumb className="rounded-lg bg-gray-300 h-1.5 cursor-pointer" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <Tabs.TabsContent value={currentTab} className="mt-8 flex-1">
        {children}
      </Tabs.TabsContent>
    </Tabs.Root>
  )
}

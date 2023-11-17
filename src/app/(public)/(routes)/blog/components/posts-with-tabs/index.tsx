'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './tab-item'

export function PostsWithTabs() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-full">
      <ScrollArea.Root type="hover">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List
            className="mt-6 flex w-full items-center gap-4 border-b border-gray-100 "
            aria-label="Manage your account"
          >
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
            <TabItem />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none bg-gray-100 w-full"
        >
          <ScrollArea.Thumb className="rounded-lg bg-gray-300 h-0.5" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}

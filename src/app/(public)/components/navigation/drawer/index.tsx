'use client'

import { useContext } from 'react'

import { navItemsList } from '../nav-items-list'
import * as Container from '@/components/ui/container/index'
import { MenuContext } from '@/contexts/menu-context'
import { DrawerItem } from './drawer-item'
import { DrawerActions } from './drawer-actions'

export function Drawer() {
  const { isOpen } = useContext(MenuContext)

  return (
    <Container.Root
      className={`h-screen pt-24 pb-8 w-full bg-primary-main fixed transition-all ${
        isOpen ? 'z-50 opacity-100' : '-z-10 opacity-0'
      }`}
    >
      <Container.Content
        spacing="spaceless"
        className="flex flex-col gap-1 h-full divide-y divide-primary-light"
      >
        {navItemsList.map(({ icon: Icon, label, url }) => (
          <DrawerItem icon={Icon} label={label} url={url} key={label} />
        ))}

        <DrawerActions />
      </Container.Content>
    </Container.Root>
  )
}

'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { Button } from '@/components/ui/button'
import { MenuContext } from '@/contexts/menu-context'

export function DrawerActions() {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <div className="flex mt-auto w-full">
      <Link
        href="/contato"
        prefetch={false}
        className="w-full"
        onClick={toggleMenu}
      >
        <Button color="uncolored" className="w-full">
          Entre em contato
        </Button>
      </Link>
    </div>
  )
}

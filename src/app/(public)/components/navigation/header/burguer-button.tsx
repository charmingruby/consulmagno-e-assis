'use client'

import { MenuContext } from '@/contexts/menu-context'
import { Menu } from 'lucide-react'
import { useContext } from 'react'

export function BurguerButton() {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden border p-2 rounded border-gray-100 hover:bg-gray-100/20 transition-colors active:bg-gray-100/40"
    >
      <Menu className="text-gray-900 h-7 w-7" />
    </button>
  )
}

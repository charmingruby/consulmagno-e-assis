'use client'

import { ChevronUp } from 'lucide-react'

export function ScrollBackToTopButton() {
  const isBrowser = () => typeof window !== 'undefined' // The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollToTop}
      className="p-1.5 shadow-md hover:bg-primary-main/90 cursor-pointer transition-colors bg-primary-main rounded-md"
    >
      <ChevronUp className="text-gray-50" />
    </div>
  )
}

import { ScrollBackToTopButton } from './scroll-back-to-top-button'

export function BottomFooter() {
  return (
    <div className="flex justify-between items-center">
      {/* Copyright */}
      <div className="text-gray-300 text-sm">
        © Copyright 2023, Marca. Todos direitos reservados.
      </div>

      <ScrollBackToTopButton />
    </div>
  )
}

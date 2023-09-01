import { AlignRight } from 'lucide-react'

export function BurguerButton() {
  return (
    <button className="lg:hidden border p-2 rounded border-gray-100 hover:bg-gray-100/20 transition-colors active:bg-gray-100/40">
      <AlignRight className="text-gray-900" />
    </button>
  )
}

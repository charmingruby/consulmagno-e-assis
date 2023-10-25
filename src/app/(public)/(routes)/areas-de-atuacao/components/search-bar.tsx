import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="w-full pl-2 h-12 items-center flex-1 gap-2 flex flex-row border bg-white border-gray-100 rounded-sm shadow-sm">
      <Search className="text-gray-200" />
      <input
        placeholder="Procure por área de atuação..."
        className="bg-white flex-1 flex h-full"
      />
    </div>
  )
}

import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="group hover:border-primary-light transition-all w-full pl-2 h-12 items-center flex-1 gap-2 flex flex-row border bg-white border-gray-100 rounded-lg shadow-sm">
      <Search className="text-gray-200 group-hover:text-primary-light transition-colors" />
      <input
        placeholder="Pesquise por área de atuação..."
        className="bg-white flex-1 flex h-full rounded-r-lg outline-none overflow-hidden"
      />
    </div>
  )
}

import { Facebook, Instagram } from 'lucide-react'
import { ContentHeading } from './content-heading'

export function SocialsHeader() {
  return (
    <header className="flex items-center justify-between gap-2 w-full mb-8">
      <ContentHeading heading="Publicações mais recentes" margin={false} />

      <div className="flex items-center justify-end gap-2 w-full">
        <div className="bg-gray-50 p-2 border border-gray-100 shadow-sm rounded-full">
          <Instagram className="h-5 w-5" />
        </div>
        <div className="bg-gray-50 p-2 border border-gray-100 shadow-sm rounded-full">
          <Facebook className="h-5 w-5" />
        </div>
      </div>
    </header>
  )
}

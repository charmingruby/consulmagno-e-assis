'use client'

import { PageTitle } from '@/components/page-title'
import { SearchBarRoot } from './search-bar-root'
import { areaItems } from '../../../../../constants/areas'
import { AreaItem } from './area-item'
import { ChangeEvent, useState } from 'react'

export function AreasList() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchTermChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt?.target.value)
  }

  const filteredItems = areaItems.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="grid grid-row">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-2 mb-6 lg:mb-12">
        <div className="flex items-center gap-2">
          <PageTitle title="Áreas de Atuação" />
        </div>
        <div className="flex items-center">
          <SearchBarRoot>
            <input
              placeholder="Pesquise por área de atuação..."
              className="bg-white flex-1 flex h-full rounded-r-lg outline-none overflow-hidden"
              onChange={handleSearchTermChange}
            />
          </SearchBarRoot>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredItems.map(({ name, url, icon }, index) => (
          <AreaItem name={name} url={url} icon={icon} key={index} />
        ))}
      </div>
    </div>
  )
}

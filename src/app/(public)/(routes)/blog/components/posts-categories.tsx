'use client'

import exampleImage from '@/assets/images/lawyers.png'
import { areas } from '@/data/areas'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { PostCategoryItem } from './post-category-item'
import { useState } from 'react'

export function PostsCategories() {
  const [allCategories, setAllCategories] = useState<boolean>(false)

  const featuredCategories = areas.slice(0, 5)

  const handleLoadAllCategories = () => {
    setAllCategories(!allCategories)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {allCategories
          ? areas.map(({ name, slug }) => (
              <PostCategoryItem
                key={name}
                image={exampleImage}
                name={name}
                slug={slug}
              />
            ))
          : featuredCategories.map(({ name, slug }) => (
              <PostCategoryItem
                key={name}
                image={exampleImage}
                name={name}
                slug={slug}
              />
            ))}
      </div>

      <Button
        color="outline"
        className="mt-8 flex items-center gap-1"
        onClick={() => handleLoadAllCategories()}
      >
        {allCategories ? (
          <>
            Ver menos
            <Minus className="h-4 w-4" />
          </>
        ) : (
          <>
            Ver mais
            <Plus className="h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  )
}

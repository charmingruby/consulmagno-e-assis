import exampleImage from '@/assets/images/lawyers.png'
import { FeaturedCategoryItem } from './featured-category-item'

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <FeaturedCategoryItem
        image={exampleImage}
        name="Direito do trabalho"
        slug="direito-do-trabalho"
      />
      <FeaturedCategoryItem
        image={exampleImage}
        name="Direito do trabalho"
        slug="direito-do-trabalho"
      />
      <FeaturedCategoryItem
        image={exampleImage}
        name="Direito do trabalho"
        slug="direito-do-trabalho"
      />
      <FeaturedCategoryItem
        image={exampleImage}
        name="Direito do trabalho"
        slug="direito-do-trabalho"
      />
      <FeaturedCategoryItem
        image={exampleImage}
        name="Direito do trabalho"
        slug="direito-do-trabalho"
      />
    </div>
  )
}

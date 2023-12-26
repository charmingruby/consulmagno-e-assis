import { Loader } from '@/components/loader'
import * as Container from '@/components/ui/container'
import { getClient } from '@/libs/graphql/client'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { FETCH_POSTS_BY_CATEGORY } from '@/libs/graphql/queries/fetch-posts-by-category/query'
import { FetchPostsByCategoryResponse } from '@/libs/graphql/queries/fetch-posts-by-category/types'
import { slugTransformer } from '@/utils/slug-transformer'
import { PostCard } from '../../components/post-card'
import { Frown } from 'lucide-react'
import { areas, Area } from '@/data/areas'
import { generateStaticSeo } from '@/components/seo/static'

interface PostPageProps {
  params: { slug: string }
}

const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find((area) => area.slug === slug)
}

export const metadata = generateStaticSeo({
  rawTitle: `Categorias`,
  description:
    'Conheça as diversas categorias em que o escritório de advocacia Consulmagno e Assis atua.Ficou interessado? Entre em contato',
})

export default async function CategoryPage({ params }: PostPageProps) {
  const title = slugTransformer(params.slug)

  const specificArea = getAreaBySlug(params.slug)

  const { data, loading } = await getClient().query({
    query: FETCH_POSTS_BY_CATEGORY,
    variables: { category: title },
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  if (loading) {
    return <Loader />
  }

  const category = data.categories[0] as FetchPostsByCategoryResponse

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Container.Root className="md:pt-16 bg-primary-gradient">
        <Container.Content className="py-10 pt-24 md:pt-10 lg:py-10 flex flex-col text-left md:text-center items-start md:items-center gap-6">
          <h2 className="text-white font-bold text-5xl">
            {specificArea?.name}
          </h2>
        </Container.Content>
      </Container.Root>

      <Container.Root backgroundColor="white">
        <Container.Content>
          {category?.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full gap-1 text-gray-400">
              <Frown className="h-4 w-4 mb-1" />
              <p className="">Nenhuma publicação ainda.</p>
            </div>
          )}
        </Container.Content>
      </Container.Root>
    </div>
  )
}

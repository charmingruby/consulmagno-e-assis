import { Loader } from '@/components/loader'
import { RelatedInsightsItem } from './related-insight-item'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { getClient } from '@/libs/graphql/client'
import { FETCH_RECENT_POSTS_OF_AN_AREA } from '@/libs/graphql/queries/fetch-recent-posts-of-an-area/query'
import { FetchRecentPostsOfAnAreaReponse } from '@/libs/graphql/queries/fetch-recent-posts-of-an-area/types'

interface RelatedInsightsProps {
  slug: string
}

export async function RelatedInsights({ slug }: RelatedInsightsProps) {
  const { data, loading } = await getClient().query({
    query: FETCH_RECENT_POSTS_OF_AN_AREA,
    variables: { area: slug },
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  if (loading) {
    return (
      <div className="flex w-full justify-center mb-12">
        <Loader />
      </div>
    )
  }

  const relatedInsights = data.categories[0] as FetchRecentPostsOfAnAreaReponse

  return (
    <>
      {!relatedInsights?.posts ? (
        <div className="col-span-2 flex items-center">
          <span className="font-medium text-gray-400">
            Nenhuma publicação ainda.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8">
          {relatedInsights.posts.map(({ id, slug, subjects, title }) => (
            <RelatedInsightsItem
              key={id}
              slug={slug}
              subjects={subjects}
              title={title}
            />
          ))}
        </div>
      )}
    </>
  )
}

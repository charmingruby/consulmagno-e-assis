import { PostCard } from '@/components/post-card'
import { getClient } from '@/libs/graphql/client'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { FETCH_RECENT_POSTS } from '@/libs/graphql/queries/fetch-all-posts/query'
import { FetchRecentPostsReponse } from '@/libs/graphql/queries/fetch-home-posts/types'

export async function OtherPosts() {
  const { data } = await getClient().query({
    query: FETCH_RECENT_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  const parsedData = data as FetchRecentPostsReponse

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {parsedData.posts.map(
        ({
          author,
          categories,
          coverImage,
          createdAt,
          id,
          slug,
          subtitle,
          title,
        }) => (
          <PostCard
            key={id}
            authorName={author.name}
            category={categories[0].name}
            publishedDate={new Date(createdAt)}
            subtitle={subtitle}
            slug={slug}
            title={title}
            avatarUrl={author.avatarImage.url}
            coverPhoto={coverImage.url}
          />
        ),
      )}
    </div>
  )
}

import { getClient } from '@/libs/graphql/client'
import { FETCH_RECENT_POSTS } from '@/libs/graphql/queries/fetch-recent-posts/query'
import { FetchRecentPostsReponse } from '@/libs/graphql/queries/fetch-recent-posts/types'
import { Loader } from './loader'
import { PostCard } from './post-card'

export async function SeeAlsoPosts() {
  const { data, loading } = await getClient().query({
    query: FETCH_RECENT_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: 20 },
      },
    },
  })

  const { posts } = data as FetchRecentPostsReponse

  if (loading) {
    return (
      <div className="flex w-full justify-center mb-12">
        <Loader />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          authorName={post.author.name}
          category={post.categories[0].name}
          publishedDate={new Date(post.createdAt)}
          subtitle={post.subtitle}
          slug={post.slug}
          title={post.title}
          avatarUrl={post.author.avatarImage.url}
          coverPhoto={post.coverImage.url}
        />
      ))}
    </div>
  )
}

import { PostCard } from '@/components/post-card'
import { getClient } from '@/libs/graphql/client'
import { FetchRecentPostsReponse } from '@/libs/graphql/queries/fetch-all-posts/types'
import { FETCH_RECENT_POSTS } from '@/libs/graphql/queries/fetch-all-posts/query'
import { formatDate } from '@/utils/format-date'

export async function RecentPosts() {
  const { data, loading, error } = await getClient().query({
    query: FETCH_RECENT_POSTS,
  })

  const parsedData = data as FetchRecentPostsReponse
  const [highlightedPost, ...restOfThePosts] = parsedData.posts.slice(0)

  if (loading) {
    return <>carregando...</>
  }

  return (
    <div className="space-y-8">
      <div>
        <PostCard
          orientation="horizontal"
          authorName={highlightedPost.author.name}
          category={highlightedPost.categories[0].name}
          publishedDate={new Date(highlightedPost.createdAt)}
          subtitle={highlightedPost.subtitle}
          slug={highlightedPost.slug}
          title={highlightedPost.title}
          avatarUrl={highlightedPost.author.avatarImage.url}
          coverPhoto={highlightedPost.coverImage.url}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {restOfThePosts.map((post) => (
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
    </div>
  )
}

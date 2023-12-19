import { PostCard } from '@/components/post-card'
import { getClient } from '@/libs/graphql/client'
import { FetchHomePostsResponse } from '@/libs/graphql/queries/fetch-home-posts/types'
import { Loader } from '@/components/loader'
import { FETCH_HOME_POSTS } from '@/libs/graphql/queries/fetch-home-posts/query'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'

export async function RecentPosts() {
  const { data, loading } = await getClient().query({
    query: FETCH_HOME_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  const parsedData = data as FetchHomePostsResponse
  const [highlightedPost, ...restOfThePosts] = parsedData.posts.slice(0)

  if (loading) {
    return (
      <div className="flex w-full justify-center mb-12">
        <Loader />
      </div>
    )
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

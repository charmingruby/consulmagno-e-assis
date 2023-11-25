import { Loader } from '@/components/loader'
import { PostCard } from '@/components/post-card'
import { getClient } from '@/libs/graphql/client'
import { FETCH_RECENT_POSTS } from '@/libs/graphql/queries/fetch-all-posts/query'
import { FetchRecentPostsReponse } from '@/libs/graphql/queries/fetch-home-posts/types'

interface RelatedPostsProps {
  slug: string
}

export async function RelatedPosts({ slug }: RelatedPostsProps) {
  const { data, loading } = await getClient().query({
    query: FETCH_RECENT_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: 20 },
      },
    },
  })

  const parsedData = data as FetchRecentPostsReponse
  const [highlightedPost, ...restOfThePosts] = parsedData.posts.slice(0)

  if (loading) {
    return <Loader />
  }

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <PostCard
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

      <div className="grid grid-cols-1 gap-8">
        {restOfThePosts.map((post) => (
          <PostCard
            orientation="horizontal"
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

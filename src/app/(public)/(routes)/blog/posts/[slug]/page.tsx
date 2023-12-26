import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { OtherPosts } from '@/app/(public)/(routes)/areas-de-atuacao/[slug]/components/other-posts'
import { CardMedias } from './components/card-medias'
import Link from 'next/link'
import { mapLink } from '@/site'
import { MapPin } from 'lucide-react'
import { ContentHeading } from '../../components/content-heading'
import { getClient } from '@/libs/graphql/client'
import { FETCH_POST_BY_SLUG } from '@/libs/graphql/queries/fetch-post-by-slug/query'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { Loader } from '@/components/loader'
import { FetchPostBySlugResponse } from '@/libs/graphql/queries/fetch-post-by-slug/types'
import { FETCH_POSTS_BY_CATEGORY_AT_A_POST } from '@/libs/graphql/queries/fetch-posts-by-category-at-a-post/query'
import { FetchPostsByCategoryAtAPostResponse } from '@/libs/graphql/queries/fetch-posts-by-category-at-a-post/types'
import { PostCard } from '../../components/post-card'

interface PostPageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const { data: postData, loading: postLoading } = await getClient().query({
    query: FETCH_POST_BY_SLUG,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  const post = postData.posts[0] as FetchPostBySlugResponse

  const { data: categoriesData, loading: categoriesLoading } =
    await getClient().query({
      query: FETCH_POSTS_BY_CATEGORY_AT_A_POST,
      variables: { area: post.categories[0].name },
      context: {
        fetchOptions: {
          next: { revalidate: revalidationCooldownInSeconds },
        },
      },
    })

  const { posts } = categoriesData
    .categories[0] as FetchPostsByCategoryAtAPostResponse

  if (postLoading || categoriesLoading) {
    return <Loader />
  }

  return (
    <>
      {/* Hero */}
      <Container.Root className="hero-img flex items-center pt-16 bg-no-repeat bg-center bg-fixed sm:text-left">
        <Container.Content>
          <div className="z-10 w-full md:max-w-2xl flex flex-col justify-center ">
            {/* Title */}
            <h1 className="text-gray-50 font-semibold m-0 text-4xl md:text-4xl mb-6 break-words">
              {post.title}
            </h1>

            <p className="text-gray-100 text-lg">{post.subtitle}</p>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Conteúdo */}
      <Container.Root border="borderBottom" backgroundColor="white">
        <Container.Content className="py-10 lg:py-10">
          <div className="flex pt-4 gap-8 ">
            <div className="flex flex-col justify-start gap-6">
              <div className="flex flex-col  items-start">
                <p className="font-bold pb-3 ">Nos siga nas redes sociais</p>
                <div>
                  <CardMedias />
                </div>
              </div>
              <div className="flex flex-col items-start ">
                <p className="font-bold pb-3 ">Venha nos visitar</p>
                <div>
                  <Link
                    href={mapLink}
                    prefetch={false}
                    target="blank"
                    className="text-gray-300 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
                  >
                    <MapPin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col text-lg text-left flex-1"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </div>
        </Container.Content>
      </Container.Root>

      {/* Categorias */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <div className="text-left w-full mb-8">
            <ContentHeading heading="Venha ver mais posts relacionados" />
          </div>

          <div className="flex gap-4 justify-start">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </Container.Content>
      </Container.Root>

      {/* Veja também */}
      <Container.Root backgroundColor="white">
        <Container.Content>
          <div className="text-center w-full mb-8">
            <ContentHeading heading="Veja também" />
          </div>
          <OtherPosts />
        </Container.Content>
      </Container.Root>

      {/* CTA */}
      <CTA.Root>
        <div className="text-center">
          <strong className="text-3xl md:text-4xl text-white">
            Converse Conosco Agora
          </strong>
        </div>

        <div>
          <Text size="md" align="center" className="text-gray-50">
            Pronto para resolver suas questões legais? Clique aqui para iniciar
            uma conversa e contar com a nossa experiência e comprometimento.
          </Text>
        </div>

        <CTA.ContactButtonGroup title="Entre em contato" url="/contato" />
      </CTA.Root>
    </>
  )
}

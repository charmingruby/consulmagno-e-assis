import * as Container from '@/components/ui/container'
import * as CTA from '@/components/cta'
import { Text } from '@/components/ui/text'
import { OtherPosts } from '@/app/(public)/(routes)/areas-de-atuacao/[slug]/components/other-posts'
import { CardMedias } from './components/card-medias'
import { ContentHeading } from '../../components/content-heading'
import { getClient } from '@/libs/graphql/client'
import { FETCH_POST_BY_SLUG } from '@/libs/graphql/queries/fetch-post-by-slug/query'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { Loader } from '@/components/loader'
import { FetchPostBySlugResponse } from '@/libs/graphql/queries/fetch-post-by-slug/types'
import { FETCH_POSTS_BY_CATEGORY_AT_A_POST } from '@/libs/graphql/queries/fetch-posts-by-category-at-a-post/query'
import { FetchPostsByCategoryAtAPostResponse } from '@/libs/graphql/queries/fetch-posts-by-category-at-a-post/types'
import { PostCard } from '../../components/post-card'
import Image from 'next/image'
import { generateStaticSeo } from '@/components/seo/static'

interface PostPageProps {
  params: { slug: string }
}

export const metadata = generateStaticSeo({
  rawTitle: 'Publicação',
  description:
    'Explore as diversas publicações do nosso escritório de advocacia em Juiz de Fora. Contamos com uma equipe especializada em oferecer soluções jurídicas eficientes para questões variadas. Conheça nossas competências agora',
})

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
      <Container.Root className=" flex items-center pt-8  sm:text-left">
        <Container.Content>
          <div className=" w-full md:max-w-2xl flex flex-col justify-center ">
            {/* Title */}
            <h1 className="text-primary-light font-semibold m-0 text-4xl md:text-4xl mb-2 break-words">
              {post.title}
            </h1>

            <p className=" text-lg">{post.subtitle}</p>
          </div>

          <div className=" flex items-center  bg-no-repeat bg-center bg-fixed sm:text-left mt-8 rounded-md">
            <Image
              alt="Foto de capa"
              src={post.coverImage.url}
              width={1000}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col md:flex-row pt-12 gap-16 ">
            <div className="">
              <CardMedias />
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

          <div className="grid grid-cols-1 gap-4 justify-start lg:grid-cols-3 md:grid-cols-3 ">
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

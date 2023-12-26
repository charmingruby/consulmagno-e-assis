import { gql } from '@apollo/client'

export const FETCH_POSTS_BY_CATEGORY_AT_A_POST = gql`
  query FetchPostByCategoryAtAPost($area: String!) {
    categories(where: { name: $area }) {
      id
      posts(first: 3, orderBy: publishedAt_DESC) {
        id
        title
        subtitle
        author {
          name
          avatarImage {
            url
          }
        }
        coverImage {
          url
        }
        categories(first: 1) {
          name
        }
        slug
        createdAt
      }
    }
  }
`

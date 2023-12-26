import { gql } from '@apollo/client'

export const FETCH_POSTS_BY_CATEGORY = gql`
  query FetchPostByCategory($category: String!) {
    categories(where: { name: $category }) {
      id
      posts(orderBy: publishedAt_DESC) {
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

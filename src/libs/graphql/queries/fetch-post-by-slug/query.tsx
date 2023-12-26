import { gql } from '@apollo/client'

export const FETCH_POST_BY_SLUG = gql`
  query FetchPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      subjects
      title
      subtitle
      slug
      coverImage {
        id
        url
      }
      content {
        html
      }
      author {
        id
        name
        avatarImage {
          id
          url
        }
      }
      categories {
        id
        name
      }
    }
  }
`

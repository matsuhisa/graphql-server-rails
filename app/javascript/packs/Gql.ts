import { gql } from '@apollo/client'

export const All_TAGS = gql`
query allTags {
  tags {
    id
    label
  }
}
`

export const PHOTOS_QUERY = gql`
query allPhotos {
  photos {
    id
    imageUrl
    title
    category
    description
    tags {
      id
      label
    }
  }
}
`

export const NEW_PHOTO = gql`
mutation createPhoto($input: CreatePhotoInput!){
  createPhoto(input: $input){
    post {
      title
      imageUrl
      description
      category
      tagIds
    }
    result
    errors
  }
}
`

import { gql } from '@apollo/client'

export const PHOTOS_QUERY = gql`
query allPhotos {
  photos {
    id
    imageUrl
    title
    category
    description
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
    }
    result
    errors
  }
}
`

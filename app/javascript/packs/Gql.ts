import { gql } from '@apollo/client'

export const PHOTOS_QUERY = gql`
query allPhotos {
  photos {
    id
    imageUrl
    title
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
    }
    result
    errors
  }
}
`

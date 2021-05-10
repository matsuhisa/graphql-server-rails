import React from 'react'
import { useMutation, gql } from '@apollo/client'

const NEW_PHOTO = gql`
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

export const NewPhoto: React.VFC = () => {
  const [ addPhoto ] = useMutation(NEW_PHOTO)
  return (
    <button onClick={() => {
      addPhoto({ variables: { input: { title: '題字', imageUrl: 'https://unsplash.it/680/450?random', description: "説明文" } } })
    }}>
      New Photo
    </button>
  )
}

import React from 'react'
import { useMutation } from '@apollo/client'
import { NEW_PHOTO, PHOTOS_QUERY } from './Gql'

export const NewPhoto: React.VFC = () => {
  const [ addPhoto, result ] = useMutation(NEW_PHOTO, {
    refetchQueries: [{query: PHOTOS_QUERY}]
  })

  return (
    <button onClick={() => {
      addPhoto({ variables: { input: { title: '題字ですけれどなにか？', imageUrl: 'https://unsplash.it/680/450?random', description: "説明文" } } })
    }}>
      New Photo
    </button>
  )
}

import React from 'react'
import { useQuery, gql } from '@apollo/client'

const PHOTOS_QUERY = gql`
  query allPhotos {
    photos {
      id
      imageUrl
      title
      description
    }
  }
`

export const Photos: React.VFC = () => {
  const { loading, error, data } = useQuery(PHOTOS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <>
      {data.photos.length} 件
      {data.photos.map( (photo) => 
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <p>{photo.description}</p>
          <img src={photo.imageUrl} alt={""} title={photo.title} width={100} />
        </div>
      )}
    </>
  )
}

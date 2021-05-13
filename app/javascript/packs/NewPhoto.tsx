import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NEW_PHOTO, PHOTOS_QUERY } from './Gql'

export const NewPhoto: React.VFC = () => {
  const [ values, setValues ] = useState({
    title: '題名',
    imageUrl: 'https://unsplash.it/680/450?random'
  })

  const [ addPhoto, result ] = useMutation(NEW_PHOTO, {
    refetchQueries: [{query: PHOTOS_QUERY}]
  })

  if(result.error) {
    console.table(result.error.graphQLErrors[0].message)
    console.table(result.error.graphQLErrors[0].extensions.attribute)
  }


  const submitHandler = (event) => {
    addPhoto({ variables: { input: values }})
  }

  const submitInputHandler = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    console.table(values) // <= ここと
    setValues({...values, [name]: value})
    console.table(values) // <= ここは同じ値
  }

  return (
    <>
      <label>
        <span>
          題字
        </span>
        <input type={'text'} name={'title'} defaultValue={values.title} onChange={(event) => submitInputHandler(event)} />
      </label>
      <label>
        <span>
          URL
        </span>
        <input type={'text'} name={'imageUrl'} defaultValue={values.imageUrl} onChange={(event) => submitInputHandler(event)} />
      </label>
      <label>
        <span>
          説明
        </span>
        <textarea name={'description'} onChange={(event) => submitInputHandler(event)}></textarea>
      </label>
      <input type={'submit'} value={'NewPhoto'} onClick={(event) => submitHandler(event)} />


      {/* <button onClick={() => {
        addPhoto({ variables: { input: { title: '題字ですけれどなにか？', imageUrl: 'https://unsplash.it/680/450?random', description: "説明文" } } })
      }}>
        New Photo
      </button> */}
    </>
  )
}

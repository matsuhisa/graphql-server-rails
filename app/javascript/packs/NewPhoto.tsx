import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NEW_PHOTO, PHOTOS_QUERY } from './Gql'
import { InputText } from './molecules/InputText'

export const NewPhoto: React.VFC = () => {
  const [ values, setValues ] = useState({
    title: '題名です',
    imageUrl: 'https://unsplash.it/680/450?random'
  })

  const [ errors, setErrors ] = useState({
    title: [],
    imageUrl: [],
  })

  const [ addPhoto, { loading, error } ] = useMutation(NEW_PHOTO, {
      refetchQueries: [{query: PHOTOS_QUERY}],
      onError: (error) => {
        error.graphQLErrors.forEach(e => {
          if(e.extensions?.attribute) {
            console.table(e.message.split(','))
            console.log(e.extensions.attribute)

            setErrors({ ...errors, [e.extensions.attribute]: e.message.split(',')})
          }
        })
      }
    }
  )

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }

  const submitHandler = (event) => {
    addPhoto({ variables: { input: values }})
  }

  const submitInputHandler = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    // console.table(values) // <= ここと
    setValues({...values, [name]: value})
    // console.table(values) // <= ここは同じ値
  }

  return (
    <>
      <InputText name={'title'} label={'題字'} default={values.title} onChange={submitInputHandler} errorMessages={errors.title} />
      <InputText name={'imageUrl'} label={'URL'} default={values.imageUrl} onChange={submitInputHandler} errorMessages={errors.imageUrl} />
      <label>
        <span>
          説明
        </span>
        <textarea name={'description'} onChange={(event) => submitInputHandler(event)}></textarea>
      </label>
      <input type={'submit'} value={'NewPhoto'} onClick={(event) => submitHandler(event)} />
    </>
  )
}

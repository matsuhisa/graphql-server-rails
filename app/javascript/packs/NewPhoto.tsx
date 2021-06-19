import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { NEW_PHOTO, PHOTOS_QUERY } from './Gql'
import { InputText } from './molecules/InputText'

export const NewPhoto: React.VFC = () => {
  const [ values, setValues ] = useState({
    title: '題名です',
    imageUrl: 'https://unsplash.it/680/450?random',
    tagIds: [],
  })

  const [ errors, setErrors ] = useState({
    title: [],
    imageUrl: [],
  })

  const [ errorFlag, setErrorFlag ] = useState(false)

  const [ addPhoto, { loading, error } ] = useMutation(NEW_PHOTO, {
      refetchQueries: [{query: PHOTOS_QUERY}],
      onCompleted: () => {
        setErrorFlag(false)
      },
      onError: (error) => {
        // Rails の validations によるエラー
        error.graphQLErrors.forEach(e => {
          if(e.extensions?.attribute) {
            console.table(e.message.split(','))
            console.log(e.extensions.attribute)

            setErrors({ ...errors, [e.extensions.attribute]: e.message.split(',')})
          }
        })
        if(error.graphQLErrors.length > 0) {
          setErrorFlag(true)
        }
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
    if(target.type !== 'checkbox') {
      // const value = target.type === 'checkbox' ? target.checked : target.value
      const value = target.value
      const name = target.name
      console.table(values) // <= ここと
      setValues({...values, [name]: value})
      // console.table(values) // <= ここは同じ値
    }else{
      const value = target.value
      const name = target.name
      console.table(values)
      if (name in values) {
        setValues({...values, [name]: values[name].concat(Number(value))})
      } else {
        setValues({...values, [name]: [Number(value)]})
      }
    }
  }

  return (
    <>
      {errorFlag && (
        <p>エラーが発生しました</p>
      )}
      <InputText name={'title'} label={'題字'} default={values.title} onChange={submitInputHandler} errorMessages={errors.title} />
      <InputText name={'imageUrl'} label={'URL'} default={values.imageUrl} onChange={submitInputHandler} errorMessages={errors.imageUrl} />
      <select name={'category'} onChange={(event) => submitInputHandler(event)}>
        <option>カテゴリを選択</option>
        <option value={'selfie'}>セルフィー</option>
        <option value={'hoge'}>hoge</option>
      </select>
      <label>
        <input type={'checkbox'} name={"tagIds"} value={1} onChange={(event) => submitInputHandler(event)} /> #タグ1
      </label>
      <label>
        <input type={'checkbox'} name={"tagIds"} value={3} onChange={(event) => submitInputHandler(event)} /> #タグ3
      </label>
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

import React from 'react'
import { InternalCheckbox } from '../atom/Checkbox'
import { CheckboxGroup } from './CheckboxGroup'
import { All_TAGS } from '../Gql'
import { useQuery } from '@apollo/client'

export const NewPhotoCheckboxGroup = () => {
  const {loading, error, data} = useQuery(All_TAGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  console.table(data.tags)
  return(
    <>
      <p>件数 {data.tags.length}件</p>
      <CheckboxGroup>
        <>
          {data.tags.map( (tag) => 
            <InternalCheckbox key={`tag-check-box${tag.id}`} label={tag.label} name={"tagIds"} value={tag.id} change={()=>{console.log("foo")}} />
          )}
        </>
      </CheckboxGroup>
    </>
  )
}

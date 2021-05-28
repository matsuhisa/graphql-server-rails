import React from 'react'
import { ErrorMessageList } from '../atom/ErrorMessageList'

type InputProps = {
  name: string;
  label: string;
  default?: string;
  onChange?: Function;
  errorMessages?: string[]
}

export const InputText: React.VFC<InputProps> = (data) => {
  return (
    <>
      <label style={data.errorMessages.length > 0 ? {border: '1px solid red'}:{}}>
        {
          data.errorMessages.length > 0 &&
            <ErrorMessageList messages={data.errorMessages}/>
        }
        <span>{data.label}</span>
        <input type={'text'} name={data.name} defaultValue={data.default} onChange={(event) => data.onChange(event)} />
      </label>
    </>
  )
}

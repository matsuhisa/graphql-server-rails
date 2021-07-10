import React from 'react'

export const InternalCheckbox = ({label, name, value, change}) => {

  return (
    <label>
      <input type={"checkbox"} name={name} value={value} onChange={ change } />
      <span>{label}</span>
    </label>
  )
} 

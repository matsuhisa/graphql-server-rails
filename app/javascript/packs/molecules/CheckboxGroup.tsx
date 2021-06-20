import React from 'react'

type GropuProps = {
  name: string;
  children: React.ReactElement;
}

export const CheckboxGroup: React.VFC<GropuProps> = ({name, children}) => {
  return (
    <>
      <p>{name}</p>
      {children}
    </>
  )
}

import React from 'react'

type GropuProps = {
  children: React.ReactElement;
}

export const CheckboxGroup: React.VFC<GropuProps> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}

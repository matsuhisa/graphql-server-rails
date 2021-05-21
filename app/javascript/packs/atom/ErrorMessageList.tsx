import React from 'react'

type MessageProps = {
  messages: string[];
}

export const ErrorMessageList: React.VFC<MessageProps> = (data) => {
  const messageList = data.messages.map((message) => {
    return (
      <li>{message}</li>
    )
  })

  return(
    <ul>
      {messageList}
    </ul>
  )
}
